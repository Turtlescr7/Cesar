//This was anoying to do...
const alphabet = "abcdefghijklmnopqrstuvwxyz";

/* Parameters:
   message: The message to be encrypted
   shiftValue: The number of positions to shift the letters
   Returns: The encrypted message
 */
function encrypt(message, shiftValue) {
  let encryptedMessage = "";
  let counter = 0; // Counter to track every two characters for random letter insertion

  for (let i = 0; i < message.length; i++) {
    const currentLetter = message[i];

    //Insert a random letter after every two characters
    if (counter === 2) {
      const randomInt = Math.floor(Math.random() * alphabet.length);
      const randomLetter = alphabet[randomInt];
      encryptedMessage += randomLetter;
      counter = 0;
    }

    /* If the current letter is not in the alphabet
     add it to the encrypted message as is */
    if (!alphabet.includes(currentLetter.toLowerCase())) {
      encryptedMessage += currentLetter;
    } else {
      /* Shift the letter based on the shift value and add 
       it to the encrypted message */
      const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
      const newIndex = (currentIndex + shiftValue) % alphabet.length;
      encryptedMessage += alphabet[newIndex];
    }

    counter++;
  }

  return encryptedMessage;
}

/* Parameters:
 encryptedMessage: The encrypted message to be decrypted
 shiftValue: The number of positions used to shift the letters during encryption
 Returns: The decrypted message
 */
function decrypt(encryptedMessage, shiftValue) {
  let decryptedMessage = "";

  for (let i = 0; i < encryptedMessage.length; i++) {
    const currentLetter = encryptedMessage[i];

    /*If the current letter is not in the alphabet
     add it to the decrypted message as is*/
    if (!alphabet.includes(currentLetter.toLowerCase())) {
      decryptedMessage += currentLetter;
    } else {
      /*Check if the current letter is a random letter (every third character) */
      if ((i + 1) % 3 !== 0) {
        const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
        const newIndex =
          (((currentIndex - shiftValue) % alphabet.length) + alphabet.length) %
          alphabet.length;
        decryptedMessage += alphabet[newIndex];
      }
    }
  }

  return decryptedMessage;
}

/*Test the encryption and decryption functions with a sample message */
const testMessage =
  "Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.";
const decryptedMessage = decrypt(testMessage, 42);
console.log(decryptedMessage);
