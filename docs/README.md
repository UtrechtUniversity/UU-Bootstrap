# Portaldev Bootstrap docs

Small nuxt app to serve as both documentation as well as developing

## Requirements
- Yarn
- Node >= 16 (other versions untested)

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install
```

## Run Server

Start the development server on http://localhost:3000

```bash
yarn dev
```

### A note on dark theme development

Currently, we have no official support for a dark theme for UU Layout components.
For this reason we do not ship the required config for this in the SCSS files.

However, the dev environment does have the required support built-in, which is
disabled by default. (It's a pretty basic set of patches, so don't expect it to
look good.)

To develop with dark mode on, you have to change two booleans:
``enable-dark-theme`` in ``_colors.scss`` and ``dark_mode`` in
``nuxt.config.ts``. Please make sure you don't commit these changes!

You can then switch between light and dark using the theme settings.

## Deploy new version to GH Pages

- Run ``NUXT_APP_BASE_URL="/bootstrap-theme/" yarn generate`` in this folder
- Make a separate clone of the gh-pages branch
- Copy the contents of ``.output/public`` into your gh-pages clone
- Commit and push the gh-pages branch!
