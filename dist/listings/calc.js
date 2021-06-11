"use strict";
exports.__esModule = true;
exports.sum = void 0;
function sum() {
    var vals = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        vals[_i] = arguments[_i];
    }
    return vals.reduce(function (total, val) { return (total += val); });
}
exports.sum = sum;
//# sourceMappingURL=calc.js.map