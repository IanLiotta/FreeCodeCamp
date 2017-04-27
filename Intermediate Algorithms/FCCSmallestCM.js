function smallestCommons(arr) {
    let solution = 0;
    let i = 1;

    //make sure arr[1] is larger
    if(arr[0] > arr [1]) {
        let temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
    }

    while(solution === 0){
        let tempMult = arr[1] * i;
        
        // test smaller multiples until they match or exceed the current largest multiple
        for(let j = arr[0]; j*arr[0] <= tempMult; j++) {
            if(j*arr[0] === tempMult) {
                solution = tempMult;
                console.log('Solution? ', solution);
            }
        }

        // test if the solution is divisible by all ints between arr[0] and [1]
        for(let testInt = arr[0]; testInt <= arr[1]; testInt++) {
            if(solution % testInt !== 0) {
                solution = 0;
                break;
            }
        }
        // for testing terminate possible infinite loop early
        // if(i > 100) {solution = -1;}
        i++;
    }
    return solution;
}

function isDivisible(a, b) {
    if (a % b === 0) {return true;}
    return false;
}

console.log(smallestCommons([23,18]));