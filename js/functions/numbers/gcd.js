/**
 * Given two numbers returns
 * the greatest common divisor
 * @param a {Number}
 * @param b {Number}
 * @returns {Number}
 */
function gcd ( a, b ) {
    if( !b ) return a;
    return gcd( b, a % b );
}

// The same simplified and in ES6
const gcd = ( a, b ) => b ? gcd( b, a % b ) : a;

// Iterative approach
function gcd( a, b ){
    a = Math.abs( a );
    b = Math.abs( b );

    if( b > a ) {
        [ a, b ] = [ b, a ];
    }

    while( 1 ){
        if( b === 0 ) return a;
        a %= b;
        if( a === 0 ) return b;
        b %= a;
    }
}

