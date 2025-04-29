import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import zaloMiniApp from 'zmp-vite-plugin';
export default defineConfig({
  plugins: [react(), zaloMiniApp()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  base: '/',  // Đảm bảo base path phù hợp cho mọi môi trường
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'swiper'],  // Chia các thư viện lớn thành chunk riêng biệt
        },
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    cors: true,
    proxy: {
      '/api': 'http://localhost:5000',  // Nếu có proxy API
    },
  },
  
});

