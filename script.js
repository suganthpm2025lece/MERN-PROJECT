// console.log("Hello World");
// variable declaration and Initialization ( var , let, const   )

// var a;
// a = 10;
// a = "suganth";
// console.log(a); 
// reinitialization the b 
// let b;
// b = 20;
// b = 25;
// console.log(b);
// let cannot be reinitialized
// const c = 30;
// console.log(c);

// var a = 10;
// var b = 20;
// var c = a + b;
// console.log(c);
//   var a = 10;
//   var b = "10";
//   console.log(a == b); // true
//   console.log(a === b); // true
// data type (primitive) 
// var mark = 10;
//  var name = "suganth";
//  var present = true;
//  var bigInt = 123456789n;
//  var sym = Symbol("h1");
// var a = 10;
// var b = null;

//   console.log(typeof mark);
//   console.log(typeof name);
//   console.log(typeof present);
//   console.log(typeof bigInt);
//   console.log(typeof sym);
//   console.log(typeof a);
//   console.log(typeof b);

// data type (non primitive)
//    var arr = [1, 2, 3, 4, 5];
//   console.log(typeof arr);
//    var obj = {
//     name: "suganth",
//     dep :"ece",
//    }
//    console.log(typeof obj);
   // conditional statements
//    var flag = false;
//    if(flag){
//     var a = 10;
//     console.log("if condition ");
//    }
//   console.log(a);
//if else statement
//  var num = 10 ;
//  if (num%2 == 0) {
//     console.log(num +  "even number");
//  } else {
//     console.log(num +  "odd number");
//  }
//  else if statement
// var mark = 90;
// if (mark >= 90) {
//     console.log("O grade");
// } else if (mark >= 80) {
//     console.log("A grade");
// } else if (mark >= 70) {
//     console.log("B grade");
// } else if (mark >= 60) {
//     console.log("C grade");
// } else if (mark >= 50) {
//     console.log("D grade");
// } else if (mark >= 35) {
//     console.log(" pass");
// } else {
//     console.log("fail");
// }
// function add(a, b) {
//     console.log(a + b);
// };
// add(10, 20);
// let sub = () => {
//     console.log(10 - 20);
// };  
// sub();
// switchcase
// var day = 5;
// switch (day) {
//     case 1:
//         console.log("sunday");
//         break;
//     case 2:
//         console.log("monday");      
//         break;
//     case 3:
//         console.log("tuesday");
//         break;      
//     case 4:
//         console.log("wednesday");
//         break;  
//     case 5:
//         console.log("thursday");
//         break;
//     case 6:
//         console.log("friday");
//         break;  
//     case 7:
//         console.log("saturday");
//         break;
//     default:
//         console.log("invalid day");
//         break;
// }
// map 
//  var arr = [1, 2, 3, 4, 5];
//   var mulTwo = arr.map((n)=> n*2);
//  console.log(mulTwo);
//   var even = arr.filter((n)=> n%2 == 0);
//  console.log(even);
//   var sum = arr.reduce((acc, n)=> acc + n, 0);
//  console.log(sum);
//   var evensum = arr.filter((n)=> n%2 == 0).reduce((acc, n)=> acc + n, 0);
//     console.log(evensum); 
//     var evenTotal = arr.map((ele) => ele*2)
//     .filter((ele) => ele%2 == 0)
//     .reduce((acc, ele) => {
//         return acc + ele;
//     }, 0);
//     console.log(evenTotal);    

// new array creation 
// var arr = [1,2,];
// var new_arr = [...arr, 3, 4, 5];
// console.log(new_arr);
// object creation
//  var stud = [{
//     name: "suganth",
//     dep: "ece",
//     mark: 90    
//  },
//  {
//     name: "kumar",
//     dep: "cse",
//     mark: 80            
//  }];
// spread operator
//  var new_stud = [...stud, {
//     name: "karthi",
//     dep: "mech",
//     mark: 70
//  }];    
//  console.log(new_stud);

// destructuring operator
var [m1, m2, m3, m4, m5] = [91, 92, 93, 94, 95];
console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);
console.log(m5);
 var {name , dep, mark, present} = {
    name: "suganth",
    dep: "ece",
    mark: "90", 
    present: true
}
// var student = {
//     name: "Arvind",
//     email: "Arvind@example.com",
//     mobile: 9876543210,
//     mark: 90,
//     present: true
// };

// var { name, email, mobile, mark, present } = student;

// console.log(name);
// console.log(email);
// console.log(mobile);
// console.log(mark);
// console.log(present);

// var arr = [1,2,3,4,5];

// for(let ind in arr){
//     console.log(ind);
// }
// console.log("**********");
// for(let val of arr){
//     console.log(val);
// }

// var obj = {
//      name: "Arvind",
//      email: "Arvind@example.com",
//      mobile: 9876543210,
//      mark: 90,
//      present: true
// };

// for(let key in obj){
//     console.log(key + " : " + obj[key]);
// }

//callback function

// const result = (message) => {
//     console.log(message);
// }

// const add = (a,b,result) => {
//     result(a+b);
// }

// add(10,20,result);
// const promise = new Promise((resolve, reject) => { 
//  var success = true;
//  if(success){
//      return resolve("Api Works");
// } else {
//     return reject("fetch  Failed");
// }
// })
// promise.then((message) => {
//     console.log(message);
// }).catch((message) => {
//     console.log(message);
// });
// setTimeout(() => {
//     console.log("Hello everyone!!!");
// })
// const getData = async () => {
//     setTimeout(async () => {
//         try {       
//        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     console.log(data);
//         }

//         catch (error) {
//             console.log(error);
//         }           
//     }, 1000);
// }
// getData();