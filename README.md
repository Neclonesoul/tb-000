# TB–000 / TysonBarnes.co.uk

The source repository for [tysonbarnes.co.uk](https://tysonbarnes.co.uk): a static-first personal archive of public software, systems, web work, field records, photography and technical writing.

## Stack

- Astro, static output
- TypeScript
- Astro Content Collections with build-time validation
- Svelte islands for the project explorer, systems map, command palette and terminal
- Bespoke CSS
- Cloudflare Workers static assets

The generated production directory is `dist/`. Wrangler is explicitly configured to deploy that already-built directory. The small Worker entry provides static asset delivery and a plaintext response for command-line clients.

## Requirements

- Node.js 20.11 or newer
- npm
- Git

No native application framework, database or desktop IDE is required.

## Local setup

```sh
git clone https://github.com/Neclonesoul/tysonbarnes.co.uk.git
cd tysonbarnes.co.uk
npm install
npm run dev
```

Useful commands:

```sh
npm run dev          # local Astro server
npm run check        # Astro/type checks plus focused tests
npm run build        # static production build to dist/
npm run preview      # inspect the production build locally
npm run verify       # checks, build and repository audits
```

## Termux setup

Install Termux from F-Droid or the official GitHub release, then:

```sh
pkg update
pkg install git nodejs-lts
git clone https://github.com/Neclonesoul/tysonbarnes.co.uk.git
cd tysonbarnes.co.uk
npm install
npm run check
npm run build
```

Astro development and production builds are supported in Termux. Wrangler's local Cloudflare runtime may not provide an Android ARM64 binary; deployment can run in Cloudflare's Git build environment even when local Astro work remains fully functional on Android.

## Content system

`src/content.config.ts` is the schema authority. Project, field and note records are rejected at build time when required data is malformed.

### Add a project

1. Create one Markdown record in `src/content/projects/`.
2. Supply the validated frontmatter and dossier body.
3. Add original media under `src/assets/` or `public/media/` when available.
4. Run `npm run verify`.

That one record supplies the homepage, work index, dossier route, command palette, terminal, relationships, metadata and `projects.json`.

Permanent identifiers use `TB–NNN`. Relationships reference project record slugs and are validated during the build.

### Add a field record

1. Create a Markdown record in `src/content/field/`.
2. Add an `FR–NNN` identifier, date, broad location and category.
3. Add only original imagery and accurate alt text.
4. Build and publish.

The record enters the Field index and Field RSS feed.

### Add a note

Create plain Markdown in `src/content/notes/` using the note schema. Set `draft: false` only when it is ready for public release. Published notes enter the Notes index, note route and RSS feed.

## Deployment

The predictable production sequence is:

```sh
npm ci
npm run check
npm run build
npx wrangler deploy
```

`wrangler.jsonc` points `assets.directory` to `./dist`. Wrangler deploys the built output; it does not run another Astro build.

For the Android-first Git workflow:

```sh
git pull
npm install
npm run check
npm run build
git add .
git commit -m "Update TB-000"
git push
```

Cloudflare can then execute `npm ci && npm run build && npx wrangler deploy` from the repository.

## Important paths

```text
src/content/projects/    authoritative project records
src/content/field/       field records
src/content/notes/       long-form notes
src/components/          Astro components and Svelte instruments
src/pages/               public route architecture
src/styles/global.css    visual system and responsive rules
worker/index.ts          asset delivery and plaintext curl response
public/                  static metadata and share assets
dist/                    generated production output
```

## Content and privacy

The public project registry contains shipped or public work only. Unknown metrics, private locations and substituted photography are not used. The site includes no analytics or third-party tracking scripts.

## Licence

Source code is available under the MIT terms in `LICENSE`. Written content, project descriptions and photography remain copyright Tyson Barnes unless separately licensed.
