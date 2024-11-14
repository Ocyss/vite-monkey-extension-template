import type { UserConfig } from 'vite'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import monkey, { cdn } from 'vite-plugin-monkey'
import webExtension from 'vite-plugin-web-extension'
import * as packageJson from './package.json'

const urlSchemes = [
  'https://www.google.com/*',
]

const mode = process.env.MODE || 'tamper-monkey'
const target = process.env.TARGET || 'chrome'
const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig(async (env) => {
  console.log({ mode, target, env })

  const config: UserConfig = {
    plugins: [
      vue(),
      AutoImport({ imports: ['vue', '@vueuse/core'], dts: 'src/types/auto-imports.d.ts' }),
    ],
    resolve: {
      alias: {
        '@': pathSrc,
      },
    },
    publicDir: false,
    define: {
      __TARGET__: JSON.stringify(target),
      __MODE__: JSON.stringify(mode),
    },
  }

  if (mode === 'tamper-monkey') {
    const locales = getLocales('zh_CN')
    config.build = { outDir: `dist/tamper-monkey` }
    config.plugins.push(
      monkey({
        entry: 'src/main.ts',
        userscript: {
          name: locales.extName,
          author: packageJson.author,
          description: locales.extDescription,
          icon: 'https://vitejs.dev/logo.svg',
          namespace: 'https://github.com/Ocyss/vite-monkey-extension-template',
          match: urlSchemes,
          version: packageJson.version,
          homepage: packageJson.homepage,
        },
        build: {
          externalGlobals: {
            vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js'),
          },
        },
        server: {
          prefix: false,
          open: false,
        },
      }),
    )
  }
  else if (mode === 'web-extension') {
    config.publicDir = 'public'
    const outDir = `dist/${target}`
    config.build = { outDir }
    config.plugins.push(
      webExtension({
        manifest: () => {
          return {
            'name': '__MSG_extName__',
            'icons': {
              16: 'assets/logo.png',
              32: 'assets/logo.png',
              48: 'assets/logo.png',
              96: 'assets/logo.png',
              128: 'assets/logo.png',
            },
            'author': packageJson.author,
            'version': packageJson.version,
            'background': {
              '{{firefox}}.scripts': 'src/background.ts',
              '{{chrome}}.service_worker': 'src/background.ts',
            },
            // update_url: `${packageJson.repository}/releases/download/v${packageJson.version}/web-extension/updates.xml`,
            'description': '__MSG_extDescription__',
            'permissions': ['scripting', 'webNavigation', 'storage'],
            'homepage_url': packageJson.homepage,
            'default_locale': 'zh_CN',
            'host_permissions': urlSchemes,
            // 取消注释 将允许点击图标, 默认动作是 启用/禁用
            // '{{chrome}}.action': {
            //   default_icon: {
            //     16: 'assets/logo.png',
            //     32: 'assets/logo.png',
            //     48: 'assets/logo.png',
            //     96: 'assets/logo.png',
            //     128: 'assets/logo.png',
            //   },
            //   default_title: packageJson.name,
            //   // default_popup: "src/popup/index.html",
            // },
            // '{{firefox}}.browser_action': {
            //   default_icon: {
            //     16: 'assets/logo.png',
            //     32: 'assets/logo.png',
            //     48: 'assets/logo.png',
            //     96: 'assets/logo.png',
            //     128: 'assets/logo.png',
            //   },
            //   default_title: packageJson.name,
            //   // default_popup: "src/popup/index.html",
            // },
            'web_accessible_resources': [
              {
                matches: urlSchemes,
                resources: ['src/main.js'],
                use_dynamic_url: true,
              },
            ],
            '{{chrome}}.manifest_version': 3,
            '{{firefox}}.manifest_version': 2,
          }
        },
        // webExtConfig: {},
        watchFilePaths: ['package.json', 'vite.config.ts'],
        additionalInputs: ['src/main.ts'],
        disableAutoLaunch: true,
        skipManifestValidation: true,
        browser: target,
      }),
      cssInjectedByJsPlugin(),
    )
  }
  return config
})

function getLocales(defaultLocale = 'en') {
  const localesDir = path.resolve(__dirname, 'public', '_locales')
  const locales: Record<string, Record<string, string>> = {}

  if (!fs.existsSync(localesDir)) {
    return locales
  }

  const dirs = fs.readdirSync(localesDir)

  dirs.forEach((dir) => {
    const files = fs.readdirSync(path.join(localesDir, dir))
    const locale = dir.replace('_', '-')
    files.forEach((file) => {
      if (file.endsWith('.json')) {
        const filePath = path.join(localesDir, dir, file)
        const content = fs.readFileSync(filePath, 'utf-8')
        const data = JSON.parse(content)
        for (const key in data) {
          if (!locales[key]) {
            locales[key] = {}
          }
          locales[key][locale] = data[key].message
          if (dir === defaultLocale) {
            locales[key][''] = data[key].message
          }
        }
      }
    })
  })
  return locales
}
