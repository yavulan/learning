// secondLargest([1, -2, 3]) = 1;
// secondLargest([5, 5, 4]) = 4;

// 1. Passed value not an Array:
// secondLargest("1 2 3") = undefined;

// 2. There is no second largest:
// secondLargest([2, 2, 2]) = undefined;

// 3. Array contain number strings:
// secondLargest([2, '3', 4]) = 3;

// 4. Array contain anything else:
// secondLargest(['-1', 2.01, null, false]) = -1;

function secondLargest( arr ){
    if ( Array.isArray(arr) ){
        return arr.filter( function (val){
                    if( typeof val === 'string' ) return !Number.isNaN( val );
                    return typeof val === 'number';
                })
                .map( (val) => +val )
                .sort( (a,b) => b-a )
                .filter( (val, i, arr) => arr.indexOf(val) == i )
                [1];
    }
}