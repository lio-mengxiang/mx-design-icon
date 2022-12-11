import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  jsx: 'react',
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
      { find: /^~@/, replacement: './src/' },
    ],
  },
  server: {
    host: true,
    port: 15000,
    open: true,
  },
  plugins: [react()],
});
