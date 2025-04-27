import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "https://rptr.dev.s3.eu-west-1.amazonaws.com/",
  plugins: [react(), tailwindcss()],
})
