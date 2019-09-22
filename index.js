module.exports = Phrase;

//Adds reverse to all strings
String.prototype.reverse = function(){
	return Array.from(this).reverse().join("");
}

//define phrae
function Phrase (content) {
	this.content = content;

	//returns content processed for the plaindrome testing
	this.processedContent = function processedContent() {
		return this.content.toLowerCase();
	}

	//returns true if phrase is a palindrome
	this.palindrome = function palindrome() {
		return this.processedContent() === this.processedContent.reverse();
	}
}

