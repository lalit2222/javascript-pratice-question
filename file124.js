
// 124 == how to find duplicate elements in arrays in javascript

let number = [ 1,2,3,4,5,6,1,2,3,7,8]

let duplicateNumber = number.filter((element,index,arr)=>arr.indexOf(element)!==index)

console.log(duplicateNumber);