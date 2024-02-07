var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

///para llenar datos
function submitForm(event){
    event.preventDefault();
    const name= document.getElementById('name').value;
    const email= document.getElementById('email').value;
    const telefono= document.getElementById('telefono').value;
    const message= document.getElementById('message').value;
   
    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML= `
    <strong>Tu mensaje fue Enviado</strong><br>
    <strong>Name:</strong> ${name}<br>
    <strong>Email:</strong> ${email}<br>
    <strong>Telefono:</strong> ${telefono}<br>
    <strong>Mensaje:</strong> ${message}<br><strong>Te contactaremos muy pronto</strong>`
};


gsap.from('.numbertext', {
    opacity: 0,
    duration: 2,
    x:-120,
    scrollTrigger: {
        trigger: '.numbertext',
        start: 'top 90%'
    }
});

gsap.from('.contact-form', {
    opacity: 0,
    duration: 2,
    x:120,
    scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 90%'
    }
});

gsap.from('.nav-logo', {
    opacity: 0,
    duration: 2,
    x:-120,
    scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 90%'
    }
});

gsap.from('.nav', {
    opacity: 0,
    duration: 2,
    x:120,
    scrollTrigger: {
        trigger: '.header',
        start: 'top 90%'
    }
});
