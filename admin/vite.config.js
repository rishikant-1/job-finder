import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api/admin': {
        target: 'https://job-finder-y1cr.onrender.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/admin/, '/api/admin')
      }
    }
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
