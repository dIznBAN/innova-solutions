import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: './FRONT',
  plugins: [react()],
  build: {
    outDir: '../dist'
  }
})