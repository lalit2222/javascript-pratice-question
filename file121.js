// 121==largest number factorial in arrays
let num = [1, 2, 3, 4, 5, 6, 7, 9, 10];
let res = Math.max(...num);

for (let i = 0; i <= res; i++) {
  if (res % i == 0) {
    console.log(i);
  }
}