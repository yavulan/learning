var text = 'hello';

var shiftAndPushText = text.slice(-1) + text.slice(0, -1); // ohell
var reversedText = text.split('').reverse().join(''); // olleh
var capitalizedText = text[0].toUpperCase() + text.slice(1); // Hello
var capitalizedLast = text.slice(0,-1) + text.slice(-1).toUpperCase(); // hellO

console.log(shiftAndPushText, reversedText, capitalizedText, capitalizedLast);