
// const main = document.querySelector("main");
// const body = document.querySelector("body");

// main.addEventListener("click",function(e){
//     let div = document.createElement("div");
//     div.setAttribute("class","big-image");
//     let image = document.createElement("img");
//     image.setAttribute("src",`${e.target.src}`);
//     div.appendChild(image);
//     // main.style.display = "none";
//     body.appendChild(div);
// })

// window.addEventListener("click", function (e) {
//     // Check if the click is outside the .big-image or on the body
//     if (e.target === body) {
//         const bigImage = document.querySelector(".big-image");
//         if (bigImage) {
//             bigImage.remove(); // Remove the big-image div
//             main.style.display = "flex"; // Show the main content again
//         }
//     }
// });

// const p1 = {
//     fname : "divya",
//     lname : "chaudhary",
//     age:20,
//     salary:20000,
//     getName(){
//         console.log(this.fname,this.lname);
//     }
// }

// const p2 = {
//     fname : "sheetal",
//     lname : "sharma",
//     age:30,
//     salary:40000,
//     getName(){
//         console.log(this.fname,this.lname);
//     }
// }

// const p3 = {
//     fname : "vaibhav",
//     lname : "chauhan",
//     age:40,
//     salary:40000,
//     getName(){
//         console.log(this.fname,this.lname);
//     }
// }

class Person {
    constructor(fname,lname,age,salary){
        this.fname = fname,
        this.lname = lname,
        this.age = age,
        this.salary = salary
    }
    getName(){
        console.log(this.fname);
    }
}

const p1 = new Person("sheetal","chaudhary",20,4000);
const p2 = new Person("divya","chaudhary",30,5000);

// console.log(p1.getName());
console.log(p2);
