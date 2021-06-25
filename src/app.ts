/**
 *
 * Mastering typeScript
 * GENERICS
 */

/*

git add . && git commit -m " " && clear
git add . && git commit -m " " && clear












*/

function usingTwoTypes<A, B>(first: A, second: B) {}

usingTwoTypes<number, string>(1, "test");
usingTwoTypes(1, "test");
usingTwoTypes<boolean, boolean>(true, false);
usingTwoTypes("both", "strings");
