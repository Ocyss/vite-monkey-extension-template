# Vue 3 + Vite + TailwindCSS 模版

[English](README.md) | [中文](README_CN.md)

一个基于 Vue 3、Vite 和 TailwindCSS 的现代化开发模板，支持油猴脚本和浏览器扩展开发。

> 注意：油猴脚本和浏览器扩展的维护优先级不同，油猴脚本优先级更高。

## 特性

- ⚡️ [Vue 3](https://vuejs.org/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- 🎨 [TailwindCSS](https://tailwindcss.com/) - 原子化 CSS 框架
- 📦 [VueUse](https://vueuse.org/) - Vue Composition API 工具集
- 🔧 支持多种构建目标: [vite-plugin-monkey](https://github.com/lisonge/vite-plugin-monkey) + [vite-plugin-web-extension](https://github.com/aklinker1/vite-plugin-web-extension)
  - 油猴脚本 (Tampermonkey)
  - Chrome 扩展
  - Firefox 扩展
- 🛠️ ESLint + [@antfu/eslint-config](https://github.com/antfu/eslint-config) 代码规范
- 🔄 [Auto Import](https://github.com/antfu/unplugin-auto-import) - 自动导入 API

## 开发

### 安装依赖

推荐使用 [pnpm](https://pnpm.io/) 作为包管理器:

```bash
pnpm install
```

### 命令

#### 油猴脚本 Tampermonkey
```bash
pnpm dev:mk
pnpm build:mk
pnpm preview:mk
```
#### Chrome 扩展
```bash
pnpm dev:ext
pnpm build:ext
pnpm preview:ext
```

#### Firefox 扩展

> 较低的维护优先级

```bash
pnpm dev:extf
pnpm build:extf
pnpm preview:extf
```

## 鸣谢

- [vite-plugin-monkey](https://github.com/lisonge/vite-plugin-monkey)
- [vite-plugin-web-extension](https://github.com/aklinker1/vite-plugin-web-extension)

## 许可证

[MIT](./LICENSE)
