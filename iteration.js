const arr = [1,2,'b'];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

const parent = {
    name: 'yash',
}

const obj = {
    dob: '27 Feb',
    age: '21',
    [Symbol()] : 'woohoo'
}

//we cannot use for loop for iterating objects



                       //FIRST METHOD - FOR IN LOOP

//for in loop for objects
for(let key in obj){
    console.log(key, obj[key]);
}


//it works for arrys as well cause array is also an object
for(let key in arr){
    console.log(key, arr[key]);
}

//expicitlt marikng object as a parent to another object
// we can access parent properties as well with for in loop
Object.setPrototypeOf(obj, parent);
console.log(obj.name);
for(let key in obj){
    console.log(key, obj[key]);
}

console.log('*********')


          //SECOND METHOD - OBJECT METHOD ( keys, values, pairs)

const keys = Object.keys(obj);
const values = Object.values(obj);
const entries = Object.entries(obj);

// this method prints properties of current object only, not their parent
keys.forEach((key)=> console.log(key));
values.forEach((value)=> console.log(value));
entries.forEach((pairs)=> console.log(pairs));

console.log('*********')


            //THIRD METHOD - OBJECT OWN KEYS

console.log(Reflect.ownKeys(obj));
console.log(Reflect.ownKeys(Object.prototype));
            
