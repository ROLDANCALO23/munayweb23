//Selectors
let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav--list');
//vars
let ancho = window.innerWidth;

//Events
burger.addEventListener('click', toggleNav);
document.addEventListener('scroll', scrollNav);



function toggleNav() {
    nav.classList.toggle('toggle');
}



function scrollNav(){
    let scrollY=document.documentElement.scrollTop;
    console.log(ancho)

        if(scrollY >= 50){

            gsap.to(".header" , {
                "background-color": "rgb(4 9 38)",
                "box-shadow": "0px 0px 10px 0px rgba(255,255,255,0.75)",
                scale: 1,
                duration:0.6
            })
            gsap.to(".nav--link" , {           
                "color": "#e6e9f2",
                duration:1
            })

        }

        else{

            gsap.to(".header" , {
                "background-color": "transparent",
                "box-shadow": "0px 0px",
                scale: 1,
                duration:0.6
            })
            gsap.to(".nav--link" , {
                "color": "#fff",
                duration:1
            })

        
    }
}