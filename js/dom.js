// dom  -
// dom tree -

//


// select element by id

// let elm = document.getElementById("head");
// console.log(elm)

// select element by class Name
// let elm = document.getElementsByClassName("din")
// console.log(elm)

// select element by tag Name
// let elm = document.getElementsByTagName("h1")
// console.log(elm)

//let elm = document.querySelector("h1");

// let elm = document.querySelectorAll("h1")
// console.log(elm);


// select parent Element

// let childElm = document.getElementById("l1");

// console.log(childElm);

// let parent = childElm.parentElement;
// console.log(parent);


// select child Element


// let parent = document.getElementById("ul");
// console.log(parent);
// // let child = parent.firstElementChild;
// // let child = parent.lastElementChild;
// let child = parent.children;
// console.log(child);


// select sibling  Element

// let elm = document.getElementById("l1");
// // let node = elm.previousSibling;
// // let node = elm.previousElementSibling;
// let node = elm.nextElementSibling.nextElementSibling;
// console.log(node);



// inner html

// let elm = document.getElementById("l1");
// let res = elm.innerHTML;
// console.log(res);


// let elm = document.getElementById("l1");
// elm.innerHTML = "<h1>this is heading 1</h1>";
// elm.innerHTML = "<span>Bhanu gaur</span>";



// create and append element
// let parent = document.getElementById("ul");

// // create element
// let newElm = document.createElement("h1");
// // add class in to new element
// newElm.className = "din";
// // add id in to new element
// newElm.id = "head";

// // create text that will be show in new element
// let text = document.createTextNode("this is heading 1");
// // jo text h ab use element m dalna h
// newElm.appendChild(text);
// // element ko ul k andr dalna h
// parent.appendChild(newElm);


// let parentID = document.getElementById("parent");

// let para = document.createElement("p");
// // let text = document.createTextNode("This is text of peragraph");
// para.textContent = "Bhanu Gaur";

// para.appendChild(text);
// parentID.appendChild(para);

// document.body.appendChild(para)


// insertBefore() Method
// Syntax -
// insertBefore(newLm,position)

// let parent = document.getElementById("ul");
// let newElm = document.createElement("h1");
// newElm.textContent = "this is heading ";
// let position = parent.firstElementChild;

// parent.insertBefore(newElm, position);
// let parent = document.getElementById("menu");
// // first child ko select krne k liye
// let elm = parent.firstElementChild;
// // first child ko remove krne k liye
// parent.removeChild(elm);


// clone element
// let parent = document.getElementById("menu");
// let cloneElm = parent.cloneNode(true);
// cloneElm.id = "mobile-menubar";
// document.body.appendChild(cloneElm)


// replace element 2 setember 26
// let parent = document.getElementById("menu");
// let newElm = document.createElement("h1");
// newElm.textContent = "Service";
// let position = parent.firstElementChild.nextElementSibling.nextElementSibling;
// parent.replaceChild(newElm, position);


// insertAdjacentelement
// let parent = document.getElementById("box");
// let newElm = "<p> This is peragraph </p> ";
// // parent.insertAdjacentHTML('beforebegin', newElm);
// // parent.insertAdjacentHTML('afterbegin', newElm);
// // parent.insertAdjacentHTML('beforeend', newElm);
// parent.insertAdjacentHTML('afterend', newElm);



// add atribute
// let elm = document.getElementsByTagName('h1');




// // let elm = document.getElementById("h1");
// elm.setAttribute("class", "din")


// let elm = document.getElementById('h1');
// let value = elm.getAttribute("class");
// console.log(value)



// let elm = document.getElementById('h1');
// elm.removeAttribute("class")

// let elm = document.getElementById('h1');
// elm.setAttribute("id", "bhanu")


// checking attribute
// let elm = document.getElementById("h1");
// let value = elm.hasAttribute("class");
// console.log(value)


// adding inline css using js

// let elm = document.getElementById("h1");
// elm.style.cssText = "height: 150px;width: 150px;background-color: blue;margin: 10px;"

