//131 == how to find even or odd number in a given array in javascript

let number = [ 2,2,3,4,4,5,6,5,9]
let even = number.filter((item)=>{
    return item%2===0
})
let odd = number.filter((item)=>{
    return item%2==!0
})
console.log(even);
console.log(odd);