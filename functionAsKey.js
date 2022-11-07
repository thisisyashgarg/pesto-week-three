const obj = {
    fName: 'Yash',
    lName: 'Garg',
    printFullName(){
        return this.fName + ' ' + this.lName;
    },
    func : function(){
        return 'hi';
    }
}

console.log(obj.printFullName());

//accessing properties of an object
console.log(obj.fName); // dot notation
console.log(obj['lName']); // bracket notation

//editing and adding properties
obj.lName = 'Agrawal'; //editing
obj.middleName = 'Kumar'; //adding
console.log(obj);
delete obj.lName;
console.log(obj);




