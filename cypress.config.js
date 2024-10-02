const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: "https://demoqa.com/automation-practice-form/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
