// 54== find max and min number in array

let inputArr = [1,2,3,4,25,6]

let findMaxAndMin = (item)=>{
      let max = item[0]
      let min = item[0]
      for(let i=0;i<=item.length;i++){
            if(item[i]>max){
                  max=item[i]
            }
            else if(item[i]>min){
                  min=item[i]
            }
      }
      return `max ${max} and min ${min}`
}
console.log(findMaxAndMin(inputArr));