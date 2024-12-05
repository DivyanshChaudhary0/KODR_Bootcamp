
const btn = document.querySelector(".card .download button");
const progress = document.querySelector(".card .progress .growth");
const percent = document.querySelector(".card .download h2");

let growth = 0;

btn.addEventListener("click",function(){
    const random = Math.floor(Math.random()*50 + 30);
    console.log(random);
    btn.style.pointerEvents = "none";

    let int = setInterval(function(){
        growth++;
        btn.innerHTML = "Downloading...";
        progress.style.width = `${growth}%`;
        percent.innerHTML = `${growth}%`
    },random)

    setTimeout(function(){
        clearInterval(int);
        btn.innerHTML = "Downloaded...";
        btn.style.backgroundColor = "#71eb34";
        btn.style.pointerEvents = "none";
    },random*100)
})