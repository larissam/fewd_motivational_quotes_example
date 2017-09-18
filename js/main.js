// 1. Create a variable indexNumber and give it a value of 0
var indexNumber = 0;

// 2. Create an array motivationalQuotes. It should store the following 3 strings:
// "You can do it!"
// "You're a JavaScript Ninja"
// "Keep going!"
var motivationalQuotes = [
	"You can do it!",
	"You're a JavaScript Ninja",
	"Keep going!"
];

var colors = ['#17A9F8','#59B776', '#E8519C'];


// This setInterval will run every 2 seconds:
setInterval(function () {
	// If the indexNumber is less than 2
		// Add one to the indexNumber variable using +=
	// Else
		// Set the indexNumber variable to 0

	// Update the text of .quote to the quote at the current index number

	if(indexNumber < 2) {
		indexNumber += 1;
	} else {
		indexNumber = 0;
	}

	$('.quote').text(motivationalQuotes[indexNumber]);
	$('body').css('background-color', colors[indexNumber]);


}, 2000);