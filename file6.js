// 6===plaindrome number
let num = 121
let str = num.toString()
let reverseStr = str.split("").reverse().join("")
if(reverseStr===str){
    console.log("palindrome string");

}
else{
    console.log("not plaindrom string");

}