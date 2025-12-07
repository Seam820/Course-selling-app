# Copilot Instructions for learn-with-seam-app

## Project Overview
This is a React 19 application bootstrapped with Create React App (CRA). It's a learning/reference project with minimal initial implementation.

## Architecture
- **Entry point**: `src/index.js` - Renders React app to DOM element with id `root`
- **Root component**: `src/App.js` - Main application component (currently minimal)
- **Styling**: CSS modules (`src/App.css`, `src/index.css`)
- **Public assets**: `public/` - Static files served during build
- **HTML template**: `public/index.html` - Single-page application shell with `<div id="root">`

## Development Workflow
- **Start dev server**: `npm start` - Runs on http://localhost:3000 with hot reload
- **Run tests**: `npm test` - Jest test runner in watch mode
- **Build production**: `npm run build` - Optimized bundle in `build/` folder
- **Eject**: `npm run eject` - One-way operation to expose webpack/Babel config (rarely needed)

## Key Files & Patterns

### React Component Structure
- Functional components are the default (modern React pattern)
- Example: `App.js` shows basic functional component with JSX
- Use `.css` files for component styling (CSS imported directly into `.js`)

### Testing
- Uses `@testing-library/react` and `@testing-library/jest-dom`
- Test files follow pattern: `*.test.js`
- Example: `App.test.js` for testing `App.js`
- Run with `npm test` - watch mode auto-reruns on file changes

### Dependencies
- **React 19.2.1** - Latest React with hooks and suspense
- **react-dom 19.2.1** - DOM rendering
- **react-scripts 5.0.1** - CRA build toolchain (Webpack, Babel, ESLint)
- **Testing libraries** - React Testing Library, Jest DOM, user-event
- **web-vitals** - Performance monitoring

## ESLint Configuration
Extends `react-app` and `react-app/jest` presets (configured in `package.json`). No custom rules currently defined.

## Important Notes
- This is a CRA project - avoid ejecting unless absolutely necessary
- The `node_modules/` folder contains all dependencies; don't commit it
- Hot module reloading is enabled in dev mode
- Build artifacts go to `build/` folder (not committed)
