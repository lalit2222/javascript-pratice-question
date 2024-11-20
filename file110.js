// 110==missing number in arrays

let inputArr  = [1,2,3,4,5,6,20]
let missingNum = []
let checkMissingNum = (item)=>{
    let minVal = Math.min(...item)
    let maxVal = Math.max(...item)

    for(let i=minVal;i<=maxVal;i++){
        if(item.indexOf(i)<0){
            missingNum.push(i)
        }
    }
    return missingNum
}

console.log(checkMissingNum(inputArr));