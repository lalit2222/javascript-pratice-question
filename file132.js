// 132 ==hoe to find factorial of a given number in javascript

let inputNum=prompt("pleasse enter a number")
let fact = 1;

    if(inputNum<0){
        console.log(`factorial od ${inputNum} is not possible`);

    }
    else{
        for(let i=1;i<inputNum;i++){

        fact = fact*i
        }
        console.log(`factorial of ${inputNum} is ${fact}`);

    }