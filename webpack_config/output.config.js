/**
 * Created by Glacier on 16/11/8.
 * 输出文件配置
 */
import path from 'path';

const PRODUCTION = '--production';
const ARGV =  process.argv;
let BUILD_PATH = path.resolve(__dirname, '../build');
// 测试环境路径
let PUBLIC_PATH = '../';
if (ARGV.indexOf(PRODUCTION) > -1) {
    BUILD_PATH = path.resolve(__dirname, '../build-production');
    // 配置生产CND路径
    PUBLIC_PATH = '';
}

export default {
    path: BUILD_PATH,
    publicPath: PUBLIC_PATH,
    filename: '[name].js',
    chunkFilename: '[id].bundle.js'
};