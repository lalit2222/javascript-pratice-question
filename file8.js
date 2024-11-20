
//8 === longest  substring without repetition

function longestStr(item) {
    let n = item.length;
    let res = 0;

    for (let i = 0; i < n; i++) {
        let visit = new Array(256).fill(false);

        for (let j = i; j < n; j++) {
            if (visit[item.charCodeAt(j)] === true) {
                break;
            } else {
                res = Math.max(res, j - i + 1);
                visit[item.charCodeAt(j)] = true;
            }
        }
    }
    return res;
}

const item = "lalitmeen";
console.log(longestStr(item));
