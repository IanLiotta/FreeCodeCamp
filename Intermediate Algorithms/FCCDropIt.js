function dropElements(arr, func) {
  // Drop them elements.
  while(arr[0] !== undefined){
    console.log(arr[0], func(arr[0]));
    if(!func(arr[0])) {arr.shift();}
    else {return arr;}
  }

  return arr;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));