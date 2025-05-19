const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true, 
    videosFolder: 'cypress/videos', 
    videoCompression: 32, 
    videoUploadOnPasses: true, 
    setupNodeEvents(on, config) {
      // eventos aqui, se necessário
    },
  },
});
