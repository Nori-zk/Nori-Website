import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'three', 'ogl'],
    // Force eager transformation of all imports including SVGs
    eagerlyTransform: ['**/*.svg?react'],
  },
  server: {
    // Disable lazy loading in dev mode
    preTransformRequests: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
