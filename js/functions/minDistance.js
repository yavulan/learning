/**
 * given two arrays of locations in Cartesian coordinate system
 * finds the length of a shortest path using lines at Strings as roads :)
 * @param dep {Array} // [0.9, 1]
 * @param dest {Array} // [2, 2.2]
 * @returns {Number} // 2.3
 */
function minDistance( dep, dest ) {
    return minPath( dep[0], dest[0] ) + minPath( dep[1], dest[1] );

    function minPath( from, to ){
        let [fromCeiled, fromFloored] = [Math.ceil( from ), Math.floor( from )];

        return Math.min(
            fromCeiled - from + Math.abs( fromCeiled - to ),
            from - fromFloored + Math.abs( fromFloored - to )
        );
    }
}
