<script setup lang="ts">
import tailwindLogoUrl from '@/assets/tailwindcss.svg'
import viteLogoUrl from '@/assets/vite.svg'
import vueLogoUrl from '@/assets/vue.svg'
import HelloWorld from '@/components/HelloWorld.vue'
import { logger } from '@/utils/logger'

onMounted(() => {
  logger.debug('App mounted')
  logger.info('App mounted')
  logger.warn('App mounted')
  logger.error('App mounted')
})
</script>

<template>
  <div class="flex mb-4">
    <a href="https://vitejs.dev" target="_blank">
      <img :src="viteLogoUrl" class="logo-img hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo">
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img :src="vueLogoUrl" class="logo-img hover:drop-shadow-[0_0_2em_#42b883aa]" alt="Vue logo">
    </a>
    <a href="https://tailwindcss.com/" target="_blank">
      <img :src="tailwindLogoUrl" class="logo-img hover:drop-shadow-[0_0_2em_#5ec7eaaa]" alt="TailwindCSS logo">
    </a>
  </div>
  <HelloWorld msg="Hello World !!!" />
</template>

<style scoped>
.logo-img{
  @apply h-32 w-32 p-2 will-change-auto
}
</style>
