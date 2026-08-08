# Deploying a Lovable / TanStack Start App to GitHub Pages

This is a reusable, step-by-step guide distilled from getting `baustcse.github.io`
(a Lovable-generated TanStack Start + Vite + Nitro app) deployed to GitHub Pages.
Follow this checklist for any similar Lovable/TanStack Start project so you don't
have to rediscover the same issues again.

GitHub Pages only serves static files. A TanStack Start app normally runs a Nitro
server, so the whole job of this setup is: force a fully static build, then publish
it with GitHub Actions.

## 1. One-time repository settings

All under `https://github.com/<owner>/<repo>/settings`.

### Pages (Settings -> Pages)
- **Source: GitHub Actions** — not "Deploy from a branch". `actions/deploy-pages@v4`
  fails with `Not Found` if the source is still branch-based.
- Leave **Custom domain** empty if the repo is named `<org>.github.io` (site is
  already served at the root, no `base` path config needed).

### Actions -> General
- **Workflow permissions: Read and write permissions.**
- "Allow GitHub Actions to create and approve pull requests" is not required.

### Environments (Settings -> Environments -> github-pages)
- This environment is created automatically on the first deployment run.
- If you deploy from a branch other than `main` (e.g. `dev`), you must add that
  branch to the environment's **Deployment branches and tags** allow list, or
  every deploy will fail with:
  `Branch "dev" is not allowed to deploy to github-pages due to environment protection rules.`
- Fix: Settings -> Environments -> github-pages -> edit -> Deployment branches
  and tags -> Add deployment branch rule -> enter the branch name (e.g. `dev`).
- **Secrets: none needed.** The workflow authenticates with the automatic
  `GITHUB_TOKEN` via OIDC (`id-token: write`).

## 2. Vite / Nitro static export configuration

`vite.config.ts` needs to switch Nitro to a static preset and enable prerendering
only during the CI build, so local dev and other environments (e.g. Lovable's own
preview) are unaffected. Gate it behind an env var such as `STATIC_EXPORT=1`:

```ts
const isStaticExport = process.env.STATIC_EXPORT === "1";

export default defineConfig({
  tanstackStart: {
    prerender: {
      enabled: isStaticExport, // see "Known pitfalls" below
      crawlLinks: true,
      autoStaticPathsDiscovery: true,
      failOnError: true,
    },
  },
  nitro: isStaticExport
    ? { preset: "static", output: { dir: ".output", publicDir: ".output/public" } }
    : undefined,
});
```

Output directory is `.output/public` (Vite/Nitro convention) — not `build/` or
`dist/`. To reproduce a CI build locally:

```sh
STATIC_EXPORT=1 bun run build
npx serve .output/public   # sanity-check at http://localhost:3000
```

## 3. The GitHub Actions workflow (`.github/workflows/deploy.yml`)

Key pieces, in order:

- **Trigger**: `push` to your deploy branch (e.g. `dev`), plus `workflow_dispatch`
  for manual re-runs.
- **Permissions**: `contents: read`, `pages: write`, `id-token: write` (minimum
  scopes for `actions/deploy-pages@v4`).
- **Concurrency**: `group: github-pages`, `cancel-in-progress: true` so a newer
  push cancels an in-flight deployment.
- **Checkout** -> `actions/checkout@v4`.
- **Setup Node** -> `actions/setup-node@v4` (Nitro's prerender runs on Node even
  in a Bun project).
