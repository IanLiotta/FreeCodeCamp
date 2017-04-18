function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  //if collection hasOwnProp matching source, push that prop into an array of strings
  collection.forEach(function compareKeys(colObj) {
    console.log(colObj)
    let results = 0;
    for(let srcName in source) {
      console.log(srcName,source[srcName])
      console.log(colObj.hasOwnProperty(srcName));
      if(colObj.hasOwnProperty(srcName)) {
        if(colObj[srcName] === source[srcName]){
          results++;
        }
      }
    }
    console.log(results,Object.keys(source).length)
    if(results === Object.keys(source).length){
      arr.push(colObj);
    }
  });

  

  console.log(arr)
  // Only change code above this line
  return arr;
}


//whatIsInAName([1, 2, 3, 4], [3]);
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
//whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 })
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })

//console.log(arrContains(['1'], ['1']))