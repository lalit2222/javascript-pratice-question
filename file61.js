
//61==program to print even length word in a string

function wordLength(item) {
      if (item.length % 2 == 0) {
          return item.slice(0, item.length / 2);
      }
      return item;
  }

  console.log(wordLength("Python"));
  console.log(wordLength("JavaScript"));
  console.log(wordLength("PHP"));