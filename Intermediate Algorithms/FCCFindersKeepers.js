function findElement(arr, func) {
  var num = 0;
  let results = arr.filter(func);
  console.log(results[0]);
  return results[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });