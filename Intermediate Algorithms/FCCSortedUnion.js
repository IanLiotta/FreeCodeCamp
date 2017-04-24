
function uniteUnique(arr) {
    let input = [...arguments];
    return input.reduce((arr, val) => {
        console.log(arr,val)
        for(let number in val){
            if(!arr.includes(val[number]))(arr.push(val[number]));
        }
        return arr;
    }, []);   
}

console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));