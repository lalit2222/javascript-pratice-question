
// 10==== how to compare two string

let str1 = "namee"
let str2 = "meena"
let strcheck1 = str1.split("").sort().join("")
let strcheck2 = str2.split("").sort().join("")

if(strcheck1===strcheck2){
    console.log(`${strcheck1} is compare  to ${strcheck2}`);
}
else{
    console.log(`${strcheck1} is not compare  to ${strcheck2}`)
}