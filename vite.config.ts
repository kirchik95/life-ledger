import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  css: {
    modules: {
      generateScopedName: '[name]__[local]__[hash:base64:5]',
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
    checker({
      overlay: true,
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts, tsx, js, jsx}"',
      },
      stylelint: {
        lintCommand: 'stylelint "./src/**/*.css"',
      },
    }),
  ],
});
