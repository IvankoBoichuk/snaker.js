import { defineConfig } from 'vite';

export default defineConfig({
  root: 'demo',          // Коренева папка з index.html
  base: '/snaker.js/',   // Базовий шлях, який відповідає підкаталогу розгортання
  build: {
    outDir: '../dist',   // Вихідна папка для збірки
    emptyOutDir: true    // Очищає dist при кожній збірці
  }
});
