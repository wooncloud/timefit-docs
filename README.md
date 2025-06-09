# Timefit Documentation

This repository contains the documentation for the Timefit project, built with VitePress.

## Development

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
npm install
```

### Local Development

```bash
npm run docs:dev
```

This starts the local development server. The documentation will be available at `http://localhost:5173`.

### Build

```bash
npm run docs:build
```

This builds the documentation for production.

### Preview

```bash
npm run docs:preview
```

This serves the built documentation for preview.

## Deployment

The documentation is automatically deployed to GitHub Pages when changes are pushed to the main branch.

### Manual Deployment

```bash
npm run deploy
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Test locally with `npm run docs:dev`
5. Submit a pull request

## Structure

- `/docs` - Documentation source files
- `/docs/.vitepress` - VitePress configuration
- `/docs/guide` - User guides
- `/docs/api` - API reference

## License

MIT 