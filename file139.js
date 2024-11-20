// 139 ==how to merge two arrays and sort then in javascript

//concat method
let arr1 = [1,2,3,4,7,7]
let arr2 = [2,8,9,7,55,44,]
let finalArray = arr1.concat(arr2)
let sortArrat = finalArray.sort(function (a,b) {
    return a-b
})
    //spread method
let finalsort = [...arr1,...arr2]
let sortArray = finalsort.sort(function(a,b){
    return a-b
})

console.log(finalArray);