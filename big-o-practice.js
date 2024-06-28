animals = ['alligator', 'bear', 'cat', 'dog', 'elephant', 'fish', 'goose', 'hamster', 'iguana', 'jaguar', 'kangaroo'];

// Count how many animals are in the list
// Time complexity: O(n) - The loop runs `n` times, where `n` is the length of the `animals` array
// Space complexity: O(1) - The space used is constant, as only a few variables are used regardless of the input size
function countAnimals(animals) {
  let count = 0;
  for (let i = 0 ; i < animals.length ; i++) {
    count++;
  }
  return count;
}

// Count how many animals are in the list
// Time complexity: O(1) - Accessing the `length` property of an array is a constant time operation
// Space complexity: O(1) - No additional space is required beyond the input array
function countAnimals2(animals) {
  return animals.length;
}

// Print the first 10 animals in the list
// Time complexity: O(1) - Printing a fixed number of elements (10) does not depend on the size of the input array
// Space complexity: O(1) - Only a few variables are used, and their space is constant
function printTenAnimals(animals) {
  if (animals.length < 10) {
    throw Error("not enough animals")
  }

  console.log(animals[0]);
  console.log(animals[1]);
  console.log(animals[2]);
  console.log(animals[3]);
  console.log(animals[4]);
  console.log(animals[5]);
  console.log(animals[6]);
  console.log(animals[7]);
  console.log(animals[8]);
  console.log(animals[9]);
}

// Print out all the animals
// Time complexity: O(n) - The loop runs `n` times, where `n` is the length of the `animals` array
// Space complexity: O(1) - Only a few variables are used, and their space is constant
function printAnimals(animals) {
  for (let i = 0 ; i < animals.length ; i++) {
    console.log(animals[i]);
  }
}

// Print out all the animals twice
// Time complexity: O(n) - Each loop runs `n` times, but they run sequentially, so it's `O(2n)` which simplifies to `0(n)`
// Space complexity: O(1) - Only a few variables are used, and their space is constant
function printAnimalsTwice(animals) {
  for (let i = 0 ; i < animals.length ; i++) {
    console.log(animals[i]);
  }
  for (let j = 0 ; j < animals.length ; j++) {
    console.log(animals[j]);
  }
}

// Print all possible pairs of animals
// Time complexity: O(n^2) - There are two nested loops, each running `n` times
// Space complexity: O(1) - Only a few variables are used, and their space is constant
function printAnimalPairs(animals) {
  for (let i = 0 ; i < animals.length ; i++) {
    for (let j = 0 ; j < animals.length ; j++) {
      console.log(`${animals[i]} - ${animals[j]}`);
    }
  }
}

// Return an array containing all possible pairs of animals
// Time complexity: O(n^2) - There are two nested loops, each running `n` times
// Space complexity: O(n^2) - The array `pairs` will store `n^2` pairs
function getAnimalPairs(animals) {
  const pairs = [];
  for (let i = 0 ; i < animals.length ; i++) {
    for (let j = 0 ; j < animals.length ; j++) {
      pairs.push([animals[i], animals[j]]);
    }
  }
  return pairs;
}


// Return an array containing all possible pairs of animals
// Time complexity: O(n^3) - There are three nested loops, each running `n` times
// Space complexity: O(n^3) - The array `triples` will store `n^3` triples
function getAnimalTriples(animals) {
  const triples = [];
  for (let i = 0 ; i < animals.length ; i++) {
    for (let j = 0 ; j < animals.length ; j++) {
      for (let k = 0 ; k < animals.length ; k++) {
        triples.push([animals[i], animals[j], animals[k]]);
      }
    }
  }
  return triples;
}

// Returns the index of the animal if it is in the array
// Returns -1 if it is not in the array
// Time complexity: O(n) - In the worst case, the loop will run `n` times
// Space complexity: O(1) - Only a few variables are used, and their space is constant
function findAnimal(animals, target) {
  for (let i = 0 ; i < animals.length ; i++) {
    if (animals[i] === target) return i;
  }
  return -1;
}
