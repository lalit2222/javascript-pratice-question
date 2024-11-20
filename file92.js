// 92== program to second largest number in array

let inputArr = [1,2,3,4,5,6]
let checkSecondLargestNum = (item)=>{
    item.sort((a,b)=>a-b)
    for(let i=item.length-2;i>=0;i--){
        if(item[i]!==item[item.length-1]){
            return item[i]
        }
    }
    return -1
}
console.log(checkSecondLargestNum(inputArr));
