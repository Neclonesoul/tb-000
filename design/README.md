# TB / DESIGN — portfolio prototype

Independent Astro static site for `design.tysonbarnes.co.uk`, developed separately from the live TB–000 application.

## Run locally

```sh
cd design
npm install
npm run dev
npm run build
```

Requires Node.js 20.11+.

## Cloudflare Pages: isolated review launch

The site has passed Astro checks and GitHub Actions visual tests. Cloudflare is intentionally **not** connected automatically to this PR.

1. Open Cloudflare dashboard → Workers & Pages → Create application → Pages → Connect to Git.
2. Link the GitHub repository **Neclonesoul/tb-000**. Create a **new**, separate Pages project named **tb-design-portfolio**; do not select any existing TB–000 project.
3. For the first isolated review, set the Pages **production branch** to **feature/design-portfolio-v1** (temporary, just for this separate Pages project's `.pages.dev` hostname). Do **not** connect any custom domain. This branch selection does not alter the existing website.
4. Set **Root directory** `design`; **Framework preset** Astro; **Build command** `npm run build`; **Build output directory** `dist`. Set `NODE_VERSION=22` if the dashboard needs an explicit Node version.
5. Select **Save and Deploy**. Once successful, Cloudflare gives the actual `<project>.pages.dev` URL. Do not guess the URL; read it from the deployment result.
6. Share that address to review the browser-rendered version. The initial review site is public to anyone with the URL; enable Cloudflare Access if private review is needed.
7. After accepting the finished site, merge the draft PR, change this Pages project's production branch to `main`, remove preview-stage robots/noindex restrictions, and only then set the custom domain **design.tysonbarnes.co.uk**.

The review build deliberately contains robots disallow and page-level `noindex,nofollow` metadata. Remove both restrictions as a separate, deliberate launch change once content is approved.

**Do not alter Cloudflare records, or any pre-existing Pages project, for tysonbarnes.co.uk during this review.**

Production branch is simply the label Cloudflare assigns to deployments of this new Pages project. Initial publication under `.pages.dev` is not a launch on the live domain.

This directory is an independent Astro application; it does not alter the root site build or existing DNS configuration. It intentionally has no tracking scripts, remote fonts or stock imagery.

## Editorial policy

This is a design prototype. The portfolio artwork is original SVG/CSS illustration, not a claim of photographic evidence or delivered UI. `YARD//PROOF` and the industrial interface work require redacted, approved visuals before publication. `Alder & Vale` is explicitly fictional. Case studies distinguish demonstrable project scope from outcome claims. Never add client names, metrics or screenshots without authorisation.

## Next acceptance checks

- [ ] Confirm homepage copy, identity and visual direction
- [ ] Replace illustrative work art with approved genuine project evidence
- [ ] Confirm exact contact method
- [ ] Run `npm run build`, keyboard navigation, mobile and Lighthouse checks
- [ ] Only then configure Cloudflare Pages and the subdomain
