const CracoLessPlugin = require('craco-less')
const {resolve} = require('path')
const reactHotReloadPlugin = require('craco-plugin-react-hot-reload');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const {
    whenProd
} = require('@craco/craco')
module.exports = {
    webpack: {
        alias: {
            '@': resolve(__dirname, 'src'),
            'react-dom': '@hot-loader/react-dom',
        },
        plugins: [
            new SimpleProgressWebpackPlugin({format:'minimal'}),
            ...whenProd(
                () => [
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
                    })
                ], []
            )
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