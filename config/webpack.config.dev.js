const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
// const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
	// mode: 'development',
	entry: {
		app: './src/app.js'
	},
	output: {
		path: path.resolve(__dirname, '../dev'),
		filename: '[name].js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, '../dev'),
		host: 'localhost',
		// 服务器压缩是否开启
		compress: true,
		// 配置服务端口号
		port: 8080,
		// 不打印异常信息
		// quiet: true,
		// 开启模块热替换功能
		hot: true,
		proxy: {
			'/api': { // 命名
				target: 'http://api.douban.com', // 转发地址
				changeOrigin: true, // 允许跨域
				pathRewrite: {
					'^/api': ''
				}
			}
		}
		// proxy: {
		// 	'/api': {
		// 		// http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10
		// 		target: 'http://api.douban.com',
		// 		changeOrigin: true,
		// 		pathRewriteL: {
		// 			'^/api': ''
		// 		}
		// 	}
		// }
	},
	module: {
		rules: [{
			test: /\.(css|scss)$/,
			use: ['style-loader', 'css-loader', 'sass-loader']
			// use: ExtractTextPlugin.extract({
			//   fallback: "style-loader",
			//   use: ["css-loader", "sass-loader"]
			// })
			// loader: "css-loader"
		},
		{
			test: /\.(js|jsx)$/, // 一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
			exclude: /node_modules/, // 屏蔽不需要处理的文件（文件夹）（可选）
			loader: 'babel-loader' // loader的名称（必须）
			// use: {
			//   loader: "babel-loader",
			//   options: {
			//     presets: [
			//       [
			//         "@babel/preset-env",
			//         {
			//           modules: false,
			//           targets: {
			//             browsers: ["> 1%", "last 2 versions", "not ie <= 8"]
			//           }
			//         }
			//       ],
			//       "@babel/preset-react"
			//     ]
			//   }
			// }
		},
		// {
		//   test: /\.(js|jsx)$/,
		//   use: "babel-loader",
		//   // use: {
		//   //   loader: "babel-loader",
		//   //   options: {
		//   //     presets: ["env", "react"]
		//   //   }
		//   // },
		//   exclude: /node_modules/
		// },
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
		new HtmlPlugin({
			title: 'sun-dev',
			template: './src/index.ejs'
		})
	]
}