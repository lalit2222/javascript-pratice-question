// 112== write a code to print fyload triangle

let num = 5
let count = ""
for(let i=1;i<=num;i++){
    for(let j=1;j<=5-i;j++){
        count+="  "

    }
    for(let k=1;k<=((2*i)-1);k++){
        count+=`${k} `
    }
    count+="\n"
}
console.log(count);