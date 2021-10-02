import * as path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { createVuePlugin } from 'vite-plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin(),
    dts({
      cleanVueFileName: true,
      include: 'src/**',
      outputDir: 'dist/types',
      staticImport: true,
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '../src',
      },
    ],
  },
  css: {
    modules: {
      generateScopedName: '[hash:base64:5]',
    },
  },
  build: {
    minify: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'umd'],
      name: 'Demo',
      fileName: format => `demo.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', '@vue/composition-api'],
      output: {
        globals: {
          vue: 'Vue',
          '@vue/composition-api': 'vueCompositionApi',
        },
      },
    },
  },
})
