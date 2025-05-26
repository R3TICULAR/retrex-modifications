import { defineConfig } from 'vite';
import litCss from 'vite-plugin-lit-css'; // Use the default export

export default defineConfig({
  root: './src', // Set the root directory to 'src'
  build: {
    outDir: '../dist', // Output directory for the build
  },
  server: {
    port: 3000, // Development server port
    watch: {
        usePolling: true, // Ensures file changes are detected in all environments
      },
  },
  plugins: [
    litCss({
      include: '**/*.scss', // Process SCSS files
      transform: (css) => css, // Export SCSS as strings
    }),
  ],
});