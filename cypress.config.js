const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: true,
  projectId: 'jw559t',
  screenshotOnRunFailure: false,
  defaultCommandTimeout: 30000,
  reporter: 'cypress-multi-reporters',
  failOnStatusCode: false,
  reporterOptions: {
    configFile: 'dicta-shared/reporter-config.json',
  },
  env: {
    DEV_URL: '',
    LIVE_URL: 'https://top-phrases.dicta.org.il/',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      require('./dicta-shared/videoCleanup')(on)
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://top-phrases.dicta.org.il/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
