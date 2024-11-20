
// 176 == write a program to count a number of vowels and consonants in a string in javascript

let inputStr = "lalit"

let countStr = (item)=>{

    item = item.toLowerCase()

    let vowels = ['a','e','i','o','u']
    let vowelsCount = 0
    let consonantCount = 0
    item.split("").forEach((ele)=>{
        if(vowels.includes(ele)){
            vowelsCount = vowelsCount+1
        }
        else{
            consonantCount = consonantCount+1
        }
    })
return {vowelsCount,consonantCount}
}

console.log(countStr(inputStr));