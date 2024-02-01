
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

