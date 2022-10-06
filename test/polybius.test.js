// Write your tests here!
const polybius = require('../src/polybius.js');
const expect = require("chai").expect

describe("polybuis()", () => {
    it("both letters I and J to share a space, be converted to 42 and decoded to their own letters properly.", () => {
        // testing code goes here 
        const input = "ij"
        const actual = polybius(input, encode = true);
        const expected = 4242; 
        expect(actual).to.equal(expected);
    });
    it("(thinkful) should be '4432423352125413'", () => {
        //testing code goes here
        const input = "thinkful";
        const actual = polybius(input);
        const expected = "4432423352125413";
        expect(actual).to.equal(expected);
    });
    it("(Hello world) should be '3251131343 2543241341'", () => {
        //testing code goes here 
        const input = "Hello world";
        const actual = polybius(input);
        const expected = "3251131343 2543241341";
        expect(actual).to.equal(expected);
    });
    it("('3251131343 2543241341', false) should be 'hello world", () => {
        //testing code goes here
        const input = "3251131343 2543241341";
        const actual = polybius(input, false);
        const expected = "hello world";
        expect(actual).to.equal(expected);
    });
    it("('44324233521254134', false) should be false.", () => {
        //testing code goes here 
        const input = "44324233521254134";
        const actual = polybius(input, false);
        expect(actual).to.be.false;
    })
}) 
