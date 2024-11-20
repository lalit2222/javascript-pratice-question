//136 == how to reverse a string in javascript

let str = ["lalit"]
let res = str.toString()
 let reve = res.split("").reverse("").join("")
console.log(reve);

let reverseString =(str)=>{
    var arrToString =str.split("")
    var arrString =arrToString.reverse()
    var stringarr =arrString.join("")
    return arrToString

}
console.log(reverseString("lalit"));
