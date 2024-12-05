
const timeBox = document.querySelector(".time-box");
const refresh = document.querySelector("button");

let interval = setInterval(function(){
    let date = new Date();
    console.log(date.toLocaleTimeString());
    timeBox.textContent = date.toLocaleTimeString();
},1000)

timeBox.addEventListener("click",function(e){
    // clearInterval(interval);
    let div = document.createElement("div");
    div.setAttribute("class",stop);
    div.textContent = e.target.innerText;
    document.querySelector("body").appendChild(div);
})

refresh.addEventListener("click",function(){
    location.reload();
})