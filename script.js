document.addEventListener("DOMContentLoaded", function() {
    const catalog = document.querySelectorAll(".dropdown")

    catalog.forEach((elm, id) => {
        elm.addEventListener("click", function() {
            let dropdown = document.getElementById(elm.dataset.dropdown)
            let img = elm.querySelector("img")
            if (dropdown.classList.contains("hidden")) {
                elm.classList.remove("bg-[#EEDDFF]")
                elm.classList.add("bg-[#8020DE]")
                elm.classList.add("text-white")
                if (window.location.pathname === '/catalog.html') {
                    img.src = "./imgs/arrow-up-white.svg"
                } else {
                    img.src = "../imgs/arrow-up-white.svg"
                }
                dropdown.classList.remove("hidden")
            } else {
                elm.classList.add("bg-[#EEDDFF]")
                elm.classList.remove("bg-[#8020DE]")
                elm.classList.remove("text-white")
                if (window.location.pathname === '/catalog.html') {
                    img.src = "../imgs/arrow-down.svg"
                } else {
                    img.src = "../imgs/arrow-down.svg"
                }
                dropdown.classList.add("hidden")
            }
        })
    })
})

document.addEventListener("DOMContentLoaded", function() {
    const catalog1 = document.querySelectorAll(".dropdown1")
    
    catalog1.forEach((elm, id) => {
        console.log(elm)
        elm.addEventListener("click", function() {
            let dropdown = document.getElementById(elm.dataset.dropdown)
            let img = elm.querySelector("img")
            if (dropdown.classList.contains("hidden")) {
                dropdown.classList.remove("hidden")
                img.classList.add("rotate-180")
                elm.classList.add("text-[#8020DE]")
            } else {
                dropdown.classList.add("hidden")
                img.classList.remove("rotate-180")
                elm.classList.remove("text-[#8020DE]")
            }
        })
    })
})

function toggleMenu() {
    var mobileMenu = document.getElementById('mobile-menu');
    var body = document.body

    if(mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.remove("hidden")
        body.classList.add("overflow-hidden")
    } else {
        mobileMenu.classList.add("hidden")
        body.classList.remove("overflow-hidden")
    }
}