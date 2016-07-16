function testArgs (a, b, c){
    console.log(arguments, arguments.length); // [a, b, c] , 3
    console.log(arguments[3]); // undefined

    for (var i = 0; i < arguments.length; i++){
        arguments[i] *= arguments[i];
        console.log(arguments[i]);
    }

    // arguments.push(4); // Uncaught TypeError: arguments.push is not a function

    var args = Array.prototype.slice.call( arguments );
    args.push(4);

    console.log(args);
}

testArgs(1,2,3);