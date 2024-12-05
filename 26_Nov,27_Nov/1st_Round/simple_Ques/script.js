
const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Q-7 : accept length of three sides. calculate the area using heron's formula 

// let a = Number(prompt("Enter first side: "));
// let b = Number(prompt("Enter second side: "));
// let c = Number(prompt("Enter third side: "));

// let s = (a+b+c)/2;

// let area = Math.pow(s*(s-a)*(s-b)*(s-c),1/2)

// console.log(`Area : ${area} sq units`);

// Q-8 : accept two numbers and determine which one is greater.

// let a = Number(prompt("Enter first number: "));
// let b = Number(prompt("Enter second number: "));

// if(a>b){
//     console.log(a);
// }
// else{
//     console.log(b);
// }

// Q-9 : accept two numbers and determine even or odd.

// let number = Number(prompt("Enter number: "));
// if(number%2==0){
//     console.log("Even");
// }
// else{
//     console.log("Odd");
// }

// Q-10 : accept year and print that it is a leap year or not.

// let year = 2024;

// if((year%4 === 0 && year%100 !== 0) || (year%400 === 0)){
//     console.log(`${year} is a leap year`);
// }
// else{
//     console.log(`${year} is not a leap year`);
// }

// Q-11 : accept the number cosumed by user and calculate the bill amount...

// let units = 150;
// let bill = 0;

// while(true){
//     if(units <= 100){
//         bill += units*4.2;
//         console.log(`Total bill amount: ${bill}`);
//         break;
//     }
//     else if(units > 100 && units <= 200){
//         bill += (units - 100)*6;
//         units = units - (units - 100);
//     }
//     else if(units > 200 && units <= 400){
//         bill += (units - 200)*8;
//         units = units - (units - 200);
//     }
//     else{
//         bill += (units - 400)*13;
//         units = units - (units - 400);
//     }
// }

// Q-12 : Shop discount

// let total_price = 8000;
// let discount = 0;

// if(total_price>=0 && total_price<=5000){
//     discount = 0;
// }
// else if(total_price>5000 && total_price<=7000){
//     discount = 5;
// }
// else if(total_price>7000 && total_price<=9000){
//     discount = 10;
// }
// else{
//     discount = 20;
// }
// console.log(`Payable amount is ${(total_price - (total_price*discount)/100)}`);

// Q-13 : n times hello world

// let n = 5;
// for(let i=1;i<=n;i++){
//     console.log("Hello");
// }

// Q-14 : n natural numbers

// let number = 5;
// for(let i=1;i<=number;i++){
//     console.log(i);
// }

// Q-15 : sum of first n numbers

// let n = 5;
// let sum = 0;
// for(let i=1;i<=n;i++){
//     sum+=i;
// }
// console.log(sum);

// Q-16 : Factorial of a number

// let n = 5;
// let fact = 1;
// for(let i=1;i<=n;i++){
//     fact = fact*i;
// }
// console.log(`Factorial is ${fact}`);

// Q-17 : prime number

// let number = 23;
// let i;
// for(i=2;i<number;i++){
//     if(number%i==0){
//         break;
//     }
// }
// if(i === number){
//     console.log("Prime Number");
// }
// else{
//     console.log("Not a prime number");
// }

// Q-18 : sum of digits...

// let num = 897;
// let sum = 0;

// while(num>0){
//     sum = sum + num%10;
//     num = Math.floor(num/10);
// }

// console.log(sum);

// Q-19 : Reverse a number...

// let num = 12345897;
// let reverse = 0;

// while(num){
//     reverse = (reverse*10) + num%10;
//     num = Math.floor(num/10);
// }

// console.log(reverse);

// Q-20 : Palindrome number

// let num = 12321;
// let reverse = 0;
// let temp = num;

// while(num){
//     reverse = (reverse*10) + num%10;
//     num = Math.floor(num/10);
// }
// if(temp === reverse){
//     console.log(`${temp} is a Palindrome number`);
// }
// else{
//     console.log(`${temp} is not a Palindrome number`);
// }

// Q-21 : Strong number

// let number = 123;
// let sumOfFactoral = 0;
// let temp = number;

