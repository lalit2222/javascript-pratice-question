
// 62==how to diffrence between two dates

let date1 = new Date("01/16/2024");
let date2 = new Date("01/26/2024");

let diffrenceTime =
    date2.getTime() - date1.getTime();

let diffrenceDate =
    Math.round
        (diffrenceTime / (1000 * 3600 * 24));

console.log(`Total number of days between dates:\n ${ date1.toDateString()} and ${  date2.toDateString()}  is: ${diffrenceDate} days `);