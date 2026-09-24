// 1 -  swap number without using 3rd variable 
let a = 10;
let b = 20;
[a, b] = [b, a]
console.log(a);

//2 -  reverse a srtring using reverse method()
let str = "BhanuGaur";
let strArry = str.split(""); // stirng ko array m convert krna 
let arrRev = strArry.reverse(); // reverse krne k liye
let arrrevjoin = arrRev.join(""); //string ko join krne k liye

// console.log(arrrevjoin);


// second method  -  revetrse krne ka  -  
// let str1 = "BhanuGaur";
// let res = str1.split("").reverse().join("")
// console.log(res);


//3 -  reverse a srtring  without using reverse method()
// Reverse a String Without Using reverse() 
function revStr(str) {
  let reversed = " ";
  for (let i = str.lenght - 1; i >= 0; i--) {
    reversed += str[i];

  }
  return reversed;
}
console.log(revStr("BhanuGaur1"))