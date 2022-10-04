// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  //create an array alphabet which will have all the alphabets in it
  const alphabet = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";

  // create the encdoed message variable to return after encoding 
  const encodedMessage = [];

  /*
   If the shift value isn't present, equal to 0, less than -25,
   or greater than 25, the function should return false.
   Spaces should be maintained throughout,
   as should other nonalphabetic symbols.
   Capital letters can be ignored.
   If a letter is shifted so that it goes "off" the alphabet
   (e.g., a shift of 3 on the letter z), it should wrap around to the front
   of the alphabet (e.g., z becomes c).

*/
  function caesar(input, shift, encode = true) {
    // your solution code here

    // turn the input into lowerCase according to requirements
    const lowercaseInput = input.toLowerCase();

    if (!shift | (shift === 0) | (shift < -25) | (shift > 25)) {
      return false;
    }
    // start with the value of shift 
    if(encode = false) {
      shift = shift * (-1);
    }
    // begin to decipher 
    le
    // create a loop to loop through the array of letters
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = 0; j < lowercaseInput.length; i++) {
        //if statement to identify which letter it is
        if (lowercaseInput[j] === alphabet[i]) {
         // need another if statemenet to ensure that it doesnt
         // go past z in the array 
         //if(inputcharacterindexnumber+ shift > 25) {

         }

        }
        }
      }
    }
    // return encoded message and add spaces inbetween with join(" ")
  //

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
