function addTogether() {
    let result = 0;
    let args = [...arguments];

    for (let val in args) {
        console.log(typeof args[val]);
        if (typeof args[val] !== 'number') {
            return undefined;}
    }
    if(args.length === 2){
        result = arguments[0] + arguments[1];
        return result;
    }
    else if(args.length === 1) {
        return function addCurry() {
            if(typeof arguments[0] !== 'number') {
            return undefined;
        }
            return args[0] + arguments[0];
        };
    }
    return undefined;
}

console.log(addTogether(3)(4));