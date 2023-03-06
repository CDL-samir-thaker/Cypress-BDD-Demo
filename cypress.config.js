const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        specPattern: '**/*.feature',
        experimentalWebKitSupport: true,
        async setupNodeEvents(on, config) {
            // implement node event listeners here
            const cucumber = require('cypress-cucumber-preprocessor').default;
            on('file:preprocessor', cucumber());
        }
    }
});
