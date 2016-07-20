var arr = [32,23,566,21];

// Array.prototype.sort() modifies original array!

// Sorting numbers:
//arr.sort( (a,b) => a-b);
arr.sort( function(a,b){ return a-b; });

// sorting without modifying original array
arr.concat().sort();
arr.slice().sort();
// for array-like objects
Array.prototype.slice.call(arr).sort();

// Stable sorting ( https://en.wikipedia.org/wiki/Sorting_algorithm#Stability )
// http://blog.vjeux.com/2010/javascript/javascript-sorting-table.html

arr = arr.concat().sort( function (a, b) {
    return ( a === b ) ? arr.indexOf(a) - arr.indexOf(b) : ( a < b ) ? -1 : 1;
});

