const caesarModule = (function () {
  // you can add any code you want within this function scope

  // //create an array alphabet which will have all the alphabets in it
  // const alphabet = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";

  // // create the encdoed message variable to return after encoding 
  // const encodedMessage = [];

  function caesar(input, shift, encode = true) {
    // turn the input into lowerCase according to requirements
    const lowercaseInput = input.toLowerCase();
    // instruction requirements 
    if (!shift | (shift === 0) | (shift < -25) | (shift > 25)) {
      return false;
    }
    // this is to ensure you dont have to write two sets of code for encode and decode
    if(!encode) shift *= -1
    // start off by using array methods 
    return lowercaseInput.split('').map((character) => {
      //lowercase letters start off @97 on ASCII table and finish 123
      if(character.charCodeAt(0) < 97) return character
      let num = letter.charCodeAt(0) + shift
      if(num > 123) {
        num = 96 +  (shift - 122)
      }
      return String.fromCharCdode(num)
    }).join('')
    }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
