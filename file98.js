// 98= descinding order in arrays

let inputaArr = [1,2,3,6,5,9]
let descindeingOrder = (item)=>{
  let res =   inputaArr.toString().split("").sort().join(" ")
    return res
}
console.log(descindeingOrder(inputaArr));