// while(number){
//     find_sumOfFact(number%10);
//     number = Math.floor(number/10);
// }

// function find_sumOfFact(digit){
//     let fact = 1;
//     for(let i=1;i<=digit;i++){
//         fact = fact*i;
//     }
//     sumOfFactoral += fact;
// }
// if(temp === sumOfFactoral){
//     console.log(`${temp} is a strong number`);
// }
// else{
//     console.log(`${temp} is not a strong number`);
// }

// Bill Count program

// let units = 700;
// let amount = 0;

// if(units > 400){
//     amount = (units-400)*13;
//     units = 400;
// }
// if(units>200 && units>=400){
//     amount += (units-200)*8;
//     units = 200;
// }
// if(units>100 && units>=200){
//     amount += (units-100)*6;
//     units = 100;
// }

// amount += units*4.2;
// console.log(`Bill is ${amount}`);

// Q-22 : Automorphic number

// let n = 15;
// let copy = n;
// let count = 0;
// let square = n*n;

// while(n){
//     count++;
//     n = Math.floor(n/10);
// }

// function find_power(number,power){
//     let pow = 1;
//     for(let i=1;i<=power;i++){
//         pow = pow*number;
//     }
//     return pow;
// }

// let automorphic = (square % find_power(10,count));
// console.log(automorphic===copy?"automorphic number":"not a automorphic number");

// Q-23 : Single digit


// +++++++++++++ FIRST APPROACH +++++++++++++++++++++++

// let num = 6758;
// let sum = 0;
// while(num>0 || sum>9){
//     if(num==0){
//         num=sum;
//         sum=0;
//     }
//     sum += num%10;
//     num = Math.floor(num/10);
// }
// console.log(sum);

// +++++++++++++ SECOND APPROACH +++++++++++++++++++++++

// let n = 5467;
// function single_digit_sum(n){
//     let sum = 0;
//     while(n){
//         sum += n%10;
//         n = Math.floor(n/10);
//     }
//     if(sum >= 10){
//         sum = single_digit_sum(sum);
//     }
//     return sum;
// }

// console.log(single_digit_sum(n));

// Q-24 : Fibonacci series

// let n = 2;
// let a = -1;
// let b = 1;
// let c = 0;

// if(n<=0){
//     console.log("print nothing");
// }
// else{
//     for(let i=1;i<=n;i++){
//         c=a+b;
//         console.log(c);
//         a=b;
//         b=c;
//     }
// }

// Q-25 : repeadetly print hello until user provide incorrect output with do while loop

// let n = 1;
// do{
//     alert("Hello");
//     n = Number(prompt("Press 1 to repeat"));
// }while(n==1);

// alert("Program Exits");

// Q-26 : Calculator 

// while(true){
//     alert(`choose your operation: 
//         (1)Addition
//         (2)Subtraction
//         (3)Multiplication
//         (4)Division
//         (5)Exit
//         `)
        
//         let n = Number(prompt("Enter your choice:"));
//         if(n>=5){
//             break;
//         }
//         let a = Number(prompt("Enter a:"));
//         let b = Number(prompt("Enter b:"));
//         if(n==1){
//             console.log(`Sum is ${a+b}`);
//         }
//         else if(n==2){
//             console.log(`Subtraction is ${a-b}`);
//         }
//         else if(n==3){
//             console.log(`Multiply is ${a*b}`);
//         }
//         else {
//             console.log(`Division is ${a/b}`);
//         }
// }

// Q-26 : Guess random number

// let num = Math.floor(Math.random()*100+1);
// console.log(num);
// alert("Guess the number");

// while(true){
//     let guess = Number(prompt("Guess number"));
//     if(guess == num){
//         alert("Congrats");
//         break;
//     }
//     else if(guess > num){
//         alert("Too high, try again");
//     }
//     else{
//         alert("Too low,try again");
//     }
// }

rl.question('Enter a number: ', (num1) => {
    number = parseInt(num1);
    let a = -1;
    let b = 1;
    let c = 0;
    for(let i=1;i<=number;i++){
        c=a+b;
        a=b;
        b=c;
        console.log(c );
    }
    rl.close();
});