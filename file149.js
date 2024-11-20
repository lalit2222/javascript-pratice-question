//149 ==  program to find number of occurrence of a character in a string in javascript

var string = "lalit meena"
var letter = "e"
let strLen = string.length
let count = 0
for(let i=0;i<strLen;i++){
    if(string[i]==letter){
        count++
    }
}
console.log(` in ${string} occurrence of ${letter} = ${count}`)