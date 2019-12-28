const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
	// mode: 'development',
	entry: {
		'scripts/app': './src/app.js',
		'vendor/react': 'react',
		'vendor/react-dom': 'react-dom'
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name]-[hash:6].js'
	},
	module: {
		rules: [{
			test: /\.(css|scss)$/,
			// use: ["style-loader", "css-loader", "sass-loader"]
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'sass-loader']
			})
		},
		{
			test: /\.(js|jsx)$/, // 一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
			exclude: /node_modules/, // 屏蔽不需要处理的文件（文件夹）（可选）
			loader: 'babel-loader' // loader的名称（必须）
		},
		{
			test: /\.(jpg|jpeg|png|gif)$/i,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 5000,
					outputPath: 'images/'
				}
			}]
		}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: getPath => getPath('styles/[name]-[hash:6].css').replace(
				'styles/scripts',
				'./'
			)
		}),
		new HtmlPlugin({
			title: 'sun',
			template: './src/index.ejs',
			filename: './index.html'
		})
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				react: {
					test: /react/,
					name: 'vendor/react',
					chunks: 'initial',
					priority: 10,
					minChunks: 2
				},
				'react-dom': {
					test: /react-dom/,
					name: 'vendor/react-dom',
					chunks: 'initial',
					priority: 10
				}
			}
		}
	}
}