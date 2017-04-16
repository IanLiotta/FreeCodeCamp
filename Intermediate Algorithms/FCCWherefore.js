function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  let srcProp = Object.keys(source);
  console.log(srcProp)

  collection.forEach((val) => {
    
    if (val.hasOwnProperty(srcProp)){
     
      if (val[srcProp] == source[srcProp]) {
        arr.push(val);
      }
      
    }
    
  })

  console.log(arr)
  // Only change code above this line
  return arr;
}

function arrContains(a, b) {
  let result = 0;
  a.forEach((valA) => {
    b.forEach((valB) => {
      if (valA === valB) {result++};
    });
  });
  if (result === a.length) {return true}
  return false;
}
//whatIsInAName([1, 2, 3, 4], [3]);
//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
//whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 })
//whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })

console.log(arrContains(['1'], ['1']))