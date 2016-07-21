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

/*
* 3. Destructing
* */
var [a, b] = [1, 2]; // a = 1; b = 2
// Elision lets you use the syntax of Array “holes” to skip elements during destructuring:
var [,, x, y] = ['a', 'b', 'c', 'd']; // x = 'c'; y = 'd'

// exchange two values
[a, b] = [b, a];

/*
* Rest operator (...) - same syntax
* extract the remaining elements of an Array into an Array.
 * */

var [x, y, ...z] = ['a']; // x='a'; y=undefined; z=[]
var [a, ...b] = [1, 2, 3]; // a = 1; b = [2, 3]

// must be the last argument in the function definition argument list:
function rest(one, ...two){
    return two.map( (val) => val * one);
}

rest(2, 1, 2, 3, 4); // [2, 4, 6, 8]
