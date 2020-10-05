const path = require("path");

module.exports = {
  bail: 1,
  coverageProvider: "v8",
  moduleDirectories: ["node_modules"],
  roots: [path.resolve(__dirname, "__tests__"), path.resolve(__dirname, "src")],
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  transformIgnorePatterns: ["\\\\node_modules\\\\", "\\.pnp\\.[^\\\\]+$"],
  verbose: true,
};
