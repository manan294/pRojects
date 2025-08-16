var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
  });
});

function page1animation() {
  var tl = gsap.timeline();

  tl.from(["nav h1", "nav h4", "nav button"], {
    y: -30,
    duration: 1,
    opacity: 0,
    delay: 0.5,
    stagger: 0,
  });

  tl.from(".center-part1 h1", {
    x: -300,
    opacity: 0,
    duration: 0.4,
  });

  tl.from(".center-part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });

  tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.4,
  });

  tl.from(
    ".center-part2 img",
    {
      x: 100,
      opacity: 0,
      duration: 0.9,
    },
    "-=1"
  );

  tl.from(
    ".section1bot img",
    {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
    },
    "-=1"
  );
}


function page2animation() {
  gsap.registerPlugin(ScrollTrigger);

  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      // markers: true,
      start: "top 50%",
      end: "top -30%",
      scrub: 2,
    },
  });

  tl2.from(".services", {
    y: 30,
    opacity: 0,
    duration: 0.5,
  });


  tl2.from(
    ".elemshadow.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
      ease: "none",
    },
    "manan"
  );

  tl2.from(
    ".elem.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
      ease: "none",
    },
    "manan"
  );

  tl2.from(
    ".elem.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
      ease: "none",
    },
    "manan2"
  );

  tl2.from(
    ".elemshadow.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
      ease: "none",
    },
    "manan2"
  );



}

function page3animations(){
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".casestudy",
      scroller: "body",
      // markers: true,
      start: "top 65%",
      end: "top 30%",
      scrub: 2,
    },
  });

  tl3.from(".casestudy", {
    y: 30,
    opacity: 0,
    duration: 1,
  });

}


page1animation();

page2animation();

page3animations();
