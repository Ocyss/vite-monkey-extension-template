 # Vue 3 + Vite + TailwindCSS Template

[English](README.md) | [中文](README_CN.md)

A versatile development template based on Vue 3, Vite, and TailwindCSS, supporting both Tampermonkey scripts and browser extension development.

> Maintenance priorities differ between Tampermonkey scripts and browser extensions, with Tampermonkey scripts having higher priority.

## Features

- ⚡️ [Vue 3](https://vuejs.org/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- 🎨 [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- 📦 [VueUse](https://vueuse.org/) - Collection of Vue Composition API utilities
- 🔧 Multiple build targets support: [vite-plugin-monkey](https://github.com/lisonge/vite-plugin-monkey) + [vite-plugin-web-extension](https://github.com/aklinker1/vite-plugin-web-extension)
  - Tampermonkey script
  - Chrome extension
  - Firefox extension
- 🛠️ ESLint + [@antfu/eslint-config](https://github.com/antfu/eslint-config) for code linting
- 🔄 [Auto Import](https://github.com/antfu/unplugin-auto-import) - Auto import APIs

## Development

### Install Dependencies

[pnpm](https://pnpm.io/) is recommended as the package manager:

```bash
pnpm install
```

### Commands

#### Tampermonkey Script
```bash
pnpm dev:mk
pnpm build:mk
pnpm preview:mk
```

#### Chrome Extension
```bash
pnpm dev:ext
pnpm build:ext
pnpm preview:ext
```

#### Firefox Extension

> Lower maintenance priority

```bash
pnpm dev:extf
pnpm build:extf
pnpm preview:extf
```

## Acknowledgements

- [vite-plugin-monkey](https://github.com/lisonge/vite-plugin-monkey)
- [vite-plugin-web-extension](https://github.com/aklinker1/vite-plugin-web-extension)

## License

[MIT](./LICENSE)
