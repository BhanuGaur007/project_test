// escap charater

// let text = "One morning, when Gregor Samsa woke from troubled dreams";
// let text = "One morning, when \"Gregor\" Samsa woke from troubled dreams";
// let text = "One morning, when \'Gregor\' Samsa woke from troubled dreams";
// let text = "One morning, when \n Gregor Samsa woke from troubled dreams";
// let text = "One morning, when \t Gregor Samsa woke from troubled dreams";
// console.log(text)

// concat method

// let a = "hello";
// let b = "word";
// let c = "mike "
// // console.log(a + " " + b + " " + c);
// let res = a.concat(" ", b, " ", c);
// console.log(res);

// slice() method

// let text = "One morning, when Gregor Samsa woke from troubled dreams";
// let res = text.slice(13, 17);
// console.log(res);

// replace method replace()
// let text = "One morning, when Gregor Samsa woke from troubled dreams";
// let res = text.replace("morning", "evng");

// console.log(res);

// replace method replace()
// let text = "One morning, when Gregor Samsa woke from troubled dreams";
// let res = text.replaceAll("when Gregor Samsa", "testg")

// console.log(res);

// indexof() method
// let text = "One morning, when Gregor is  Samsa woke from troubled is dreams";
// // let res = text.indexOf("Gregor");
// let res = text.indexOf("is", 25)
// console.log(res);

// lastindexof() method
// let text = "One morning, when Gregor is  Samsa woke from troubled is dreams";
// // let res = text.indexOf("Gregor");
// let res = text.lastIndexOf("is")
// console.log(res);

// trim() method
// let text = "    hello word   ";
// let text1 = "    hello word   ";
// // let res = text.trim();
// // let res = text.trimStart()
// let res = text.trimEnd();
// console.log(res);


//uppercase () method + lower case () method
// let text = "    hello word   ";

// // let res = text.toUpperCase();
// let res = text.toLowerCase();
// console.log(res);


// let text = "One morning, when Gregor is  Samsa woke from troubled is dreams";
// // let res = text.includes("name");
// let res = text.includes("Samsa");

// console.log(res);



// Array []  -
// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// let arr = [];
// arr[0] = 30;
// arr[1] = 20;
// arr[2] = 40;
// arr[3] = 10;
// arr[4] = 50;
// console.log(typeof arr);


// let arr = new Array("10", "20", "30", "40", "50", 60, 70, 80);
// console.log(arr);
// console.log(typeof arr)


// index s variable axcess krna
// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let res = arr[4];
// console.log(res);


// change  the value  / replace the value

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// arr[2] = "mike"
// console.log(arr);


// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let res = arr[arr.length - 1];
// let res = arr[arr.length - 2];
// console.log(res);


// add the vlaue by using push method
// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// arr.push("mike");
// arr.push("hello");
// arr.push("test");
// arr.push(true);
// arr.push("27");
// console.log(arr)


// remove the array value
// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// arr.pop();
// console.log(arr);


// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// arr.shift("test");
// console.log(arr);

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// arr.unshift("apple");
// console.log(arr);


// convser Array in to string
// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let res = arr.toString();
// console.log(arr);
// console.log(res);



// let a = [1, 2, 3, 4];
// let b = [5, 6, 7, 8];
// let c = [9, 10, 11, 12];
// let d = [5, 6, 7, 8];
// let res = a.concat(b, c, d);
// console.log(res)



// splice() method (kaha add krna h kaha remove krna h )
//( 1st value index jaha add ya re,move krna h , 2nd remove krne k liye number dena h jitna remove krna h, 3rd value add krne k liye )
// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// arr.splice(3, 0, "elephant");
// console.log(arr);

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// arr.splice(3, 2, "elephant");
// console.log(arr);



// ArrayBuffer.isArrey() method // arrey ko check krne k liye
// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let res = Array.isArray(arr);
// console.log(res);

// //split() method
// let text = "helllo world , testing for split method "
// let res = text.split("l");
// console.log(res);


// join() method
// let fruits = ["mango", "orange", "apple", "graphs"]
// // let res = fruits.join();
// let res = fruits.join(" and ");
// console.log(res)



//multi dimensional array
// let arr = [
//   ["apple", "mango", "orange"], //0
//   ["iphone", "samsung", "vivo"], //1
//   ["BMW", "OD", "fortuner"] //2
// ];
// // console.log(arr[1][1]);
// console.log(arr[2][1]);


