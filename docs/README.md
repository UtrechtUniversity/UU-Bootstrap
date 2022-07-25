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

## Deploy new version to GH Pages

- Run ``NUXT_APP_BASE_URL="/bootstrap-theme/" yarn generate`` in this folder
- Make a separate clone of the gh-pages branch
- Copy the contents of ``.output/public`` into your gh-pages clone
- Commit and push the gh-pages branch!
