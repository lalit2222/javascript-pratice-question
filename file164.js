
// 164==compare two string

let str1 = "lalit"
let str2 = "lital"
let res1 = str1.split("").sort().join("")
let res2 = str2.split("").sort().join("")
let result = res1==res2 ?"equal string":"not equal string"
console.log(result);