// 86== program to print fibonacci elements

let a = 0
let b =  1
for(let i=0;i<=10;i++){
  var tot = a+b
        b=a
        a=tot

}
console.log(tot);