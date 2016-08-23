### String
#### Special symbols
```javascript
\0 === the NULL character;
\' === ';
\" === ";
\\ === \;
\n === 'new line';
\r === 'carriage return';
\v === 'vertical tab';
\t === 'horizontal tab';
\b === 'backspace';
\f === 'form feed';
\uXXXX === 'unicode codepoint';
\u{X} === 'unicode codepoint';
\xXX === 'Latin-1 character'
```
#### String Creating
1. String primitives
  ```javascript
  typeof 'text'; // "string"
  typeof "text"; // "string"
  // "text" === 'text', no diff between quotes
  typeof String( 'text' ); // "string"
  
  String.fromCharCode( 65, 66, 67 ); // "ABC"
  String.fromCodePoint( 0x039, 48 ); // "90"
  
  let ch = 'a';
  String.raw`${ch} b c`; // "a b c"
  ```
2. String objects
  ```javascript
   typeof new String( 'text' ); // "object"
  ```

#### Immutability
Strings are immutable, so they do not have mutator methods and cannot be changed.
```javascript
let str = 'ab';

str[0] = 'b'; // str === 'ab'
str.prop = 'some value'; // str.prop === undefined
str.length = 1; // str.length === 2
```

#### Character access
```javascript
let str = 'abcdefg';
str.charAt() === str.charAt( 0 ) === str[0] === 'a';
str.charAt( 3 ) === str[3] === 'd';
```

##### fromCharCode()
Returns a string created by using the specified sequence of Unicode values.
```javascript
// String.fromCharCode( num1[, ...[, numN]] )
String.fromCharCode( 65, 66, 67 ); // "ABC"
```

##### fromCodePoint()
Returns a string created by using the specified sequence of code points.
Can be used to return higher code point characters using two (lower value) "surrogate" numbers to form that single character.
```javascript
// String.fromCodePoint( num1[, ...[, numN]] )
String.fromCodePoint( 0x2F804 );  // "\uD87E\uDC04"
String.fromCodePoint( 194564 );   // "\uD87E\uDC04"
```

##### raw()
Returns raw string form template strings.
Supports: multi-line strings, ${expression}, and tag functions.
```javascript
// String.raw`templateString`
let ch = 'a';
String.raw`${ch} b c`; // "a b c"

// String.raw( callSite, ...substitutions )
// used within tag functions
String.raw( {raw: ['Hello', 'my ', '!']}, ', ', 'friend' ); // "Hello, my friend!"
```

##### Notes:
```javascript
eval( new String('2+2') ); // "2+2"
eval( String('2+2') ); // 4

eval( new String('2+2').valueOf() ) === eval(String('2+2')) === 4;
```
  