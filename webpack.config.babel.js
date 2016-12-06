/**
 * Created by Glacier on 16/11/8.
 * webpack config
 */
import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import entry from './webpack_config/entry.config';
import output from './webpack_config/output.config';
import module from './webpack_config/module.config';
import plugins from './webpack_config/plugins.product.config';
import postcss from './webpack_config/vendors/postcss.config';
import eslint from './webpack_config/vendors/eslint.config';

export default {
    // 入口文件
    entry,
    // 输出文件
    output,
    // loaders配置
    module,
    // postcss配置
    postcss,
    // eslint配置
    eslint,
    // 插件配置
    plugins
};