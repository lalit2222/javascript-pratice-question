
//134==  how to find prime number in javascript

let number = prompt("enter the number")
if(number==1){
    console.log(`${number} is not prime neither number`);

}
else if(number<1){
    console.log(` prime number is ${number} not possible `);

}
else{
    for(let i=2;i<number;i++){
        if(number%i==0){
            var result = `${number} is not a prime number`
        }
        else{
            var result = `${number} is prime number`
        }
    }
    console.log(result);

}