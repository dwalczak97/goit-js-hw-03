function makeArray(firstArray, secondArray, maxLength) {
  let justArray = firstArray.push(secondArray);
  for (let index = 0; maxLength < justArray.length; index++) {
    return justArray[index];
  }
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));
// []

// for (let index = 0; index < students.length; index++) {
//     console.log( students[index] );
// }
// function getQueueAfter(name) {
//     const index = queue.indexOf(name);

//     if (index === -1) return queue;

//     return queue.slice(index);
// }

// console.log(getQueueAfter("Dorthy"));
// console.log(getQueueAfter("Zeke"));
