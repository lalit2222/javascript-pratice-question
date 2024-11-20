//45=== stack implement in javascript

function reverse(arr, n) {
  const st = [];

  for (let i = 0; i < n; i++) {
    st.push(arr[i]);
  }

  let i = 0;

  while (st.length)
  {

    const top = st.pop();

    arr[i] = top;

    i++;
  }

  for (let i = 0; i < n; i++) {
    console.log(arr[i] + " ");
  }
}

const n = 4;

const arr = [100, 200, 300, 400];

reverse(arr, n);