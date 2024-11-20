//48==find majority elements in an arrays

const arr1 = [2, 2, 3, 4, 2, 2, 5];
function findMajority(item)
{

    for (let i = 0; i < item.length; i++) {
        let count = 0;
        for (let j = 0; j < item.length; j++)
        {
            if (item[i] === item[j]) {
                count++;
            }
        }
        if (count > item.length / 2)
        {
            return item[i];
        }
    }
    return null;
}

console.log(findMajority(arr1));