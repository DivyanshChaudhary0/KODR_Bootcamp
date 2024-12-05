
const boxes = document.querySelector(".boxes");

boxes.addEventListener("click",function(e){
    // console.log(e.target);
    // console.log(e.target.className);
    if(e.target.className === "box"){
        e.target.style.backgroundColor = "aqua";
        e.target.style.border = "2px solid red";
    }
})
