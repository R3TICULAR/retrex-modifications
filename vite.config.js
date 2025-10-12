/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import litCss from 'vite-plugin-lit-css'; // Use the default export
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  root: './src',
  // Set the root directory to 'src'
  build: {
    outDir: '../dist' // Output directory for the build
  },
  server: {
    port: 3000,
    // Development server port
    watch: {
      usePolling: true // Ensures file changes are detected in all environments
    }
  },
  plugins: [litCss({
    include: ['**/*.scss', '../components/**/*.scss'] // Process SCSS files from src and components
  })],
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: 'playwright',
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.js']
      }
    }]
  }
});