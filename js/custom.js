//Work with Arr
// Task 1
/* const arr1 = ['a', 'b', 'c'];
const arr2 = [1, 2, 3];
console.log(arr1.concat(arr2)); */

// Task 2
/* const arr = ['a', 'b', 'c'];
arr.push(1, 2, 3);
console.log(arr); */

// Task 3. CONCAT
/* const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(arr1.concat(arr2)); */

// Task 4. REVERSE
/* const arr = [1, 2, 3];
console.log(arr.reverse()); */

// Task 5. PUSH & UNSHIFT
/* const arr1 = [1, 2, 3];
arr1.push(4, 5, 6);
console.log(arr1);

const arr2 = [1, 2, 3];
arr2.unshift(4, 5, 6)
console.log(arr2); */

// Task 6. SHIFT & POP
/* const arr = ['js', 'css', 'jq'];
console.log(arr.shift());
console.log(arr.pop()); */

// Task 7. SLICE
/* const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1.slice(0, 3);
console.log(arr2);

const arr3 = arr1.slice(3, 5);
console.log(arr3); */

// TASK 8. SORT
/* const arr = [3, 4, 1, 2, 7];
console.log(arr.sort()); */

// TASK 9. OBJECT.KEYS
/* const obj = {
  js:'test', 
  jq: 'hello', 
  css: 'world'
};
console.log(Object.keys(obj)); */

// TASK 10. RECURSION
/* const info = {
  formatted_address : "Washington Square, New York, NY 10012, Сполучені Штати Америки",
  geometry: {
     location: {
        lat: 40.7308838,
        lng: -73.997332
     },
     viewport: {
        northeast: {
           lat: 40.7333674,
           lng: -73.99379435000002
        },
        southwest: {
           lat: 40.72847220000001,
           lng: -74.00132615
        }
     }
  },
  name: "Washington Square Park"
};

function getCopyObj(info) {
  const newCopyInfo = {};
  for (let key in info) {
    if (typeof info[key] === 'object') {
      newCopyInfo[key] = getCopyObj(info[key]);
    }
    else {
      newCopyInfo[key] = info[key];
    }
  }
  return newCopyInfo;
}

const copyInfo = getCopyObj(info);

console.log(info);
console.log(copyInfo); */

// TASK 11.1. REDUCE
/* const wizards = [
  {
      name: 'Harry Potter',
      house: 'Gryfindor'
  },
  {
      name: 'Cedric Diggory',
      house: 'Hufflepuff'
  },
  {
      name: 'Tonks',
      house: 'Hufflepuff'
  },
  {
      name: 'Ronald Weasley',
      house: 'Gryfindor'
  },
  {
      name: 'Hermione Granger',
      house: 'Gryfindor'
  }];

const result = wizards.reduce(function Hufflepuff(arr, wizard) {
  if (wizard.house === 'Hufflepuff') {
    arr.push(wizard.name);
  }
  return arr
}, [])

console.log(result); */

// TASK 11.2. MAP+FILTER
/* const wizards = [
  {
      name: 'Harry Potter',
      house: 'Gryfindor'
  },
  {
      name: 'Cedric Diggory',
      house: 'Hufflepuff'
  },
  {
      name: 'Tonks',
      house: 'Hufflepuff'
  },
  {
      name: 'Ronald Weasley',
      house: 'Gryfindor'
  },
  {
      name: 'Hermione Granger',
      house: 'Gryfindor'
  }];

var result = wizards.filter(function (wizard) {
  return wizard.house === 'Hufflepuff';
}).map(function (wizard) {
  return wizard.name;
});

console.log(result); */