// let elm = document.getElementById("h1");
// elm.setAttribute("style", "height: 150px;width: 150px;background-color: blue;margin: 10px;")


// let elm = document.getElementById("h1");
// elm.style.color = "gray";
// elm.style.backgroundColor = "blue";


// box bnanan h  - hight weight deni h js s , text center rkhna h


// let elm = document.getElementById("box");
// elm.style.width = "500px";
// elm.style.height = "500px";
// elm.style.backgroundColor = "red";
// elm.style.color = "white";
// elm.style.textAlign = "center";
// elm.style.display = "flex";
// elm.style.justifyContent = "center";
// elm.style.alignItems = "center";
// // elm.style.margin = "auto";
// elm.style.position = "absolute";
// elm.style.left = "50%";
// elm.style.top = "50%";
// elm.style.transform = "translate(-50%, -50%)";

// get css File
// let elm = document.getElementById("head");
// let result = getComputedStyle(elm);
// console.log(result.color)
// console.log(result.fontSize)
// console.log(result.border)


// // adding clsss
// let elm = document.getElementById("head");
// elm.classList.add("din");

// remove clsss
// let elm = document.getElementById("head");
// elm.classList.remove("din");

// replace clsss
// let elm = document.getElementById("head");
// elm.classList.replace("padding", "din");



// checking class
// let elm = document.getElementById("head");
// let res = elm.classList.contains("din");
// console.log(res)

// toggle method -  jo class di h hmne aur vh html code m nhi h to use add kr dega agr di hui class html m h to use remove kr dega


// let elm = document.getElementById("head");
// elm.classList.toggle("din")

// height and width of element
// let elm = document.getElementById("head");
// let width1 = elm.offsetWidth;
// let width2 = elm.clientWidth;
// let height1 = elm.offsetHeight;
// let height2 = elm.clientHeight;
// console.log(width1);
// console.log(width2);
// console.log(height1);
// console.log(height2);


// dom events  -  click krne pr , hover krne pr ky hoga

// function clickBox() {
//   console.log("box was clicked");
//   alert("clicked")
// }

// let elm = document.getElementById("head");
// by annonimous function -

// elm.addEventListener("click", function () {
//   console.log("testung f")
// })


// normal function
// elm.addEventListener("click", clickBox);
// function clickBox() {
//   console.log("box was clicked");
// }

// multiple event

// let box = document.getElementById("head");


// box.addEventListener("click", function () {
//   console.log("clicked")
//   box.style.backgroundColor = "orange";
//   box.style.zoom = "1.2";
//   box.style.transition = "0.4s"
// });
// box.addEventListener("mouseover", function () {
//   console.log("mouse hover");
//   box.style.backgroundColor = "blue";
//   box.style.zoom = "1.2";
//   box.style.transition = "0.4s"
// });
// box.addEventListener("mouseout", function () {
//   console.log("mouse out");
//   box.style.backgroundColor = "yellow";
//   box.style.zoom = "1";
//   box.style.transition = "0.4s"
// });
// box.addEventListener("dblclick", function () {
//   console.log("db click")
//   box.style.backgroundColor = "green";
//   box.style.zoom = "1.2";
//   box.style.transition = "0.4s"
// })



// remove event -
// let box = document.getElementById("head");
// box.addEventListener("click", click1);
// box.addEventListener("click", click2);
// function click1() {
//   console.log("click1")
// }
// function click2() {
//   console.log("click2")
// }
// box.removeEventListener("click", click1);



// event bubling and event capturing
// event bubling  - by default false value
// event capturing  -  value  true


// let parent = document.getElementById("container");
// let box = document.getElementById("box");
// let btn = document.getElementById("btn");

// parent.addEventListener("click", parentClick, false);
// box.addEventListener("click", boxClick, false);
// btn.addEventListener("click", btnClick, false);
// document.body.addEventListener("click", bodyClick, false);
// parent.addEventListener("click", parentClick, true);
// box.addEventListener("click", boxClick, true);
// btn.addEventListener("click", btnClick, true);
// document.body.addEventListener("click", bodyClick, true);

