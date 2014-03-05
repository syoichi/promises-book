"use strict";
// 配列の中身をそれぞれpromiseオブジェクトにした配列を返す
function promisedMapping(ary) {
    function timerPromisefy(value) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(value);// => returnする値
            }, value);
        });
    }

    return ary.map(timerPromisefy);
}

var promisedMap = promisedMapping([1, 2, 4, 8, 16, 32]);
Promise.all(promisedMap).then(function (values) {
    function sum(values) {
        return values.reduce(function (total, current) {
            return total + current;
        }, 0);
    }

    var totalValue = sum(values);
    console.log(totalValue); // => 1 + 2 + 4 + 8 + 16 + 32
});

module.exports = promisedMapping;