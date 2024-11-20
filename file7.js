
//7==== anagram checker

let arr1 = "lalit"
let arr2 = "allti"

if(arr1.length==!arr2.length){
    console.log("not anagram");
    return false ;

}

let processStr1 = arr1.split("").sort().join("")
let processStr2 = arr2.split("").sort().join("")

if(processStr1==processStr2){
    console.log("anagram");

}
else{
    console.log("not anagram");

}