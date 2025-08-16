var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.9,
    ease: "power1.out",
  });
});

window.addEventListener("wheel", function (dets) {
  if (dets.deltaY > 0) {

    gsap.to(".marque", {
      x: "-100%",
      duration: 3,
      ease:"none",
      repeat:-1
    });

gsap.to(".marque img",{
    rotate:180,
    ease:"none"
})

  } else {


    gsap.to(".marque", {
      x: "0%",
      duration: 3,
      ease: "none",
      repeat: -1,
    });


    gsap.to(".marque img", {
      rotate: 0,
      ease: "none",
    });
  }
});








