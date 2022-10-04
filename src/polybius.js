// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  //you can add any code you want within this function scope

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
    z: 55,
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
  /*
  You are welcome to assume that no additional symbols will be
  included as part of the input. Only spaces and letters will
  be included.

  When encoding, your output should still be a string.
  When decoding, the number of characters in the string excluding
  spaces should be even. Otherwise, return false.

  Spaces should be maintained throughout.

  Capital letters can be ignored.

  The letters I and J share a space. When encoding, both letters
 can be converted to 42, but when decoding, both letters
  should somehow be shown.
*/
  function polybius(input, encode = true) {
    // when DECODING check if input is even if not return false
    if(encode === false) {
      if (input.split(" ").length % 2 == 0) {
        return false;
      }
    // create encode variable to push the return 
    const encodedMessage = [];
    // turn the input into lowercase
    const lowerCaseInput = encode.toLowerCase();
    //below this line will be encoding
    if(encode === true){
      //write code for encoding 
      //loop through each character in the input 
      for(let i = 0; i < input.length; i++) {
        //loop through the encode array
       
        }
        
      
    }

    //Decoding after this line
    //making a change
    //write code for decoding

  }

  return {
    polybius,
  };
}
})();

module.exports = { polybius: polybiusModule.polybius };
