import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path - use '/' for custom domain or username.github.io repos
  base: '/',
  build: {
    outDir: 'dist',
  },
})
