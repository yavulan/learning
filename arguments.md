### Arguments
An Array-like object corresponding to the arguments passed to a function.

#### Converting arguments to array
```javascript
Array.prototype.slice.call( arguments );
[...arguments];
Array.from( arguments );
```

Using slice on arguments prevents optimizations in [some JavaScript engines (V8)?](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments). If you care for them, try constructing a new array using the despised Array constructor as a function:
```javascript
let args = ( arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments) );
```

#### Properties
##### length
Contains the number of arguments passed to the function.

##### callee
Contains the currently executing function.

ECMAScript 5 (ES5) forbids use of arguments.callee() in strict mode. Avoid using arguments.callee() by either giving function expressions a name or use a function declaration where a function must call itself.

##### arguments[@@iterator]
The initial value of the @@iterator property is the same function object as the initial value of the Array.prototype.values property.

```javascript
// arguments[Symbol.iterator]()
function f() {
    for ( let arg of arguments ) {
        console.log( arg );
    }
}

f( 1, 2 ); // 1 // 2
```
