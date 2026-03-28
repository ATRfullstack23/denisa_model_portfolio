import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  server: {
    /** Dev URL: http://localhost:4000 and http://<your-lan-ip>:4000 */
    port: 4000,
    host: '0.0.0.0',
    strictPort: false,
  },
  preview: {
    port: 4000,
    host: '0.0.0.0',
    strictPort: false,
  },
})
