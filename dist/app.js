"use strict";
/**
 * Mastering typeScript
 */
var anEnum;
(function (anEnum) {
    anEnum[anEnum["FIRST"] = 0] = "FIRST";
    anEnum[anEnum["SECOND"] = 1] = "SECOND";
})(anEnum || (anEnum = {}));
function getEnumValue(enumValue) {
    switch (enumValue) {
        case anEnum.FIRST:
            return "first case";
        case anEnum.SECOND:
            return "second case";
        default:
            var returnValue = enumValue;
            return returnValue;
    }
}
getEnumValue(anEnum.FIRST);
getEnumValue(anEnum.SECOND);
