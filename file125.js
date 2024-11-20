// 125 == how to find max  value in a given arrays in javascript

let arrNum = [ 1,3,5,7,9,11,13,15,17,19]
let maxArr = (arr)=>{
    return arr.reduce(function(pre,cur){
        return pre>cur?pre:cur

    })

}
console.log(maxArr(arrNum));