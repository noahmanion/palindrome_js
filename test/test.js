let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function () {

	describe("#palindrome", function () {
		it("should return fasle for an non-palindrome", function () {
			let nonPalindrome = new Phrase("apple");
			assert(!nonPalindrome.palindrome());
		});

		it("should return true for a plain palindrome", function () {
			let plainPalindrome = new Phrase("racecar");
			assert(plainPalindrome.palindrome());
		});
	});
});