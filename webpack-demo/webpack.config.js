const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';
let mode = 'development';
let devtool = 'eval-source-map';
let filename = '[name]';
let chunkFilename = '[id]';

if (isProd) {
    mode = 'production';
    devtool = false;
    filename = '[name].[hash]';
    chunkFilename = '[id].[hash]';
}

module.exports = {
    mode,
    devtool,
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: `${filename}.js`,
        chunkFilename: `${chunkFilename}.js`,
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: `${filename}.css`,
            chunkFilename: `${chunkFilename}.css`
        })
    ],
    devServer: {
        contentBase: './dist',
        historyApiFallback: true
    }
};
