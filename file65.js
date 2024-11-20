// 65==first digit,last digit amd sum of array
let inputArr = [1,2,3,4,5,6,7]
function sumFirstLast(item) {
      let n1 = Number(item[0]);
      let n2 = Number(item[item.length - 1]);
      console.log(n1 + n2);
  }

  sumFirstLast(inputArr);