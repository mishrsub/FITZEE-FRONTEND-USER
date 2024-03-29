import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  chunkSizeWarningLimit: 1600,
  server: {
    port: 80 // Set the desired port number here
  }
})
