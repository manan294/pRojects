var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor");

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
    })
})


function page1animation(){


gsap.from("#homemain > h1", {
  x: 600,
  opacity: 0,
  duration: 1.4,
  delay:0.5,
  ease: "power2.out",
});

gsap.from(".headings h1", {
  y: 500,
  opacity: 0,
  stagger: 0.5,
  delay: 0.5,

  duration: 0.8,
  ease: "circ",
});
}

function page2animation(){

  gsap.registerPlugin(ScrollTrigger);

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#home2",
      scroller: "body",
      // markers: true,
      start: "top 70%",
      end: "top -30%",
      // scrub: 2,
    },
  });


 tl.from(
   "#part1",
   {
     y: 100,
     opacity: 0,
     duration: 1,
     ease: "none",
   },
   "manan"
 );

 tl.from(
   "#part2",
   {
     y: 100,
     opacity: 0,
     duration: 1,
     ease: "none",
   },
   "manan"
 );

}



page1animation();
page2animation();