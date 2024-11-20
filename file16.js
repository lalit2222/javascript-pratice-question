//16=== how to remove the duplicate from string javascript

let word  = "lalitmeena"

function removeDuplicateString(str){
    let count = ""
    for (let char of str) {
        if(count.includes(char)==false){
            count = count +char
        }

    }
return count
}

console.log(removeDuplicateString(word));