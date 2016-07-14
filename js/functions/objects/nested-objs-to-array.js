var list = {value: 1, next: {value: 2, next: {value: 3, next: {value: 4, next: null}}}};

//console.log(listToArray(list));

function listToArray( list ) {
    var result = [];

    function inner ( obj ) {
        for ( var prop in obj ){
            var val = obj[prop];
            if( typeof val === 'object' ) inner( val );
            else result.push( val );
        }
        return result;
    }
    return inner( list );
}

function specialListToArray ( list ){
    var result = [];

    for( var node = list; node; node.next ){
        result.push( node.value );
    }

    return result;
}
