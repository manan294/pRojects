import { gsap } from "gsap";

export const animateBox = (target) => {
 gsap.to("#box", {
   x: 800,
   duration: 4,
   rotate: 360,
 });
};
