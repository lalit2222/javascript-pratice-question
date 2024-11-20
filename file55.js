// 55== move all zero  to end of array
let inputaArr = [1,2,3,0,0,5,0,4,3,0]
let moveAllZero = (item)=>{
      let noZero = 0
      for(let i=0;i<item.length;i++){
            if(item[i]!=0){
                  item[noZero]=item[i]
                  noZero++
            }
      }
      for(let i=noZero;i<item.length;i++){
            item[i]=0
      }
      return item
}

console.log(moveAllZero(inputaArr));