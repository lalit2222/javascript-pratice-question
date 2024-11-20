// 109== YEAR leap or no

let inputyear = 2004
let checkLeapOrNot=(item)=>{
    return item%4==0?"the year are leap":"the year is not leap"
}
console.log(checkLeapOrNot(inputyear));