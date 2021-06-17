/**
 * Mastering typeScript
 */

enum anEnum {
  FIRST,
  SECOND,
}

function getEnumValue(enumValue: anEnum): string {
  switch (enumValue) {
    case anEnum.FIRST:
      return "first case";
    case anEnum.SECOND:
      return "second case";
    default:
      let returnValue: never = enumValue;
      return returnValue;
  }
}

getEnumValue(anEnum.FIRST);
getEnumValue(anEnum.SECOND);
