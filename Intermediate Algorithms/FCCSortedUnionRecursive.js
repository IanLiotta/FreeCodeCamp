
function uniteUnique(arr) {
    let input = [...arguments];
    let output = [];
    const result = args => args.reduce((arr, val) => {
        // console.log(arr,val)
        if(Array.isArray(val)){ 
            return arr.concat(result(val));
        }
        else{
            // console.log(output, val, output.includes(val))
            if(!output.includes(val)) {
                output.push(val);
                return arr.concat(val);
            }
            else {return arr;}
        }
    }, []);

    return result(input);
}

console.log(uniteUnique([1, 3, [2, 3, [8, 9]]], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));