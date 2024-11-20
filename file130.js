// 130 == how to find middin elements in a given array 1 to 10

let number = [ 1,2,4,5,6,7 ,20]
let missingArr = []
let missingValue = (item)=>{
    let minvalue = Math.min(...item)
    let maxvalue = Math.max(...item)

    for(let i=minvalue;i<=maxvalue;i++){
        if(item.indexOf(i)<0){
            missingArr.push(i)
        }
    }
    return missingArr
}
console.log(missingValue(number));