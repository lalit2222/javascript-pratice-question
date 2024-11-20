// 40=== program to sorted array of positive and negitive numbers

function comp(a, b) {
    if ((a > 0 && b > 0) || (a < 0 && b < 0) || (a > 0 && b < 0)) {
        return false;
    }
    if (a < 0 && b > 0) {
        return true;
    }
    if ((a === 0 && b < 0) || (a > 0 && b === 0)) {
        return false;
    }
    if ((a === 0 && b > 0) || (a < 0 && b === 0)) {
        return true;
    }
    return false;
    }

    function rearrange(arr, n) {
    arr.sort((a, b) => {
        if (comp(a, b)) {
        return -1;
        } else {
        return 1;
        }
    });
    }

    const arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
    const n = arr.length;
    rearrange(arr, n); let ans="";
    for (let i = 0; i < n; i++) {
    ans = ans + arr[i] + ' ';
    }
    console.log(ans);