function sumPrimes(num) {
    let solution = 0;
    for(let i = 2; i <= num; i++){
        if(isPrime(i)) {solution += i;}
    }
    return solution;
}

function isPrime(num){
    let testInt = 2;
    if(num === 2) {return true;}
    if(num % testInt === 0) {return false;}
    for(testInt = 3; testInt < num; testInt += 2){
        if(num % testInt === 0) {return false;}
    }
    return true;
}
// console.log(isPrime(12));
console.log(sumPrimes(977));