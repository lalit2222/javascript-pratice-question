// 28=== find missing number in an array

let newArr = [1,2,4,5,6,7,9,20]
let missingNum = []
let missingVal = (item)=>{

    let minVal = Math.min(...item)
    let maxVal = Math.max(...item)
    for(let i=minVal;i<=maxVal;i++){
        if(item.indexOf(i)<0){
            missingNum.push(i)
        }
    }
return missingNum
}
console.log(missingVal(newArr));