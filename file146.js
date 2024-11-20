// 146 ==  program to convert first letter of a string in to uppercase in javascript

let input = "lalit meena"
let firstLetterCapital = (item)=>{
    let newStr = item.split(" ");
    let arrStr = newStr.map((value)=>{
        return value.charAt(0).toUpperCase() +value.slice(1)
    })
    return arrStr.join(" ")
}

console.log(firstLetterCapital(input));