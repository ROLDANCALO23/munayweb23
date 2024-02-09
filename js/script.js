'use strict';

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
//////////////////
const grid = new Muuri('.grid', {
	layout: {
		rounding: false
	}
});

window.addEventListener('load', () => {
	grid.refreshItems().layout();
	document.getElementById('grid').classList.add('imagenes-cargadas');

	// Agregamos los listener de los enlaces para filtrar por categoria.
	const enlaces = document.querySelectorAll('#categorias a');
	enlaces.forEach((elemento) => {
		elemento.addEventListener('click', (evento) => {
			evento.preventDefault();
			enlaces.forEach((enlace) => enlace.classList.remove('activo'));
			evento.target.classList.add('activo');

			const categoria = evento.target.innerHTML.toLowerCase();
			categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
		});
	});

	// Agregamos el listener para la barra de busqueda
	document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
		const busqueda = evento.target.value;
		grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );
	});

	// Agregamos listener para las imagenes
	const overlay = document.getElementById('overlay');
	document.querySelectorAll('.grid .item img').forEach((elemento) => {
		elemento.addEventListener('click', () => {
			const ruta = elemento.getAttribute('src');
			const descripcion = elemento.parentNode.parentNode.dataset.descripcion;

			overlay.classList.add('activo');
			document.querySelector('#overlay img').src = ruta;
			document.querySelector('#overlay .descripcion').innerHTML = descripcion;
		});
	});

	// Eventlistener del boton de cerrar
	document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
		overlay.classList.remove('activo');
	});

	// Eventlistener del overlay
	overlay.addEventListener('click', (evento) => {
		evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
	});
});