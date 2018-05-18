function range(start,end) {

  if (start === end) {
    return [end];
  }else{
    let temp = range(start, end - 1);
    temp.push(end);
    return temp;
  }
}

// console.log(range(5,7));


function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    let result = arr.pop() + sumRec(arr);
    return result;
  }
}

// console.log(sumRec([1,2,3]));


function exponent (b, n) {
  if (n === 0){
    return 1;
  }
  if (n === 1){
    return b;
  }else {
    return b * exponent(b, n-1);
  }
}

function exponent2 (b, n) {
  if (n === 0){
    return 1;
  }
  if (n === 1){
    return b;
  }
  if (n % 2 === 0){
    return exponent(b, n/2) * exponent(b, n/2);
  }else {
    return b * exponent(b, (n - 1)/2) * exponent(b, (n - 1)/2);
  }
}

// console.log(exponent2(3,3));
function fib(n) {
  if (n === 1){
    return [1];
  }
  if (n ===2) {
    return [1,1];
  }else {
    let arr = fib(n - 1);
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    return arr;
  }
}

// console.log(fib(5));

function deepDup(arr) {
  let result = [];
  arr.forEach((el) => {
    if (Array.isArray(el)){
      result.push(deepDup(el));
    }else {
      result.push(el);
    }
  });
  return result;
}

// console.log(deepDup([1,2,[4,3],6,[4,5,6]]));

function bsearch(array, target){
  if (array.length === 1) {
    return 0;
  }else {
    let mid = Math.floor(array.length/2);
    if (array[mid] == target) {
      return mid;
    }
    if (array[mid] > target) {
      return bsearch(array.slice(0,mid), target);
    }
    if (array[mid] < target) {
      temp = bsearch(array.slice(mid,array.length), target);
      return temp + mid;
    }
  }
}

console.log(bsearch([2,3,4,5,6,7], 7));
console.log(bsearch([4,5,6,7,8,9], 5));
