const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

/*find the index letter in the alphabet then calculates the new index after shift
returns the encrypted letter*/
function encryptLetter(letter, shiftValue) {
  const index = alphabet.indexOf(letter.toLowerCase());
  const newIndex = (index + shiftValue) % alphabet.length;
  return alphabet[newIndex];
}
/*iterates over each letter in the word then encrypts the letter and adds
it to the encrypted word*/
function encryptMessage(word, shiftValue) {
  let encryptedWord = "";

  for (let i = 0; i < word.length; i++) {
    encryptedWord += encryptLetter(word[i], shiftValue);
  }
  return encryptedWord;
}
/*finds the index of the encrypted letter in the alphabet then calculates 
the new index after shifting (accounting for negative values) then 
returns the decrypted letter*/
function decryptLetter(encryptLetter, shiftValue) {
  const index = alphabet.indexOf(encryptLetter.toLowerCase());
  const newIndex = index - shiftValue + alphabet.length + alphabet.length;
  return alphabet[newIndex];
}

/*iterates over each letter in the encrypted word then decrypts the letter and 
adds it to the decrypted word and returns it*/
function decryptMessage(encryptedWord, shiftValue) {
  let decryptedWord = "";
  for (let i = 0; i < encryptedWord.length; i++) {
    decryptedWord += decryptLetter(encryptedWord[i], shiftValue);
  }
  return decryptedWord;
}

// Encrypt the friend's name
// Outputs: euxwxv
const encryptedFriend = encryptMessage(friend, shiftValue);
console.log("Encrypted friend's name:", encryptedFriend);

// Question: yes, because the funciton is the opposite of the encryption function
