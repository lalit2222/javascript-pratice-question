// //  2==== median of two  sorted arrays 


let arr1= [1,3,5,7,9]
let arr2= [2,4,6,8,10]

function findMedianOfTwoArray(arr1,arr2){
    let arr =[...arr1,...arr2]
    arr.sort((a,b)=>a-b)
    let medianIndex = Math.floor(arr.length/2)
    return median = arr.length%2===1?arr[medianIndex]:(arr[medianIndex-1]+arr[medianIndex])/2;
  
    
}
console.log(findMedianOfTwoArray(arr1,arr2));