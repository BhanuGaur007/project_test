
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



// // this keyword -

// const person = {
//   firstName: "mike",
//   lastName: "align",
//   city: "trorreto",
//   eyeColor: "blue",
//   sayHello: function () {
//     console.log("hello i am " + this.firstName + " and i have " + car.model + "car");
//   }
// }
// const car = {
//   brand: "ford",
//   model: "mustang"
// };
// person.sayHello();


// math object

// console.log(Math)
// console.log(Math.PI)

// round  - round krne k liye
// 4.0---------4.4 -> 4
// 4.5---------4.9 -> 5
// let num = Math.ceil(4.3)
// let num = Math.floor(4.9)
// let num = Math.pow(4, 2)
// let num = Math.sqrt(16)
// let num = Math.abs(-16)
// let num = Math.max(16, -1, 45, 10)
// let num = Math.min(16, -1, 45, 10)
// let num = Math.random()
// let num = Math.floor(Math.random() * 11)

// console.log(num);


// assign() method -  2 method ko merge kr skte h assign menthod s

// let obj1 = { a: 1, b: 2 }
// let obj2 = { c: 3, d: 4 }
// let res = Object.assign(obj1, obj2)

// console.log(res)
// console.log(obj1)
// let res = Object.assign({}, obj1, obj2)
// console.log(obj1)


// nested object  - object k andr object 

// obj = {
//   name: "mike",
//   addrss: {
//     city: "torrento",
//     street: "temp"
//   }
// }
// console.log(obj.addrss.city)

// arrey k andr data ko access krne k liye  -

// let data = [
//   {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },
//   {
//     "id": 2,
//     "name": "Ervin Howell",
//     "username": "Antonette",
//     "email": "Shanna@melissa.tv",
//     "address": {
//       "street": "Victor Plains",
//       "suite": "Suite 879",
//       "city": "Wisokyburgh",
//       "zipcode": "90566-7771",
//       "geo": {
//         "lat": "-43.9509",
//         "lng": "-34.4618"
//       }
//     },
//     "phone": "010-692-6593 x09125",
//     "website": "anastasia.net",
//     "company": {
//       "name": "Deckow-Crist",
//       "catchPhrase": "Proactive didactic contingency",
//       "bs": "synergize scalable supply-chains"
//     }
//   },
//   {
//     "id": 3,
//     "name": "Clementine Bauch",
//     "username": "Samantha",
//     "email": "Nathan@yesenia.net",
//     "address": {
//       "street": "Douglas Extension",
//       "suite": "Suite 847",
//       "city": "McKenziehaven",
//       "zipcode": "59590-4157",
//       "geo": {
//         "lat": "-68.6102",
//         "lng": "-47.0653"
//       }
//     },
//     "phone": "1-463-123-4447",
//     "website": "ramiro.info",
//     "company": {
//       "name": "Romaguera-Jacobson",
//       "catchPhrase": "Face to face bifurcated interface",
//       "bs": "e-enable strategic applications"
//     }
//   },
//   {
//     "id": 4,
//     "name": "Patricia Lebsack",
//     "username": "Karianne",
//     "email": "Julianne.OConner@kory.org",
//     "address": {
//       "street": "Hoeger Mall",
//       "suite": "Apt. 692",
//       "city": "South Elvis",
//       "zipcode": "53919-4257",
//       "geo": {
//         "lat": "29.4572",
//         "lng": "-164.2990"
//       }
//     },
//     "phone": "493-170-9623 x156",
//     "website": "kale.biz",
//     "company": {
//       "name": "Robel-Corkery",
//       "catchPhrase": "Multi-tiered zero tolerance productivity",
//       "bs": "transition cutting-edge web services"
//     }
//   },
//   {
//     "id": 5,
//     "name": "Chelsey Dietrich",
//     "username": "Kamren",
//     "email": "Lucio_Hettinger@annie.ca",
//     "address": {
//       "street": "Skiles Walks",
//       "suite": "Suite 351",
//       "city": "Roscoeview",
//       "zipcode": "33263",
//       "geo": {
//         "lat": "-31.8129",
//         "lng": "62.5342"
//       }
//     },
//     "phone": "(254)954-1289",
//     "website": "demarco.info",
//     "company": {
//       "name": "Keebler LLC",
//       "catchPhrase": "User-centric fault-tolerant solution",
//       "bs": "revolutionize end-to-end systems"
//     }
//   },
//   {
//     "id": 6,
//     "name": "Mrs. Dennis Schulist",
//     "username": "Leopoldo_Corkery",
//     "email": "Karley_Dach@jasper.info",
//     "address": {
//       "street": "Norberto Crossing",
//       "suite": "Apt. 950",
//       "city": "South Christy",
//       "zipcode": "23505-1337",
//       "geo": {
//         "lat": "-71.4197",
//         "lng": "71.7478"
//       }
//     },
//     "phone": "1-477-935-8478 x6430",
//     "website": "ola.org",
//     "company": {
//       "name": "Considine-Lockman",
//       "catchPhrase": "Synchronised bottom-line interface",
//       "bs": "e-enable innovative applications"
//     }
//   },
//   {
//     "id": 7,
//     "name": "Kurtis Weissnat",
//     "username": "Elwyn.Skiles",
//     "email": "Telly.Hoeger@billy.biz",
//     "address": {
//       "street": "Rex Trail",
//       "suite": "Suite 280",
//       "city": "Howemouth",
//       "zipcode": "58804-1099",
//       "geo": {
//         "lat": "24.8918",
//         "lng": "21.8984"
//       }
//     },
//     "phone": "210.067.6132",
//     "website": "elvis.io",
//     "company": {
//       "name": "Johns Group",
//       "catchPhrase": "Configurable multimedia task-force",
//       "bs": "generate enterprise e-tailers"
//     }
//   },
//   {
//     "id": 8,
//     "name": "Nicholas Runolfsdottir V",
//     "username": "Maxime_Nienow",
//     "email": "Sherwood@rosamond.me",
//     "address": {
//       "street": "Ellsworth Summit",
//       "suite": "Suite 729",
//       "city": "Aliyaview",
//       "zipcode": "45169",
//       "geo": {
//         "lat": "-14.3990",
//         "lng": "-120.7677"
//       }
//     },
//     "phone": "586.493.6943 x140",
//     "website": "jacynthe.com",
//     "company": {
//       "name": "Abernathy Group",
//       "catchPhrase": "Implemented secondary concept",
//       "bs": "e-enable extensible e-tailers"
//     }
//   },
//   {
//     "id": 9,
//     "name": "Glenna Reichert",
//     "username": "Delphine",
//     "email": "Chaim_McDermott@dana.io",
//     "address": {
//       "street": "Dayna Park",
//       "suite": "Suite 449",
//       "city": "Bartholomebury",
//       "zipcode": "76495-3109",
//       "geo": {
//         "lat": "24.6463",
//         "lng": "-168.8889"
//       }
//     },
//     "phone": "(775)976-6794 x41206",
//     "website": "conrad.com",
//     "company": {
//       "name": "Yost and Sons",
//       "catchPhrase": "Switchable contextually-based project",
//       "bs": "aggregate real-time technologies"
//     }
//   },
//   {
//     "id": 10,
//     "name": "Clementina DuBuque",
//     "username": "Moriah.Stanton",
//     "email": "Rey.Padberg@karina.biz",
//     "address": {
//       "street": "Kattie Turnpike",
//       "suite": "Suite 198",
//       "city": "Lebsackbury",
//       "zipcode": "31428-2261",
//       "geo": {
//         "lat": "-38.2386",
//         "lng": "57.2232"
//       }
//     },
//     "phone": "024-648-3804",
//     "website": "ambrose.net",
//     "company": {
//       "name": "Hoeger LLC",
//       "catchPhrase": "Centralized empowering task-force",
//       "bs": "target end-to-end models"
//     }
//   }
// ]

