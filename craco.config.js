const CracoLessPlugin = require('craco-less')
const {resolve} = require('path')
const reactHotReloadPlugin = require('craco-plugin-react-hot-reload');
const WebpackBar = require('webpackbar')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    webpack: {
        alias: {
            '@': resolve(__dirname, 'src'),
            'react-dom': '@hot-loader/react-dom',
        },
        plugins: [
            new WebpackBar({profile: true}),
            new CircularDependencyPlugin({
                exclude: /node_modules/,
                include: /src/,
                failOnError: true,
                allowAsyncCycles: false,
                cwd: process.cwd()
            }),
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        drop_debugger: true,
                        drop_console: true,
                    },
                },
                sourceMap: false,
                parallel: true,
            }),
        ]
    },
    babel: {
        plugins: [
            ['import', {libraryName: 'antd', style: 'css'}],
            ['@babel/plugin-proposal-decorators', {legacy: true}]
        ]
    },
    eslint: {
        enable: false
    },
    plugins: [
        {
            plugin: reactHotReloadPlugin
        },
        {
            plugin: CracoLessPlugin,
            options: {
                // 此处根据 less-loader 版本的不同会有不同的配置，详见 less-loader 官方文档
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {},
                        javascriptEnabled: true
                    }
                },
            }
        }
    ]
}