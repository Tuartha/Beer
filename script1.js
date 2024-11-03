let tl = gsap.timeline({scrollTrigger: {
    trigger: "#page2",
    start: "0% 93%",
    end: "70% -30%",
    scrub: true,
}})
tl.to('#beer', {
    top: "105%",
    scale: 0.8,
    left: "12%",
    rotate: "0deg",
}, 'beer')
tl.to('#hop', {
    top: "110%",
    left: "5%",
}, 'beer')
tl.to('#hop2', {
    top: "120%",
    left: "70%",
}, 'beer')
tl.to('#malt', {
    top: "143%",
    rotate: "0deg",
    left: "20%", 
}, 'beer')
tl.to('#es', {
    top: "160%",
    left: "80%",
}, 'beer')

let tl2 = gsap.timeline({scrollTrigger: {
    trigger: "#page4 h1",
    start: "0% 95%",
    end: "70% -30%",
    scrub: true,
}})
tl.to('#beer', {
    top: "215%",
    scale: 0.4,
    left: "25.7%",
    rotate: "0deg",
}, 'hop')
tl.to('#hop', {
    top: "198%",
    left: "25%",
}, 'hop')
tl.to('#hop2', {
    top: "198%",
    left: "61%",
}, 'hop')