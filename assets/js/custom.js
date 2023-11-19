

const showNavbar = ()=>{
    document.querySelector("nav .navbar ul").style="display:flex !important"
    document.querySelector("nav .row").style="flex-direction:column "
    document.querySelector(".showNav").style="display:none";
    document.querySelector(".closeNav").style="display:block";
 }

 const hideNavbar = ()=>{
    document.querySelector("nav .navbar ul").style="display:none !important"
    document.querySelector("nav .row").style="flex-direction:row "
    document.querySelector(".showNav").style="display:block";
    document.querySelector(".closeNav").style="display:none";


 }
 document.querySelector(".showNav").addEventListener("click",showNavbar)
 document.querySelector(".closeNav").addEventListener("click",hideNavbar)

