import { defineConfig } from "vite";

export default defineConfig({
    base:'/RubiksSimulator/',
    build: {
        minify: 'esbuild',
        target: "esnext"
      }
      
})