# Array
## Array Creating
1. Manual

  ```javascript
  var arr = [];
  ```
2. Using Spread operator

 ```javascript
 [...Array( 2 )]; // [undefined, undefined]
 [...'String']; // ["s", "t", "r", "i", "n", "g"]
 ```
3. Matching RegExp (RegExp.exec, String.match, and String.replace)

 ```javascript
 ( 'aa' ).match( /a/g ); // ["a", "a"]
 ```
4. Using Array.from(), Array.of()
5. Using String.split()

## Array.length
Equals to ( highest index + 1 )
```javascript
[1, 2, 3].length; // 3
[1, 2, 3].length = 2; // [1, 2]
[1, 2, 3].length = 4; // [1, 2, 3, undefined]; length === 4
```

## Array iteration
Fastest method is for loop with length caching.
```javascript
let arr = [1, 2, 3, 4, 5];
for (let i = 0, l = arr.length; i < l; i++) {
	console.log( arr[i] );
}
```

## Mutator methods

### copyWithin()
High-performance method to shift the data of an Array or TypedArray
```javascript
// arr.copyWithin( whereToPut[, fromStart[, fromEnd]] )
[1, 2, 3, 4, 5].copyWithin( 1 ); // [1, 1, 2, 3, 4]
[1, 2, 3, 4, 5].copyWithin( 0, 2 ); // [3, 4, 5, 4, 5]
[1, 2, 3, 4, 5].copyWithin( 0, 2, 3 ); // [3, 2, 3, 4, 5]
[1, 2, 3, 4, 5].copyWithin( -1, -2 ); // [1, 2, 3, 4, 4]

[1, 2, 3, 4, 5].copyWithin( 0, 2, 1 ); // [1, 2, 3, 4, 5]
[1, 2, 3, 4, 5].copyWithin( 0, 6 ); // [1, 2, 3, 4, 5]
```

### fill()
Fills all the elements of an array from a start index to an end index with a static value.
```javascript
// arr.fill( value[, start = 0[, end = this.length]] )
[...Array( 3 )].fill( 2 ); // [2, 2, 2]
[1, 2, 3, 4].fill( ':)', 1, 3 ); // [1, ":)", ":)", 4]
```

### pop()
Removes the last element from an array and returns that element (undefined if the array is empty)
```javascript
[1, 2, 3].pop(); // 3, array reduced to [1, 2]
[].pop(); // undefined
```

### push()
Adds one or more elements to Array. Start inserting from array[array.length].
Returns the new length of the array.

*If length isNaN, 0 is used as starting point. If length nonexistent, length will be created.*

```javascript
// arr.push( element1, ..., elementN )
[1, 2, 3].push( 4, 5 ); // 5; array: [1, 2, 3, 4, 5]
['s'].push( ...'tring' ); // 6; array: ["s", "t", "r", "i", "n", "g"]

var arr = [1];
arr.length = 2;
arr.push( 2 ); // 3; arr: [1, undefined, 2]

// Works on objects
var obj = {};
[].push.call( obj, {works: 'wow'} ); // 1; obj: Object {0: Object, length: 1}

// When dealing with big data, direct assignment of the array elements is faster than .push()
// WARNING! Running this in a console take time, u may want to decrease array length

// slower
console.time( 'slowerArray' );
	var arrSlower = [];
	for ( var i = 0; i < 1e+8; i++ ) arrSlower.push( i );
console.timeEnd( 'slowerArray' );

// faster
console.time( 'fasterArray' );
	var arrFaster = [];
	for ( var i = 0; i < 1e+8; i++ ) arrFaster[i] = i;
console.timeEnd( 'fasterArray' );
```

### reverse()
Reverses an array in place and return reversed array.
```javascript
[1, 2, 3].reverse() // [3, 2, 1]
```

### shift()
Removes the first element and shifts the values at consecutive indexes down, then returns the removed value (if the length is 0, undefined is returned).
Changes the length of the array.
```javascript
[1, 2, 3].shift(); // 1; array: [2, 3]
[].shift(); // undefined
[...Array( 3 )].fill( 1, 1 ).shift() // undefined; array: [1, 1]
```

### unshift()
Adds one or more elements to Array. Start inserting from array[0].
Returns the new length of the array.
```javascript
// arr.unshift( element1, ..., elementN )
[1, 2, 3].unshift( -1, 0 ); // 5; array: [-1, 0, 1, 2, 3]
['g'].unshift( ...'strin' ); // 6; array: ["s", "t", "r", "i", "n", "g"]

// much more slower than .push()
// slower
console.time( 'unshiftArray' );
	var arrUnshifted = [];
	for ( var i = 0; i < 1e+5; i++ ) arrUnshifted.unshift( i );
console.timeEnd( 'unshiftArray' );

// faster
console.time( 'pushArray' );
	var arrPushed = [];
	for ( var i = 0; i < 1e+5; i++ ) arrPushed.push( i );
console.timeEnd( 'pushArray' );
```

