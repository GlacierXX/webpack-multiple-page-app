/**
 * Created by Glacier on 16/11/8.
 * webpack config
 */
import path from 'path';
import entry from './webpack_config/entry.config';
import output from './webpack_config/output.config';
import module from './webpack_config/module.config';
import plugins from './webpack_config/plugins.config';
import postcss from './webpack_config/vendors/postcss.config';
import eslint from './webpack_config/vendors/eslint.config';

export default {
    // 入口文件
    entry,
    // 输出文件
    output,
    // 开发工具配置
    devtool: 'source-map',
    // 开发服务器
    devServer: {
        port: 1234,
        historyApiFallback: true,
        hot: true,
        inline: true,
        proxy: {
            // 配置代理
        }
    },
    // loaders配置项
    module,
    // postcss配置项
    postcss,
    // eslint配置项
    eslint,
    // 插件配置项
    plugins
};