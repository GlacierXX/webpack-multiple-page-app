/**
 * Created by Glacier on 16/11/9.
 * postcss配置文件
 */
import autoprefixer from 'autoprefixer';
import pxtorem from 'postcss-pxtorem';

export default [
    autoprefixer({ browsers: ['> 0%'] }),
    pxtorem({
        rootValue: 16,
        propWhiteList: []
    })
]