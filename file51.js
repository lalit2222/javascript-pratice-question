//51=== find duplicates elements in an arrays in javascript

let inputArr = [1,2,3,4,5,1,2,3,4]

let searchDuplicateArray = (item)=>{
      let sortedArr = item.slice().sort()
      let res = []
      for(let i=0;i<=sortedArr.length;i++){
            if(sortedArr[i+1]===sortedArr[i]){
                  res.push(sortedArr[i])
            }
      }
      return res
}
console.log(`the duplicate elements is ${searchDuplicateArray(inputArr)}`);