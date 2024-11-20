// 97== count vowels in a string
let inputStr = "lalitmeena"
let checkVowels = (item)=>{
    let vowels = ['a','e','i','o','u']
    let count = 0
    item.split("").forEach((ele)=>{
        if(vowels.includes(ele)){
            count+=1
        }
    })
    return count
}
console.log(checkVowels(inputStr));