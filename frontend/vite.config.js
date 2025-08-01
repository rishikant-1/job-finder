import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api/v1/': 'https://job-finder-1-mfre.onrender.com/',
      '/api/admin/': 'https://stackhire-8hqy.onrender.com'
    }
  },
  plugins: [
    react(),
    tailwindcss()
  ],
})
