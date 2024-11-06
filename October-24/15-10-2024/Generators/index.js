function* simpleGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

// yield is working as a return statement and is used to stop the execution of the function till that point
// what we return from yield is the value of the next() method
const generatorObj1 = simpleGenerator();
console.log(generatorObj1) // Object [Generator] {}
console.log(generatorObj1.next()); // { value: 1, done: false }
console.log(generatorObj1.next()); // { value: 2, done: false }
console.log(generatorObj1.next()); // { value: 3, done: false }
console.log(generatorObj1.next()); // { value: undefined, done: true }



// it can also be used as an iterators to iterate over the values
function* iterator(array){
    for(let i = 0; i < array.length; i++){
        yield array[i];
    }
}
const iteratorObj = iterator([1, 2, 3, 4, 5]);
console.log(iteratorObj.next()); // { value: 1, done: false }
console.log(iteratorObj.next()); // { value: 2, done: false }
console.log(iteratorObj.next()); // { value: 3, done: false }
console.log(iteratorObj.next()); // { value: 4, done: false }
console.log(iteratorObj.next()); // { value: 5, done: false }
console.log(iteratorObj.next()); // { value: undefined, done: true }


// the object has also method - return() and throw() which can be used to return a value and throw an error respectively
function* generatorWithReturn(){
    yield 1;
    yield 2;
    yield 3;
}
const generatorObj2 = generatorWithReturn();
console.log(generatorObj2.next()); // { value: 1, done: false }
console.log(generatorObj2.return(4)); // { value: 4, done: true }
console.log(generatorObj2.next()); // { value: undefined, done: true }