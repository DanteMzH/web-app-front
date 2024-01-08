import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Obtén el puerto del entorno o utiliza 3000 por defecto para desarrollo
const port = process.env.PORT || 3000;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? `https://frontendnotes-dcda18d7dadc.herokuapp.com:${port}/` : '/',
  build: {
    outDir: 'dist', // O el directorio que desees
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main.jsx')
      },
    },
  },
});
