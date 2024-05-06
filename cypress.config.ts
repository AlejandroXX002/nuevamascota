import { defineConfig } from 'cypress'
 
export default defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    baseUrl: "http://localhost:3000"
  },
})