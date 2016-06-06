var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(options) {
    var entry, plugins, cssLoaders;

    // If building for prod
    if (options.prod) {
        entry = [
            path.resolve(__dirname, 'js/index.js')
        ];
        cssLoaders = ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader');

        plugins = [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new HtmlWebpackPlugin({
                template: 'index.html',
                minify:
                {
                    removeComments:                true,
                    collapseWhitespace:            true,
                    removeRedundantAttributes:     true,
                    useShortDoctype:               true,
                    removeEmptyAttributes:         true,
                    removeStyleLinkTypeAttributes: true,
                    keepClosingSlash:              true,
                    minifyJS:                      true,
                    minifyCSS:                     true,
                    minifyURLS:                    true
                },
                inject: true
            }),
            new ExtractTextPlugin('css/main.css'),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            })
        ];
    // if app is in dev
    } else {
        entry = [
            'webpack-dev-server/client?http://localhost:8080', // needed for hot reloading
            'webpack/hot/only-dev-server', // as above
            path.resolve(__dirname, 'js/index.js')
        ];
        cssLoaders = 'style-loader!css-loader!postcss-loader';
        plugins = [
            new webpack.HotModuleReplacementPlugin(), // make hot loading work
            new HtmlWebpackPlugin({
                template: 'index.html',
                inject:   true
            })
        ];
    }

    return {
        entry:  entry,
        output: {
            path:     path.resolve(__dirname, 'dist'),
            filename: 'js/bundle.js'
        },
        module: {
            loaders: [
                {
                    test:    /\.js$/,
                    loader:  'babel',
                    exclude: path.join(__dirname, '/node_modules/')
                },
                {
                    test:   /\.css$/,
                    loader: cssLoaders
                },
                {
                    test:   /\.jpe?g$|\.gif$|\.png$/i,
                    loader: 'url-loader?limit=10000'
                }
            ]
        },
        plugins: plugins,
        postcss: function() {
            return [
                require('postcss-import')({ // Import all the css files...
                    glob:     true,
                    onImport: function (files) {
                        files.forEach(this.addDependency); // add dependencies
                    }.bind(this) // ...so they get hot–reloaded when something changes...
                }),
                require('postcss-simple-vars')(), // ...then replace the variables...
                require('postcss-focus')(), // ...add a :focus to ever :hover...
                require('autoprefixer')({ // ...and add vendor prefixes...
                    browsers: ['last 2 versions', 'IE > 8']
                }),
                require('postcss-reporter')({ // This plugin makes sure we get warnings in the console
                    clearMessages: true
                })
            ];
        },
        target:   'web',
        stats:    {colors: true},
        progress: true
    };
};
