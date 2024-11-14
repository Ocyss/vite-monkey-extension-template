<script setup lang="ts">
defineProps<{ msg: string }>()

const { count, inc, dec, set, reset } = useCounter()
const target = __TARGET__
const mode = __MODE__
</script>

<template>
  <div class="flex flex-col space-y-4 items-center justify-center">
    <h1 class="text-2xl font-bold">
      {{ msg }}
    </h1>
    <h1 class="text-2xl font-bold">
      Run in  {{ target }}/{{ mode }}
    </h1>
    <p>Count: {{ count }}</p>
    <div class="flex space-x-4 items-center">
      <button class="btn-vite" @click="inc()">
        Increment
      </button>
      <button class="btn-vite" @click="dec()">
        Decrement
      </button>
      <button class="btn-vite" @click="inc(5)">
        Increment (+5)
      </button>
      <button class="btn-vite" @click="dec(5)">
        Decrement (-5)
      </button>
      <button class="btn-vite" @click="set(100)">
        Set (100)
      </button>
      <button class="btn-vite" @click="reset()">
        Reset
      </button>
    </div>
    <div class="text-center space-y-2">
      <p class="text-sm">
        This is a template project based on Vite + Vue + TailwindCSS for Monkey + Extension development, allowing you to quickly get started with Monkey and Extension development
      </p>
      <p class="text-sm">
        这是一个基于 Vite + Vue + TailwindCSS 的 Monkey + Extension 的模版项目, 允许你快速上手 Monkey 和 Extension 的开发
      </p>
    </div>
    <div class="text-left">
      <p>Links: </p>
      <p>相关链接: </p>
      <ul class="list-disc list-inside">
        <li><a href="https://github.com/Ocyss/vite-monkey-extension-template" target="_blank">vite-monkey-extension-template</a></li>
        <li><a href="https://github.com/lisonge/vite-plugin-monkey" target="_blank">vite-plugin-monkey</a></li>
        <li><a href="https://github.com/aklinker1/vite-plugin-web-extension" target="_blank">vite-plugin-web-extension</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.btn-vite{
  @apply bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700
}
</style>
