// Array methods
// Написати функцію, яка приймає масив чисел
// і повертає true, якщо в цьому масиві є два однакових числа поспіль
// Якщо не має - повертає false, якщо масив порожній - теж повертає false


// // [1,2,3,4,5]->false
// // [1,2,2,3,2]->true

function identicalNumbersInRow(array) {
  for (let i = 1; i < array.length; ++i) {
    if (array[i] === array[i - 1]) {
      return true;
    }
  }
  return false;
}

console.log(identicalNumbersInRow([1, 2, 3, 4, 5]));
console.log(identicalNumbersInRow([1, 2, 2, 3, 2]));
console.log(identicalNumbersInRow([]));

