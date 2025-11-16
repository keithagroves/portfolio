import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages deploy: repo is keithagroves/portfolio, served from /portfolio
  base: '/portfolio/',
})
