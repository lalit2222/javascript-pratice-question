//13=== check two string are anagrams or not by sorting and comparing in string

let string1 = "tree"
let string2 = "reer"
if(string1.length !==string2.length){
    console.log("the string length is not same");
    return false ;

}

let string1Sorting = string1.split("").sort().join("")
let string2Sorting = string2.split("").sort().join("")

if(string1Sorting===string2Sorting){
    console.log("anagram string");

}else{
    console.log("not anagram string");

}