const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.to(".text", {y:"0%", duration: 1, stagger: 0.40});
tl.to(".slider", {y: "-100%", duration: 1, delay: 1});
tl.to(".intro", {y: "-100%", duration: .5}, "-=1");
tl.fromTo(".navbar", {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo(".hero-header", {y: "-100%", opacity: 0}, {y: "0%", opacity: 1, duration: 1});
tl.fromTo(".hero-text", {x: "-100%",opacity: 0}, {x: "0%", opacity: 1, duration: 1});
