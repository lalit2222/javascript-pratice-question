
// 171== print the praymid pattern
for (let i = 1; i <= 5; i++) {
    let str = "* ";
    let space = '  ';
    console.log(space.repeat((5 - i)) + str.repeat(i * 2 - 1)); }

// method==2
// let num = 5

// let count = ""

// for (let i = 1; i <=num; i++) {

//     for(let j=1;j<=5-i;j++){
//         count = count + "  "  // two space
//     }
//     for(let k=1;k<=((2*i)-1);k++){
//         count = count +" *"
//     }
//     count = count + "\n"
// }
// console.log(count);