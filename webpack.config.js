const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'instant-games-bridge-vk-banner-extension.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new MiniCssExtractPlugin({ filename: 'instant-games-bridge-vk-banner-extension.css' })],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ],
            }
        ]
    }
}