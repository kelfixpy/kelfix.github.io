let slide = 0;

const track = document.querySelector('.carrusel-track');
const dots = document.querySelectorAll('.dot');
showSlides(slide);
 
function mover(n){
    showSlides(slide += n);
}
function irSlide(n){
    slide =n;
    showSlides(slide);
}
function showSlides(n){
      const slides = document.getElementsByClassName("carrusel-slide");

      if(n >= slides.length){
       slide = 0;
       track.style.transition = 'none' ;
    }else if(n<0){
        slide = slides.length -1;
        track.style.transition='none';
    }else{
        slide = n;
        track.style.transition='transform 0.5s ease-in-out';
    }
      track.style.transform = `translateX(-${slide * 100}%)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[slide].classList.add('active');
}
function abrirmenu() {
    document.getElementById("menuLateral").style.width = "300px";
    document.getElementById("fondoOscuro").style.display = "block";
}

function cerrarMenu() {
    document.getElementById("menuLateral").style.width = "0";
    document.getElementById("fondoOscuro").style.display = "none";
}

    const modal = document.getElementById('cart-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    
    const buyButtons = document.querySelectorAll('button, .btn, a'); 
    
    buyButtons.forEach(button => {
        if (button.textContent.toLowerCase().includes('agregar al carrito')) {
            button.addEventListener('click', (e) => {
                e.preventDefault(); 
                modal.classList.add('show'); 
            });
        }
    });
    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
