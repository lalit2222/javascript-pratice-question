// 126 == how to find  min value in a given arrays in javascript

let arrNum = [ 4,3,5,6,7,4,,5,68,8,,9]
let minNum  = (arr)=>{
    return arr.reduce(function(pre, cur){
    return pre<cur?pre:cur
    })

}
console.log(minNum(arrNum));