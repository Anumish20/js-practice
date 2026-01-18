// console.log("Anubhuti")
// const accountId = "12345";
// let accountName = "Anubhuti's Account";
// let accountPassword = "securePassword123";
// accountCity ="Delhi"
// let accountBalance;

// console.table({ accountId, accountName, accountPassword, accountCity, accountBalance });
// let score = "23"
// console.log(typeof score)
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber)

// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn)
        // console.log("2" === 2);
        // primituve data types
        // 7 types: String, Number, Boolean, undefined, null, Symbol, BigInt
        
        // let mail;
        // let outsideTemp = null;
        // const score = 100;
        // const isLoggedIn = false;
        // const bigNumber=132544657n;
        // console.table({mail, outsideTemp, score, isLoggedIn, bigNumber});
        // const id = Symbol("123");
        // const anotherId = Symbol("123");
        // console.log(id === anotherId);
        // reference data types: Object, Arrays, Functions
        // const heros = ["shaktiman", "naagraj", "doga"];
        // const myObj = {
        //     name: "Anubhuti",
        //     age: 24,
        //     isLoggedIn: true,
        // };
        // function greetUser(){
        //     console.log("Hello User");
        // }
        // // const myFunction = function greetUser(){
        // //     console.log("Hello User");
        // }
        // console.log(typeof heros);
        // console.log(typeof myObj);
        // console.log(typeof greetUser);
        // console.log(typeof myFunction);
        // let  myName = "Anubhuti";
        // let anotherName = myName;
        // console.log ({myName, anotherName});
        // let userOne = {
        //     email: "anubhuti@example.com",
        //     upiId: "anubhuti@upi",
        // };
        // stack and heap memory
        // let userTwo = userOne;
        // console.log({userOne, userTwo});
        // userTwo.email = "kaju@example.com   ";
        // console.log(userOne.email);   
        // console.log(userTwo.email);

        // STRINGS IN JAVASCRIPT
        // const gameName = new String("cricket");
// console.log(gameName); 

        // console.log(gameName[0]); #output c
        // console.log(gameName.__proto__);
        // console.log(gameName.indexOf("c")) #output 0
        // console.log(gameName.indexOf("c", 2)); #output 4
        // console.log(gameName.lastIndexOf("c")); #output 4
        // console.log(gameName.length); #output 7
        // console.log(gameName.charAt(3)); #output c
        // console.log(gameName.toUpperCase());
// const newString = gameName.substring(0,2)   #output cr
// const anotherString = gameName.slice(-8,-2) #output crick
// console.log(anotherString)
// const name = "   Anubhuti   ";
// const repocount = 1000;
// console.log(`Hello my name is ${name} and my repo count is ${repocount}`); #output Hello my name is    Anubhuti    and my repo count is 1000
// const url = "https://www.example.com/products?category=books&sort=asc";
// console.log(url.replace("=", "/")); #output https://www.example.com/products?category/books&sort=asc
// url.includes("books") ? console.log("Books category found") : console.log("Books category not found"); #output Books category found
// Numbers and maths in JavaScript
// const score = 100;
// const balance = new Number(1000);
// console.log(balance);
// console.log(balance.toString()); #output "1000"
// console.log(balance.toFixed(2)); #output "1000.00"
// console.log(typeof balance);         #output object
// console.log(typeof score); #output number
// const anotherNumber = 121.5567;
// console.log(anotherNumber.toPrecision(3)); //#output "121"
// maths
// const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN")); 
//#output 10,00,000
// console.log(Math)
// console.log(Math.abs(-4)) //#output 4;
// console.log(Math.round(4.6)) //#output 5
// console.log(Math.ceil(4.2)) //#output 5
// console.log(Math.floor(4.9)) //#output 4
// console.log(Math.min(0,150,30,20,-8,-200)) //#output -200
// console.log(Math.max(0,150,30,20,-8,-200)) //#output 150
// console.log(Math.random()) //#output random number between 0 and 1
// console.log(Math.random()*10) //#output random number between 0 and 10
// console.log(Math.floor(Math.random()*10)) //#output random whole number between 0 and 9
// const min = 10;
// const max = 20;
// console.log(Math.floor(Math.random()*(max-min+1))+min) //#output random whole number between 10 and 20
// Dates and times in JavaScript
// let myDate = new Date();
// console.log(myDate.toString()); 
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date("01-14-2025")        ;
// console.log(myCreatedDate.toLocaleString());
// let myTimestamp = Date.now();
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000)); #current timestamp in seconds
// let newDate = new Date();
// console.log(newDate.getMonth() + 1); //months from 0 to 11
// console.log(newDate.getDate()); //date from 1 to 31
// console.log(newDate.getDay());  //day from 0 to 6
// newDate.toLocaleString('default', {
//         weekday: 'long'
// })
// arrays
// const myArr = [0,2,1,3,4];

