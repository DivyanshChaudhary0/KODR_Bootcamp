
const cursor = document.querySelector(".cursor");
let moveX = 0;
let moveY = 0;

document.addEventListener("mousemove",function(e){
    if(e.x <= window.innerWidth - cursor.offsetWidth){
        cursor.style.left = e.x + "px";
    }
    if(e.y <= window.innerHeight - cursor.offsetHeight){
        cursor.style.top = e.y + "px";
    }
})