
const img = document.querySelector("img");
const circle = document.querySelector(".circle");

let moveX = 0;
let moveY = 0;

document.addEventListener("keydown",function(e){
    const imageRect = img.getBoundingClientRect();
    const circleRect = circle.getBoundingClientRect();

    const circleRadius = circleRect.width / 2;
    const circleCenterX = circleRect.left + circleRadius;
    const circleCenterY = circleRect.top + circleRadius;

    // console.log(circleRadius,circleCenterX,circleCenterY);

    if(e.key == "ArrowRight"){
        if(moveX < (window.innerWidth - img.offsetWidth - 20)){
            moveX += 20;
        }
    }
    else if(e.key == "ArrowLeft"){
        if(moveX > 0){
            moveX -= 20;
        }
    }
    else if(e.key == "ArrowUp"){
        if(moveY > 0){
            moveY -= 20;
        }
    }
    else if(e.key == "ArrowDown"){
        if(moveY < (window.innerHeight - img.offsetHeight - 20)){
            moveY += 20;
        }
    }

    if(imageRect.left >= circleRect.left && imageRect.bottom >= circleRect.top){
        img.style.opacity = 0;
    }

    console.log(moveX,moveY);
    
    img.style.left = moveX + "px";
    img.style.top = moveY + "px";
    
})


// circle.addEventListener("mousemove",function(){
//     img.style.display = "none";
// })

// Page Reload Feature
document.querySelector("button").addEventListener("click",function(){
    location.reload();
})