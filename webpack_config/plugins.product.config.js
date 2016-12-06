/**
 * Created by Glacier on 16/11/9.
 * 插件生产环境配置
 */
import path from 'path';
import webpack from 'webpack';
import pluginsConfig from './plugins.config';
import CleanWebpackPlugin from 'clean-webpack-plugin';

// js压缩
pluginsConfig.push(new webpack.optimize.UglifyJsPlugin({
    // 取消第三方类库不规范代码产生的警告
    compress: {
        warnings: false
    }
}));
// 出错停止编译
pluginsConfig.push(new webpack.NoErrorsPlugin());
// 清空build文件夹
const PRODUCTION = '--production';
const ARGV =  process.argv;
let BUILD_NAME = 'build';
if (ARGV.indexOf(PRODUCTION) > -1) {
    BUILD_NAME = 'build-production';
}
pluginsConfig.push(new CleanWebpackPlugin([BUILD_NAME], {
    root: path.resolve(__dirname, '../'),
    verbose: true
}));

export default pluginsConfig;