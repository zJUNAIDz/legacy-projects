function sumArray(array) {
  let largest = array[0];
  let smallest = array[0];

  for (i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    } else if (array[i] < smallest) {
      smallest = array[i];
    }
    array.splice(largest, 1);
    array.splice(smallest, 1);
    let sum = array.reduce((a, b) => a + b);
  }
  if (array.length === 0) {
    let emp = 0;
    return emp;
  } else {
      return sum;
  }
}
let total = sumArray([1, 2, 4, 3])
console.log(total);
console.log('hello');