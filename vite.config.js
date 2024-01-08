import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // O el directorio que desees
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main.jsx')
      },
    },
  },
});