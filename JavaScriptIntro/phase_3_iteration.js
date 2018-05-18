Array.prototype.BubbleSort = function() {
  let sorted = false;
  while (sorted === false) {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i+1]) {
        let temp = this[i+1];
        this[i+1] = this[i];
        this[i] = temp;
        sorted = false;
      }
    }
  }
  return this;
};

// console.log([9,8,3,5,7].BubbleSort());


String.prototype.SubStrings = function() {
  let result = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i+1; j < this.length; j++) {
      result.push(this.slice(i, j+1));
    }
  }
  return result;
};

// console.log("aakash".SubStrings());
