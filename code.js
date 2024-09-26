const friend = "BRUTUS";
const shiftValue = 3;
const latinAlp = "abcdefghijklmnopqrstuvwxyz";

const firstChar = friend[0];
const index = latinAlp.indexOf(firstChar.toLowerCase());

/*Q1: The reason why result is 1 instead of 2 
is the index always starts at 0 in js
*/
console.log(index);

const indexShift = index + shiftValue;
const encFirstLetter = latinAlp[indexShift];

console.log(encFirstLetter);

/* 
Q2: The modulus operator "%" 
would assist to creat a loop
*/

const lenOfAlp = latinAlp.length;

console.log(lenOfAlp);

const indexShift2 = (index + shiftValue) % lenOfAlp;
const encFirstLetter2 = latinAlp[indexShift2];
console.log(encFirstLetter2);

let encMessage = "EUXWXV";
const teaseMessage = encMessage.slice(0, 3);
console.log(teaseMessage);
