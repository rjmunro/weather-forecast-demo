# Reactive weather

A weather forecast demo app, based on Vite, React, React Query and the open-meteo.com APIs.

Try it at <https://weather.arjam.net>, where it is hosted by Cloudflare pages.

## TL;DR

To run locally in develop mode:

```bash
yarn
yarn dev
```

It will tell you the URL to view the dev site, usually <http://localhost:5173/>.

If you don't have yarn, the easiest way to install it is:

```bash
npm install --global yarn
```

## Set up

Make sure you have recent versions of NodeJS and Yarn installed.

Instructions to install NodeJS can be found here: <https://nodejs.org/en/download/package-manager>.

Once Node is installed, you can install Yarn by following instructions here:
<https://classic.yarnpkg.com/lang/en/docs/install>

The simplest way is usually to run `npm install --global yarn` in your terminal.

Once yarn is installed, you can install the other dependencies for this project by `cd`ing to the
project root and running `yarn`.

## Developing

Once the dependencies are installed, you can run a local development copy using the command `yarn
dev`. This will compile the project with extra hot-reloading and debugging features and run a local
webserver, usually at the URL <http://localhost:5173/>. If you have this page open in a web browser,
most changes to source will be reflected immediately in the page, often without the page even
needing to refresh. If the source has an error, it will usually be displayed instead of the page.
Sometimes it can get a bit confused, so it's worth pressing the browser refresh button if something
is not what you expect.

## Building for release

To build a release version of the site in the `dist` folder, run:

```bash
yarn build
```

This will compile, bundle and minify the Typescript code. It may report typescript compile time
errors that aren't reported in dev mode. You may need to add additional types or other refactorings
to ensure it can compile.

Once built successfully, you can preview the site by running:

```bash
yarn preview
```

## Other tips

This will run ESLint on the code to check for formatting and code style errors:

```bash
yarn lint
```

To see a full list of commands you can run with yarn, run:

```bash
yarn run
```
