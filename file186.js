// 186==check wheather given number is perfect square or not
let inputNum = 49;

function isPerfectSquare(inputNum) {

      if (inputNum >= 0) {
          let sr = Math.floor(Math.sqrt(inputNum));

          return (sr * sr === inputNum);
      }
      return false;
  }

  if (isPerfectSquare(inputNum))
      console.log("Yes");
  else
      console.log("No");