//27=== find majority elements in an arrays in javascript

let arr = [1,2,3,1,1,2,1,1,2,]
function majorityArr (item){
    let majfloor = Math.floor(arr.length/2)
    let map = {}
    for(let i=0;i<=arr.length;i++){
        let value = arr[i]
        map[value]=map[value]+1||1
        if(map[value]>majfloor){
            return value;
        }
    }
}

console.log(majorityArr(arr));