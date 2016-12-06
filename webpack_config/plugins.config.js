/**
 * Created by Glacier on 16/11/9.
 * 插件配置
 */
import path from 'path';
import glob from 'glob';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

let pluginsConfig =  [
    // 公共chunk打包
    new webpack.optimize.CommonsChunkPlugin({
        name: 'commons',
        filename: 'commons/common.js',
        minChunks: 3
    }),
    // 将zepto设置成全局
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery'
    }),
    // 提取css文件
    new ExtractTextPlugin('[name].css')
];
const SRC_PATH = path.resolve(__dirname, '../src');
const pageArr = glob.sync('*/*', { cwd: SRC_PATH });
pageArr.forEach(page => {
    const htmlConfig = new HtmlWebpackPlugin({
        filename: `${page}.html`,
        template: path.resolve(SRC_PATH, `${page}/template.html`),
        chunks: [page, 'commons'],
        hash: true,
        xhtml: true
    });
    pluginsConfig.push(htmlConfig);
});

export default pluginsConfig;