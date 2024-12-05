
const parent = document.querySelector("#parent");

document.addEventListener("keypress",function(e){
    console.log("hui");
    parent.innerHTML = e.code
})