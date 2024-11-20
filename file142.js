// 142 == how to compare two arrays are equal or not in javascript

let arr1 = [1,3,5,7,9 ]
let arr2 = [9,7,5,3,1]
let isarrSame = arr1.length==arr2.length && arr1.every((curVal)=>{
    if(arr2.indexOf(curVal)>-1){
        return (curVal=[arr2.indexOf(curVal)])
    }
})
console.log(isarrSame);

// let isarrSame = arr1.length==arr2.length && arr1.every((curVal)=>arr2.includes(curVal))
// console.log(isarrSame);