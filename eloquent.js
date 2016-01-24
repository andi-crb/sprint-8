//Exercise 1 - minimum

function min(arg1, arg2){
return Math.min(arg1, arg2);
};
console.log(min(0, 10));
console.log(min(0, -10));

//Exercise 2 - recursion

function isEven(arg){
  var number = arg;
  if (number === 0) {
    return true;
  }
    else if (number == 1) {
      return false;
    }
    else {
      number = number - 2;
      return isEven(number)
    }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// revised version to accommodate negative inputs

function isEven(arg){
  var number = Math.abs(arg);
  if (number === 0) {
    return true;
  }
    else if (number == 1) {
      return false;
    }
    else {
      number = number - 2;
      return isEven(number)
    }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

//Exercise 3 Bean Counting

function countBs(string){
  var number = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] === "B") {
      number = number + 1;
    }
  }
return number;  
}

console.log(countBs("BBC"));

//revised version

function countChar(string, letter){
  var number = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      number = number + 1;
    }
  }
return number;  
}

console.log(countChar("kakkerlak", "k"));