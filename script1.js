let mm = gsap.matchMedia();
let previousWidth = window.innerWidth;
let previousHeight = window.innerHeight;

// Fungsi debounce untuk memperhalus resize event
function debounce(func, wait = 100) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Fungsi untuk memperbarui posisi elemen berdasarkan perubahan 1px
function updateElementPositions() {
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;

    // Hitung perbedaan ukuran layar
    const deltaX = currentWidth - previousWidth;
    const deltaY = currentHeight - previousHeight;

    // Update hanya jika ada perubahan 1px
    if (Math.abs(deltaX) > 1 || Math.abs(deltaY) > 1) {
        previousWidth = currentWidth;
        previousHeight = currentHeight;
        
        // Hapus timeline yang ada sebelum mereset posisi
        initializeTimeline(); // Reinitialize timeline untuk viewport baru
        ScrollTrigger.refresh(); // Refresh trigger untuk sinkronisasi scroll
    }
}

// Set timeline awal untuk animasi pertama kali
function initializeTimeline() {
    mm.add("(min-width: 501px)", () => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#page2",
                start: "0% 93%",
                end: "70% -30%",
                scrub: true,
            }
        });

        tl.to('#beer', {
            top: `${window.innerHeight * 1.05}px`,
            scale: 0.8,
            left: `${window.innerWidth * 0.12}px`,
            rotate: "0deg",
        }, 'beer')
        .to('#hop', {
            top: `${window.innerHeight * 1.1}px`,
            left: `${window.innerWidth * 0.05}px`,
        }, 'beer')
        .to('#hop2', {
            top: `${window.innerHeight * 1.2}px`,
            left: `${window.innerWidth * 0.7}px`,
        }, 'beer')
        .to('#malt', {
            top: `${window.innerHeight * 1.43}px`,
            rotate: "0deg",
            left: `${window.innerWidth * 0.2}px`,
        }, 'beer')
        .to('#es', {
            top: `${window.innerHeight * 1.6}px`,
            left: `${window.innerWidth * 0.8}px`,
        }, 'beer');

        // Bagian page4
        tl.to('#beer', {
            top: `${window.innerHeight * 2.095}px`,
            scale: 0.4,
            left: `${window.innerWidth * 0.26}px`,
            rotate: "0deg",
        }, 'hop')
        .to('#hop', {
            top: `${window.innerHeight * 1.98}px`,
            left: `${window.innerWidth * 0.25}px`,
        }, 'hop')
        .to('#hop2', {
            top: `${window.innerHeight * 1.98}px`,
            left: `${window.innerWidth * 0.61}px`,
        }, 'hop');
        
        return () => {
            tl.kill();
        };
    });

    mm.add("(max-width: 450px) and (max-height: 850px)", () => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#page2",
                start: "0% 93%",
                end: "-10% 10%",
                scrub: true,
            }
        });

        tl.to('#beer', {
            top: "113%",
            scale: 0.9,
            left: "15%",
            rotate: "0deg",
        }, 'beer')
        .to('#hop', {
            top: "110%",
            left: "5%",
        }, 'beer')
        .to('#hop2', {
            top: "120%",
            left: "63%",
        }, 'beer')
        .to('#malt', {
            top: "135%",
            rotate: "0deg",
            left: "35%", 
        }, 'beer')
        .to('#es', {
            top: "152%",
            left: "30%",
        }, 'beer');

        // Timeline khusus untuk animasi page4
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#page4 h1",
                start: "0% 95%",
                end: "50% 10%",
                scrub: true,
            }
        });
        
        tl2.to('#beer', {
            top: "212%",
            scale: 0.3,
            left: "45%",
            rotate: "0deg",
        }, 'hop')
        .to('#hop', {
            top: "211.5%",
            scale: .6,
            left: "10.5%",
        }, 'hop')
        .to('#hop2', {
            top: "208%",
            left: "65%",
        }, 'hop');

        return () => {
            tl.kill();
            tl2.kill();
        };
    });
}

// Panggil timeline awal
initializeTimeline();

// Event listener untuk memperbarui posisi elemen saat ukuran layar berubah 1px
window.addEventListener('resize', updateElementPositions);
