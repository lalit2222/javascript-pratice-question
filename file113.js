// 113== anagram or not

let inputStr1 = "lawrence"
let inputStr2 =  "renceawl"

let checkAnagramOrNot = (item)=>{
  let check1=  inputStr1.split("").sort().join("")
   let check2= inputStr2.split("").sort().join("")
    return check1===check2?"anagram":"not anagram"

}
console.log(checkAnagramOrNot(inputStr1,inputStr2));