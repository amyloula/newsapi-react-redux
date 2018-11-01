// // webpack v4
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = [{
    entry: './styles.scss',
    output: {
        filename: '[name].[chunkhash].css',
        path: path.resolve('./webpack/')
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'sassbundle.css',
                    },
                },
                {loader: 'extract-loader'},
                {loader: 'css-loader'},
                {
                    loader: 'sass-loader',
                    options: {
                        includePaths: ['./node_modules']
                    }
                }
            ]
        }]
    },
    resolve: {
        extensions: ['.js', '.css', '.scss']
    },
    plugins: []
}];

module.exports.push({
    entry: {
        MainApp: "./index.js"
    },
    output: {
        filename: '[name].js',
        path: path.resolve('./webpack/'),
        library: '[name]'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'env']
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './index.html',
            filename: 'index.html'
        })
    ]
});
