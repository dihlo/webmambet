module.exports = {
	entry: './src/App.jsx',
	output: {
		filename: 'bundle.js',
		path: require("path").resolve("./public")
	},

	devServer: {
		inline: true,
		contentBase: './public',
		port: 3000
	},

	devtool: 'eval-source-map',

	resolve: {
		extensions: ['.js', '.jsx']
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['react-hot-loader', 'babel-loader']
			},
			{
				test: /\.css$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader' ]
			}
		]
	}
}