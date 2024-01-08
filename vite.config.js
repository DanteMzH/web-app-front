import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: process.env.PORT || 3000, // Cambia el puerto del servidor de desarrollo aquí
  },

  build: {
    outDir: 'dist', // O el directorio que desees
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main.jsx')
      },
    },
  },
});
