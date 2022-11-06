//typeOf Primitives
console.log(`Type of null is ${typeof null}`);
console.log(`Type of undefined is ${typeof undefined}`);
console.log( `Type of NaN is ${typeof NaN}`);
console.log(` Type of Infinity is ${typeof Infinity}`);



console.log(typeof NaN);


//Converting to number
const a = Number(56);
console.log(a);

//Gives -1 cause indexof uses equality operator
console.log([1,2,NaN,4].indexOf(NaN));

//checking if anything is a NaN
console.log(isNaN(a));