//Arrey.form() - convert string to arrey, each charater of the string divided in to a array .



// let arr = Array.from("mike");
// console.log(arr);

// let a = 10;
// let b = 20;
// let c = 30;
// let d = 40;
// let arr = Array.of(a, b, c, d);
// console.log(arr);

// let fruits = ["mango", "orange", "apple", "graphs"]
// let num = fruits.length;

// for (i = 0; i < num; i++) {
//   console.log(`element ${i} is ${fruits[i]}`);
// }

//function - 1 -  function decleartion -
//
// function greet() {
//   console.log("hello world");
// }
// greet(); // function call


//2 .- function expression
// let greet = function () {
//   console.log("hello world ")
// }
// greet()


// function add(a, b) { // perameters
//   console.log(a + b);
// }
// add(20, 30); // arguments


// function add(a, b) {
//   return a + b;
// }
// console.log(add(10, 30))


// global variable  and , local variable
// let car = "Audi";
// function add() {
//   let num = 10;
//   console.log(num);
//   console.log(car); // global variable h , inside the function call ho jayega
// }
// add();
// console.log(num); // local variable h isi liye outside the function call nhi hoga



//setTimeout () method;
// syntx -  setTimeOut(function, timeInMiliSecond);



// setTimeout(function greet() {
//   console.log("hello world ");
// }, 3000);


//anonymous  -  esa  function jis ka koi naam n ho
// function(){
//   console.log("hello world ")
// }

// setTimeout(function () {
//   console.log("hello world");
// }, 4000);


// IIFE -  Imedietly invoked function expression
// IIFE  anonymous ka advance version h , ise hm direct use kr skte h
//()()

// (function () {
//   console.log("hello World ")
// })();

// object -  data key and value k pair m rkhte h
// let person = {
//   firstName: "Mike",
//   lastName: "allen",
//   car: "ford",
//   id: "101",
//   email: "mike@gmail.com",
//   city: "noida",
// };
// console.log(person);
// console.log(person.city);
// console.log(person['firstName']);
// console.log(person["firstName"]);



// second method object creat krne ka

// let person = {};
// person.firstName = "mike";
// person.lastName = "alen";
// person.car = "ford";
// person.id = "101";
// person.email = "mike@gmail.com";

// console.log(person);



// let person = new Object();
// person.firstName = "mike";
// person.lastName = "alen";
// person.car = "ford";
// person.id = "101";
// person.email = "mike@gmail.com";
// console.log(person);


// let person = {
//   firstName: "Mike",
//   lastName: "allen",
//   car: "ford",
//   id: "101",
//   email: "mike@gmail.com",
//   city: "noida",
// };

// // person.firstName = "elon";
// // delete person.firstName;
// console.log("email" in person); // to check email h ya nhi, agr email nhi hoga to false dega hoga to true dega , same for all

// console.log(person);


// let person = {
//   firstName: "Mike",
//   lastName: "allen",
//   car: "ford",
//   id: "101",
//   email: "mike@gmail.com",
//   city: "noida",
// };

// // for (let key in person) {
// //   console.log(key)
// // }
// for (let key in person) {
//   // console.log(key)
//   // console.log(person[key])
// }


// let person = {
//   firstName: "Mike",
//   lastName: "allen",
//   car: "ford",
//   id: "101",
//   email: "mike@gmail.com",
//   city: "noida",
//   greet: function () {
//     console.log("hello form function")
//   }
// };

// person.greet();





// make a arrey that have 10 element , print the all element with the help of for loop;

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// // console.log(arr);

// // let res = arr[arr.length - 1];
// let res = arr.length;

// for (let i = 0; i < res; i++) {
//   // console.log(`${arr[i]} `);
//   console.log(arr[i]);
//   // console.log(`lenth of the arrey : ${arr[i]} `);
//   // console.log(res[i]);
// }
















//  let arr= [2,3,4,5,6];
//  let arr1 =[1,7,5,3,2];
//  let res = [1,2,3,4,5,6,7]




// let firstName = "Bhanu";
// console.log(typeof firstName);
// let arr = [20, 30, 50, 60, 70];
// let res = arr.length;
// for (i = 0; i < res; i++)
//   console.log(arr[i])






// let str = "bhanu prakash gaur";
// let res = str.length;
// console.log(res);res

















// 17531132001100
