import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 为 crypto 模块设置别名
      crypto: 'crypto-browserify',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        // 添加全局变量 polyfill
        NodeGlobalsPolyfillPlugin({
          buffer: true,
          crypto: true,
        }),
      ],
    },
  },
})
