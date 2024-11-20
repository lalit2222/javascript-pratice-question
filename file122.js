// 122= rempve duplicates in arrays

let inputaArr = "lalitmeena";

let removeDuplicateString = (item) => {
  let count = "";
  for (let char of item) {
    if (count.includes(char) == false) {
      count = count + char;
    }
  }
  return count;
};
console.log(removeDuplicateString(inputaArr));