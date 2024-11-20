//57===  program to left roatate array by one position
let arr1 = [1, 2, 3, 4, 5];
let result = rotationArr(arr1);

function rotationArr(arr) {
      if (arr.length <= 1) {
          return arr;
      }

      return arr.map((_, index, array) =>
          array[(index + 1) % array.length]);
  }

  console.log("Original Array:", arr1);
  console.log("Array after Left Rotation :", result);