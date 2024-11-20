//141 == how to make calculator in javascript

let operator = prompt("Enter the operator +,-,*,/")
let number1 = parseFloat( prompt("Enter the first number"))
let number2 = parseFloat(prompt("Enter the second number"))

if(operator=='+'){
    result= number1+number2

}
else if(operator=='-'){
    result= number1-number2

}
else if(operator=='*'){
    result= number1*number2

}
else if(operator=='/'){
    result= number1/number2

}
console.log(`${number1} ${operator} ${number1} = ${result}`);
