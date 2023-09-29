import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@/utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@/helpers': fileURLToPath(new URL('./src/utils/helpers', import.meta.url))
    }
  }
})