// function parentClick() {
//   console.log("parent click")
// };
// function boxClick() {
//   console.log("box click")
// };
// function btnClick() {
//   console.log("btn click")
// };
// function bodyClick() {
//   console.log("body click")
// };


// BOM(brawser object model) -
// 1 - window object
//2 -  history
// 3 - screen
// 4 - navigator
// 5 - location


// console.log("hello world");
// window.console.log("hello world");

// console.log(history);
// console.log(screen);
// console.log(screen.height);
// console.log(navigation);
// console.log(location);


// let imp = document.getElementById("imp");
// imp.addEventListener("keyup", function (event) {
//   console.log("key up " + event.key)
// })
// imp.addEventListener("focus", focusImp);
// imp.addEventListener("blur", blurImp);

// function focusImp() {
//   console.log("focus ")
//   imp.style.backgroundColor = "red"
// }

// function blurImp() {
//   console.log("blus ")
//   imp.style.backgroundColor = "yellow"
// }

//box -
// Height
// width
// boder
// backgndcolor - done
// Text - this is box type


// 2 btn bnane h -
// 1 btn click pr - sari given property chnage
// text center , padding add hona chahiye
// 2nd btn s by default phle jese hona chahiye

// let box = document.getElementById("box");
// box.style.backgroundColor = "blue";
// box.style.height = "30vh";
// box.style.width = "30vw";
// box.style.border = "2px solid black";
// box.style.color = "white";
// box.style.padding = "10px";
// box.style.textAlign = "center";


// let peragraph = document.createElement("p")
// let text = document.createTextNode("This is box text");
// peragraph.id = "textColor";
// peragraph.appendChild(text);
// box.appendChild(peragraph);


// let btn1 = document.createElement("button");
// btn1.id = "btn1";
// let btnText1 = document.createTextNode("Change");
// btn1.appendChild(btnText1);
// box.appendChild(btn1);


// let btn2 = document.createElement("button");
// btn2.id = "btn2";
// let btnText2 = document.createTextNode("Reset");
// btn2.appendChild(btnText2);
// box.appendChild(btn2);



// btn1.addEventListener("click", btnChnage);
// btn2.addEventListener("click", btnREset);

// function btnChnage() {
//   btn1.style.backgroundColor = "red";
//   btn1.style.color = "white";
//   box.style.backgroundColor = "black";
//   box.style.height = "40vh";
//   box.style.width = "40vw";
//   box.style.padding = "20px";
//   box.style.textAlign = "center";
//   box.style.border = "5px solid red"
//   btn2.style.backgroundColor = "";
//   btn2.style.color = "";
// }
// function btnREset() {
//   box.style.backgroundColor = "blue";
//   box.style.height = "30vh";
//   box.style.width = "30vw";
//   box.style.border = "2px solid black";
//   box.style.color = "white";
//   box.style.padding = "10px";
//   box.style.textAlign = "center";
//   btn1.style.backgroundColor = "";
//   btn1.style.color = "";
// }


// preventDefault ()

// let link = document.getElementById("link");
// link.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("Link CLicked")
// })


// set setTimeout and settime interval

// setTimeout(function () {
//   console.log("hello world")
// }, 5000);


// setInterval(function () {
//   console.log("bhanu gaur")
// }, 2000);

// clearInterval
// let btn = document.getElementById("btn");
// let res = setInterval(function () {
//   console.log("bhanu gaur")
// }, 2000);
// btn.addEventListener("click", function () {
//   clearInterval(res);
// })


// location.assign() , and replce method
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  // location.assign("https://www.netflix.com/in/")
  // location.reload("https://www.netflix.com/in/")
  // location.replace("https://www.netflix.com/in/");  
})


// arrow function -  jaha bhi chhota function ho ya call back function(function with in function) ho waha use krenge

// let greet = () => {
//   console.log("hello world");
// }
// greet();

// let greet = () => console.log("hello world");
// greet();


