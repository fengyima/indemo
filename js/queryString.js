/**
 * 获取url里的参数
 *
 * @method getQueryString
 * @memberof common
 * @type {Function}
 *
 * @param {string} 获取参数的名
 * @return {string} 成功后会自动获取`data`数据
 */
function queryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    else {
        return null;
    }
}


export default queryString;