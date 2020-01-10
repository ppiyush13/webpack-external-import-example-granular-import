const HtmlWebPackPlugin = require("html-webpack-plugin");
const URLImportPlugin = require('webpack-external-import/webpack')

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new URLImportPlugin({
            manifestName: 'website-one'
        })
    ]
};