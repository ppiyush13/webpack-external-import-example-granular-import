### Example repository for webpack-external-import with import of granular dependencies.

Created for to track issue https://github.com/ScriptedAlchemy/webpack-external-import/issues/59


This repository is monorepo configured with PNPM tool

Please ensure that pnpm is globally installed on your system

If not,
```javascript
npm i pnpm -g
```

Then install child repositories.
```javascript
pnpm i -r
```

Then start container and micro-app dev servers with

```javascript
pnpm run start -r
```

Child (micro-app) dev server will start running on port 9001

Parent (container) dev server will start  running on port 9000
