//30===find intersection of elements in twp arrays

let arrNum1 = [1,2,3,4,5]
let arrNum2 = [9,8,7,6,5,4,3]

let arrNum3 = arrNum1.filter((item)=>arrNum2.includes(item))
console.log(arrNum3);