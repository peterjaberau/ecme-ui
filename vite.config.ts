import { defineConfig } from 'vite'
// @ts-ignore
import react from '@vitejs/plugin-react'
import path from 'path';
import dynamicImport from 'vite-plugin-dynamic-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dynamicImport()],
  assetsInclude: ['**/*.md'],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      '@flow/utils': path.join(__dirname, 'src/packages/flow-engine/common/utils'),
      '@flow/canvas-core': path.join(__dirname, 'src/packages/flow-engine/canvas-engine/core'),
      '@flow/canvas-document': path.join(__dirname, 'src/packages/flow-engine/canvas-engine/document'),
      '@flow/canvas-renderer': path.join(__dirname, 'src/packages/flow-engine/canvas-engine/renderer'),
      '@flow/reactive': path.join(__dirname, 'src/packages/flow-engine/common/reactive'),
      '@flow/background-plugin': path.join(__dirname, 'src/packages/flow-engine/plugins/background-plugin'),
      '@flow/fixed-layout-core': path.join(__dirname, 'src/packages/flow-engine/canvas-engine/fixed-layout-core'),
      '@flow/free-layout-core': path.join(__dirname, 'src/packages/flow-engine/canvas-engine/free-layout-core'),
      '@flow/editor': path.join(__dirname, 'src/packages/flow-engine/client/editor'),
      '@flow/fixed-drag-plugin': path.join(__dirname, 'src/packages/flow-engine/plugins/fixed-drag-plugin'),
      '@flow/fixed-history-plugin': path.join(__dirname, 'src/packages/flow-engine/plugins/fixed-history-plugin'),
      '@flow/fixed-layout-editor': path.join(__dirname, 'src/packages/flow-engine/client/fixed-layout-editor'),
      '@flow/fixed-reactor-plugin': path.join(__dirname, 'src/packages/flow-engine/plugins/fixed-reactor-plugin'),
      '@flow/form': path.join(__dirname, 'src/packages/flow-engine/node-engine/form'),
      '@flow/form-core': path.join(__dirname, 'src/packages/flow-engine/node-engine/form-core'),
      '@flow/free-history-plugin': path.join(__dirname, 'src/packages/flow-engine/plugins/free-history-plugin'),
      '@flow/free-hover-plugin': path.join(__dirname, 'src/packages/flow-engine/plugins/free-hover-plugin'),
      '@flow/free-layout-editor': path.join(__dirname, 'src/packages/flow-engine/client/free-layout-editor'),
      '@flow/free-lines-plugin': path.join(__dirname, 'src/packages/flow-engine/plugins/free-lines-plugin'),
      '@flow/free-node-panel-plugin': path.join(__dirname, 'src/packages/flow-engine/plugins/free-node-panel-plugin'),
      '@flow/free-snap-plugin': path.join(__dirname, 'src/packages/flow-engine/plugins/free-snap-plugin'),
      '@flow/free-stack-plugin': path.join(__dirname, 'src/packages/flow-engine/plugins/free-stack-plugin'),
      '@flow/free-container-plugin': path.join(__dirname, 'src/packages/flow-engine/plugins/free-container-plugin'),
      '@flow/group-plugin': path.join(__dirname, 'src/packages/flow-engine/plugins/group-plugin'),
      '@flow/history-node-plugin': path.join(__dirname, 'src/packages/flow-engine/plugins/history-node-plugin'),
      '@flow/minimap-plugin': path.join(__dirname, 'src/packages/flow-engine/plugins/minimap-plugin'),
      '@flow/node-engine': path.join(__dirname, 'src/packages/flow-engine/node-engine/node'),
      '@flow/node-core-plugin': path.join(__dirname, 'src/packages/flow-engine/plugins/node-core-plugin'),
      '@flow/node-variable-plugin': path.join(__dirname, 'src/packages/flow-engine/plugins/node-variable-plugin'),
      '@flow/playground-react': path.join(__dirname, 'src/packages/flow-engine/client/playground-react'),
      '@flow/redux-devtool-plugin': path.join(__dirname, 'src/packages/flow-engine/plugins/redux-devtool-plugin'),
      '@flow/select-box-plugin': path.join(__dirname, 'src/packages/flow-engine/plugins/select-box-plugin'),
      '@flow/shortcuts-plugin': path.join(__dirname, 'src/packages/flow-engine/plugins/shortcuts-plugin'),
      '@flow/variable-core': path.join(__dirname, 'src/packages/flow-engine/variable-engine/variable-core'),
      '@flow/variable-layout': path.join(__dirname, 'src/packages/flow-engine/variable-engine/variable-layout'),
      '@flow/variable-plugin': path.join(__dirname, 'src/packages/flow-engine/plugins/variable-plugin'),
      '@flow/command': path.join(__dirname, 'src/packages/flow-engine/common/command'),
      '@flow/history': path.join(__dirname, 'src/packages/flow-engine/common/history'),
      '@flow/history-storage': path.join(__dirname, 'src/packages/flow-engine/common/history-storage'),
      '@flow/materials-plugin': path.join(__dirname, 'src/packages/flow-engine/plugins/materials-plugin'),
      '@flow/fixed-semi-materials': path.join(__dirname, 'src/packages/flow-engine/materials/fixed-semi-materials'),
      '@flow/free-auto-layout-plugin': path.join(__dirname, 'src/packages/flow-engine/plugins/free-auto-layout-plugin'),
      '@flow/i18n-plugin': path.join(__dirname, 'src/packages/flow-engine/plugins/i18n-plugin'),
      '@flow/i18n': path.join(__dirname, 'src/packages/flow-engine/common/i18n'),

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
