var tl = gsap.timeline()



tl.from("#nav",{
    opacity: 0,
    duration: 1,
    ease: "none",
    y: -50,
    // stagger:1
})

tl.from("#banner h1",{
    opacity: 0,
    stagger:0.5,
    duration: 0.5,
    ease: "none",
    x: -70,
}, )


tl.from("#banner img",{
    opacity: 0,
    x: 100,
    rotate:45,
    duration: 0.3,
    ease: "none",
    stagger: 0.5,
} )
