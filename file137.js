// 137 == how to find pallindrome in javascript

let string = "lalit "
string = string.toLocaleLowerCase()
let pallindromeStr = (str)=>{
    var reverseStr = str.split("").reverse().join("")
 if(reverseStr===str){
    return true
 }else{
    return false
 }

}
console.log(pallindromeStr(string));