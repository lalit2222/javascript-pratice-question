//200== reverse element an array

let arr = [1,1,2,3,4,4,43,2,]

let stringconvert = arr.toString()
let reverseArr =  stringconvert.split("").reverse().join("")
console.log(reverseArr);

// method==2

for(let i=arr.length-1;i>=0;i--){
  console.log(arr[i]);

}
