/*
* Arrow function
* =>
* */

// In es5
var func = function(a, b){ return a + b };

// ( parameters ) => { statement/expression }
var func = (a, b) => a + b;

// Only one parameter:
var func = a => a+2;

// Complex statement
var func = (a, b) => {
    if( a > 2 ) b -= a;
    if( b < -4 ) b += a;
    return b;
}

// Parameter to function call
'AAABBB'.replace(/A/g, x => x.toLowerCase());
