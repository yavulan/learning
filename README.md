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
 [...Array(2)] // [undefined, undefined]
 [...'String'] // ["s", "t", "r", "i", "n", "g"]
 ```
3. Matching RegExp (RegExp.exec, String.match, and String.replace)

 ```javascript
 ( 'aa' ).match( /a/g ) // ["a", "a"]
 ```
4. Using Array.from(), Array.of()

#### Array.length
Equals to highest index + 1
```javascript
[1, 2, 3].length = 2 // [1, 2]
[1, 2, 3].length = 4 // [1, 2, 3]; length === 4
```
