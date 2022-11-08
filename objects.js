let obj = {};
obj[obj] = 10; // if we do not use string in key, it converts it to string by toString method
console.log(obj); 
console.log(obj.toString());

//arbitrary nesting
const person = {
    firstName : 'Alex',
    lastName : 'Martin',
    DOB : '27 Feb',
    friends : ['Felix', 'Martin'] 
} 


//cyclic nesting
const person2 = {}
person2['ab'] = person2; 
console.log(person2);




