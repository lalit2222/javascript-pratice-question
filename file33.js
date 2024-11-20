
//33===program for string comparision

let compareStr = "aaabbbcccddddddeefff"
//a3b3c3d6e2f3 ==output

let count = 0
let res = ""

for(let i=0;i<=compareStr.length;i++){
    count++
    if(compareStr[i]!=compareStr[i+1]){
        res = res + compareStr[i]+count
        count = 0
    }
}
console.log(res);