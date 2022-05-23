/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

*/
function rot13(str) {
    //ASCII codes upper range A-Z
    const codeMin = 64;
    const codeMAx = 90;
    const regex = /^[a-z]+$/i;
    let codeCharacterConverted = 0;
    let cadena = [...str];
    let result = "";
    for (let character of cadena) {
        if (regex.test(character)) {
            let codeSum = character.charCodeAt() + 13
            codeCharacterConverted = (codeSum > codeMAx) ? codeMin + (codeSum - codeMAx) : codeSum;
        } else {
            codeCharacterConverted = character.charCodeAt();
        }
        character = String.fromCharCode(codeCharacterConverted);
        result += character;
    }
    return result;
}

var string = rot13("SERR CVMMN!");
console.log(string);