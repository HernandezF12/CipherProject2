// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar"); 

describe("caesar()", () => {
    it("returns false when the value isn't as required.", () => {
        // testing code goes here
    })
    //below is the test for is shift is less than -25
    it("if shift is less than -25", () => {
        //testing code goes here 
        const actual = caesar("", -26);
        expect(actual).to.be.false;
    });
    //below is the test for if shift is more than 25
    it("shift is more than 25", () => {
        // testing code goes here
        const actual = caesar("", 26);
        expect(actual).to.be.false;
    });
    // below is the test for if shift is strictly equal to 0
    it("if shift is 0.", () => {
        //testing code goes here
        const actual = caesar("", 0);
        expect(actual).to.be.false;
    });
    //below is the test for if shift isnt present
    it("if shift isn't present.", () => {
        //testing code goes here
        const actual = caesar("", );
        expect(actual).to.be.false;
    });
})