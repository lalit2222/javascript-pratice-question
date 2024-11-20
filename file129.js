// 129 ==what is difference between filter( ) and find( ) method in javascript

let names = [
    {name:"lalit", age: 19},
    {name:"pankaj", age: 17},
    {name:"gourav", age: 14},
    {name:"ayush", age: 11},
    {name:"yuvraj", age: 9},
    {name:"naira", age: 17},
    {name:"shivani", age: 21},
    {name:"tarun", age: 23},
    {name:"manoj", age: 17},
    {name:"lokesh", age: 24},
]

// let filterMethod =names.find((name)=>{
//     return name.age>17

    let filterMethod =names.filter((name)=>{
        return name.age>17

})
console.log(filterMethod);