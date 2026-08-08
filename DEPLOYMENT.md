# Deploying baustcse.github.io

The site is a **TanStack Start** app (React 19 + Vite + Nitro). GitHub Pages serves
static files only, so production builds prerender every route to HTML instead of
shipping a Nitro server.

Pushing to `dev` builds and publishes to <https://baustcse.github.io/>.

---

## 1. One-time repository settings

All under `https://github.com/baustcse/baustcse.github.io/settings`.

**Pages** (Settings → Pages)

- **Source:** `GitHub Actions` — *not* "Deploy from a branch". This is required;
  `actions/deploy-pages@v4` fails with `Not Found` if the source is still branch-based.
- Leave Custom domain empty. The repo is named `<org>.github.io`, so the site is
  already served at the root — no `base` path config is needed.

**Actions → General**

- Workflow permissions: **Read and write permissions**.
- Allow GitHub Actions to create and approve pull requests: not required.

**Environments** (Settings → Environments → `github-pages`)

- Created automatically on the first run. If deployment branch protection is on,
  add `dev` to the allowed branches, or the deploy step will be rejected —
  by default only `main` is permitted.

**Secrets:** none. The workflow authenticates with the automatic `GITHUB_TOKEN`
using OIDC (`id-token: write`), so there is nothing to add.

---

## 2. How the build produces static output

`vite.config.ts` reads `STATIC_EXPORT=1` (set by CI) and switches two things on:

| Setting | Effect |
| --- | --- |
| `nitro.preset: "static"` | No server bundle; emits a plain static site |
| `tanstackStart.prerender` | Crawls from `/`, writes an `.html` per route |

Output directory is **`.output/public`** — not `build/`. Vite/Nitro projects don't
use CRA's `build/` convention.

To reproduce a CI build locally:

```bash
STATIC_EXPORT=1 bun run build
npx serve .output/public     # sanity-check at http://localhost:3000
```

Without `STATIC_EXPORT`, `bun run build` keeps the normal Cloudflare/Nitro server
build so local and Lovable workflows are unaffected.

---

## 3. Notes on the workflow

`.github/workflows/deploy.yml`

- **Trigger:** `push` to `dev` only, with no `paths` filter, so every file change
  rebuilds the whole site. `workflow_dispatch` allows manual re-runs.
- **Concurrency:** group `github-pages`, `cancel-in-progress: true` — a newer push
  cancels an in-flight deployment.
- **Installer:** the repo's lockfile is `bun.lock`, and there is no
  `package-lock.json`, so **`npm ci` cannot run**. The workflow uses
  `bun install --frozen-lockfile`, which is the equivalent reproducible install,
  with `~/.bun/install/cache` cached on the lockfile hash. `actions/setup-node@v4`
  still pins Node 20.x because Nitro's prerender runs on Node.
  *(If you would rather use `npm ci`, run `npm install` once, commit the resulting
  `package-lock.json`, and swap the two install steps.)*
- **Guard step:** `Prepare Pages output` fails loudly if `.output/public/index.html`
  is missing, adds `.nojekyll`, and copies `index.html` to `404.html` so deep links
  fall back to the client router.
- **Artifact:** `actions/upload-pages-artifact@v3` with `retention-days: 1`, then
  `actions/deploy-pages@v4`.

### `package.json`

No `homepage` field is needed. `homepage` is a **Create React App** convention;
Vite uses `base`, which already defaults to `/` — correct for a root-domain
`<org>.github.io` site. Adding `homepage` would have no effect.

Scripts present: `dev`, `build`, `build:dev`, `preview`, `lint`, `format`.
There is no `start` script — Vite uses `dev` and `preview`. Nothing in the workflow
depends on `start`.

---

## 4. Test the deployment

```bash
git add .github/workflows/deploy.yml vite.config.ts public/.nojekyll DEPLOYMENT.md
git commit -m "ci: deploy to GitHub Pages from dev"
git push -u origin dev
```

`dev` has no upstream yet, hence `-u`.

Then watch `https://github.com/baustcse/baustcse.github.io/actions`. The run should
show Checkout → Setup Node → Setup Bun → Install → Build → Prepare → Upload → Deploy,
ending with the live URL on the `deploy` job.

### Validate the live site

At <https://baustcse.github.io/>:

1. Open DevTools → Network, hard-reload, and confirm **no 404s** — especially for
   `/_build/assets/*.js` and the Tailwind CSS bundle. A 404 on underscore-prefixed
   paths means `.nojekyll` didn't ship.
2. Check DevTools → Console for hydration errors.
3. Click through navigation, then **reload on a non-root URL** to confirm the
   `404.html` fallback restores the route.
4. Confirm fonts, images, and `favicon.ico` load.

---

## 5. Troubleshooting

| Symptom | Cause |
| --- | --- |
| `Error: Not Found` on deploy step | Pages source isn't set to GitHub Actions |
| `Branch "dev" is not allowed to deploy` | Add `dev` to the `github-pages` environment's allowed branches |
| Build fails: no `.output/public/index.html` | `STATIC_EXPORT` not set, or prerender crawl failed — check the build log for the failing route |
| Blank page, 404s on `/_build/...` | `.nojekyll` missing from the artifact |
| `npm ci` error about missing lockfile | You swapped back to npm without committing `package-lock.json` |

---
## Not yet verified

The build was **not** run end-to-end before this was written — dependency install
did not complete in the authoring environment. The config was validated against the
`@tanstack/start-plugin-core` schema and the workflow YAML parses cleanly, but the
first CI run on `dev` is the real test. If prerendering errors, the most likely fix
is relaxing `failOnError` in `vite.config.ts` or switching to SPA mode
(`tanstackStart.spa.enabled`).

