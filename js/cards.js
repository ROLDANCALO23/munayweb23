//selectors
const cards = document.querySelectorAll('.servicios--card-item');


const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        moveCards();
    }
});

document.addEventListener('DOMContentLoaded',() => {
//call intersection observer for cards

    observer.observe(document.querySelector('.servicios--card-item'));
});



function moveCards() {
    let timeLine = gsap.timeline();
    cards.forEach(card => {
        timeLine.from(card, {
            y: 100,
            opacity: 0,
            duration: 0.6,
            delay:0.1
        })
    })
    observer.unobserve(document.querySelector('.servicios--card-item'));

}