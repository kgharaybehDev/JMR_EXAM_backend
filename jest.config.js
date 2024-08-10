module.exports = {
    testEnvironment: 'node', // Ensure Jest uses the Node.js environment
    setupFilesAfterEnv: ['./tests/setup.js'], // Point to the global setup file
    testTimeout: 30000, // Increase the default test timeout (optional, but helpful for long-running tests)
    coveragePathIgnorePatterns: [
      '/node_modules/',
      '/tests/', // Ignore the test directory when collecting coverage (if applicable)
    ],
    moduleFileExtensions: ['js', 'json', 'jsx', 'node'], // Ensure these extensions are recognized
  };
  