// import react from '@vitejs/plugin-react'
// import { defineConfig } from 'vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // a Vite plugin for Tailwind CSS

export default defineConfig({
  plugins: [react(), tailwindcss()],  // Add the Tailwind CSS plugin to the Vite configuration
})