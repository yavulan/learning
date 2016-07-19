var arrs = [
    [213,1,2,2,34,5,5,6,32,23],
    [-12,-3,-31,-532,-33],
    [5,5,5,5,5,5],
    [5,1,1,1,1,1]
];

consoleArr();

function maximumAndSecondLargest( array ){
    var max,
        secondLargest;

    if ( Array.isArray(array) ){
        max = secondLargest = -Infinity;

        for( var i = 0; i < array.length; i++ ){
            if( array[i] > max ){
                secondLargest = max;
                max = array[i];
            } else
            if ( array[i] < max && array[i] > secondLargest ){
                secondLargest = array[i];
            }
        }

        secondLargest = (secondLargest === -Infinity) ? void 0 : secondLargest;
    } else {
        // Not an array
    }

    return {
        maximum : max,
        secondLargest : secondLargest
    }
}

function maxAndPremaxByReduce ( array ){
    if( Array.isArray( array ) ){
        return array.reduce( function(res, item, index){
            res.max = ( item > res.max ) ? item + ( res.premax = res.max, 0 ) : res.max;
            res.premax = ( item < res.max && item > res.premax ) ? item : res.premax;

            if( index === array.length-1 ) res.premax = ( res.premax === -Infinity ) ? void 0 : res.premax;

            return res;
        },{max: -Infinity, premax: -Infinity} );
    } else {
        // Not an array
    }
}

function maxAndPremaxBySorting(arr) {
    //arr.sort((a, b) = > b - a);
    arr.sort( function(a,b){
        return b-a;
    });

    return {
        max: arr[0],
        premax: (arr[0] === arr[1]) ? void 0 : arr[1]
    };
}

function consoleArr(){
    for( var i = 0; i < arrs.length; i++ ){
        var res = maximumAndSecondLargest( arrs[i] );
        console.log( 'Maximum is ' + res.maximum + '; second largest is ' + res.secondLargest );
    }
}