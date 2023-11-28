// scroll reveal
ScrollReveal({ 
    reset: true,
    distance: '90px',
    duration: 1500,
    delay: 150
});
ScrollReveal().reveal('.home-content, .heading, .contact, .box', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .Projects-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img, .skill,skill-box', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'}); 

