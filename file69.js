// 69===reverse digit in number

let inputNum = 9329684926
let result = inputNum.toString().split("").reverse().join("")

console.log(result);

method==2

let reverseNumber = (item)=>{
    return  item.toString().split("").reverse().join("")
}

console.log(reverseNumber(inputNum));