// console.log(data[9].name);



// const person = {
//   firstName: "Bhanu",
//   lastName: "Gaur",
//   city: "Aligrh",
//   phoneNum: "9716008083"
// }
// console.log(Object.keys(person));
// console.log(Object.values(person));

// hasOwnProperty - property check krta h ki is naame s koi key h ya nhi

// console.log(person.hasOwnProperty("firstName"))
// console.log(person.hasOwnProperty("Bhanu"))


// object constraction function

// let student = {
//   fistName: "Bhanu",
//   lastName: "Gaur",
//   class: "MCA",
//   rollNum: "101",
//   subject: "computer"


// }

// function Student(fistName, lastName, classNam, rollNum, subject) {

//   this.fistName = fistName;
//   this.lastName = lastName;
//   this.classNam = classNam;
//   this.rollNum = rollNum;
//   this.subject = subject;
// }
// let student1 = new Student("Bhanu", "Gaur", "MCA", "101", "javascript")
// console.log(student1);




// function Teacher(tname, tid, tnum, tsub) {
//   this.tname = tname;
//   this.tid = tid;
//   this.tnum = tnum;
//   this.tsub = tsub;

// }
// let teacher1 = new Teacher("Bhanu", "101", "9716008083", "javascript")
// let teacher2 = new Teacher("Gaur", "102", "97160000000", "java")
// let teacher3 = new Teacher("Prakash", "103", "160000000", "c")
// let teacher4 = new Teacher("Tony", "104", "878777867", "iron")
// let teacher5 = new Teacher("Thor", "105", "10189889", "Thunder")
// console.log(teacher1);
// console.log(teacher2);
// console.log(teacher3);
// console.log(teacher4);
// console.log(teacher5);

// date object  - 

// let mydate = new Date();
// let mydate = new Date(2026, 0, 12, 17, 38, 30);

// let mydate = new Date("01-05-2026");
// console.log(mydate);

// hosting  -  
// call variable before declaration 


// hello()
// function hello() {
//   console.log("hello world ");
// }

console.log(num);
// let num = 10
// const num = 10;
// var num = 10;


