// const NODE_ENV = 'production';
var path = require("path"),
    webpack = require('webpack'),
    precss = require('precss'),
    autoprefixer = require('autoprefixer'),
    ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // entry: './scripts/entry.js',
    entry: {
        common: './scripts/entry-foundation.js',
        scroll: './scripts/entry-scroll.js',
        calendar: './scripts/entry-calendar.js',
        sponsors: './scripts/entry-sponsors.js',
        map: './scripts/entry-map.js'
    },
    output: {
        path: 'public',
        filename: 'js/[name].js',
        publicPath: 'http://static.navystavke.ru/newassets/',
        sourceMapFilename: '[name].map'
    },
    devtool: 'eval',
    resolve: {
        modulesDirectories: [
            'node_modules',
            'node_modules/foundation-sites/js',
            'node_modules/foundation-sites/scss',
            // 'node_modules/jquery/dist',
            'scripts'
        ],
        extensions: [ '', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.(scss|css)$/,
                include: /scss/,
                // loader: ExtractPlugin.extract('style', 'resolve-url!css?root=./public/css!postcss?browsers=last 3 versions!sass?sourceMap')
                // loader: ExtractPlugin.extract('style', 'css?root=public/css!postcss?browsers=last 3 versions!sass')
                loader: ExtractPlugin.extract('style', 'css?root=./css&sourceMap!sass?sourceMap')
            },

            {
                test: /\.jsx?$/,
                include: /scripts/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'file?emitFile=false&name=[path][name].[ext]'
            }

        ]
    },
    plugins: [
        // new CleanPlugin('public'),
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: false,
        //     mangle: false,
        //     compress: {
        //         warnings: false
        //     },
        //     output: {
        //         comments: false
        //     }
        // }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            // React: 'react',
            // render: 'react-dom'
        }),
        new ExtractPlugin("./css/app.css"),
        // new webpack.optimize.UglifyJsPlugin()
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
        }
    }
};
//
// if(NODE_ENV === 'production') {
//     console.log(' U G L I F Y  P L U G I N');
//     module.exports.plugins.push(
//         new webpack.optimize.UglifyJsPlugin({
//             minimize: true,
//             compress: {
//                 warnings: false,
//                 drop_console: true,
//                 unsafe: true
//             },
//             comments: false,
//             sourceMap: false,
//             test: /\.js$/,
//             include: 'scripts'
//         })
//     );
// }