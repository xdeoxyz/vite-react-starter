import { resolve } from 'path'

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log({ command }, { mode })

  switch (mode) {
    case 'development':
      return {
        plugins: [react(), tailwindcss()],
        resolve: { alias: { '@': resolve(__dirname, './src') } },
      }

    default:
      switch (command) {
        case 'build':
          return { plugins: [tailwindcss()] }

        default:
          return {
            preview: { strictPort: true },
          }
      }
  }
})
