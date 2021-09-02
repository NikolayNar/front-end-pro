// With For

function max(arr) {
  let bigNumber = null;

  for (let i of arr) {
    if (i > bigNumber) {
      bigNumber = i;
    }
  } 
  return bigNumber
  
}

console.log('Solve with "For" loop:')
console.log(max([8]), 'one element test, must return 8');
console.log(max([8, 17]), '2 elements test, must return 17'); 
console.log(max([1, 8, 37, 5, 17]), '5 elements test, must return 37');

// With Recursion

function max(arr) {
  if (arr.length <= 1 ) {
    return arr[0];
  }

  let lastEl = arr[arr.length - 1];

  if (lastEl > arr[0]) {
    arr[0] = lastEl
  }
  arr.pop()
  
  return max(arr)
}

console.log('Solve with "Recursion":')
console.log(max([8]), 'one element test, must return 8');
console.log(max([8, 17]), '2 elements test, must return 17');
console.log(max([1, 8, 37, 5, 17]), '5 elements test, must return 37');