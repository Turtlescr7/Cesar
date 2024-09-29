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

const emblemClub1 = "Eagle";
const emblemClub2 = "Laurel";
const emblemClub3 = 7;
let partyLoc = "";

if (emblemClub1 === "Eagle") {
  partyLoc = "Forum";
} else if (emblemClub1 === "Lion") {
  partyLoc = "Colosseum";
} else {
  partyLoc = "Villa";
}

if (emblemClub2 === "Laurel" && partyLoc === "Forum") {
  partyLoc += " Augustus";
} else if (emblemClub2 === "Grapes" || partyLoc === "Villa") {
  partyLoc += " Of Pompey";
}

switch (emblemClub3) {
  case 7:
    location += " North";
    break;
  case 3:
    location += " South";
    break;
  case 9:
    location += " East";
    break;
  case 4:
    location += " West";
    break;
}

/*Question: is esentiall to know  how to use == and === since they are
a form to understand how equality is determined Ex:
1 == "1" is true because "1" is converted to a number
where 
1 === "1" is false because they are of different type
*/
