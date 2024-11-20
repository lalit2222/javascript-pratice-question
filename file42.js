
// 42==program to find next greater elements in an arrays

function greaterEle(arr, n)
      {
  let item, i, j;
  for (i = 0; i < n; i++)
  {
    item = -1;
    for (j = i + 1; j < n; j++)
    {
      if (arr[i] < arr[j])
      {
        item = arr[j];
        break; c
      }
    }
  console.log(arr[i] + " -- " + item);

  }
}

let arr = [11, 13, 21, 3];
let n = arr.length;
greaterEle(arr, n);