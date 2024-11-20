


// 115== write a program to print multiplication table

let num = 5;
let printTable = (item) => {
  for (let i = 1; i <= 10; i++) {
    let res = num * i;
    console.log(`${num} X ${num} = ${res}`);
  }
};
console.log(printTable(num));