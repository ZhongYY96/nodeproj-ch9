import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { builtinModules } from 'module'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      crypto: 'crypto', // 指向 Node.js 内置 crypto 模块
    },
  },
  // 告诉 Vite 不要外部化 Node.js 内置模块
  build: {
    rollupOptions: {
      external: builtinModules.filter((m) => m !== 'crypto'),
    },
  },
  // 优化依赖处理
  optimizeDeps: {
    exclude: ['crypto'],
  },
})
