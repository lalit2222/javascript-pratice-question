//14=== check string  is plaindrome or not

let plaindromString = "lallal"

let res = plaindromString.split("").reverse().join("")

if(plaindromString===res){
    console.log("palindrome string");

}
else {
    console.log("not plaindrome string");

}