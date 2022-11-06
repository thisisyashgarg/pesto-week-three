const memoize = require('lodash');

function fib (n){
    if(n < 2){
        return n;
    }
    return (fib(n-1) + fib(n-2));
}

const fibM = memoize(fib);
repeat(35);
repeat(35);
repeat(35);
repeat(35);
repeat(35);

function repeat(number){
    console.time();
    fibM(number);
    console.timeEnd();
}







// console.time();
// console.log(fib(35));
// console.timeEnd()