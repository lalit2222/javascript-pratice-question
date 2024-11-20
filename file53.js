//53==find out maximum diffrence between elements in arrays
let inputArr = [1,2,3,4,65,5]
function maximunArr(){
      let max = inputArr[0]
      for(let i=0;i<=inputArr.length;i++){
            if(inputArr[i]>max){
                  max = inputArr[i]
            }
      }
      console.log(`the maximum value in array ${max}`);

}
maximunArr()

// method ==2
// let inputArr = [1,2,23,4,5,5]
// let maximunArr = (item)=>{
//       let max = item[0]
//       for(let i=0;i<=item.length;i++){
//             if(item[i]>max){
//                   max=item[i]
//             }
//       }
//  return max

// }
// console.log(maximunArr(inputArr));