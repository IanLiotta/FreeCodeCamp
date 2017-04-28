function smallestCommons(arr) {
    let solution = 0;
    let i = 1;
    let currentTest = 1;
    let arrProduct = 1;
    //make sure arr[1] is larger
    if(arr[0] > arr [1]) {
        let temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
    }

    for(let iter = arr[0]; iter <= arr[1]; iter++) {
        arrProduct *= iter;
    }


    while(solution === 0){
        let tempMult = arr[1] * i;
        
        if(tempMult % arr[0] === 0) {solution = tempMult}

        // test smaller multiples until they match or exceed the current largest multiple
        // for(currentTest = i; currentTest*arr[0] <= tempMult; currentTest++) {
        //     if(currentTest*arr[0] === tempMult) {
        //         solution = tempMult;
        //         // console.log('Solution? ', solution);
        //     }
        // }

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

console.log(smallestCommons([23,18]));