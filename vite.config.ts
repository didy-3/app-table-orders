import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base:process.env.NODE_ENV === 'production'
  ? '/app-table-orders/'
  : '/',
  server:{
    port:8080
  },
  build: { rollupOptions: { treeshake: false } },
  esbuild: { treeShaking: false },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["legacy-js-api"],
        api: 'modern-compiler'
      }
    }
  }
})
