var arr = [1,1,1,1,1,2,2];

arr.filter( function(val, i, arr){
    return arr.indexOf(val) == i;
});

// [1,2]