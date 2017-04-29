
function truthCheck(collection, pre) {
    for(let val in collection){
        console.log(collection[val]);
        let testResult = Object.getOwnPropertyDescriptor(collection[val], pre); 
        console.log(testResult);
        // console.log(new Boolean(testResult.value));
        if (testResult === undefined) {return false;}
        else if (Boolean(testResult.value) == true) {console.log('true');}
        else {return false;}
    }
    return true;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"));
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));