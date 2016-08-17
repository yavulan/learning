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
  
##### Notes:
```javascript
eval( new String('2+2') ); // "2+2"
eval( String('2+2') ); // 4

eval( new String('2+2').valueOf() ) === eval(String('2+2')) === 4;
```
  