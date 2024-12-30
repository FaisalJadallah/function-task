function checkage(age) {
    console.log(age >= 18 ? "The user is Adult" : "The user is Minor");
  }
  
  checkage(20);
  checkage(15);
  
  function NumberReverse(num) {
    let rev = 0;
    for (rev; num != 0; num = (num / 10) | 0) {
      rev = rev * 10 + (num % 10);
    }
    return rev;
  }
  
  let x = 532443;
  console.log(NumberReverse(x));
  
  let arraynumber = [5, 3, 2, 4, 4, 3];
  rev(arraynumber);
  function rev(arraynumber) {
    let revarray = [];
    for (let i = arraynumber.length - 1, j = 0; i >= 0; i--, j++) {
      revarray[j] = arraynumber[i];
    }
    console.log(revarray);
  }
  
  for (let i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
      console.log(i + " This Number is EVEN");
    } else if (i % 2 == 1) {
      console.log(i + " This Number is ODD");
    }
  }
  
  function evennumberdash(input) {
    let numberString = input.toString();
    let result = "";
  
    for (let i = 0; i < numberString.length; i++) {
      result += numberString[i];
      if (
        i < numberString.length - 1 &&
        parseInt(numberString[i]) % 2 === 0 &&
        parseInt(numberString[i + 1]) % 2 === 0
      ) {
        result += "-";
      }
    }
  
    return result;
  }
  
  let inputDash = "025468";
  let outputDash = evennumberdash(inputDash);
  console.log(outputDash);
  
  function sortingword(input) {
    let lowercase = input.toLowerCase();
    let sortingString = lowercase.split("").sort().join("");
  
    return sortingString;
  }
  
  let input = "Orange";
  let output = sortingword(input);
  console.log(output);