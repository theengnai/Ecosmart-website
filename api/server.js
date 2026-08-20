/**
 * Vercel serverless function — SSR entry point.
 *
 * Vercel calls this with Node.js (req, res). We bridge it to the Web
 * fetch API that TanStack Start's built server handler expects.
 *
 * Static assets in dist/client/ are served directly by Vercel via the
 * `{ "handle": "filesystem" }` route rule in vercel.json — this function
 * only receives requests for pages/routes that aren't static files.
 */
import handler from "../dist/server/server.js";

export default async function (req, res) {
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host || "localhost";
  const url = new URL(req.url, `${protocol}://${host}`);

  // Forward all incoming headers
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value == null) continue;
    if (Array.isArray(value)) {
      value.forEach((v) => headers.append(key, v));
    } else {
      headers.set(key, value);
    }
  }

  // Read request body (skip for GET / HEAD)
  const method = req.method ?? "GET";
  let body = undefined;
  if (!["GET", "HEAD"].includes(method)) {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    if (chunks.length > 0) body = Buffer.concat(chunks);
  }

  // Call the TanStack Start fetch handler
  const request = new Request(url.toString(), { method, headers, body });
  const response = await handler.fetch(request, process.env, {});

  // Write the response back to Vercel
  res.statusCode = response.status;
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });
  const buffer = Buffer.from(await response.arrayBuffer());
  res.end(buffer);
}
