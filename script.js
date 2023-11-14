const header= document.querySelector("header");

window.addEventListener ("scroll", function (){
    header.classList.toggle( "sticky", window.scrollY >200)
});

let menu=document.querySelector('#menu-icon');
let navlist=document.querySelector('.navlisr');

menu.onclick= () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
};

window.onscroll= () => {
    menu.classList.remove('bx-x')
    navlist.classList.remove('open')
};

const sr =ScrollReveal({
    distance:'40px',
    duration:2050,
    delay:200,
    reset: true,
})

sr.reveal('.hero-text',{orign:'top'});
sr.reveal('.about-img, service-item, .about-text',{orign:'buttom'});
sr.reveal('.about-text h2, .text-center, .rigth-contact h2',{orign:'buttom'});
sr.reveal('.left-contact',{orign:'left'});
sr.reveal('.rigth-contact',{orign:'rigth'});
sr.reveal('.end-section',{orign:'top'});