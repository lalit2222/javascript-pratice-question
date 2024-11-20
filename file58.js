//58===how to insert elements in an array at specific position

var arr = [];
arr[0] = "lalit";
arr[1] = "pankaj";
arr[2] = "ayush";
arr[3] = "manoj";
arr[4] = "shiva";

console.log(arr.join());
arr.splice(2, 0, "gourav");
console.log(arr.join());