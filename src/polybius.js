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
    //set variable for new input without spaces so the length and interation is correct
    let newInput = input.split(" ").join("");
    //check if length of input is odd or even. If odd return false
    if ((newInput.length % 2) != 0 ) return false
    //interate through input by 2 to get two digit characters
    for (let i = 0; i < newInput.length; i+=2){
      //set variable for each character plus the following
      let currentCharacter = newInput[i];
      let followingCharacter = newInput[i + 1];
      let value = currentCharacter.concat(followingCharacter);
      //if character is a space add it directly to the result
      if (input[i] === " ") {
        result += input[i];
      } 
      if (value in decipher) {
        //if value is in decode array, add value to result
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