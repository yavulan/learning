function isFloat(num){
    return num % 1 !== 0;
}

isFloat(2); // false
isFloat(2.01); // true

function isInt(num){
    return num % 1 === 0;
}

isInt(2); // true
isInt(2.01); // false