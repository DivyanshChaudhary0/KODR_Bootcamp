

const users = [
    {
        img : "https://plus.unsplash.com/premium_photo-1719894748846-81e016253702?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFtfGVufDB8fDB8fHww",
        username : "God Ram",
        age : "1000+",
        city: "Ayodhya",
        status:"Stranger"
    },
    {
        img : "https://i.pinimg.com/236x/e1/c2/6e/e1c26ec2cb5b9d47a5b24276de35fe68.jpg",
        username : "Chota Bheem",
        age : "56",
        city: "Lucknow",
        status:"Stranger"
    },
    {
        img : "https://i.pinimg.com/236x/69/61/4a/69614a0ce4c48e3709b5462905e6af00.jpg",
        username : "Chotu don",
        age : "16",
        city: "Bhopal",
        status:"Stranger"
    },
    {
        img : "https://i.pinimg.com/236x/c6/0d/bc/c60dbcd73a453bb286c99817b3f1310f.jpg",
        username : "Radhe Krishna",
        age : "1000+",
        city: "Vrandavan",
        status:"Stranger"
    },
    {
        img : "https://indiancinematic.com/wp-content/uploads/2024/10/Rajat-dalal.webp",
        username : "Rajat Dalal",
        age : "26",
        city: "Haryana",
        status:"Stranger"
    },
]

let clutter = "";

users.forEach(function(elem){
    clutter += `<div class="card">
            <img src="${elem.img}" alt="">
            <h1>${elem.username}</h1>
            <h3>${elem.age} , ${elem.city}</h3>
            <h4>${elem.status}</h4>
            <button>Add Friend</button>
        </div>`
})

let main = document.querySelector("#main")
main.innerHTML = clutter;

const cards = document.querySelectorAll(".card");

cards.forEach(function(elem){
    const btn = elem.querySelector("button");
    const status = elem.querySelector("h4");

    let temp = 0;
    btn.addEventListener("click",function(){
        if(temp === 0){
            status.textContent = "Friends";
            status.style.color = "green";
            btn.textContent = "Remove Friend";
            btn.style.backgroundColor = "red";
            temp = 1;
        }
        else{
            status.textContent = "Stranger";
            status.style.color = "red";
            btn.textContent = "Add Friend";
            btn.style.backgroundColor = "green";
            temp = 0;
        }
    })
})

// main.addEventListener("click",function(e){
    // if(e.target.tagName === "BUTTON"){
    //     console.log(e.target);
    //     const btn = e.target;
    //     const status = e.target.querySelector("h4");
    //     console.log(btn);
    // }
//     console.log(e.target);
// })