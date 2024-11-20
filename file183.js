//183==program to print the element of even position
let inputArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function evenPosition(arr) {

      let evenIndexes = [];
      let oddIndexes = [];

      for (let i = 1; i < arr.length + 1; i++) {

          if (i % 2 !== 0) {
              oddIndexes.push(i)
          } else {
              evenIndexes.push(i)
          }

      }
      return ` even ${evenIndexes} and odd ${oddIndexes}`

  }

console.log(evenPosition(inputArr));
