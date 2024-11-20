
//187===find largest in three numberr

let largestNumber = findLargest(10, 5, 8);
function findLargest(num1, num2, num3) {
      if (num1 >= num2 && num1 >= num3) {
          return num1;
      } else if (num2 >= num1 && num2 >= num3) {
          return num2;
      } else {
          return num3;
      }
  }

  console.log("Largest number:", largestNumber);

// method==2

// let num1 = 10
// let num2 = 30
// let num3 = 2

// if(num1>num2&&num1>num3){
//       console.log(`largest number : ${num1}`);

// }
// else if(num2>num1&&num2>num3){
//       console.log(`largest number : ${num2}`);
// }
// else if(num3>num1&&num3>num2){
//       console.log(`largest number : ${num2}`);

// }