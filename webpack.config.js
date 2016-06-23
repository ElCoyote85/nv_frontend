var path = require("path"),
    webpack = require('webpack'),
    precss = require('precss'),
    autoprefixer = require('autoprefixer'),
    ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: './public/js/bundle.js',
        publicPath: '../',
        sourceMapFilename: '[name].map'
    },
    // devtool: 'eval',
    resolve: {
        modulesDirectories: [
            'node_modules',
            'node_modules/foundation-sites/js',
            'node_modules/foundation-sites/scss',
            'node_modules/jquery/dist'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                include: /scss/,
                // loader: ExtractPlugin.extract('style', 'resolve-url!css?root=./public/css!postcss?browsers=last 3 versions!sass?sourceMap')
                // loader: ExtractPlugin.extract('style', 'css?root=public/css!postcss?browsers=last 3 versions!sass')
                loader: ExtractPlugin.extract('style', 'css?root=public/css&sourceMap!sass?sourceMap')
                // loader: 'style!css!postcss?browsers=last 3 versions!resolve-url!sass'
            },
            {
                test: /\.js$/,
                include: /scripts/,
                loader: 'babel?presets[]=es2015'
            },
            {
                test: /\.(jpg|png)$/,
                // loader: 'file?name=[path][name].[ext]',
                // include: 'public',
                loader: 'file?emitFile=false&name=../[path][name].[ext]'
                // include: PATHS.images
            }

        ]
    },
    plugins: [
        new ExtractPlugin("./public/css/app.css")
    ],
    postcss: function () {
        return [precss, autoprefixer];
    },
    devServer: {
        port:3000,
        historyApiFallback: {
            index: 'index.html',
            hot: true,
            inline: true,
            progress: true,
            // contentBase: 'public'
        }
    },
    resolveUrlLoader: {
        // absolute: 'public'
        // root: 'public/css'
    }
};