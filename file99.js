
// 99 = fibonacci series

let a = 0
let b = 1
for(let i=0;i<10;i++){
    let tot = a+b
    a=b
    b=tot
    console.log(tot);
}