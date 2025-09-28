const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //specPattern: "cypress/test/e2e/**/*.cy.{js,jsx,ts,tsx}",
    specPattern: "cypress/test/e2e/redmine/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/test/support/e2e.js",
    screenshotsFolder: "cypress/test/screenshots",
    videosFolder: "cypress/test/videos",
    video: true,
    videoOnFailureOnly: false,
    setupNodeEvents(on, config) {
      // プラグインなどの設定
    },
  },
  env: {
    TEST_SITE_URL: 'http://158.179.191.24/', //Test対象のURL
    TEST_USERNAME: 'TestUser', //Testユーザ名
    TEST_PASSWORD: 'TestUserpass' //Testユーザのパスワード
  },
});
