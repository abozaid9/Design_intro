// if(localStorage.length>0){
//     document.body.style.background=localStorage.color;  
// }
// function setColor(color){

//     localStorage.setItem("color",color)
//     document.body.style.background = color;
// }

let scrollUp=document.getElementById("top");
onscroll= () => scrollY >= 400? scrollUp.style.display="block": scrollUp.style.display="none";
scrollUp.onclick=()=>scroll({top:0,left:0,behavior:"smooth"})

