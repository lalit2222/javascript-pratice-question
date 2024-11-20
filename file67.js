// 67==check wheather given number is perfect square or not
const x = 49;

function isPerfectSquare(x) {

      if (x >= 0) {
          let sr = Math.floor(Math.sqrt(x));

          return (sr * sr === x);
      }
      return false;
  }

  if (isPerfectSquare(x))
      console.log("Yes");
  else
      console.log("No");