### sort()
Sorts elements in place and returns the array (default order by Unicode code points). The sort is not necessarily [stable?](https://en.wikipedia.org/wiki/Sorting_algorithm#Stability).
```javascript
// arr.sort( [compareFunction] )
compareFunction( a, b ){
	return < 0 ? a[iNew] < b[iNew];
    return === 0 ? a[iNew] = a[iOld], b[iNew] = b[iOld]; // NOT guaranteed by ECMAscript standart!
    return > 0 ? a[iNew] > b[iNew];
}

// Sort numbers
[2, 4, 0, -3, 2].sort( (a, b) => a - b ) // [-3, 0, 2, 2, 4]

// Stable sorting
// General idea: http://blog.vjeux.com/2010/javascript/javascript-sorting-table.html
array.concat() // using array copy to save proper indexes of parent array
	 .sort( function(a, b) {
	    var aConition = 'smthn like a.charCodeAt()';
	    var bCondition = 'smthn like b.charCodeAt()';

	    return ( aConition === bCondition ) ?
        	   array.indexOf( a ) - array.indexOf( b ) :
        	   ( aConition < bCondition ) ? -1 : 1;
     });

// arr.concat().sort( (a, b) => a === b ? arr.indexOf(a) - arr.indexOf(b) : ( a < b ) ? -1 : 1 )

// Reverse array by sorting
arr = arr.concat().sort( (a, b) => ( arr.indexOf(a) < arr.indexOf(b) ) ? 1 : -1 );

// Sort by characters(allowed non-ASCII), ignore case
[...'Калина'].sort( (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()) ); // ["а", "а", "и", "К", "л", "н"]
```

### splice()
Remove existing elements and/or add new elements. Ruturns an array containing the deleted elements (or empty array, if no elements were removed).
```javascript
// array.splice( start = 0, deleteCount = ( this.length - start )[, itemToAdd1[, itemToAdd2[, ...]]] )

[1, 2, 3].splice( 0 ); // [1, 2, 3]; arrray: []
[1, 2, 3].splice( -2, 1 ); // [2]; arrray: [1, 3]
[1, 2, 3].splice( 1, 0, 8 ); // []; arrray: [1, 8, 2, 3]
[].splice( 0, 0, ...'string' ); // []; array: ["s", "t", "r", "i", "n", "g"]

// When iterating with mutating methods, remember to count from array end
for ( var i = array.length - 1; i >= 0; i-- ){
  if ( conition ) arr.splice( i, 1 );
}
```

# Accessor methods

### concat()
Returns a new array comprised of called array joined with the array(s) and/or value(s) provided as arguments.
```javascript
// var newArray = oldArray.concat( value1[, value2[, ...[, valueN]]] )
[1, 2].concat( 3, [4, 5] ); // [1, 2, 3, 4, 5]
[].concat(...[[1, 2], [3, 4]]); // [1, 2, 3, 4]

// Array copy for chaining with mutating methods
[1, 2, 3].concat(); // [1, 2, 3]
```

### includes()
Determines whether an array includes a certain element. Returns true or false.
```javascript
// var boolean = array.includes( searchElement[, fromIndex = 0] )
[1, 2, 3].includes( 1 ); // true
[1, 2, 3].includes( 1, -2 ); // false
[...'string'].includes( 't', 1 ); // true
```

### join()
Joins all elements of an array into a string with a separator.
```javascript
// string = array.join( [separator = ','] )
[1, 2, 3].join(); // "1,2,3"
['H', 'e', 'l', 'l', 'o'].join( '' ); // "Hello"

// separator is converted to a string
[1, 3].join( 2 ); // "123"

// Create repetetive patterns
[...Array( 5 )].join( 'abc' ); // "abcabcabcabc"
```

### slice()
Returns a copy of a portion of an array as a new array object.
```javascript
// array.slice( [begin = 0 [, end = array.length ]] )
[1, 2, 3].slice( 1, 2 ); // [2]
[1, 2, 3].slice( -2 ); // [2, 3]

// In case if second argument has to be provided anyway
var arr = [1, 2, 3];
arr.slice( -1, arr.length ); // [3]

// Arguments to array
Array.prototype.slice.call( arguments );

// Array copy for chaining with mutating methods
[1, 2, 3].slice(); // [1, 2, 3]
```

### toString()
Returns string representing elements of the specified array.
Join items with ','. Generic, can be used with any object.

JavaScript calls toString() automatically when an array is to be represented as a text value or when an array is referred to in a string concatenation.

Performance of toString() is not always satisfactory. Alternative is JSON.stringify().
```javascript
[...Array( 3 )].toString(); // ",,"
[1, 2, 3].toString(); // "1,2,3"

'straw'.concat( ['b', 'e', 'r', 'r', 'y'] ) // "strawb,e,r,r,y"
( {cherry : 42} ).toString(); // "[object Object]"
```

### toLocaleString()
Returns string representing elements (converted to Strings using their toLocaleString methods) of the specified array.
Separated by a locale-specific String (such as a comma ',').
```javascript
['today is', new Date].toLocaleString() // "today is,28.07.2016, 14:24:38"
```

### indexOf()
Returns the first index at which a given element can be found in the array, or -1 if it is not present.

Compares ${searchElement} to elements of the Array using strict equality (===).
If the provided ${fromIndex} is negative, the array is still searched from front to back. If the calculated index is less than 0, then the whole array will be searched.
```javascript
// array.indexOf( searchElement[, fromIndex = 0] )
[1, 1, 1].indexOf( 1 ); // 0
[1, 2, 3].indexOf( 1, 1 ); // -1
[1, 2, 3].indexOf( 1, -1 ); // -1

// to boolean
!!~[1, 2, 3].indexOf( 1 ); // true; equals to [1, 2, 3].includes( 1 )
```

### lastIndexOf()
Returns the last index at which a given element can be found in the array, or -1 if it is not present.

The array is searched backwards, starting at ${fromIndex}.
If the provided ${fromIndex} is positive, the array is still searched from back to front. If the calculated index is less than 0, then array will not be searched.
```javascript
// array.lastIndexOf( searchElement[, fromIndex = array.length - 1] )
[1, 1, 1].lastIndexOf( 1 ); // 2
[1, 1, 1].lastIndexOf( 1, 1 ); // 1
[1, 1, 1].lastIndexOf( 1, -4 ); // -1
```

# Iteration methods
If you must mutate the array, copy it into a new array.

The range of elements processed is set before the first invocation of callback.
If the values of existing elements of the array are changed, the value passed to callback will be the value at the time method visits them; elements that are deleted before being visited are not visited.

### forEach()
Executes a provided function once per array element in ascending order. It is not invoked for index properties that have been deleted or are uninitialized. There is no way to stop or break a forEach() loop other than by throwing an exception.

Returns undefined, not chainable.

Using forEach() is controversial due to [performance reasons?](https://jsperf.com/foreach-vs-loop). Alternative is for loop.
```javascript
// array.forEach( ([currentValue[, index[, [array]]]) => {}[, thisArg] )
function Adder() {
  this.sum = 0;
}

Adder.prototype.add = function( array ) {
  array.forEach( val => this.sum += val, this );
}

var obj = new Adder();
obj.add( [1, 2, 3] );
obj.sum; // 6
```

### entries()
Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
```javascript
[1, 2, 3].entries(); // ArrayIterator {}

var eArr = [1, 2, 3].entries();
eArr.next().value; // [0, 1] // [index, value]
eArr.next().value; // [1, 2]

var eArr = ['a', 'b', 'c'].entries();

for (let e of eArr) {
  console.log(e); // [0, "a"]; [1, "b"]; [2, "c"]
}
```

### every()
Tests whether all elements in the array pass the test implemented by the provided function.

Executes until it finds element where callback returns a falsy value and immediately returns false; otherwise, returns true. For an empty array returns true ([why??](https://en.wikipedia.org/wiki/Vacuous_truth#Vacuous_truths_in_mathematics)).
```javascript
// array.every( (currentValue[, index[, [array]]) => {}[, thisArg] )
[1, 2, 3].every( val => val > 0 ); // true
[1, 2, 3].every( val => val > 1 ); // false
```

### some()
Tests whether some element in the array passes the test implemented by the provided function.

Executes until it finds element where callback returns a truthy value and immediately returns true; otherwise, returns false.
```javascript
// array.some( (currentValue[, index[, [array]]) => {}[, thisArg] )
[1, 2, 3].some( val => val === 1 ); // true
[1, 2, 3].some( val => val <= 1 ); // true
```

### filter()
Return a new array with all elements that pass the test implemented by the provided function (includes all the values for which callback returns a truthy value).

Very slow with big data.
```javascript
// array.filter( (currentValue[, index[, [array]]) => {}[, thisArg] )
[1, 2, 3].filter( val => val > 1 ); // [2, 3]

// how many 1 in arr?
[1, 2, 1, 1, 2].filter( val => val == 1 ).length; // 3
```

### find()
Returns element, if it satisfies the provided testing function.

Method executes the callback once for each element until it finds one where callback returns a true value. If such an element is found, find immediately returns that element, otherwise undefined.
```javascript
// array.find( (currentElement[, index[, [array]]) => {}[, thisArg] )
[1, 2, 3].find( val => val === 2 ); // 2 // Not too much sense for now, yeah?
[1, 2, 3].find( val => val % 3 === 0 ); // 3

var arr = [{name: 'bread', qnt: 4}, {name: 'water', qnt: 12}];
arr.find( val => val.name === 'bread'); // Object {name: "bread", qnt: 4}
```

### findIndex()
Returns index of an element, if it satisfies the provided testing function.

Method executes the callback once for each element until it finds one where callback returns a true value. If such an element is found, find immediately returns index of  that element, otherwise -1.

Callback is called even for indexes of entries not present in the array (sparse).
```javascript
// array.findIndex( (currentElement[, index[, [array]]) => {}[, thisArg] )
[1, 2, 3].findIndex( val => val === 2 ); // 1
[1, 2, 3].findIndex( val => val % 3 === 0 ); // 2

var arr = [{name: 'bread', qnt: 4}, {name: 'water', qnt: 12}];
arr.findIndex( val => val.name === 'bread'); // 0
```

### keys()
Returns a new Array Iterator that contains the keys for each index (including sparses) in the array.

```javascript
[1, 2, 3].keys(); // ArrayIterator {}
[...[1, 2, 3].keys()]; // [0, 1, 2]
[...[1, , , ].keys()]; // [0, 1, 2]

var iterator = [0].keys();
iterator.next(); // Object {value: 0, done: false}
iterator.next(); // Object {value: undefined, done: true}
```

### map()
Creates and returns new array with the results of calling a provided function on every element in this array.

Callback is invoked only for indexes of the array which have assigned values, including undefined. It is not called for missing elements of the array.
```javascript
// array.map( (currentValue[, index[, [array]]) => {}[, thisArg] )
[1, 4, 9].map( Math.sqrt ); // [1, 2, 3]
[1, 2, 3].map( val => val * 42 ); // [42, 84, 126]

[...Array(3)].map( (_, i) => i ); // [0, 1, 2]

// reverse an array
[1, 2, 3].map( (_, i, arr) => arr[arr.length-1-i]); // [3, 2, 1]

[{name: 'John'}, {name: 'Alise'}].map( obj => (obj.name += ' Doe', obj) ); // [{name: 'John Doe'}, {name: 'Alise Doe'}]
```

### reduce()
Applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.

First call: if ${initialValue} is provided, then ${prevValOrInitial} will be equal to ${initialValue} and ${currVal} will be equal to the first value in the array. If no ${initialValue} was provided, then ${prevValOrInitial} will be equal to the first value in the array and ${currVal} will be equal to the second.

If ${initialValue} isn't provided, reduce will execute the callback function starting at index 1, otherwise at 0.
```javascript
// array.reduce( (prevValOrInitial[, currVal[, index[, [array]]]) => {}[, initialValue] )
[1, 2, 3].reduce( (a, b) => a + b ); // 6

[1, 2, 3].reduce( (ret, x) => {
	if( x % 2 ) ret.push( x );
	return ret;
}, [] ); // [1, 3]
```

### reduceRight()
Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

First call: if ${initialValue} is provided, then ${prevValOrInitial} will be equal to ${initialValue} and ${currVal} will be equal to the last value in the array. If no ${initialValue} was provided, then ${prevValOrInitial} will be equal to the last value in the array and ${currVal} will be equal to the second-to-last value.

If ${initialValue} isn't provided, reduce will execute the callback function starting at index ${array.length-2}, otherwise at ${array.length-1}.
```javascript
// array.reduceRight( (prevValOrInitial[, currVal[, index[, [array]]]) => {}[, initialValue] )
[1, 2, 3].reduceRight( (a, b) => a + b ); // 6
```

### values()
Returns a new Array Iterator object that contains the values for each index in the array.
```javascript
var iterator = [1, 2].values();
iterator.next(); // Object {value: 1, done: false}

// or
var iterator = [1, 2, 3].values();
for ( let val of iterator ) {
  console.log( val ); // 1 // 2 // 3
}
```

### \[@@iterator\]()
The initial value of the @@iterator property is the same function object as the initial value of the values() property.
