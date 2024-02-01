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

gsap.from('.us-text', {
    opacity: 0,
    duration: 2,
    x:120,
    scrollTrigger: {
        trigger: '.us-text',
        start: 'top 90%'
    }
});