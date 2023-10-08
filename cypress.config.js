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
    TOOL_TESTS: true,
    REQUESTS_TESTS: true,
    RECORD_KEY: 'b96334bf-f532-41be-8a6d-ae958ca63c3e',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://top-phrases.dicta.org.il/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
