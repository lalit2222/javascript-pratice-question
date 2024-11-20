
// 143 == how to find intersection of two arrays/sets in javascript

let arr1 = [2,4,6,8,1]
let arr2 = [1,8,6,4,3]
let intersectionArr = arr1.filter((item)=>{
    return arr2.includes(item)
})
console.log(intersectionArr);