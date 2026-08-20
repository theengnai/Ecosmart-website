import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  preset: "vercel",
  serveStatic: true,
  output: {
    dir: "dist",
    serverDir: "dist/server",
    publicDir: "dist/client",
  },
  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        moduleResolution: "bundler",
      },
    },
  },
  hooks: {
    compiled() {
      console.log("✓ Server compiled successfully");
    },
  },
});
