module.exports = {
    testEnvironment: 'jsdom', // Use jsdom as the test environment for DOM manipulation
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // Setup jest-dom matchers
  };