// perameter pass

// let add = (a, b) => console.log(a + b);
// add(10, 20);

// map method
// let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // let res = arry.map((val) => val + 10)
// let res = arry
//   .map((val) => val + 10)
//   .map((val) => val * 2)
//   .map((val) => val / 2)
// console.log(res);
// console.log(arry);


// map object - ignore the duplicate value , here india given 2 times so ignore last india
// let obj = new Map();
// obj.set("IN", "India");
// obj.set("US", "United State");
// obj.set("FR", "France");
// obj.set("IN", "India");
// console.log(obj)

// for (let key of obj) {
//   console.log(key)
// }

// for (let [key, value] of obj) {
//   console.log(key + "->" + value);

// }

// for ech method
// let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arry.forEach((val) => console.log(val));

// let arry = [
//   {
//     id: 101,
//     email: "bhanugaur007@gmail.com",
//   },
//   {
//     id: 102,
//     email: "bhanugaur007@gmail.com",
//   },
//   {
//     id: 103,
//     email: "bhanugaur007@gmail.com",
//   },
//   {
//     id: 104,
//     email: "bhanugaur007@gmail.com",
//   },
//   {
//     id: 105,
//     email: "bhanugaur007@gmail.com",
//   },
//   {
//     id: 106,
//     email: "bhanugaur007@gmail.com",
//   },

// ]
// arry.forEach((val) => console.log(val.id));
// arry.forEach((val) => console.log(val.email));


// filter method
// let arry = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// let res = arry.filter((val) => val > 40);
// console.log(res);
// console.log(arry);




// let arry = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// let res = arry
//   .map((val) => val * 2)
//   .filter((val) => val > 40);
// console.log(res);
// console.log(arry);
// console.log(arry);


// reduce method reduce() -  reduce kr k ek arrey m convert krta h
// sntax -
// reduce(function(total, currentValue),initialVlaue);

// let arry = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// let sum = arry.reduce(function (total, currentValue) {

//   console.log(`Total : ${total} and current value : ${currentValue} `);
//   return total + currentValue;

// }, 0);
// console.log(sum);


// let cart = [
//   {
//     itemName: "Iphone 18 pro max",
//     price: 290000
//   },
//   {
//     itemName: "Iphone 18 pro",
//     price: 210000
//   },
//   {
//     itemName: "Iphone 17 pro max",
//     price: 180000

//   },
//   {
//     itemName: "Iphone 17 pro",
//     price: 110000

//   },
// ]
// const res = cart.reduce((total, currentValue) => total + currentValue.price, 0);
// const res = cart.reduce((total, currentValue) => total + currentValue.itemName, 0);
// console.log(res);


// let student = [
//   {
//     name: "Mike",
//     age: 20,
//     location: "torrento"
//   },
//   {
//     name: "Villey",
//     age: 20,
//     location: "america"
//   },
//   {
//     name: "Alien",
//     age: 30,
//     location: "new york city"
//   },
//   {
//     name: "Elon",
//     age: 33,
//     location: "Ottwa"
//   },
// ]
// let res = student.find(val => { return val.name === "Mike" })
// let res = student.find(val => { return val.age === 20 })

// console.log(res)


// find index method
// let arrey = [20, 22, 19, 15, 25, 30];
// let res = arrey.findIndex(val => { return val > 15 });
// let res = arrey.findIndex(val => { return val > 20 });
// // let res = arrey.findIndex(val => { return val > 34 });
// console.log(res)

// spread operator  - (...)
// let a = [1, 2, 3, 4];
// let b = [5, 6, 7, 8];
// let c = [9, 10, 11, 12];
// let res = [...a];
// console.log(...a, ...b, ...c)

// rest perameter(...)
// let arr = [10, 20, 30, 40, 50];
// let [a, b, ...c] = arr;
// console.log(a);
// console.log(b);
// console.log(c);


// synchronous asynchronous
// synchronous  - by default,
// js single theaded langaue  - ek baar m ek hi code excute hoga
// asynchronous bnane k liye use kr skte h settimout and many more


