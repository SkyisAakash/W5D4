Array.prototype.myEach = function(callback) {
  for( let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};
// [1,2,3].myEach((el) => {
//   console.log(el);
// });

Array.prototype.myMap = function(callback) {
  let result = [];
  for( let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }
  return result;
};

// [1,2,3].myMap((el) => {
//   return el * 2;
// });

Array.prototype.myReduce = function(callback, initialValue = 0){
  let sum = initialValue;
  for (let i = 0; i < this.length; i++) {
      sum = callback(sum ,this[i]);
  }
  
  return sum;
};

[1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
});

console.log([1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
}, 25));
