// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'String', null];

function reverseAnyArray( array ){
    if( Array.isArray(array) ){
        for( let i = 0, len = array.length - 1; i < len / 2; i++ ){
            [array[i], array[len-i]] = [array[len-i], array[i]];
        }

        return array;
    }
}

function reverseNumbersArray( array ){
    if( Array.isArray(array) ){
        for( let i = 0, len = array.length - 1; i < len / 2; i++ ){
            array[i] = array[len-i] + ( array[len-i] = array[i], 0 ); // Comma expression, bad practice!

        //    or
        //    array[i] = array[i] ^ array[len-i];
        //    array[len-i] = array[i] ^ array[len-i];
        //    array[i] = array[i] ^ array[len-i];
        }

        return array;
    }
}

