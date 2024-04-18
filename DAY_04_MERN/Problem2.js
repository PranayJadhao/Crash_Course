// Custom map function
function customMap(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }
  return newArray;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = customMap(numbers, (num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

const squaredNumbers = customMap(numbers, (num) => num ** 2);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
