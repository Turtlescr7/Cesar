const friend = "BRUTUS";
const shiftValue = 3;
const latinAlp = "abcdefghijklmnopqrstuvwxyz";

let encryptedName = "";

for (let i = 0; i < friend.length; i++) {
  const currentLetter = friend[i].toLowerCase();
  const currentIndex = latinAlp.indexOf(currentLetter);

  const newIndex = (currentIndex + shiftValue) % latinAlp.length;

  encryptedName += latinAlp[newIndex];
}

console.log(encryptedName);

/*
Q1: Using a loop can simplify code by reducing 
redundancy and eliminating the need for repetitive statements

Q2: The % alphabet.length par of the code ensures that the new index stays
within the bounds of the alphabet, preventing the shift form going beyond 
the last letter
*/