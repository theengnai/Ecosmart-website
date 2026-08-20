import handler from "../dist/server/server.js";

export default async function (req, res) {
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host || "localhost";
  const url = new URL(req.url, `${protocol}://${host}`);

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

  // Intercept console.error to catch the swallowed SSR error
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
      res.end("RUNTIME CRASH LOG:\n\n" + caughtError);
      return;
    }

    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    const buffer = Buffer.from(await response.arrayBuffer());
    res.end(buffer);
  } catch (err) {
    console.error = originalError;
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain");
    res.end("FATAL CRASH LOG:\n\n" + err.stack);
  }
}
