const path = require('path'),
    webpack = require('webpack');

const buildPath = path.join(__dirname, './dist');
const sourcePath = path.join(__dirname, './src');

const env = process.env.NODE_ENV || 'development';
const production = env === 'production';

const plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(env)
        }
    })
];

if (production) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
            }
        })
    );
}

module.exports = {
    entry: {
        application: "./index.js"
    },
    output: {
        path: buildPath,
        filename: "[name].js"
    },
    module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015'],
				plugins: ["babel-plugin-transform-class-properties"]
			}
		}]
	},
    plugins,
    devtool: 'source-map',
    devServer: {
        inline: true,
        hot: true,
        port: 4444
    }
};
