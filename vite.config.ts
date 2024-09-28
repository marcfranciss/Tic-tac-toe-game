import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://marcfranciss.github.io/Tic-tac-toe-game",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    }
  }
})
