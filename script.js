AOS.init()
// Initialize Lenis
const lenis = new Lenis({
    duration: 2,
})

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
const link = document.querySelector(".links")
const bar = document.querySelector(".checkbtn i")
const links = document.querySelector(".links ")

function Menu() {
    if (link.style.left == "-100vw") {
        link.style.left = "0"
        bar.classList.remove("fa-bars")
        bar.classList.add("fa-xmark")
    } else {
        link.style.left = "-100vw"
        bar.classList.remove("fa-xmark")
        bar.classList.add("fa-bars")
    }
}