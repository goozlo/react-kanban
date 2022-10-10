const path = require("path");
const custom = require("../webpack.dev.js")

module.exports = {
  webpackFinal: async (config) => {
    custom.module.rules.forEach(rule => config.module.rules.push(rule))
    config.resolve = custom.resolve

    return config
  },
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  features: {
    storyStoreV7: true,
  },
};
