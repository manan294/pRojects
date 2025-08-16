var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imgdiv = document.querySelector("#image");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
  });
});

imgdiv.addEventListener("mouseenter", function (dets) {
  cursor.innerHTML = "view more";
  gsap.to(cursor, {
    scale: 5,
    backgroundColor: "#ffffff29",
  });
});

imgdiv.addEventListener("mouseleave", function (dets) {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#ffffffff",
  });
});
