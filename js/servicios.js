gsap.registerPlugin(ScrollTrigger);
gsap.from('.servicios-item', {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: '.servicios-item',
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none none'
    }
});