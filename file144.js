
// 144 == how to find union of two arrays /seet in javascript

let arr1 = [1,2,3,4,5,55,44,33,23]
let arr2 = [3,2,4,53,67,8,2]
// let unionArr = [...arr1,...arr2]
let unionArr = arr1.concat(arr2)
console.log([...new Set (unionArr)]);