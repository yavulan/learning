# String
## Special symbols
| Character | Meaning            |
|-----------|--------------------|
| \0        | the NULL character |
| \'        | '                  |
| \"        | "                  |
| \\        | \                  |
| \n        | new line           |
| \r        | carriage return    |
| \v        | vertical tab       |
| \t        | horizontal tab     |
| \b        | backspace          |
| \f        | form feed          |
| \uXXXX    | unicode codepoint  |
| \u{X}     | unicode codepoint  |
| \xXX      | Latin-1 character  |

## Creation
1. String primitives
  ```javascript
  let str1 = 'text';
  typeof str1; // "string"

  let str2 = "text";
  typeof str2; // "string"

  str1 === str2; // true, there is no difference between quotes

  let str3 = String( 'text' );
  typeof str3; // "string"
  
  String.fromCharCode( 65, 66, 67 ); // "ABC"
  String.fromCodePoint( 0x039, 48 ); // "90"
  
  let ch = 'a';
  String.raw`${ch} b c`; // "a b c"
  ```
2. String objects

  ```javascript
   typeof new String( 'text' ); // "object"
  ```

## Immutability
Strings are immutable (as well as other primitive types), so they do not have mutator methods and cannot be changed.
```javascript
let str = 'ab';

str[0] = 'b'; // str === 'ab'
str.prop = 'some value'; // str.prop === undefined
str.length = 1; // str.length === 2
```

## Character access
```javascript
let str = 'abcdefg';
str.charAt() === str.charAt( 0 ) === str[0] === 'a';
str.charAt( 3 ) === str[3] === 'd';
```

## Properties

### String.fromCharCode()
Returns a string created by using the specified sequence of Unicode values.
```javascript
// String.fromCharCode( num1[, ...[, numN]] )
String.fromCharCode( 65, 66, 67 ); // "ABC"
```

### String.fromCodePoint()
Returns a string created by using the specified sequence of code points.
Can be used to return higher code point characters using two (lower value) "surrogate" numbers to form that single character.
```javascript
// String.fromCodePoint( num1[, ...[, numN]] )
String.fromCodePoint( 0x2F804 );  // "\uD87E\uDC04"
String.fromCodePoint( 194564 );   // "\uD87E\uDC04"
```

### String.raw()
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

# String instances

## Properties

### length
Returns the number of 16-bit code units (UTF-16) in the string.

UTF-16 uses two code units for less commonly-used characters, so it's possible that length differ from the actual number of characters in the string.

## Methods

### charAt()
Returns the specified character from a string. Returns empty string if index is out of range (0..str.length-1).
```javascript
// str.charAt( index )
let str = 'abcdefg';
str.charAt() === str.charAt( 0 ) === 'a';
```

### charCodeAt()
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index (or NaN if index is out of range). If you want the entire code point value (e.g. for Unicode code points > 0x10000), use codePointAt().
```javascript
// str.charCodeAt( index )
'Hello'.charCodeAt( 0 ); // 72
```

### codePointAt()
Returns a non-negative integer that is the Unicode code point value (or undefined if there is no element at ${pos}).
```javascript
// str.codePointAt( pos )
'Hello'.codePointAt( 0 ); // 72
'\uD800\uDC00'.codePointAt( 0 ); // 65536
```

### concat()
Combines the text of one or more strings and returns a new string.
Using assignment operators (+, +=) is preferred due to [performance reasons↗](https://jsperf.com/concat-vs-plus-vs-join).
```javascript
// str.concat( string2[, string3, ..., stringN] )
'He'.concat( 'l', 'lo' ); // "Hello"
'He' + 'l' + 'lo'; // "Hello"
```

### includes()
Determines whether one string may be found within another string, returning true or false.
```javascript
// str.includes( searchString[, startSearchFrom] )
'I was thirteen. I herded lambs'.includes( 'lamb', 0 ); // true
```

### endsWith()
Determines whether a string ends with the characters of another string, returning true or false.
```javascript
// str.endsWith(searchString[, stringEndsAt = str.length])
'Beyond the village on the lea.'.endsWith( 'lea.' ); // true
```

### indexOf()
Returns the index of the first occurrence of the specified value, starting the search at ${fromIndex}. Returns -1 if the value is not found.
```javascript
// str.indexOf( searchValue[, fromIndex] )
'The magic of the sun, perhaps,'.indexOf( 'magic' ); // 4
```

### lastIndexOf()
Returns the index of the last occurrence of the specified value, searching backwards from ${fromIndex}. Returns -1 if the value is not found.
```javascript
// str.lastIndexOf( searchValue[, fromIndex = +Infinity] )
'Or what was it affected me?'.lastIndexOf( 'e' ); // 25
```

### localeCompare()
Returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.
More about locales and options [here↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare).
```javascript
// referenceStr.localeCompare( compareString[, locales[, options]] )
'check'.localeCompare('against'); // 1
'a'.localeCompare('d'); // -1
```

### match()
Returns the matches (array or null) when matching a string against a regular expression. The returned Array has an extra input property, which contains the original string that was parsed. In addition, it has an index property, which represents the zero-based index of the match in the string.
```javascript
// str.match( RegExp )
'I felt with joy all overcome,'.match( /\b\w{4}\b/g ); // ["felt", "with"]

let found = 'As though with God....'.match( /o/ ); // ["o"]
found.index; // 5
found.input; // "As though with God...."
```

### normalize()
Returns the Unicode Normalization Form of a given string (if the value isn't a string, it will be converted to one first). Available [${forms}↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize).
```javascript
// str.normalize( form )
let str = '\u1E9B\u0323';
str.normalize() === str.normalize('NFC'); // '\u1E9B\u0323'
str.normalize('NFD'); // '\u017F\u0323\u0307'
str.normalize('NFKC'); // '\u1E69'
str.normalize('NFKD'); // '\u0073\u0323\u0307'
```

### Notes:
```javascript
eval( new String('2+2') ); // "2+2"
eval( String('2+2') ); // 4

eval( new String('2+2').valueOf() ) === eval(String('2+2')) === 4;
```
  