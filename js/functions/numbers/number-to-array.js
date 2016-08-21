function numberToArray( number ) {
    let result = [];

    while ( number ) {
        result.unshift( number % 10 );
        number = Math.floor( number / 10 );
    }
    return result;
}