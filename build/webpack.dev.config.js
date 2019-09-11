const HtmlWebpackPlugin = require('html-webpack-plugin');// html 模版插件
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.config')

module.exports = merge(commonConfig, {
    mode: "development",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'] // 从右向左解析
            },
        ]
    },
    devtool: "source-map",
    devServer: {
        port: 8088,             // 端口
        open: true,             // 自动打开浏览器
        hot: true,               // 开启热更新
        overlay: true, // 浏览器页面上显示错误
        historyApiFallback: true,
        proxy: { //通过代理解决本地跨域
            // '/api': {
            //     target: 'http://localhost:4000', // 服务端
            //     changeOrigin: true,
            //     ws: true,
            //     pathRewrite: {
            //         '^/api': '/api'
            //     }
            // }
        }

    }
}) 