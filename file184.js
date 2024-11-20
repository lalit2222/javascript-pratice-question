//184===find sum of digit of a numbers

function sumOfDigit(item) {
      return item.toString().split("")
          .reduce((sum, digit) =>
              sum + parseInt(digit), 0);
  }

  console.log(sumOfDigit(777));