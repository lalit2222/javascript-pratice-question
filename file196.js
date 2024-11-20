// // 196=== how to delete an element from an array in javascript

let delElement = [23,14,25,36,47]
//end
let endRes = delElement.pop()
//start
let startRes = delElement.shift()
//between
let betweenRes = delElement.splice(0,4)
console.log(endRes);
console.log(startRes);
console.log(betweenRes);