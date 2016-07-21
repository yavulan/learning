/*
* Spread operator: ...
* expand element of array (or arguments of function)
* */

/*
* 1. Calling a function
* */
function addFourNumbers(a, b, c, d){
    return a + b + c + d;
}

var nums = [2,5,1,1];
var nums_2 = [1,1];

addFourNumbers(...nums); // 9
addFourNumbers(1, ...nums_2, 1); // 4

// Some kind of analogue in es5
addFourNumbers.apply(null, nums); // 9
addFourNumbers.apply(null, [1].concat(nums_2, 1)); // 4

/*
* 2. Creating an array
* */
var a = [1, 2, 3];
var b = [0, ...a, 4]; // [0, 1, 2, 3, 4]

// Some kind of analogue in es5
var d = [0].concat(a, 4); // [0, 1, 2, 3, 4]
