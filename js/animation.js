let anchoPantalla = window.innerWidth;
gsap.registerPlugin(ScrollTrigger);
gsap.from('.servicios-item', {
    opacity: 0,
    duration: 1.5,
    stagger: 0.3,
    scrollTrigger: {
        trigger: '.servicios-item',
        start: 'top 90%'
    }
});

gsap.from('.us-img', {
    opacity: 0,
    duration: 2,
    x:-120,
    scrollTrigger: {
        trigger: '.us-img',
        start: 'top 90%'
    }
});

//validar si viewport es mayor a 768px
if(anchoPantalla >= 768){
    gsap.from('.us-text', {
        opacity: 0,
        duration: 2,
        x:120,
        scrollTrigger: {
            trigger: '.us-text',
            start: 'top 90%'
        }
    });

}
else{
    gsap.from('.us-text', {
        opacity: 0,
        duration: 2,
        y:120,
        scrollTrigger: {
            trigger: '.us-text',
            start: 'top 90%'
        }
    });
}


gsap.registerPlugin(ScrollTrigger);

    //let timeLine = gsap.timeline();
        gsap.from('.caracteristicas--card-item', {
            stagger:0.5,
            y: 100,
            opacity: 0,
            duration: 1.5,
            delay:0.5,
            scrollTrigger: {
                trigger: '.caracteristicas--card-item'
            }
        })