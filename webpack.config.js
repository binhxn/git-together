const webpack = require('webpack');
const path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
		"./src/app.js"
	],
	output: {
		path: path.resolve('./dist'),
		filename: "bundle.js",
		// Need to set publicPath to local host to update changes in both local and electron
		publicPath: 'http://localhost:3000/static/'
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // Won't run webpack if an error is found and fixed
    new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|server.js)/,
				loader: 'babel',
				query: {
          presets: ['react', 'es2015', 'react-hmre']
        }
			},
			{
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!sass-loader'
      }
		]
	}
};