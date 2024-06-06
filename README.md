
# Pokedex React App

A quick Pokedex app for a take-home assignment.


## Features

- Built with [Vite](https://vitejs.dev/)
- [PokeAPI](https://pokeapi.co/) to source data
- Uses [openapi-zod-client](https://www.npmjs.com/package/openapi-zod-client) to build a type-safe API client from PokeAPI OpenAPI definition
- Built with a feature-complete component library, [Boondoggle](https://boondoggle.design/)
- Monorepo architecture, using NPM workspaces (no deps) for module privacy 
- Sentry error boundary — drop in a DSN to enable error tracking

## Run Locally

Clone the project

```bash
  git clone git@github.com:alex-mcgovern/react-pokedex.git
```

Go to the project directory

```bash
  cd react-pokedex
```

Install dependencies

```bash
  npm i
```

Start the server

```bash
  npm run dev
```

Or do a prod build

```bash
  npm run build && npm run preview
```

## What would I have done if I had more time?

- [ ] Build a Pokemon detail view, probably with a modal or drawer
- [ ] Add filtering to the table view
- [ ] Round out mobile styling, and add a mobile menu