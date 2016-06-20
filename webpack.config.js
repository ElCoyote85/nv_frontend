var path = require("path"),
    webpack = require('webpack'),
    precss = require('precss'),
    autoprefixer = require('autoprefixer'),
    ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: './public/js/bundle.js'
    },
    devtool: 'eval',
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
                loader: ExtractPlugin.extract('style', 'css!postcss?browsers=last 3 versions!sass')
            }
            ,
            {
                test: /\.js$/,
                include: /scripts/,
                loader: 'babel?presets[]=es2015'
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
    }
};