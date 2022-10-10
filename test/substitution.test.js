// Write your tests here!
const { expect } = require('chai');
const {substitution} = require("../src/substitution.js");

describe("substitution()", () => {
    it("alphabet parameter must be a string of 26 characeters, otherwise it returns false.", () => {
        // testing code goes here
        const actual = substitution("thiknful", "short");
        expect(actual).to.be.false;
    });
    it("all characters in aphabet parameter are unique, otherwise return false.", () => {
        //testing code goes here
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.be.false;
    });
    it("('You are an exellent spy', 'xoyqmcgrukswaflnthdjpzibev') should be 'elp xhm xf mbymwwmfj dne'", () => {
        //testing code goes here
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'elp xhm xf mbymwwmfj dne';
        expect(actual).to.equal(expected);
    });
    it("('jrufscpw', 'xoyqmcgrukswaflnthdjpzibev', false) should be 'thinkful'", () => {
        //testing code goes here
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        const expected = 'thinkful';
        expect(actual).to.equal(expected);
    });
    it("('y&ii$r&', '$wae&zrdxtfcygvuhbijnokmpl') should be 'message'", () => {
        //testing code goes here
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        const expected = 'message';
        expect(actual).to.equal(expected);
    });
})
