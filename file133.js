// 133 == how to find the sum of all elements in agiven array[] in javascript

let number = [1,2,3,4,5]
let sumOfNumber = (arr)=>{
    return arr.reduce((pre,cur)=>{
        return pre+cur
    })
}
console.log(sumOfNumber(number));