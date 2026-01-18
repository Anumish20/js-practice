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
let myDate = new Date();
// console.log(myDate.toString()); 
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate);
