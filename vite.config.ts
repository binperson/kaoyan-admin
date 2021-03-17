import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createAlias } from './build/vite/alias';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: createAlias([
      // /@/xxxx => src/xxxx
      ['/@/', 'src'],
      // /#/xxxx => types/xxxx
      ['/#/', 'types'],
    ]),
  },
  plugins: [vue()]
})
