const {
    resolve
} = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
    BundleAnalyzerPlugin
} = require("webpack-bundle-analyzer");

module.exports = {
    entry: resolve(__dirname, 'src', 'main.js'),
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js',
    },
    module: {
        rules: [{
            // test:
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html'),
        }),
        new BundleAnalyzerPlugin()
    ],
}