//128 == how to find second largest value and remove first largest value in array

let arrNum = [1,2,3,4,5,7,9,11]
let largestValue=(arr)=>{
    firstLargestValue=Math.max(...arr)
    index = arr.indexOf(firstLargestValue)
    arr.splice(index,1)
    secondLargestValue=Math.max(...arr)
    index = arr.indexOf(secondLargestValue)
    arr.splice(index,1)
    thirdLargestValue=Math.max(...arr)

return thirdLargestValue
}
console.log(largestValue(arrNum));