var path = require('path'),
    webpack = require('webpack'),
    glob = require('glob'),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: glob.sync('./assets/js/controllers/*.js'),
    output: {
        path: path.join(__dirname, '/assets/js'),
        filename: 'controller.min.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: 'es2015',
                    plugins: ['babel-plugin-transform-object-rest-spread']
                }
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoEmitOnErrorsPlugin(),
        new UglifyJSPlugin({
            sourceMap: false,
            mangle: false
        })
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map'
};