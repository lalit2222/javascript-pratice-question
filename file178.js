// 178== string are same or not 

let s1 = "lalit"
let s2 = "tilal"

let sorting1 = s1.split("").sort().join("")
let sorting2 = s2.split("").sort().join("")

if(sorting1===sorting2){
    console.log("s1 and s2 are same string");

}
else{
    console.log("s1 and s2 are  not same string");
}
