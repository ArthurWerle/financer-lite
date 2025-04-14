import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './src/index.html',
      },
    },
  },
  server: {
    open: true,
    proxy: {
      '/api/bff': {
        target: 'http://localhost:8082',
        changeOrigin: true,
        secure: false,
      }
    }
  }
}) 