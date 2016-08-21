function arrayMode( sequence ) {
    let map = {}, maxCount = 1, maxEl = sequence[0];

    for( let i = 0; i < sequence.length; i++ ){
        map[sequence[i]] || (map[sequence[i]] = 0);
        map[sequence[i]]++;

        if( map[sequence[i]] > maxCount ) {
            maxCount =  map[sequence[i]];
            maxEl = sequence[i];
        }
    }
    return maxEl;
}
