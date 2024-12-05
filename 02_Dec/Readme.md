
+++++++ document.querySelectorAll +++++++
returns nodelist . its like array. we can loop over it.
we can access the childs of parent by childNodes[value] ;
Also read about getAttribute() and setAttribute() ;

## Syntax :
const parent = document.querySelectorAll(".parent");
parent.forEach(function(elem){
    elem.addEventListener("click",function(e){
        // console.log(elem.childNodes[5]);
    })
    elem.addEventListener("mouseenter",function(e){
        // console.log(elem.childNodes[5]);
    })
})

----> getAttribute("src") = returns the source of image;
----> getAttribute("class") = returns the class of any tag;
----> getAttribute("id") = returns the id of any tag;

----> setAttribute("src","https://www.google.com") = sets the source of any image;
----> setAttribute("class","box1") = sets the class of any tag;
----> setAttribute("id","box1") = sets the id of any tag;
