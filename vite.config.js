import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages project site: https://sunanth-developer.github.io/crave/
  base: process.env.GITHUB_PAGES === 'true' ? '/crave/' : '/',
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      ignored: ['**/CRAVE_Riot_Candy_Website_Kit/**'],
    },
  },
})
