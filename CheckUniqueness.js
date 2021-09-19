// const arrOne = [1, 4, 6, 2, 1];
// console.log(checkUniqueness(arrOne));
// false
// const arrTwo = [1, 4, 6, 2, 3]
// console.log(checkUniqueness(arrTwo));
// true


function checkUniqueness(array) {
    const arr = array.filter((value, index) => array.indexOf(value) === index);
    if (array.length !== arr.length) {
      console.log("false");
    } else {
      console.log("true");
    }

    
  }
  const arrOne = [1, 4, 6, 2, 1];
  checkUniqueness(arrOne);