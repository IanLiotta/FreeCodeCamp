function sumFibs(max, prevNum, nextNum, acc){
    if(prevNum === undefined || nextNum === undefined){
        prevNum = 1;
        nextNum = 1;
        acc = 1;
        console.log(nextNum);
        return sumFibs(max, nextNum, prevNum, acc);
    }
    if(nextNum > max) {return acc;}
    if(nextNum % 2 !== 0) {acc += nextNum;}
    console.log(nextNum);
    return sumFibs(max, nextNum, prevNum+nextNum, acc);
}
console.log(sumFibs(4));