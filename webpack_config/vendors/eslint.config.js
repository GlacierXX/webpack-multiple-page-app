/**
 * Created by Glacier on 16/11/9.
 * eslint配置
 */
import path from 'path';

export default {
    // 指定eslint的配置文件
    configFile: path.resolve(__dirname, '../../.eslintrc'),
    // warning终止webpack编译
    failOnWarning: true,
    // error终止webpack编译
    failOnError: true,
    // 开启eslint的cache, 存在node_modules/.cache目录
    cache: true
};