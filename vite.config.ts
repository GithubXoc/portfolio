import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves the site from /<repo-name>/, so the deploy workflow sets BASE_PATH.
  // Locally (and on hosts that serve from the domain root) it stays "/".
  base: process.env.BASE_PATH ?? '/',
  plugins: [react(), tailwindcss()],
})