// const myArr2 = new Array(1,2,3,4,5);
// console.log(myArr);
// console.log(myArr2);
// console.log(myHeroes);
// arrays methods
// console.log(myArr.length); #output 5
// myArr.push(7); #adds 7 at the end of the array
// console.log(myArr);   
// myArr.pop();
// console.log(myArr);   
// myArr.unshift(5); #adds 5 at the beginning of the array
// console.log(myArr);   
// myArr.shift(); 
// console.log(myArr);   #removes first element of the array
// console.log(myArr.indexOf(3)); #output 3
//  console.log(myArr.includes(14)); #output false
// const newArr = myArr.join();         
// console.log(newArr)  #output "0,2,1,3,4"

// console.log("A",myArr) #output [0,2,1,3,4]
// const myn1 = myArr.slice(1,3) #output [2,1]
// console.log("B",myn1   )  #output [2,1]
// const myn2 = myArr.splice(1,3)
// console.log("C",myArr) #output [0,4]
// console.log("D",myn2) #output [2,1,3]
// const myHeroes = ["shaktiman", "naagraj", "doga"];
// const dcHeroes = ["batman", "superman", "flash"];
// myHeroes.push(dcHeroes);
// console.log(myHeroes [3] [1]);   //#output ["shaktiman", "naagraj", "doga", "batman", "superman", "flash"]
//  const allHeroes = myHeroes.concat(dcHeroes);

// console.log(allHeroes);   //#output ["shaktiman", "naagraj", "doga", "batman", "superman", "flash"]
// const all_heroes = [...myHeroes, ...dcHeroes]; #spread operator
// console.log(all_heroes);   //#output ["shaktiman", "naagraj", "doga", "batman", "superman", "flash"]
// const another_array = [1,2,3,[4,5],7,[8,9]];
// const   real_new_array = another_array.flat();
// console.log(real_new_array);   //#output [1,2,3,4,5,7,8,9]
// console.log(Array.isArray("Hiten"));   //#output true
// console.log(Array.from("Anubhuti"));
// console.log(Array.from({name: "kaju"}));   //#output [] #interesting
// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// console.log(Array.of(score1, score2, score3));  // #output [100,200,300]
// #objects in javascript
// singleton object
// object literals
// Object.create()
//  const mySym = Symbol("key1");

// const Jsuser = {
//         name :"Anubhuti",
//         "full name": "Anubhuti Mishra",
//         [mySym] : "value1",
//         age: 23,
//         location: "Delhi",
//         mail :"anubhuti@gmail.com",
//         isLoggedIn: true,
//         lastLoginDays: ["Monday", "Friday", "Saturday"],
// };
// console.log(Jsuser["full name"]);  //#output Anubhuti Mishra
// console.log(Jsuser["mail"]) 
// console.log(Jsuser["age"]);
// console.log(Jsuser[mySym]);
// console.log(typeof Jsuser.mySym); 

// Jsuser.mail  = "anubhuti2@gmail.com"
// Object.freeze(Jsuser);

// console.log(Jsuser);
// Jsuser.greeting = function (){
//         console.log(`Hello User , ${this.name} `);
// }
// console.log(Jsuser.greeting());


//  const tinderUser = new Object(); 
// //       #singleton object

//        tinderUser.id = "123abc";
//        tinderUser.name= "vinny"
//         tinderUser.isLoggedIn = false;
//         // console.log(tinderUser);
//         const regularUser = {
//         email: "some@mail.com",
//         fullname: {
//                 userFullname:{
//                 firstname:"harsh",
//                 LastName: "singh",
//         }
// }
// }
// console.log(regularUser.fullname.userFullname); #output {firstname: "harsh", LastName: "singh"}
// const obj1 = {1: "a", 2: "b"};
// const obj2 = {3: "c", 4: "d"};
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3); //#output {1: "a", 2: "b", 3: "c", 4: "d"}


// const obj3 = {...obj1, ...obj2};
// console.log(obj3); //#output {1: "a", 2: "b", 3: "c", 4: "d"}
// const users = [
//         {id: 1,
//         email: "anubhuti@gmail.com",
//         age: 24,
// },
// {
//         id: 2,
//         email: "vinny@gmail.com",
//         age: 25,
//         }
// ]
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
//                  //#output ["id", "name", "isLoggedIn"]
// console.log(Object.values(tinderUser));
//                         //#output ["123abc", "vinny", false]
//                         // 
//  console.log(Object.entries(tinderUser));
//#output [["id", "123abc"], ["name", "vinny"], ["isLoggedIn", false]]
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// #Destructuring in JavaScript
// const course = {
//         coursename: "JavaScript Bootcamp",
//         price: 999,
//         courseInstructor: "Anubhuti Mishra"
// }
// const {courseInstructor:tutor} = course;
// console.log(tutor);   //#output Anubhuti Mishra



// #apis in JavaScript

