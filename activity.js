// Start by creating a function called addTwoAndSeven.
// Inside your addTwoAndSeven function, return the sum of 2 and 7.
const addTwoAndSeven = () => {
  return 2 + 7;
}

// Declare a function called addThreeAndFour that returns the sum of 3 and 4.
// Then call the addThreeAndFour function inside a console.log to see the result.
const addThreeAndFour = () => {
  return 3 + 4;
}

console.log(addThreeAndFour());


// Declare a function called calculateSum that takes two parameters, num1 and num2.
function calculateSum(num1, num2) {
  return num1 + num2;
}
// Add a console.log that calls the calculateSum function with the arguments 2 and 5.
console.log(calculateSum(2, 5));  
//Add another console.log that calls the calculateSum function with the arguments 10 and 10.
console.log(calculateSum(10, 10)); 
//Below that console.log, add another console.log that calls the calculateSum function with the arguments 5 and 5.
console.log(calculateSum(5, 5));   

// Declare a function called calculateDifference that takes two parameters, num1 and num2.
function calculateDifference(num1, num2) {
  return num1 - num2;
}
// Start by adding a console.log that calls the calculateDifference function with the arguments 22 and 5.
console.log(calculateDifference(22, 5))
// Add a second console.log that calls the calculateDifference function with the arguments 12 and 1.
console.log(calculateDifference(12, 1))
// add a third console.log that calls the calculateDifference function with the arguments 17 and 9.  
console.log(calculateDifference(17, 9))

// Declare a function called calculateProduct that takes two parameters, num1 and num2.
function calculateProduct = (num1,num2) => {
  return num1 * num2;
}
// Add a console.log that calls the calculateProduct function with the arguments 13 and 5.
console.log(calculateProduct(13, 5));

// Declare a function called calculateQuotient that takes two parameters, num1 and num2.
function calculateQuotient(num1, num2) {
  if (num2 === 0) {
    return "Error: Division by zero";
  }
  return num1 / num2;
}
// Add a console.log that calls the calculateQuotient function with the arguments 7 and 11.
console.log(calculateQuotient(7,11));
// Add a console.log that calls the calculateQuotient function with the arguments 3 and 0.
console.log(calculateQuotient(3,0));

// Declare a function called calculateSquare that takes a num parameter and returns the square of num.
function calculateSquare(num) {
  return num ** 2;
// Add a console.log that calls the calculateSquare function with the argument of 2.
console.log(calculateSquare(2));
// Add another console.log that calls the calculateSquare function with the argument of 9.
console.log(calculateSquare(9));

// Declare a function called calculateSquareRoot that takes a num parameter and returns the square root of num.  
function calculateSquareRoot(num) {
  return Math.sqrt(num);
}
// Add a first console.log that calls the calculateSquareRoot function with the argument of 25.
console.log(calculateSquareRoot(25)); 
// Add a second console.log that calls the calculateSquareRoot function with the argument of 100.  
console.log(calculateSquareRoot(100));



