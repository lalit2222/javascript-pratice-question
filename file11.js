// 11===find first non repeated character in string in javascript

let checkStr = "aabbdcdbeefhg"

let findNonRpChar = (item)=>{
    let count = {}
    for (let char of item) {
        count[char]= (count[char]||0)+1

    }
    console.log("map",count);
    for(let i=item.length-1;i>=0;i--){
        if(count[item[i]]===1){
            return item[i]
        }
    }

}
console.log("non repeted char is :-",findNonRpChar(checkStr));