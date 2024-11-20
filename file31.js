//31=== check given string  is panagram or not

function checkPanagram(item){
    item = item.toLowerCase()
    let set = new Set()
    for (let char of item) {
        if(char>="a"&&char<="z"){
            set.add(char)
        }

    }
    return set.size ===26
}
let str = "lalit meena is a web developer"
if(checkPanagram(str)==true){
    console.log(`${str} is a panagram`);

}
else{
    console.log(`${str} is not panagram`);

}