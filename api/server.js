import handler from "../dist/server/server.js";

// Prevent Vinxi/Nitro from using buggy Vercel-specific runtime logic
delete process.env.VERCEL;
delete process.env.VERCEL_ENV;
delete process.env.NOW_REGION;

export default async function (req, res) {
  // Use a mock localhost URL to guarantee the router matches the path,
  // completely bypassing any host-based routing bugs in Vinxi/Vercel.
  const path = req.headers["x-invoke-path"] || req.url;
  const url = new URL(path, "http://localhost");

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value == null) continue;
    if (Array.isArray(value)) {
      value.forEach((v) => headers.append(key, v));
    } else {
      headers.set(key, value);
    }
  }

  const method = req.method ?? "GET";
  let body = undefined;
  if (!["GET", "HEAD"].includes(method)) {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    if (chunks.length > 0) body = Buffer.concat(chunks);
  }

  let caughtError = null;
  const originalError = console.error;
  console.error = (...args) => {
    caughtError = args.map(a => (a && a.stack) ? a.stack : String(a)).join(' ');
    originalError.apply(console, args);
  };

  try {
    const request = new Request(url.toString(), { method, headers, body });
    const response = await handler.fetch(request, process.env, {});
    
    console.error = originalError; // Restore

    if (response.status === 500 && caughtError) {
      res.statusCode = 500;
      res.setHeader("content-type", "text/plain");
      res.end(`RUNTIME CRASH LOG:\n\nURL Attempted: ${url.toString()}\nreq.url: ${req.url}\nx-invoke-path: ${req.headers["x-invoke-path"]}\n\nError: ${caughtError}`);
      return;
    }

    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    
    // Fallback if response crashes during conversion
    let buffer;
    try {
      buffer = Buffer.from(await response.arrayBuffer());
    } catch(e) {
      res.statusCode = 500;
      res.setHeader("content-type", "text/plain");
      res.end("BODY READ CRASH LOG:\n\n" + e.stack);
      return;
    }
    
    res.end(buffer);
  } catch (err) {
    console.error = originalError;
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain");
    res.end("FATAL CRASH LOG:\n\n" + err.stack);
  }
}
