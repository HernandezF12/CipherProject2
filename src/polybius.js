// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const cipher = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55, [" "]: " "
  };

  // the other will be for decipher
  const decipher = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };

  function polybius(input, encode = true) {
      let result = ""
    input.toLowerCase() //t,e,s,t

   if (encode)
    return input.split("").map((letter) => {
      return cipher[letter]}).join("")

   if (!encode) {
    let newInput = input.split(" ").join("");
    if ((newInput.length % 2) != 0 ) return false
    for (let i = 0; i < newInput.length; i+=2){
      let currentCharacter = newInput[i];
      let followingCharacter = newInput[i + 1];
      let value = currentCharacter.concat(followingCharacter);
      if (input[i] === " ") {
        result += input[i];
      }
      if (value in decipher) {
        result += decipher[value];
      }
    }
  }
return result;
}
return { polybius,
       }
})();

module.exports = { polybius: polybiusModule.polybius };
































// // Please refrain from tampering with the setup code provided here,
// // as the index.html and test files rely on this setup to work properly.
// // Only add code (helper methods, variables, etc.) within the scope
// // of the anonymous function on line 6

// const polybiusModule = (function () {
//   const cipher = {
//     a: 11,
//     b: 21,
//     c: 31,
//     d: 41,
//     e: 51,
//     f: 12,
//     g: 22,
//     h: 32,
//     i: 42,
//     j: 42,
//     k: 52,
//     l: 13,
//     m: 23,
//     n: 33,
//     o: 43,
//     o: 43,
//     p: 53,
//     q: 14,
//     r: 24,
//     s: 34,
//     t: 44,
//     u: 54,
//     v: 15,
//     w: 25,
//     x: 35,
//     y: 45,
//     z: 55, [" "] : " " 
//   };

//   // the other will be for decipher
//   const decipher = {
//     11: "a",
//     21: "b",
//     31: "c",
//     41: "d",
//     51: "e",
//     12: "f",
//     22: "g",
//     32: "h",
//     42: "(i/j)",
//     52: "k",
//     13: "l",
//     23: "m",
//     33: "n",
//     43: "o",
//     53: "p",
//     14: "q",
//     24: "r",
//     34: "s",
//     44: "t",
//     54: "u",
//     15: "v",
//     25: "w",
//     35: "x",
//     45: "y",
//     55: "z",
//   };

//   function polybius(input, encode = true) {
//     let lowerCaseInput = input.toLowerCase(); 
//     //when DECODING return false if input isn't even 
//     if(encode === false) {
//       if (input.split(" ").length % 2 !== 0) {
//         return false;
//       }
//       if(encode === true) {
//         return lowerCaseInput.split("").map((letter) => {
//           return cipher[letter]
//         }).join("")
//       } else {
//         return lowerCaseInput.split("").map((number) => {
//           return decipher[number]
//         }).join("")
//       }
//     }
//   return {
//     polybius,
//   };
// }
// })();

// module.exports = { polybius: polybiusModule.polybius };