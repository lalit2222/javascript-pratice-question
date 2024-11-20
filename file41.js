//41 === reverse word in a string in

let inputStr = "lalit meena is web developer"

let reverseString = (item)=>{
 let inputStr =  item.split(" ").reverse().join(" ")
    console.log(inputStr);

}
reverseString(inputStr);

// method ==2

let inputS = "lalit meena is web developer"

let res = inputS.split(" ").reverse().join(" ")
console.log(res);