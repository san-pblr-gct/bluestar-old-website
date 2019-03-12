const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDev = (process.env.npm_lifecycle_script.indexOf('development') === -1) ? false : true;


module.exports = {
    entry: {
        main: './src/index.js',
        vendor: ['react', 'react-dom'],
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: `[name]${isDev ? '' : '[chunkhash]'}.js`
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use:
                {
                    loader: 'babel-loader'
                }
        },
        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader"
            ]
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {}
                }
            ]
        }]
    },
    optimization: {
        // splitChunks: {
        //     chunks: 'all',
        // },
        runtimeChunk: true,
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.HashedModuleIdsPlugin(),
        new WorkboxPlugin.GenerateSW({
            // these options encourage the ServiceWorkers to get in there fast 
            // and not allow any straggling "old" SWs to hang around
            clientsClaim: true,
            skipWaiting: true
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: isDev ? '[name].css' : '[name].[chunkhash].css',


        })
    ],
    resolve:{
        alias:{
            'react':'preact-compat',
            'react-dom':'preact-compat',
        }
    }
}