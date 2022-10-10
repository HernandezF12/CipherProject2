// Write your tests here!
const {expect} = require('chai');
const {caesar} = require('../src/caesar.js'); 

describe("caesar()", () => {
    //below is the test for is shift is less than -25
    it("if shift is less than -25", () => {
        //testing code goes here 
        const actual = caesar("", -26);
        expect(actual).to.be.false;
    });
    //below is the test for if shift is more than 25
    it("shift is more than 25", () => {
        // testing code goes here
        const actual = caesar("thinkful", 26);
        expect(actual).to.be.false;
    });
    // below is the test for if shift is strictly equal to 0
    it("if shift is 0.", () => {
        //testing code goes here
        const actual = caesar("thinkful", 0);
        expect(actual).to.be.false;
    });
    //below is the test for if shift isnt present
    it("if shift isn't present.", () => {
        //testing code goes here
        const actual = caesar("thinkful");
        expect(actual).to.be.false;
    });
    //below is the test for encoding
    it("('This is a secret message!', 8) should be 'bpqa qa i amkzmb umaaiom!'", () => {
        //testing code goes here 
        const input = "This is a secret message!"; 
        const actual = caesar(input, 8);
        const expected = 'bpqa qa i amkzmb umaaiom!'
        expect(actual).to.equal(expected);
    });
    //below is the test for decoding
    it("'('BPQA qa I amkzmb umaaiom!', 8, false) should be 'this is a secret message!'", () => {
        //testing code goes here
        const input = "BPQA qa I amkzmb umaaiom!";
        const actual = caesar(input, 8, false);
        const expected = 'this is a secret message!';
        expect(actual).to.equal(expected);
    });
    //below is a test to decode provided by qualified
    it("('wklqnixo', 3, false) should be 'thinkful'", () => {
        //testing code goes here 
        const actual = caesar('wklqnixo', 3, false);
        const expected = "thinkful";
        expect(actual).to.equal(expected);
    });
})