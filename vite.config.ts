// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
// GitHub Pages only serves static assets, so all routes must be pre-rendered.
// Set STATIC_EXPORT=1 (enabled in CI) to use Nitro's `static` preset.
// The generated static files are written to `.output/public`.
const isStaticExport = process.env.STATIC_EXPORT === "1";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Crawl from "/" and write a static .html for every reachable route.
    prerender: {
      enabled: isStaticExport,
      crawlLinks: true,
      autoStaticPathsDiscovery: true,
      failOnError: true,
    },
  },
  nitro: isStaticExport
    ? { preset: "static", output: { dir: ".output", publicDir: ".output/public" } }
    : undefined,
});
