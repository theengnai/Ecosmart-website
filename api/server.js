// Vercel serverless function entry point.
// Imports the built SSR handler from dist/server/server.js and forwards
// all requests to it. Vercel's Node.js runtime calls the exported default
// handler with (req, res) — we bridge that to the Web fetch API that
// TanStack Start's server entry expects.
import handler from "../dist/server/server.js";
import { createServer } from "node:http";

// TanStack Start server.js exports a fetch-based handler ({ fetch(req) })
export default async function (req, res) {
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const url = new URL(req.url, `${protocol}://${host}`);

  // Build headers
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (Array.isArray(value)) {
      value.forEach((v) => headers.append(key, v));
    } else if (value != null) {
      headers.set(key, value);
    }
  }

  // Read body
  const method = req.method ?? "GET";
  let body = undefined;
  if (!["GET", "HEAD"].includes(method)) {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    body = Buffer.concat(chunks);
    if (body.length === 0) body = undefined;
  }

  const request = new Request(url.toString(), { method, headers, body });
  const response = await handler.fetch(request, process.env, {});

  res.statusCode = response.status;
  response.headers.forEach((value, key) => res.setHeader(key, value));
  const buffer = Buffer.from(await response.arrayBuffer());
  res.end(buffer);
}
