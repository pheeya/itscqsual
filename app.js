const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');


    //toggle nav
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    //Animate links
        navlinks.forEach((link, index) => {
            if(link.style.animation){
               link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.6}s`
            }
        });
        //burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();


// open popups

function openPop(identifier){
    var popup = document.getElementById(identifier);
popup.style.opacity="1"
    popup.style.visibility="visible";
    var inner = popup.getElementsByClassName("content")[0];
    inner.style.transform="scale(1)"
}

function popOff(identifier){
    var popup = document.getElementById(identifier);
    popup.style.opacity="0"
    popup.style.visibility="hidden";
    var inner = popup.getElementsByClassName("content")[0];
    inner.style.transform="scale(0)"
    console.log('ok')
}