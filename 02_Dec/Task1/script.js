

const parent = document.querySelectorAll(".parent");
const image = document.querySelector(".parent img");

parent.forEach(function(elem){
    elem.addEventListener("mousemove",function(e){
        // console.log(elem.childNodes[5]);
        let x = window.innerWidth - elem.childNodes[5].offsetWidth;
        if(e.x <= x){
            elem.childNodes[5].style.left = e.x + "px";
            elem.childNodes[5].style.opacity = 1;
        }
    })
    elem.addEventListener("mouseleave",function(e){
        // console.log(elem.childNodes[5]);
        elem.childNodes[5].style.opacity = 0;
    })
})