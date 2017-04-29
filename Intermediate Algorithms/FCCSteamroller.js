
function steamrollArray(arr) {
  // I'm a steamroller, baby
  const result = args => args.reduce((arr, val) => {
        console.log(arr,val)
        if(Array.isArray(val)){ 
            return arr.concat(result(val));
        }
        else {
            return arr.concat(val);
        }
    }, []);
    return(result(arr));
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));