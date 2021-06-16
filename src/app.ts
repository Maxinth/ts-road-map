/**
 * Mastering typeScript
 */

function nullishCheck(a: number | undefined | null): void {
  console.log(`a : ${a ?? `undefined or null`}`);
}

nullishCheck(1);
nullishCheck(null);
nullishCheck(undefined);
