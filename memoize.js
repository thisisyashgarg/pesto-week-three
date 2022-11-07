import memoize from 'lodash'
//to understand we are using fabonnaci numbers function
function fib(n){
if(n<2){
  return n;
};
return fib(n-1)+fib(n-2);
}

fib(35);
//this function hsows us how much time it took to excecute the code.
function time(fn){
  console.time()
  fn();
  console.timeEnd();
};

//to overcome this we got an node module named memoize which memorize executions so that code will be more utilized.
//for ex
//first will be remembered by memoize and rest will take no time to execute like first one.
const fibM = memoize(fib);
time(()=>fibM(38));
time(()=>fibM(38));
time(()=>fibM(38));
time(()=>fibM(38));