/**
 * Created by Glacier on 16/11/9.
 * module配置文件
 */
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const SRC_PATH = path.resolve(__dirname, '../src');

export default {
    preLoaders: [
        // js格式校验
        {
            test: /\.js$/,
            include: SRC_PATH,
            loader: 'eslint'
        }
    ],
    loaders: [
        // html替换img
        {
            test: /\.html$/,
            exclude: /node_modules/,
            loader: 'html'
        },
        // js支持ES6
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        },
        // sass, autoprefixer, CSS Modules
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract('css?minimize&importLoaders=1&-autoprefixer!postcss!sass')
        },
        // 图片打包 小于8KB转成base64编码
        {
            test: /\.(png|jpg|gif)$/,
            include: SRC_PATH,
            loader: 'url?limit=8192&name=static/images/[name].[hash].[ext]'
        },
        // 字体文件打包
        {
            test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
            include: SRC_PATH,
            loader: 'file?name=static/fonts/[name].[ext]'
        }
    ]
}