//1 .  check the number , number is positive , negative or zero

// let checkNumber = "1";
// if (checkNumber === 0) {
//   console.log("number is  - : zero " + checkNumber)
// }
// else if (checkNumber < 0) {
//   console.log("number is  - : Negative " + checkNumber)
// }
// else {
//   console.log("number is  - : Positive " + checkNumber)
// }

// 2.  check number is even or odd

// let checkNumber = 0;
// if (checkNumber % 2 == 0) {
//   console.log("number is even " + checkNumber)
// } else {
//   console.log("number is odd " + checkNumber)
// }


// second option

// let checkNumber = 3;
// if (checkNumber % 2 != 0) {
//   console.log("number is odd " + checkNumber)
// } else {
//   console.log("number is even " + checkNumber)
// }


//3  check if a number is divisible by 3, 5 and both

// let num = 10;
// if (num % 3 == 0 && num % 5 == 0) {
//   console.log("number divisible by 3 and 5 both -: " + num)
// }
// else if (num % 3 == 0) {
//   console.log("number divisible by 3  -: " + num)
// }
// else if (num % 5 == 0) {
//   console.log("number divisible by 5 -: " + num)
// }

// else {
//   console.log("number not divisible by 3 and  5 :- " + num)
// }



//4  find the greatest of three number

// let numA = 8, numB = 8, numC = 8;

// if (numA > numB && numA > numC) {
//   console.log("Number A is greatest number -: " + numA)
// }
// else if (numB > numA && numB > numC) {
//   console.log("Number B is greatest number -: " + numB)
// }
// else if (numA == numB || numA == numB) {
//   console.log("Number A is equal number -: " + numA)
// }
// else {
//   console.log("Number C is greatest number -: " + numC)
// }


//5  check if a number lies between 1 and 100
// let num = 0;
// if (num >= 1 && num <= 100) {
//   console.log("number lies between 1-100 " + num)
// }
// else {
//   console.log("number not lies between 1-100 " + num)
// }

//6 print 1-10 number

// for (let count = 1; count <= 10; count++) {
//   console.log(count);
// }

//7 print 10 - 1 number

// for (let count = 10; count >= 1; count--) {

//   console.log(count)
// }

// 8. print all even numbers form 1 - 50;
// assignment 9-  sum of even number -




// n=3
// *
// **
// ***

// n=5
// *
// **
// ***
// ****
// *****
// let i;
// let n = 6;
// for (i = 1; i <= n; i++) {

//   for (let j = 1; j <= i; j++) {
//     document.writeln("* ")

//   }
//   document.writeln("<br>")
// }


// n=3
// 1
// 1 2
// 1 2 3

// let num = 5;
// for (let i = 1; i <= num; i++) {

//   for (j = 1; j <= i; j++) {
//     document.writeln(j);
//   }
//   document.writeln("<br>")
// }





// 1 2 3
// 1 2
// 1
// let num = 3;
// for (let i = num; i >= 1; i--) {


//   for (j = 1; j <= i; j++) {
//     document.writeln(j)
//   }
//   document.writeln("<br>")
// }

//     1
//   1 2
// 1 2 3


// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1
// let num = 5;
// for (let i = 1; i <= num; i++) {


//   for (let j = 1; j <= num - i; j++) {
//     document.writeln(" ");
//   }
//   // number reverse
//   for (let k = i; k >= 1; k--) {
//     document.writeln(k);
//   }
//   document.writeln("<br>")
// }


//     1
//   1 2
// 1 2 3

// let num = 3;
// for (let i = 1; i <= num; i++) {


//   for (let j = 1; j <= num - i; j++) {
//     document.writeln("*")

//   }
//   for (let j = i; j >= 1; j--) {
//     document.writeln(j)
//   }
//   document.writeln("<br>")
// }

// let rows = 3;

// for (let i = 1; i <= rows; i++) {
//   let pattern = "";

//   // Spaces
//   for (let j = 1; j <= rows - i; j++) {
//     pattern += "  ";
//   }

//   // Numbers
//   for (let k = 1; k <= i; k++) {
//     pattern += k + " ";
//   }

//   console.log(pattern);
// }

// let rows = 10;

// for (let i = 1; i <= rows; i++) {
//   let pattern = "";

//   for (let j = 1; j <= rows - i; j++) {
//     pattern += "&nbsp;&nbsp;&nbsp";
//   }

//   for (let k = 1; k <= i; k++) {
//     pattern += k + " ";
//   }

//   document.writeln(pattern + "<br>");
// }