// console.log("hello world 1");
// console.log("hello world 2");
// setTimeout((val) => console.log("hello world 3"), 2000);
// console.log("hello world 4");
// console.log("hello world 5");
// console.log("hello world 6");
// setTimeout((val) => console.log("hello world 7"), 1000);
// console.log("hello world 8");
// setTimeout((val) => console.log("hello world 9"), 0);
// console.log("hello world 10");



// Promise -
// fullfiled
// rejected
// pending

// jb bhi hme api s data feach krna hota h tb Promise ka use krte h


// const myPromise = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     console.log("my task is completed")
//     resolve();
//   }, 2000)
// })
// myPromise.then(() => {
//   console.log("promise consumed")
// })

// const myPromise = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     console.log("my task is completed")
//     resolve();
//   }, 2000)
// })
//   .then(() => {
//     console.log("promise consumed")
//   })



// const myPromise = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     console.log("my task is completed")
//     resolve({ userName: "Elon", email: "elon@gmail.com" });
//   }, 2000)
// })
//   .then((user) => {
//     console.log(user)
//   })



// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let errror = false;
//     if (!errror) {
//       resolve({ userName: "Elon ", eamil: "elon@gmail.com" })
//     } else {
//       reject("Error : Somthing went wrong");
//     }
//   }, 2000)
// })
// .then((val) => {
//   console.log(val)
// })
// .then((val) => {
//   console.log(val);
// })
// .then((val) => {
//   console.log(val)
// }).finally(() => {
//   console.log("The promise either resolve or rejected")
// })
//finally - promis reject ho ya resolve ho finally wala statement run hoga hi hoga

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let errror = false;
//     if (!errror) {
//       resolve({ userName: "Elon ", eamil: "elon@gmail.com" })
//     } else {
//       reject("Error : Somthing went wrong");
//     }
//   }, 2000)
// });
// async function consumePromise() {
//   try {

//     const response = await myPromise;
//     console.log(response);
//   }
//   catch (err) {
//     console.log(err)
//   }
//   finally {
//     console.log("The promise either resolve or rejected")
//   }
// }

// consumePromise();


// API - Application Programing Interface -
//


// async function allUser() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();
//     console.log(data);
//   }
//   catch (err) {
//     console.log(err)
//   }
//   finally {
//     console.log("the promise is either resolved or rejected")
//   }

// }
// allUser()
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);

//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("The Promise either resolve or reject")

//   })



//oops - object oriented programming style

// class - blueprint
// object  - blue print ka product

//object  -  collection of property and methods
// parts of oops
//1- constractor function
//2 -  protptype
//3 - classes
//4 - inhiretance (new, this )



// 4 pilloe of oops
//1- abstraction - Abstraction in JavaScript is the process of hiding implementation details and showing only the essential features of an object.
//         Hides complexity from the user.
//        Improves maintainability.
// Enhances flexibility and modularity.
//2 - encapulation  -Encapsulation is the process of wrapping data and methods into a single unit and restricting direct access to the data
//3 - inhiritance   - Inheritance is a core OOP concept in JavaScript that allows one class to acquire the properties and methods of another class using the extends keyword. It represents an "is-a" relationship between classes.
//   The class being inherited is called the parent class, and the inheriting class is the child class.
// A child class can use existing features of the parent class and also add its own.
// Inheritance promotes code reusability and reduces redundancy.
//4 - polymorphism - Polymorphism means "many forms", where a single entity can behave differently in different situations. In JavaScript, it allows the same method or object to show different behavior based on context.

// Same method, different behavior depending on the object.
// Achieved through method overriding.
// Supports flexibility and extensibility.



// call method
function SetUser(userName) {
  this.userName = userName;
  console.log("called ")
}

function CreateUser(userName, email, address) {
  SetUser.call(this, userName)
  this.email = email;
  this.address = address;
}
const perosn = new CreateUser("Mike", "mike@gmail.com", "torrento");
console.log(perosn);






























