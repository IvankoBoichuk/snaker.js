import { defineConfig } from 'vite';

export default defineConfig({
    root: 'demo',  // Вкажіть папку з index.html
    build: {
        outDir: '../dist',  // Вкажіть вихідну папку для збірки
        emptyOutDir: true
    }
});
