module.exports = function (config) {
  config.set({
    // "$schema": "./node_modules/@stryker-mutator/core/schema/stryker-schema.json",
    mutate: [
      "src/**/*.js?(x)",
      "!src/**/*@(.test|.spec|Spec).js?(x)",
      "!src/index.js",
    ],
    mutator: "javascript",
    testRunner: "jest",
    reporters: [
      "progress",
      "clear-text",
      "html"
    ],
    coverageAnalysis: "off",
    jest: {
      projectType: "create-react-app"
    }
  });
};
