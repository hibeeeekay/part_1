import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  root: './courseinfo', // Set the new root directory to 'courseinfo'
  build: {
    outDir: '../dist', // Output the build files to a 'dist' folder outside 'courseinfo'
  },
  plugins: [react()],
});
