const CracoLessPlugin = require('craco-less')
const path = require('path')
const reactHotReloadPlugin = require('craco-plugin-react-hot-reload');
const resolve = pathUrl => path.join(__dirname, pathUrl)
module.exports = {
    webpack: {
        alias: {
            '@': resolve('src'),
            'react-dom': '@hot-loader/react-dom',
        }
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