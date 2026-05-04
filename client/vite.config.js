import path from "path"
import taildwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "dns"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), taildwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
