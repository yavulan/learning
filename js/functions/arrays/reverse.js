var numbers = [1,2,3,4,5,6,7,8,9];
var arr = [1,2,3,4,5,6,7,8,9,'String',null];

//console.log( reverseNumbersArray(numbers) );
//console.log( reverseAnyArray(arr) );

function reverseNumbersArray( array ){
    if( Array.isArray(array) ){
        var len = array.length - 1;

        for( var i = 0; i < len/2; i++ ){
            array[i] = array[len-i] + (array[len-i] = array[i], 0);

        //    or
        //    array[i] = array[i] ^ array[len-i];
        //    array[len-i] = array[i] ^ array[len-i];
        //    array[i] = array[i] ^ array[len-i];
        }

        return array;
    }
}

function reverseAnyArray( array ){
    if( Array.isArray(array) ){
        var len = array.length - 1;

        for( var i = 0; i < len/2; i++ ){
            var tmp = array[i];
            array[i] = array[len-i];
            array[len-i] = tmp;
        }

        return array;
    }
}

console.log( reverseArrayByReduce(arr) );

function reverseArrayByReduce ( array ){
    if( Array.isArray(array) ) {
        return array.reduce( function (all, item, index) {
            all.unshift( item );
            return all;
        }, []);
    }
}