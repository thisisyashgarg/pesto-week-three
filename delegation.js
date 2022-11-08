const obj = {

    firstName : 'yash'
}

console.log('firstName' in obj);
console.log('lastName' in obj);
console.log('isPrototypeOf' in obj);
console.log('toString' in obj);
console.log(obj.hasOwnProperty('toString'));