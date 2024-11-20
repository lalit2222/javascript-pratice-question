//26===  diffrent way to sum all elements in an arrays in javascript

// let sumValue = [1,2,3,4,5]

// 1==method
// function sumOfAllEle(item){
//     let count = 0
//     for (let char of item)
//         count  = count + char
//         return count
// }
// console.log(sumOfAllEle(sumValue));

// 2==method
let redVal = sumValue.reduce((cur,acc)=>{
    return cur+acc
})
console.log(redVal);