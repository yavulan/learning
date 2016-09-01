# ES6

## Declarations
| Declaration | Description                                                                                                                  | Hoisting                                                                                           |
|-------------|------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| var         | declares a variable to execution context (enclosing function or globally)                                                    | hoisted, initialised with undefined untill delcaration is processed                                |
| let         | declares a block scope local variable                                                                                        | hoisted, uninitialised until the declaration is processed (variable is in a "temporal dead zone" ) |
| const       | creates a block scope read-only reference to a value (not immutable, just that the variable identifier cannot be reassigned) | same as let                                                                                        |

**hoisting: declaring a variable anywhere in the code is equivalent to declaring it at the top.*

### Cleaner code in inner functions with ```let```:
```javascript
let arr = [];
for( let i = 0; i < 2; i++ ) {
  arr.push( _ => console.log(i) )
}

arr[0](); // 0
arr[1](); // 1
```

### Errors with ```let``` and ```const```:

1. Redeclaring the same variable within the same function or block scope raises a SyntaxError:

  ```javascript
  let a;
  let a; // Uncaught TypeError: Identifier 'a' has already been declared
  ```
2. Temporal dead zone:

  ```javascript
  const foo = _ => {
    bar; // Uncaught ReferenceError: bar is not defined
    let bar;
  }
  ```

## Arrow function =>
### In ES5:
```javascript
var foo = function( a, b ) {
    return a + b;
};
```

### In ES6:
Arrow function automatically binding *this* (lexical context binding), so be careful.
```javascript
// ( parameters ) => { statement/expression }
const foo = ( a, b ) => a + b;

// Only one parameter:
const bar = a => a + 2;

// Complex statement
const baz = ( a, b ) => {
    if( a > 2 ) b -= a;
    if( b < -4 ) b += a;
    return b;
};

// Default value
const qux = ( a = 2 ) => a + 1;
qux(); // 3
qux( 1 ); // 2

// Parameter to function call
'AAABBB'.replace( /A/g, c => c.toLowerCase() ); // "aaaBBB"

// Unwanted *this* binding
$( '.selector' ).with().jQuery( () => {
	$( this ) // lexical scoping rewrote jQuery *this*
});
```

## Spread operator ...
Expand elements of an array (or arguments of a function).

1. Calling a function

  ```javascript
  const addFourNumbers = ( a, b, c, d ) => a + b + c + d;

  let numbers = [1, 2, 3, 4];
  addFourNumbers( ...numbers ); // 10

  let twoNumbers = [2, 3];
  addFourNumbers( 1, ...twoNumbers, 3 ); // 9

  // Some kind of analogue in ES5
  addFourNumbers.apply( null, numbers ); // 10
  addFourNumbers.apply( null, [].concat(1, twoNumbers, 3) ); // 9
  ```
2. Creating an array

 ```javascript
 let a = [2, 3];
 let b = [1, ...a, 4]; // [1, 2, 3, 4]

 // Some kind of analogue in ES5
 var c = [].concat( 1, a, 4 ); // [1, 2, 3, 4]
 ```

## Destructing
You might want to separate brackets and side variables by a single space to indicate that it's destructing rather than array declaring (e.g. [ a, b ]) [?](https://www.youtube.com/user/learncodeacademy/).
```javascript
let [ a, b ] = [1, 2]; // a = 1; b = 2
let c = [1, 2, 3, 4, 5];
var [ d, e ] = c; // d = 1; e = 2

// Default values
let f, g;
[ f=2, g=3 ] = [0]; // f = 0; g = 3

// Elision lets you use the syntax of Array “holes” to skip elements during destructing:
let [ ,, x, y ] = ['a', 'b', 'c', 'd']; // x = 'c'; y = 'd'

// Exchange two values in one row
[ a, b ] = [ b, a ];

// Function calling
const foo = ([ a, b ]) => a + b;
foo( [1, 2] ); // 3

// Object destructing
let obj = {
    prop1: 'val1',
    prop2: 'val2',
    prop3: 'val3'
};
let { prop1, prop3 } = obj; // prop1 === "val1"; prop3 === "val3";

// Include variables in object
let name = 'Taras Shevchenko';
let obj2 = {
    name,
    ethnicity: 'Ukrainian'
}; // Object {name: "Taras Shevchenko", ethnicity: "Ukrainian"}

// Passing an object to a function
const fullName = ( obj ) => `${obj.firstName} ${obj.lastName}`;
let firstName = 'Taras';
let lastName = 'Shevchenko';
fullName( { firstName, lastName } ); // "Taras Shevchenko"

// More complicated way to pass an object to a function
const repeatStr = ({ chars, n: times, max = 3 }) => {
     if( times > max ) times = max;
     return [...Array( times + 1 )].join( chars );
};
repeatStr( {chars: 'a', n: 6} ); // "aaa"
```

## Rest operator ...
Has the same syntax as Spread operator. Extracts the remaining elements of an Array into an Array.
```javascript
let [x, y, ...z] = ['a']; // x = 'a'; y = undefined; z = []
let [a, ...b] = [1, 2, 3]; // a = 1; b = [2, 3]

// Must be the last argument in the function definition argument list:
const rest = ( one, ...two ) => two.map( val => val * one );
rest( 2, 1, 2, 3, 4 ); // [2, 4, 6, 8]
```

## Classes
Class declarations are not hoisted.
```javascript
class Parent {
  constructor( param ) {
    this._param = param;
  }

  get param() {
    return this._param;
  }

  set param( val ) {
    this._param = val;
  }

  static toString( param ) {
    return new Parent( param ).param + '';
  }
}

class Child extends Parent {
    constructor( param ){
        super( param );
    }
}
```

## Modules
### Export
```javascript
export default {
	// some object in here
}

// functions exporting
export default function(){}
export function foo(){}

// variable declaring in exproting is allowed
export let foo = 1, bar = 2;
```

### Import
```javascript
import someModule from 'someModule';
import { foo, bar as barry } from 'someModule';

// lodash example
import { chunk, forEach } from 'lodash';
```

## [Template strings](String.md#stringraw)