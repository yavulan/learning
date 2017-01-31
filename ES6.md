# ES6
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Declarations](#declarations)
  - [Cleaner code in inner functions with `let`](#cleaner-code-in-inner-functions-with-let)
  - [Errors with `let` and `const`](#errors-with-let-and-const)
- [Arrow function =>](#arrow-function-)
  - [In ES5](#in-es5)
  - [In ES6](#in-es6)
- [Spread operator ...](#spread-operator-)
- [Destructing](#destructing)
- [Rest operator ...](#rest-operator-)
- [Classes](#classes)
- [Modules](#modules)
  - [Old syntax](#old-syntax)
  - [Export](#export)
  - [Import](#import)
  - [Module loaders](#module-loaders)
- [Template strings](#template-strings)
- [For..of](#forof)
- [Promises↗](#promises%E2%86%97)
  - [Advantages](#advantages)
  - [Performance](#performance)
  - [Methods](#methods)
  - [Other techniques](#other-techniques)
- [Object.assign()](#objectassign)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Declarations
| Declaration | Description                                                                                                                  | Hoisting                                                                                           |
|-------------|------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| var         | declares a variable to execution context (to enclosing function or globally)                                                 | hoisted, initialised with undefined until declaration is processed                                |
| let         | declares a block scope local variable                                                                                        | hoisted, uninitialised until the declaration is processed (variable is in a "temporal dead zone")  |
| const       | creates a block scope read-only reference to a value (not immutable, just that the variable identifier cannot be reassigned) | same as let                                                                                        |

**hoisting: declaring a variable anywhere in the code is equivalent to declaring it at the top.*

### Cleaner code in inner functions with `let`
```javascript
let arr = [];

for( let i = 0; i < 2; i++ ) {
  arr.push( _ => console.log(i) )
}

arr[0](); // 0
arr[1](); // 1
```

### Errors with `let` and `const`

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
### In ES5
```javascript
var foo = function( a, b ) {
    return a + b;
};
```

### In ES6
Arrow function automatically binds *this* (lexical context binding), so be careful.
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

// Unwanted *this* binding example
$( '.selector' ).with().jQuery( () => {
	$( this ) // lexical scoping rewrote jQuery *this*
});
```

## Spread operator ...
Expand elements of an array (or arguments of a function).

1. Calling a function:

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
2. Creating an array:

 ```javascript
 let a = [2, 3];
 let b = [1, ...a, 4]; // [1, 2, 3, 4]

 // Some kind of analogue in ES5
 var c = [].concat( 1, a, 4 ); // [1, 2, 3, 4]
 ```

## Destructing
You might want to separate brackets and side variables by a single space to indicate that it's destructing rather than array declaring (e.g. [ a, b ]) [↗](https://www.youtube.com/user/learncodeacademy/).
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
Helps up to avoid global namespace corruption.
Stored in files. There is exactly one module per file and one file per module.

### Old syntax
```JavaScript
import Model = require("./model"); // not specifying extension
import Todo = Model.Todo;
```

### Export
```JavaScript
export let foo = 1, bar = 2;
export const count = 42;
export function sum(x, y) {
    return x + y;
}

// now, to import required:
import { count, sum } from "lib";
```

#### Default
There can be a `single default export` (anonymous declarations without semicolon at the end).
```JavaScript
export default function () {} // no semicolon!

// importing:
import myFunction from "myFunction";
myFunction();

// the same with classes:
export default class {} // no semicolon!

import MyClass from "MyClass";
let instance = new MyClass();
```

### Import
```JavaScript
import * as lib from "./lib";
import { SomeClass, somethingElse } from "./model";
import { SomeClass as MyClass, somethingElse } from "./model";

// import full script
import "./jQuery";

// lodash example
import { chunk, forEach } from 'lodash';
```

### Module loaders
Used for in-browser support (and NodeJS).
- [system.js](https://github.com/systemjs/systemjs)

## [Template strings](String.md#stringraw)

## For..of
Loop over the elements of any collection that has a [Symbol.iterator] property.
```javascript
for (let variable of iterable) {
  statement;
}
```

## [Promises↗](http://exploringjs.com/es6/ch_promises.html#ch_promises)
Used for asynchronous work, represents a value which may be available now, or in the future, or never.
```JavaScript
new Promise( (resolve, reject) => {} );
```
Passed function named **an executor**. It is called with the arguments ```${resolve}``` and ```${reject}```, which are functions that Promise expect us to call.

Note: executor is called before the Promise constructor even returns the created object.

```JavaScript
function Example() {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve(success.value);
        } else {
            reject(new Error("Error msg"));
        }
        // do other stuff
    });
}

Example().then(returned => {
    console.log(returned);
    // doing stuff with returned value
});
```

### Advantages
It is possible to write a code around a variable even if you don't have a value just yet.

#### Promises compared to callback functions
- No inversion of control
- Cleaner code
- Error handling is easier
- Simple chaining
- Standardized

### Performance
In case of chaining function calls via then(), they are executed sequentially, one at a time:
```JavaScript
func1()
.then(() => func2());
```
In case of calling all of them immediately, they are executed in parallel:
```JavaScript
func1();
func2();
```

### Methods
Promise prototype has methods .then(onFulfilled, onRejected) & .catch(onRejected).

#### Promise.all
Handling more than one Promises at one time:
```JavaScript
Promise.all([
    Example("value1"),
    Example("value2"),
    Example("value3"),
]).then((res) => {
    // returns an array of results
}).catch((error) => {
    // error handling
});
```

### Other techniques
#### Sleep
```JavaScript
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function foo() {
    await sleep(200);
    // other stuff
}
```

## Object.assign()
Copies values of all `enumerable` own properties from objects to a target object.
Returns the target object.
```JavaScript
// Object.assign(target, ...sources)

// create a copy of an object
let driver = {name: "James"};
let driverCopy = Object.assign({}, driver);

// in case of combining same properties - last one is prioritized
let driver1 = {name: "James", age: 42};
let driver2 = {name: "John"};
Object.assign(driver1, driver2); // {name: "John", age: 42}

// just adding some properties
Object.assign(driver1, {destination: "London"}); // {name: "John", age: 42, destination: "London"}
driver1; // Object {name: "John", age: 42, destination: "London"}
```
