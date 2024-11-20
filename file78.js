// 78== check wheather an elements is present on two arrays

let arr1 = ['a','b','c','d','e']
let arr2 = ['l','g','l','f','r']

function compareTwoArray(arr1,arr2){
      for(let i=0;i<arr1.length;i++){
            for(let j=0;j<arr2.length;j++){
                  if(arr1[i]==arr2[j]){
                        return true
                  }
            }
      }
      return false
}
console.log(compareTwoArray(arr1,arr2));