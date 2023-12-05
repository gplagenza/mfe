const { merge } = require('webpack-merge');
const ModulefederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

//const HtmlWebpackPlugin = require('html-webpack-plugin');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins:  [
        new ModulefederationPlugin({
            name: 'container', //not used, added for clarity. Only needed for Remotes
            remotes: { //list projects that the Container can search to get additional code
                marketing: `marketing@${domain}/marketing/remoteEntry.js`
            },
            shared: packageJson.dependencies,
        })
    ]
};

module.exports = merge(commonConfig, prodConfig);