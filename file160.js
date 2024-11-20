// 160==program to count number of even or odd

let inputArr = [1,2,3,4,5,6,7,8,9]
let oddNum = 0
let evenNum = 0
for(let i=1;i<=inputArr.length;i++){
if(inputArr[i]%2==0){
       evenNum++
}else{
       oddNum++
}
}
console.log(oddNum);
console.log(evenNum);