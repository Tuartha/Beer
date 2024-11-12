let mm = gsap.matchMedia();
mm.add("(min-width: 501px)", () => {
    console.log("ANJAY MABAR");
        let tl = gsap.timeline({scrollTrigger: {
            trigger: "#page2",
            start: "0% 93%",
            end: "70% -30%",
            scrub: true,
        }})
        // #page2
        tl.to('#beer', {
            top: `${window.innerHeight * 1.05}px`,
            scale: 0.8,
            left: `${window.innerWidth * 0.12}px`,
            rotate: "0deg",
        }, 'beer')
        tl.to('#hop', {
            top: `${window.innerHeight * 1.1}px`,
            left: `${window.innerWidth * 0.05}px`,
        }, 'beer')
        tl.to('#hop2', {
            top: `${window.innerHeight * 1.2}px`,
            left: `${window.innerWidth * 0.7}px`,
        }, 'beer')
        tl.to('#malt', {
            top: `${window.innerHeight * 1.43}px`,
            rotate: "0deg",
            left: `${window.innerWidth * 0.2}px`, 
        }, 'beer')
        tl.to('#es', {
            top: `${window.innerHeight * 1.6}px`,
            left: `${window.innerWidth * 0.8}px`,
        }, 'beer')
        // #page4
        tl.to('#beer', {
            top: `${window.innerHeight * 2.095}px`,
            scale: 0.4,
            left: `${window.innerWidth * 0.26}px`,
            rotate: "0deg",
        }, 'hop')
        tl.to('#hop', {
            top: `${window.innerHeight * 1.98}px`,
            left: `${window.innerWidth * 0.25}px`,
        }, 'hop')
        tl.to('#hop2', {
            top: `${window.innerHeight * 1.98}px`,
            left: `${window.innerWidth * 0.61}px`,
        }, 'hop')
    // Mengembalikan posisi elemen saat kondisi media tidak lagi terpenuhi
    return () => {
        tl.kill();
    };
}), mm.add("(max-width: 450px) and (max-height: 850px)", () => {
    console.log("CUKIMAK");
    let tl = gsap.timeline({scrollTrigger: {
        trigger: "#page2",
        start: "0% 93%",
        end: "-10% 10%",
        scrub: true,
    }})
    // #page2
    tl.to('#beer', {
        top: "113%",
        scale: 0.9,
        left: "15%",
        rotate: "0deg",
    }, 'beer')
    tl.to('#hop', {
        top: "110%",
        left: "5%",
    }, 'beer')
    tl.to('#hop2', {
        top: "120%",
        left: "63%",
    }, 'beer')
    tl.to('#malt', {
        top: "135%",
        rotate: "0deg",
        left: "35%", 
    }, 'beer')
    tl.to('#es', {
        top: "152%",
        left: "30%",
    }, 'beer')

    let tl2 = gsap.timeline({scrollTrigger: {
        trigger: "#page4 h1",
        start: "0% 95%",
        end: "50% 10%",
        scrub: true,
    }})
    // #page4
    tl2.to('#beer', {
        top: "212%",
        scale: 0.3,
        left: "44%",
        rotate: "0deg",
    }, 'hop')
    tl2.to('#hop', {
        top: "211.5%",
        scale: .6,
        left: "12%",
    }, 'hop')
    tl2.to('#hop2', {
        top: "208%",
        left: "65%",
    }, 'hop')
    // Mengembalikan posisi elemen saat kondisi media tidak lagi terpenuhi
    return () => {
        tl.kill();
        tl2.kill();
    };
})