- **Setup Bun** -> `oven-sh/setup-bun@v2` if the project uses `bun.lock` instead
  of `package-lock.json` (in that case `npm ci` can't run — use `bun install`).
- **Cache install** -> `actions/cache@v4` keyed on the lockfile hash.
- **Install dependencies** -> `bun install` (see "Known pitfalls" about
  `--frozen-lockfile`).
- **Build** -> `STATIC_EXPORT=1 bun run build` (env vars set on this step only).
- **Prepare Pages output** -> a guard script that: fails loudly if
  `.output/public/index.html` is missing; runs `touch .output/public/.nojekyll`
  (otherwise GitHub Pages strips underscore-prefixed asset folders); copies
  `index.html` to `404.html` so deep-link/client-side-routed URLs don't 404 on
  refresh.
- **Upload artifact** -> `actions/upload-pages-artifact@v3` with `path: .output/public`.
- **Deploy** -> `actions/deploy-pages@v4`.

## 4. Known pitfalls (and how to fix them)

| Symptom | Cause | Fix |
|---|---|---|
| `Branch "dev" is not allowed to deploy to github-pages due to environment protection rules` | Only `main` is allowed by default | Add your branch under Settings -> Environments -> github-pages -> Deployment branches and tags |
| Build fails: `rolldownOptions.input should not be an html file when building for SSR` | Upstream bug in Nitro's Vite builder — it builds a server bundle even for the `static` preset | Pin `nitro` in `package.json` to a fixed preview build until the upstream fix is released, e.g. `"nitro": "https://pkg.pr.new/nitro@<PR-number>"` (check the Nitro repo for the tracking PR/issue first — a newer official release may have fixed it) |
| Workflow fails after changing a dependency version/URL in `package.json` | `bun install --frozen-lockfile` refuses to resolve a lockfile mismatch | Remove `--frozen-lockfile` from the install step (or regenerate and commit `bun.lock` locally first, then restore the flag) |
| Prerender fails with `Failed to fetch /: Internal Server Error` (a second, different prerender error, after fixing the one above) | Both Nitro's own `static` preset prerendering AND TanStack Start's `tanstackStart.prerender` were enabled at the same time, and they conflict | Disable TanStack Start's own prerender (`tanstackStart.prerender.enabled: false`) and let Nitro's static preset handle prerendering alone |
| `Error: Not Found` on the deploy step | Pages source isn't set to "GitHub Actions" | Settings -> Pages -> Source -> GitHub Actions |
| Build fails: no `.output/public/index.html` | `STATIC_EXPORT` env var not set on the build step, or the prerender crawl failed | Check the build log for the failing route; confirm the env var is set |
| Blank page / 404s on `/_build/...` assets on the live site | `.nojekyll` file missing from the published artifact | Make sure the workflow creates `.output/public/.nojekyll` before uploading |
| Images/logos are broken (404) only on the deployed GitHub Pages site, but work fine inside the Lovable editor/preview | Lovable's internal asset-routing system (`src/assets/*.asset.json` files, pointing at `/__l5e/assets-v1/...` paths) only resolves inside Lovable's own hosting/sandbox — it is not portable to any external static host | For each affected image: download the real file from the Lovable project's sandbox preview domain, commit it as a plain static file (e.g. `src/assets/logo.jpeg`), then change the import from `import x from "@/assets/logo.jpeg.asset.json"` + `src={x.url}` to `import x from "@/assets/logo.jpeg"` + `src={x}` |
| `npm ci` error about a missing lockfile | Project uses `bun.lock`, not `package-lock.json` | Either keep using `bun install`, or run `npm install` once, commit the generated `package-lock.json`, and switch the workflow's install step to `npm ci` |

## 5. Validating a deployment

After a workflow run succeeds, on the live `https://<org>.github.io/` site:

1. Open DevTools -> Network, hard-reload, and confirm there are no 404s —
   especially for `/_build/assets/*.js` and the CSS bundle (a 404 on
   underscore-prefixed paths means `.nojekyll` didn't ship).
2. Check DevTools -> Console for hydration errors.
3. Click through navigation, then reload on a non-root URL to confirm the
   `404.html` fallback restores the route.
4. Confirm every image, font, and `favicon.ico` actually loads (grep the repo
   for `.asset.json` imports — each one is a candidate for the Lovable
   asset-proxy pitfall above).

## 6. Quick checklist for a new Lovable/TanStack Start project

1. Settings -> Pages -> Source -> GitHub Actions.
2. Settings -> Actions -> General -> Workflow permissions -> Read and write.
3. Add `vite.config.ts` static-export gating (section 2 above).
4. Add `.github/workflows/deploy.yml` (section 3 above), pointed at your
   default/deploy branch.
5. Push, then immediately check Settings -> Environments -> github-pages and
   add your branch to the allow list if it isn't `main`.
6. Watch the Actions run. Work through section 4's table for any failure.
7. Grep the repo for `.asset.json` imports and replace each with a real static
   file before you trust that images will show up on the live site.
