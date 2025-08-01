import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/tandil-guide-2/',
  build: {
    outDir: 'docs' // ← this is the key!
  },
  plugins: [tailwindcss()]
})
