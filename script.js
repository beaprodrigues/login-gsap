const { default: gsap } = require("gsap");

gsap.from("video", {
    scale: 1.2,
    duration: 2,
    ease: "power3.out",
});
gsap.from(".header", {
    y: "100%",
    opacity: 0,
    delay: 1,
    duration: 1
})
gsap.from(".perfil, .perfis p", {
    x: "100%",
    opacity: 0,
    stagger: 0.2,
    delay: 1
})
gsap.from(".intro", {
    y: "50%",
    opacity: 0,
    delay: 1,
    duration: 1
})
gsap.from(".formulario, .entrar", {
    y: 100,
    opacity: 0,
    stagger: 0.2,
    delay: 1.5
})
gsap.from(".form-fallback", {
    opacity: 0,
    delay: 2.5,
    duration: 1
})