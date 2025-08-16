function breakThetext(){
    var h1 = document.querySelector("h1");
    var h1Text = h1.textContent;

    var splittedText = h1Text.split("");

    var clutter = "";

    splittedText.forEach(function (elem) {
      clutter += `<span>${elem}</span>`;
    });

    h1.innerHTML = clutter;
}


breakThetext()

gsap.from("h1 span", {
    y: 50,
    duration: 1,
    delay: 0.5,
    stagger:-0.15,
    opacity: 0,
    ease: "back.out(1.7)",
})
    
    