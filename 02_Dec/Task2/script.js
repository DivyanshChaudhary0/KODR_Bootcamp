
const btn = document.querySelector('button');
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");

btn.addEventListener("click",function(){
    const img1Src = img1.getAttribute("src");
    const img2Src = img2.getAttribute("src");
    img1.setAttribute("src",img2Src);
    img2.setAttribute("src",img1Src);
})