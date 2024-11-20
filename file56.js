//56===move all negative number to the start of array

// let inputaArr = [1,2,3,4,-1,-2,3,4,2.-22]
// // method==1

// let res = inputaArr.sort()
// console.log(res+"method1");

// // method==2
// function move(item){
//       item.sort();
//   }

//   move(inputaArr);
//   for (let char of inputaArr)
//       console.log(char , " method2");

// // method==3

let moveNegatveNum = (item)=>{
      return item.sort()
}
console.log(moveNegatveNum(inputaArr)+"method3");