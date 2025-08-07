const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.uol.com.br',
    pageLoadTimeout: 240000,
    defaultCommandTimeout: 20000,
    setupNodeEvents(on, config) {
    },
  },
})
