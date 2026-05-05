import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Inject GA4 script if VITE_GA_MEASUREMENT_ID is set
  build: {
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
})
