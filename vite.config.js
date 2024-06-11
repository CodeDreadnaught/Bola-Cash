import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5500,
    proxy: {
      '/api' : {
        target: "https://bolacash-server.onrender.com",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, " "),
      },
    },
  },
})
