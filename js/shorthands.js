/*
* Short-circuiting
* If {condition} do {action}
* */
if(condition) num++;
// shorthand
condition && num++;

if(!condition) num++;
// shorthand
condition || num++;

// common use
if(variable) variable = variable;
else variable = 'default';
// becomes
arr[2] = arr[2] || '';
arr[2] || (arr[2] = '');

/*
 * Even or odd
 * */
number % 2

// shorthand
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND
number & 1;

