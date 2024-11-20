// 135 == how to find vowels from string in javascript

   let  str = "lalit meena"
   let vowels = ['a','e','i','o','u']

   let count = 0   // only check
let countVowels = (item)=>{
    // let count = 0
    for(let letter of item){
        if(vowels.includes(letter)){
            count++
        }
    }
return count
}
    console.log(countVowels(str));
