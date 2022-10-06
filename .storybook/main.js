const path = require('path')

module.exports = {
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../')
        })

        config.module.rules.push({
            test: /\.(jpe?g|png|svg)$/,
            type: "asset"
        })

        return config
    },
    stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions"
    ],
    framework: "@storybook/react",
    core: {
        "builder": "@storybook/builder-webpack5"
    },
    features: {
        storyStoreV7: true,
    }
}