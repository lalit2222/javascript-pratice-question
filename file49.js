//49==find repeating elements in an arrays

let inputArr = [2,3,4,5,5,6,2]
let repetingArrays = (item)=>{
      let sortArray  = item.slice().sort()
      let results = []
      for(let i=0;i<sortArray.length;i++){
            if(sortArray[i+1]===sortArray[i]){
                  results.push(sortArray[i])
            }
      }
      return results
}
console.log(`the repeating in array ${inputArr} are ${repetingArrays(inputArr)}`);