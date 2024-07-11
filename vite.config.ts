import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';

export default defineConfig({
  css: {
    modules: {
      generateScopedName: '[name]__[local]__[hash:base64:5]',
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
        lintCommand: 'stylelint "./src/**/*.{scss, css}"',
      },
    }),
  ],
});
