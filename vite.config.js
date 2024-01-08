import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const isProduction = process.env.NODE_ENV === 'production';

// Define la URL base dependiendo del entorno
const baseUrl = isProduction
  ? 'https://frontendnotes-dcda18d7dadc.herokuapp.com'
  : 'http://localhost:3000';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: baseUrl,  // Establece la URL base

  server: {
    port: 3000, // Cambia el puerto del servidor de desarrollo aquí
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
