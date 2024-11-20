// 87== first non repect charater in string
let inputStr = "lalitmeena";
let result = ""
for (let char of inputStr) {
  if (inputStr.indexOf(char) === inputStr.lastIndexOf(char)) {
    result = char;
    break;
  }
}

console.log(`non repect ${result}`);