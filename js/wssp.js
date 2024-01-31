//select aside wssp
var wssp = document.querySelector(".aside-social_wssp");
//add event listener when click wssp
wssp.addEventListener("mouseover", function () {
    gsap.to(".wssp-img", {
        scale: 1.2,
        duration: 0.6
    }); 
}); //selectors

wssp.addEventListener("mouseout", function () {
    gsap.to(".wssp-img", {
        scale: 1,
        duration: 0.6
    }); 
}); 


