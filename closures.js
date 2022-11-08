
//example
// var x ;
// function one (){
//     // var x = 10;
//     function two (){
//         console.log(x);
//     }
//     return two();
// }

// var x = 20;
// one();


//que, gives 3 3 3 value

for(var i = 0; i < 3; i++){
    setTimeout(function (){
        console.log(i);
    }, 1000);
}

//how to solve this
for(let i = 0; i < 3; i++){
    setTimeout(function (){
        console.log(i);
    }, 1000);
}

