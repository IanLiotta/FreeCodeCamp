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
        
        if(tempMult % arr[0] === 0) {solution = tempMult}

        // test if the solution is divisible by all ints between arr[0] and [1]
        for(let testInt = arr[0]; testInt <= arr[1]; testInt++) {
            if(solution % testInt !== 0) {
                solution = 0;
                break;
            }
        }

        i++;
    }
    
    return solution;
}

console.log(smallestCommons([23,18]));