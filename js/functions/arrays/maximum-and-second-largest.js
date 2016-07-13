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

function consoleArr(){
    for( var i = 0; i < arrs.length; i++ ){
        var res = maximumAndSecondLargest( arrs[i] );
        console.log( 'Maximum is ' + res.maximum + '; second largest is ' + res.secondLargest );
    }
}