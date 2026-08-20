import handler from "../dist/server/server.js";

export default async function (req, res) {
  const path = req.headers["x-invoke-path"] || req.url || "/";
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

  const method = req.method || "GET";
  let body = undefined;
  
  if (!["GET", "HEAD"].includes(method)) {
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    if (chunks.length > 0) {
      body = Buffer.concat(chunks);
    }
  }

  try {
    const request = new Request(url.toString(), { 
      method, 
      headers, 
      body,
      duplex: body ? "half" : undefined
    });
    
    const response = await handler.fetch(request, process.env, {});

    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    if (response.body) {
      const buffer = Buffer.from(await response.arrayBuffer());
      res.end(buffer);
    } else {
      res.end();
    }
  } catch (err) {
    console.error("Server error:", err);
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain");
    res.end("Internal Server Error\n\n" + (err.stack || err.message || String(err)));
  }
}
