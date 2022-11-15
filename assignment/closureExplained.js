function a() {

    function b(){
        console.log('hi b')
    }

    function d(){
        console.log('hi d')
    }

    return [b,d];

}

const [b, d] = a();
b();
d();
console.log([b, d]);


