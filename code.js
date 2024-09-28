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

const randoNum = Math.random();
console.log(randoNum);

const lowShifValue = 3;
const highSiftValue = 33;

/*We added a one so that it scales the value from 3-30.99999... .
We also added Math.floor to round to the  nearest interger and stays within
the desired range.
We also multiply so that randoNum scales range expands this range to 
encompass values between 3-33.
*/
const randoShiftValue =
  Math.floor(randoNum * (highSiftValue - lowShifValue + 1)) + lowShifValue;

console.log(randoShiftValue);
