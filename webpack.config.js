const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js', 
    output: {
        filename: 'bundle.js', 
        path: path.resolve(__dirname, 'dist'), 
        clean: true, 
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: ['@babel/preset-env'], 
                    },
                },
            },
            {
                test: /\.html$/, 
                use: [
                    {
                        loader: 'html-loader', 
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', 
                    'postcss-loader', 
                    'sass-loader', 
                ],
            },
            {
                test: /\.css$/, // Добавлено правило для CSS
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader', 
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', 
            inject: true, 
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css' // Итоговое имя CSS-файла
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), 
        },
        hot: true, 
        open: true, 
        watchFiles: ['src/**/*'],
    },
    resolve: {
        extensions: ['.js'], 
    },
};
