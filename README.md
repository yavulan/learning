# Javascript Built-in objects
Source: [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

* [Value properties](#Value_properties)
  * Infinity
  * NaN
  * undefined
  * null
* [Function properties]()
  * eval()
  * isFinite()
  * isNaN()
  * parseFloat()
  * parseInt()
  * URI:
    * decodeURI()
    * decodeURIComponent()
    * encodeURI()
    * encodeURIComponent()
* [Fundamental Objects]()
  * Object
  * Function
  * Boolean
  * Symbol
  * [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
* [Numbers and Dates]() 
  * Numbers
  * Math
  * Date
* [Text processing]()
  * String
  * RegExp
* [Indexed collections](#Indexed_collections)
  * [Array](#array)
  * [Typed Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)
* [Keyed collections]()
  * Map
  * Set
  * WeakMap
  * WeakSet
* [Vector Collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD) 
* [Structured data]()
  * ArrayBuffer
  * DataView
  * JSON
* [Control abstraction Objects]()
  * Promise
  * Generator
  * GeneratorFunction
* [Reflexion]()
  * Reflect
  * Proxy
* [Internationalization](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
* [Arguments]()


## Indexed collections<a name="Indexed_collections"></a>

### Array
#### Array Creating
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

#### Array.length
Equals to ( highest index + 1 )
```javascript
[1, 2, 3].length; // 3
[1, 2, 3].length = 2; // [1, 2]
[1, 2, 3].length = 4; // [1, 2, 3]; length === 4
```

#### Mutator methods

##### copyWithin()
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

##### fill()
Fills all the elements of an array from a start index to an end index with a static value.
```javascript
// arr.fill( value[, start = 0[, end = this.length]] )
[...Array( 3 )].fill( 2 ); // [2, 2, 2]
[1, 2, 3, 4].fill( ':)', 1, 3 ); // [1, ":)", ":)", 4]
```

##### pop()
Removes the last element from an array and returns that element (undefined if the array is empty)
```javascript
[1, 2, 3].pop(); // 3, array reduced to [1, 2]
[].pop(); // undefined
```

##### push()
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
```

##### reverse()
Reverses an array in place and return reversed array.
```javascript
[1, 2, 3].reverse() // [3, 2, 1]
```

##### shift()
Removes the first element and shifts the values at consecutive indexes down, then returns the removed value (if the length is 0, undefined is returned).
Changes the length of the array.
```javascript
[1, 2, 3].shift(); // 1; array: [2, 3]
[].shift(); // undefined
[...Array( 3 )].fill( 1, 1 ).shift() // undefined; array: [1, 1]
```

##### unshift()
Adds one or more elements to Array. Start inserting from array[0].
Returns the new length of the array.
```javascript
// arr.unshift( element1, ..., elementN )
[1, 2, 3].unshift( -1, 0 ); // 5; array: [-1, 0, 1, 2, 3]
['g'].unshift( ...'strin' ); // 6; array: ["s", "t", "r", "i", "n", "g"]
```

##### sort()
Sorts elements in place and returns the array (default order by Unicode code points). The sort is not necessarily [stable](https://en.wikipedia.org/wiki/Sorting_algorithm#Stability). 
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
     
// Reverse array by sorting
arr = arr.concat().sort( (a, b) => ( arr.indexOf(a) < arr.indexOf(b) ) ? 1 : -1 );
     
// Sort by characters(allowed non-ASCII), ignore case
[...'Калина'].sort( (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()) ); // ["а", "а", "и", "К", "л", "н"]
```

##### splice() 
Remove existing elements and/or add new elements. Ruturns an array containing the deleted elements (or empty array, if no elements were removed). 
```javascript
// array.splice( start = 0, deleteCount = ( this.length - start )[, itemToAdd1[, itemToAdd2[, ...]]] )

[1, 2, 3].splice( 0 ); // [1, 2, 3]; arrray: []
[1, 2, 3].splice( -2, 1 ); // [2]; arrray: [1, 3]
[1, 2, 3].splice( 1, 0, 8 ); // []; arrray: [1, 8, 2, 3]
[].splice( 0, 0, ...'string' ); // []; array: ["s", "t", "r", "i", "n", "g"]
```
