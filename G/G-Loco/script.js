gsap.to(".imgcontain", {
  ease: "back.inOut(1.7)",
  width: "100%",
  duration: 2,
  stagger: 2,
});

gsap.to(".text h1", {
   delay: 0.5,
  ease: Expo.easeInOut,
  stagger: 2,
  top: 0,
});

gsap.to(".text h1", {
  delay: 2,  
  ease: Expo.easeInOut,
  stagger: 2,
  top:"-100%"
});
