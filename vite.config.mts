import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import zaloMiniApp from 'zmp-vite-plugin'

export default defineConfig({
  plugins: [react(), zaloMiniApp()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist', // Thêm cấu hình output thư mục dist
  },
  base: '/',  // Đảm bảo tài nguyên sẽ được tìm thấy đúng vị trí
})
