/**
 * Created by Glacier on 16/11/8.
 * 入口配置文件
 */
import path from 'path';
import glob from 'glob';

const SRC_PATH = path.resolve(__dirname, '../src');

let entry = {
    'commons': ['jquery', 'jquery.cookie']
};
const pageArr = glob.sync('*/*', { cwd: SRC_PATH });
pageArr.forEach(page => {
    entry[page] = path.resolve(SRC_PATH, page);
});
export default entry;