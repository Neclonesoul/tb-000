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

## Cloudflare Pages configuration

- Repository: `Neclonesoul/tb-000`
- Production branch: **do not enable until approved**
- Root directory: `design`
- Build command: `npm run build`
- Build output directory: `dist`
- Custom domain: `design.tysonbarnes.co.uk` **after acceptance**

This directory is an independent Astro application; it does not alter the root site build or existing DNS configuration. It intentionally has no tracking scripts, remote fonts or stock imagery.

## Editorial policy

This is a design prototype. The portfolio artwork is original SVG/CSS illustration, not a claim of photographic evidence or delivered UI. `YARD//PROOF` and the industrial interface work require redacted, approved visuals before publication. `Alder & Vale` is explicitly fictional. Case studies distinguish demonstrable project scope from outcome claims. Never add client names, metrics or screenshots without authorisation.

## Next acceptance checks

- [ ] Confirm homepage copy, identity and visual direction
- [ ] Replace illustrative work art with approved genuine project evidence
- [ ] Confirm exact contact method
- [ ] Run `npm run build`, keyboard navigation, mobile and Lighthouse checks
- [ ] Only then configure Cloudflare Pages and the subdomain
