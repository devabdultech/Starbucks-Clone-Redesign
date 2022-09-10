const body = document.querySelector("body");
const mobileToggle = document.getElementById("mobileToggle");
const mobileNav = document.getElementById("mobileNav");
const menuOpen = document.getElementById("menuOpen");
const menuNav = document.getElementById("menuNav");
const menuNavClose = document.getElementById("menuNavClose");
const openBtn = document.querySelectorAll(".openBtn")
const openContent = document.querySelectorAll(".openContent")


mobileToggle.addEventListener('click', () => {
    if(mobileNav.classList.contains('hidden')) {
        mobileNav.classList.remove('hidden');
        mobileNav.classList.add('block')
        mobileToggle.src = '/assets/close.svg';
        gsap.fromTo(mobileNav, {x: 100}, {x: 0, duration: 0.3, ease: "power1.out"})
    } else {
        mobileNav.classList.remove('block');
        mobileNav.classList.add('hidden');
        mobileToggle.src = '/assets/menu.svg';
        gsap.fromTo(mobileNav, {x: 0, duration: 0.3, ease: "power1.out"})

    };

    if(menuNav.classList.contains('block')) {
        menuNav.classList.remove('block');
        menuNav.classList.add('hidden')
    }
});

menuOpen.addEventListener('click', () => {
    if(menuNav.classList.contains('hidden')) {
        menuNav.classList.remove('hidden');
        menuNav.classList.add('block')
        gsap.fromTo(menuNav, {x: 100}, {x: 0, duration: 0.3, ease: "power1.out"})
    }
});

menuNavClose.addEventListener('click', () => {
    if(menuNav.classList.contains('block')) {
        menuNav.classList.remove('block');
        menuNav.classList.add('hidden')
        gsap.fromTo(menuNav, {x: 0}, {x: -100, duration: 0.3, ease: "power1.out"})
    }
});

for(btn of openBtn) {
    btn.addEventListener('click', () => {
        for(content of openContent) {
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                content.classList.add('flex');
            } else {
                content.classList.remove('flex');
                content.classList.add('hidden');
            }
        }
    })
}



