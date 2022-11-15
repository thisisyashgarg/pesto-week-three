//ORGINAL CODE
function createStack (){
    return{
        items : [],
        push(item){
            this.items.push(item);
        },
        pop(){
            return this.items.pop();
        }
    };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();
console.log(stack.items);
//here items can be read outside the scope of create stack 
//because it is returned inside create stack function
// thus a closure is returned, and thus const stack
// remembers its scope and items array can be accessed



//REFRACTED CODE
function createStack2 (){

    let items = [];
    function push(item) {
        items.push(item);
    }
    function pop(){
        return items.pop();
    }

}

// console.log(items); // cannot be accessed because elements inside createStack2
// are not returned
const stack2 = createStack2();
stack2.push(10);
stack2.push(5);
stack2.pop();
console.log(stack2.items);
