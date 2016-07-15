// 01. To Boolean
// Falsy values (converts to false):
// 0, '', "", false, NaN, null, undefined (including "void 0" as undefined),
var u;
var toBooleans = [
    !!null, // => false
    !!u, // 'u' is undefined => false
    !!0, // => false
    !!42, // => true
    !!'', // => false
    !!'anything in here', // => true
    !!void 0 // => false
];

//consoleArray( toBooleans );

// 02. To Null
var n = null;

// 03. To Undefined
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void
u = undefined; // not recommended, undefined is not a reserved word
u = void 0;

// 04. To Number
var toNumbers = [
    +true, // => 1
    +false, // => +0
    +null, // => 0
    +u, // undefined converts to => NaN
    +'42', // => 42
    +'   \n\r 93  ', // strips spaces and newlines => 93
    +'3 apples' // => NaN
];

//consoleArray( toNumbers );

// 05. To String
var toStrings = [
    true + '', // => 'true'
    null + '', // => 'null'
    u + '', // => 'undefined'
    42 + '' // => '42'
];

//consoleArray( toStrings );

// 06. Other conversions
var toOthers = [
    !!'0', // => 'true'
    !!+'0', // => 'false'
    !!+'ten' // => 'false'
];

//consoleArray( toOthers );

function consoleArray ( array ){
    for( var i = 0; i < array.length; i++ ){
        console.log( array[i] );
    }
}