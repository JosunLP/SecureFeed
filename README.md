# SecureFeed

A small SvelteKit app that displays Atom/RSS security feeds (Heise Security, BSI, CERT.at, …) as a
continuously rotating, kiosk-style slideshow with a QR code for each entry.

The app is a fully static client-side SPA (`ssr = false`, `@sveltejs/adapter-static`) — feeds are
fetched in the browser, some of them through a CORS proxy.

## Requirements

- Node.js >= 20.19.0
- [Bun](https://bun.sh) (the repository uses `bun.lock`)

## Developing

```bash
bun install
bun run dev

# or start the server and open the app in a new browser tab
bun run dev --open
```

## Building

```bash
bun run build
```

Preview the production build with `bun run preview`. The output in `build/` can be served by any
static web server.

## Quality checks

```bash
bun run check   # svelte-check / TypeScript
bun run lint    # prettier --check + eslint
bun run format  # prettier --write
```

## Configuring feeds

The available feeds live in [`src/classes/Config.ts`](src/classes/Config.ts). A feed can be
preselected via the `feed` query parameter, e.g. `?feed=heiseSecNews`.
