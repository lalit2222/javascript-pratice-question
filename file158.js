// 158==the first duplicate occurence in arrays

num = [1, 2, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 9];

target = 5;

for (let i = 0; i < num.length; ++i) {

    if (num[i] === target) {
        console.log("First index of " + target + " is: " + i
        );
        return;
    }
}

console.log(target + " is not present in the given array");