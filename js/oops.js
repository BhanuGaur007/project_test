// // class -  - Incapsulation

// class User {
//   constructor(userName, email, address) {
//     this.userName = userName;
//     this.email = email;
//     this.address = address
//   }

//   updateUserName() {
//     return `${this.userName.toUpperCase()}`;
//   }
//   updateAddress() {
//     return `${this.address.toLowerCase()}`;
//   }
// }
// let mike = new User("mike allen", "mike@gmail.com", "TORRENTO");
// console.log(mike);
// console.log(mike.updateUserName());
// console.log(mike.updateAddress());



// inheritance -
// class User {
//   constructor(userName) {
//     this.userName = userName;
//   }
//   login() {
//     console.log(`Log in username is ${this.userName}`);
//   }

// }
// // const user1 = new User("Elon");
// // console.log(user1);
// // console.log(user1.login());
// class Student extends User {
//   constructor(userName, email, address) {
//     super(userName)
//     this.email = email;
//     this.address = address;
//   }
//   studentName() {
//     console.log(`student name is ${this.userName}`);
//   }
// }
// const s1 = new Student("elon", "elon@gmail.com", "torrento");
// console.log(s1);
// console.log(s1.studentName());
// console.log(s1.login());




// class User {
//   constructor(userName) {
//     this.userName = userName;
//   }
//   login() {
//     console.log(`Log in username is ${this.userName}`);
//   }
//   hello() {
//     console.log(`hello ${this.userName}`)
//   }
// static hello() {
//   console.log(`hello ${this.userName}`)
// }
// }
// const user1 = new User("Elon");
// console.log(user1);
// console.log(user1.login());
// class Student extends User {
//   constructor(userName, email, address) {
//     super(userName)
//     this.email = email;
//     this.address = address;
//   }
//   studentName() {
//     console.log(`student name is ${this.userName}`);
//   }
// }
// const s1 = new Student("elon", "elon@gmail.com", "torrento");
// console.log(s1);
// console.log(s1.studentName());
// console.log(s1.login());
// console.log(s1.hello());








// create class  ->  constractor- 3 perameter -> 3 method,


// class User {
//   constructor(username, age, phone) {
//     this.username = username;
//     this.age = age;
//     this.phone = phone;
//   }
//   nameUpdate() {
//     return console.log(`Hello ${this.username.toUpperCase()}`);
//   }
//   updateAge() {
//     return console.log(`Hello ${this.username.toUpperCase()} your age is ${this.age}`);
//   }
//   phoneUpdate() {
//     return console.log(`Hello ${this.username.toUpperCase()}, your age is ${this.age} and your phone number is ${this.phone}`);
//   }

// }
// const userDetail = new User("mike", "22", "8989898987");
// console.log(userDetail);
// console.log(userDetail.nameUpdate());
// console.log(userDetail.updateAge());
// console.log(userDetail.phoneUpdate());




// bind mehtod

// const module = {
//   num: 100,
//   getX: function () {
//     return this.num;
//   }
// }
// const unbound = module.getX;
// const bound = unbound.bind(module);
// console.log(bound());


// getter and setter mehtod ()

// class User {
//   constructor(userName, email, address) {
//     this.userName = userName;
//     this.email = email;
//     this.address = address;
//   }
//   get email() {
//     return this._email.toUpperCase();
//   }
//   set email(val) {
//     this._email = val.toUpperCase();
//   }

// }
// const student1 = new User("Mike", "mike@gmail.com", "new york");
// console.log(student1);
// console.log(student1.email);



// lexical scop -  jb inner function outer function ko access kr pata h to use lexical scop khte h

// function outer() {
//   let a = 10;
//   function inner() {
//     console.log(a);
//   }
//   inner();
// }
// outer();


// closures
// function outer() {
//   let count = 0;
//   function inner() {
//     count++
//     console.log(count);
//   }
//   return inner;
// }
// const fn = outer()
// fn();
// fn();
// fn();