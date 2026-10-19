# Filmmakers API Documentation

Source for the Filmmakers API reference at <https://api.filmmakers.eu>, built with [Docusaurus](https://docusaurus.io/).

## Local development

Requires Node.js 22 or newer.

```sh
npm ci       # install dependencies
npm start    # dev server with live reload at http://localhost:3000
npm run build && npm run serve   # production build, served locally
```

The build fails on broken links and anchors, so run `npm run build` before pushing.

## Deployment

Every push to `main` builds the site and deploys it to GitHub Pages via `.github/workflows/deploy.yml`. It can also be triggered manually from the Actions tab. Pull requests against `main` run a build check.

## Editing the docs

- Pages live in `docs/` and are written in MDX (`.md` files can use components such as `Tabs`).
- The sidebar structure is defined in `sidebars.js`; the label for each entry comes from the doc's `sidebar_label` front matter.
- Mark an endpoint as beta by giving its sidebar entry `className: 'sidebar-item-beta'`.

When adding or changing an endpoint:

1. Document it in the relevant resource page in `docs/`.
2. Add new pages to `sidebars.js` and new endpoints to the overview in `docs/api-reference.md`.
3. Add a dated entry at the top of `docs/changelog.md`.
