// 150 == program to  print thr table of any user defined number using function in javascript

let table =  (number)=>{
    for(let i=1;i<=10;i++){
        let res = i*number
        console.log(`${number} x ${i} = ${res}`);

    }
}
table(3)