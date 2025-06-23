import { defineConfig } from 'vite'
// @ts-ignore
import react from '@vitejs/plugin-react'
import path from 'path';
import dynamicImport from 'vite-plugin-dynamic-import'
import svgr from '@svgr/rollup'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      dynamicImport(),
      svgr({ dimensions: false })
  ],
  assetsInclude: ['**/*.md'],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false
      }
    }
  },
  build: {
    outDir: 'build'
  }
})
