const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
})

function pageAnimation(){
    gsap.from(".nav h1 ",{
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.9,
    stagger:0.3

})
}