//34=== program to get first letter of each word in string

let firstLetter = (item)=>{
    let newStr = item.split(" ");

    for(let i=0;i<newStr.length;i++){
        let newVal = newStr[i][0];
        let newArr = newVal.toUpperCase()
        console.log(newArr);

    }
};
firstLetter("lalit meena is")