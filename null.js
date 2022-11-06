function pesto (obj){
    if(obj == null){
        throw new Error('expected an object');
    }
    return Object.keys(obj).length;
}

console.log(pesto(null));