/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import litCss from 'vite-plugin-lit-css';

export default defineConfig({
  plugins: [
    litCss({
      include: ['**/*.scss', 'components/**/*.scss']
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['components/**/*.test.js', 'src/**/*.test.js'],
    exclude: ['**/node_modules/**', '**/dist/**', '**/*.stories.js'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['components/**/*.js', 'src/**/*.js'],
      exclude: [
        '**/*.stories.js',
        '**/*.test.js',
        '**/node_modules/**',
        '**/dist/**',
        '**/.storybook/**'
      ]
    }
  }
});
