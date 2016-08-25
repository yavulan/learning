### RegExp
#### Constructor
```javascript
// /pattern/flags
let re1 = /abc/i;
re1.test( 'aBcd' ); // true

// new RegExp( pattern[, flags] )
let re2 = new RegExp( 'a', 'g' );
'aaa'.match( re2 ); // ["a", "a", "a"]
```

#### Flags
| Flag | Description                                                                                                                                                                    |
|------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| g    | global match                                                                                                                                                                   |
| i    | ignore case                                                                                                                                                                    |
| m    | multiline: treat beginning (^) and end ($) characters as working over multiple lines                                                                                           |
| u    | unicode: treat pattern as a sequence of unicode code points                                                                                                                    |
| y    | sticky: matches only from the index indicated by the lastIndex property of this regular expression in the target string (and does not attempt to match from any later indexes) |


#### Characters meaning
| Character | Meaning                                                                                                       |
|-----------|---------------------------------------------------------------------------------------------------------------|
|  .        | any single character except line terminators: [^\n\r\u2028\u2029]                                             |
| \d        | [0-9]                                                                                                         |
| \D        | [^0-9]                                                                                                        |
| \w        | [A-Za-z0-9_]                                                                                                  |
| \W        | [^A-Za-z0-9_]                                                                                                 |
| \s        | [ \f\n\r\t\v\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]                              |
| \S        | [^ \f\n\r\t\v\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]                             |
| [\b]      | backspace                                                                                                     |
| \cX       | control character in a string, where X is a letter from A-Z. For example, /\cM/ matches control-M in a string |
| \         | toggle next character treating between special/literal                                                        |
| [^]       | any character that is not in the empty set of characters (including newlines)                                 |

#### Characters sets
```javascript
/[abcd]/ is identical to /[a-d]/ // but not equal ('===') due it's an object
/[^abc]/ is identical to /[^a-c]/ // matches negated or complemented character set
```

#### Alternation
```javascript
// x|y
/a|b/.exec( 'ac' ); // ["a"]
/a|b/.exec( 'bc' ); // ["b"]
```

#### Boundaries
| Character | Meaning                                                                                                                                                                                          |
|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ^         | beginning of input. If the multiline flag is set to true, also matches immediately after a line break character                                                                                  |
| $         | end of input. If the multiline flag is set to true, also matches immediately before a line break character                                                                                       |
| \b        | word boundary: position where a word character is not followed or preceeded by another word-character, such as between a letter and a space. Matched word boundary is not included in the match. |
| \B        | non-word boundary: position where the previous and next character are of the same type: Either both must be words, or both must be non-words. Such as between two letters or between two spaces. |

### Properties

#### RegExp.length
```javascript
RegExp.length; // 2
```

#### RegExp[@@species]
Returns the RegExp constructor.
```javascript
// RegExp[Symbol.species]
RegExp[Symbol.species]; // function RegExp() { [native code] }
```

#### lastIndex
Read/write integer property of RegExp instances for the index at which to start the next match. Sets and updates automatically if the RegExp instance use the 'g' flag.
```javascript
// regExpObj.lastIndex
let re = /a/g;
re.exec( 'aba' ); // ["a"]
re.lastIndex; // 1

re.exec( 'aba' ); // ["a"]
re.lastIndex; // 3

re.exec( 'aba' ); // null
re.lastIndex; // 0
```

##### Loop over matches
Works because of automatic updates of lastIndex property.
```javascript
let str = 'a1b2c33';
let re = /\d+/g;
let match;
while ( match = re.exec(str) ) {
	console.log( match[0], "at", match.index ); //  1 at 1; 2 at 3; 33 at 5
}
```

### Prototype properties

#### flags
Returns a string consisting of the flags of the current RegExp.
```javascript
/ /ig.flags;   // "gi"
/ /myu.flags;  // "muy"
```

#### global
Indicates whether or not the "g" flag is used with the RegExp.
```javascript
/foo/g.global; // true
/bar/.global; // false
```

#### ignoreCase
Indicates whether or not the "i" flag is used with the RegExp.
```javascript
/foo/i.ignoreCase; // true
/bar/.ignoreCase; // false
```

#### multiline
Indicates whether or not the "i" flag is used with the RegExp.
```javascript
/foo/m.multiline; // true
/bar/.multiline; // false
```

#### source
Returns a String containing the source text of the regexp, and it doesn't contain the two forward slashes on both sides and any flags.
```javascript
/foo/gmu.source; // "foo"

// starting from ECMAScript 5
new RegExp().source; // "(?:)"

new RegExp( '\n' ).source === "\n";  // prior to ES5
new RegExp( '\n' ).source === "\\n"; // starting with ES5
```

#### sticky
Indicates whether or not the "y" flag is used with the RegExp.
```javascript
/foo/y.sticky; // true
/bar/.sticky; // false
```

#### unicode
Indicates whether or not the "u" flag is used with the RegExp.
```javascript
/\u{61}/u.unicode; // true
/bar/.unicode; // false
```
