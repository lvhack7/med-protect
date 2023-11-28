document.getElementById("navbar").innerHTML = `
<nav class="flex items-center justify-between">
<a href="../index.html" class="flex hover:cursor-pointer">
    <img src="../imgs/logo.png" width="200">
</a>
<div class="hidden xl:flex items-center justify-between lg:space-x-6 xl:space-x-16">
    <div class="relative">
        <a id="city" class="flex items-center text-gray-700 hover:underline hover:cursor-pointer">
            Алматы <img class="ml-2 mt-1" src="../imgs/arrow-down.svg" width="10" >
        </a>
        <div id="cities" class="hidden absolute bg-white shadow rounded-lg w-52 ml-1 mt-2 p-4 z-10">
            <ul class="space-y-2">
                <li class=" text-gray-700 hover:cursor-pointer hover:font-medium">Астана</li>
                <li class=" text-gray-700 hover:cursor-pointer hover:font-medium">Алматы</li>
                <li class=" text-gray-700 hover:cursor-pointer hover:font-medium">Караганда</li>
                <li class=" text-gray-700 hover:cursor-pointer hover:font-medium">Шымкент</li>
                <li class=" text-gray-700 hover:cursor-pointer hover:font-medium">Актобе</li>
                <li class=" text-gray-700 hover:cursor-pointer hover:font-medium">Тараз</li>
                <li class=" text-gray-700 hover:cursor-pointer hover:font-medium">Павлодар</li>
                <li class=" text-gray-700 hover:cursor-pointer hover:font-medium">Усть-Каменогорск</li>
                <li class=" text-gray-700 hover:cursor-pointer hover:font-medium">Семей</li>
                <li class=" text-gray-700 hover:cursor-pointer hover:font-medium">Атырау</li>
            </ul>
        </div>
    </div>
    <a href="../catalog.html" class="text-gray-700 hover:underline hover:cursor-pointer">Каталог</a>
    <a href="../index.html#about" class="text-gray-700 hover:underline hover:cursor-pointer">О компании</a>
    <a href="../delivery.html" class="text-gray-700 hover:underline hover:cursor-pointer">Доставка и оплата</a>
    <a href="../contacts.html" class="text-gray-700 hover:underline hover:cursor-pointer">Контакты</a>
</div>
<div class="hidden xl:flex items-center justify-between space-x-4">
    <div class="flex items-center space-x-3">
        <a href="https://t.me/pkfsteel">
            <img src="../imgs/telegramm.svg" width="25">
        </a>
        <a href="https://wa.me/77003007212"><img src="../imgs/watsapp.svg" width="25"></a>
    </div>
    <a class="text-sm font-medium" href="tel:+77003007212">+7-700-300-72-12</a>
    <a href="tel:+77003007212" class="bg-[#8020DE] px-8 text-white rounded-xl py-3 text-sm hover:bg-[#6D23A9]">Заказать звонок</a>
</div>
<div class="xl:hidden">
    <img onclick="toggleMenu()" src="../imgs/menu-icon.svg" width="35" >
</div>
</nav>
`

document.getElementById("mobile-menu").innerHTML = `
<div id="menu-close" class="flex justify-end p-4">
    <button class="text-gray-800 text-5xl" onclick="toggleMenu()">
        &times;
    </button>
</div>

<div class="flex flex-col">
    <div class="flex flex-col space-y-6 mb-6">
        <div class="relative">
            <a id="city1" class="flex items-center text-gray-700 hover:underline hover:cursor-pointer">
                Алматы <img class="ml-2 mt-1" src="../imgs/arrow-down.svg" width="10" >
            </a>
            <div id="cities1" class="hidden absolute bg-white shadow rounded-lg w-52 ml-1 mt-2 p-4 z-10">
                <ul class="space-y-2">
                    <li class=" text-gray-700 hover:cursor-pointer hover:font-medium">Астана</li>
                    <li class=" text-gray-700 hover:cursor-pointer hover:font-medium">Алматы</li>
                    <li class=" text-gray-700 hover:cursor-pointer hover:font-medium">Караганда</li>
                    <li class=" text-gray-700 hover:cursor-pointer hover:font-medium">Шымкент</li>
                    <li class=" text-gray-700 hover:cursor-pointer hover:font-medium">Актобе</li>
                    <li class=" text-gray-700 hover:cursor-pointer hover:font-medium">Тараз</li>
                    <li class=" text-gray-700 hover:cursor-pointer hover:font-medium">Павлодар</li>
                    <li class=" text-gray-700 hover:cursor-pointer hover:font-medium">Усть-Каменогорск</li>
                    <li class=" text-gray-700 hover:cursor-pointer hover:font-medium">Семей</li>
                    <li class=" text-gray-700 hover:cursor-pointer hover:font-medium">Атырау</li>
                </ul>
            </div>
        </div>
        <a href="../catalog.html" class="text-gray-700 hover:underline hover:cursor-pointer">Каталог</a>
        <a href="../index.html#about" class="text-gray-700 hover:underline hover:cursor-pointer">О компании</a>
        <a href="../delivery.html" class="text-gray-700 hover:underline hover:cursor-pointer">Доставка и оплата</a>
        <a href="../contacts.html" class="text-gray-700 hover:underline hover:cursor-pointer">Контакты</a>
    </div>
    <div class="flex flex-col space-y-4">
        <div class="flex items-center space-x-3 mb-2">
        <a href="https://t.me/pkfsteel">
        <img src="../imgs/telegramm.svg" width="25">
    </a>
    <a href="https://wa.me/77003007212"><img src="../imgs/watsapp.svg" width="25"></a>
        </div>
        <a class="text-sm text-black" href="tel:+77003007212">+7 700 300 72 12</a>
        <div class="flex justify-start">
        <a href="tel:+77003007212" class="bg-[#8020DE] px-8 text-white rounded-xl py-3 text-sm">Заказать звонок</a>
        </div>
    </div>
</div>
`

document.addEventListener("DOMContentLoaded", function() {
    const city = document.getElementById("city")
    const dropdown = document.getElementById("cities")
    const cities = dropdown.querySelector("ul")
    const city_li = cities.querySelectorAll("li")

    city.addEventListener("click", function() {
        console.log("clicked")
        if (dropdown.classList.contains("hidden")) {
            dropdown.classList.remove("hidden")
        } else {
            dropdown.classList.add("hidden")
        }
    })

    city_li.forEach((item, id) => {
        item.addEventListener("click", function() {
            dropdown.classList.add("hidden")
            city.innerHTML = `${item.innerHTML} <img class="ml-2 mt-1" src="../imgs/arrow-down.svg" width="10" >`
        })
    })
})

document.getElementById("search").innerHTML = `
<div class="flex items-center space-x-6 justify-between mt-6">
            <div class="hidden md:block relative">
                <a data-dropdown="d1" class="dropdown1 flex items-center text-sm hover:text-[#8020DE] hover:cursor-pointer">
                    Рентгенозащитные конструкции <img class="ml-2 mt-1" src="./imgs/arrow-down.svg" width="10" >
                </a>
                <div id="d1" class="hidden absolute bg-white shadow rounded-lg w-60 ml-1 mt-2 p-4 z-10">
                    <div class="flex flex-col space-y-4">
                        <a href="./construction/doors.html" class="text-sm text-gray-700 hover:cursor-pointer hover:text-[#8020DE]">Двери рентгенозащитные</a>
                        <a href="./construction/screens.html" class="text-sm text-gray-700 hover:cursor-pointer hover:text-[#8020DE]">Ширмы рентгенозащитные</a>
                        <a href="./construction/windows.html" class="text-sm text-gray-700 hover:cursor-pointer hover:text-[#8020DE]">Окна рентгенозащитные</a>
                        <a href="./construction/gates.html" class="text-sm text-gray-700 hover:cursor-pointer hover:text-[#8020DE]">Ворота рентгенозащитные</a>
                        <a href="./construction/hanger.html" class="text-sm text-gray-700 hover:cursor-pointer hover:text-[#8020DE]">Вешалки рентгенозащитные</a>
                        <a href="./construction/curtains.html" class="text-sm text-gray-700 hover:cursor-pointer hover:text-[#8020DE]">Шторы рентгенозащитные</a>
                        <a href="./construction/blinds.html" class="text-sm text-gray-700 hover:cursor-pointer hover:text-[#8020DE]">Жалюзи рентгенозащитные</a>
                    </div>
                </div>
            </div>
            <div class="hidden md:block relative">
                <a data-dropdown="d2" class="dropdown1 flex items-center text-sm hover:text-[#8020DE] hover:cursor-pointer">
                    Рентгенозащитная одежда <img class="ml-2 mt-1" src="./imgs/arrow-down.svg" width="10" >
                </a>
                <div id="d2" class="hidden absolute bg-white shadow rounded-lg w-48 ml-5 mt-2 p-4 z-10">
                    <div class="flex flex-col space-y-4">
                        <a href="./clothes/personal.html" class="text-sm text-gray-700 hover:cursor-pointer hover:text-[#8020DE]">Для персонала</a>
                        <a href="./clothes/patient.html" class="text-sm text-gray-700 hover:cursor-pointer hover:text-[#8020DE]">Для пациентов </a>
                        <a href="./clothes/children.html" class="text-sm text-gray-700 hover:cursor-pointer hover:text-[#8020DE]">Детская</a>
                        <a href="./clothes/pediatric.html" class="text-sm text-gray-700 hover:cursor-pointer hover:text-[#8020DE]">Набор для микропедиатрии</a>
                        <a href="./clothes/list.html" class="text-sm text-gray-700 hover:cursor-pointer hover:text-[#8020DE]">Пластины</a>
                        
                    </div>
                </div>
            </div>
            <div class="hidden md:block relative">
                <a data-dropdown="d3" class="dropdown1 flex items-center text-sm hover:text-[#8020DE] hover:cursor-pointer">
                    Рентгенозащитные материалы <img class="ml-2 mt-1" src="./imgs/arrow-down.svg" width="10" >
                </a>
                <div id="d3" class="hidden absolute bg-white shadow rounded-lg w-52 ml-5 mt-2 p-4 z-10">
                    <div class="flex flex-col space-y-4">
                        <a href="./materials/rubber.html" class="text-sm text-gray-700 hover:cursor-pointer hover:text-[#8020DE]">Рентгенозащитная резина</a>
                        <a href="./materials/list.html" class="text-sm text-gray-700 hover:cursor-pointer hover:text-[#8020DE]">Свинец листовой</a>
                        <a href="./materials/barit.html" class="text-sm text-gray-700 hover:cursor-pointer hover:text-[#8020DE]">Штукатурка баритовая, ровнитель</a>
                        <a href="./materials/panels.html" class="text-sm text-gray-700 hover:cursor-pointer hover:text-[#8020DE]">Рентгенозащитные панели</a> 
                    </div>
                </div>
            </div>
            <div class="flex flex-grow items-center bg-gray-100 rounded-xl space-x-2 px-4 py-2">
                <img src="./imgs/search-icon.svg" width="15" >
                <input 
                    type="text"
                    class="bg-transparent text-sm borer-0 focus:outline-none w-full"
                >
            </div>
        </div>
`

document.addEventListener("DOMContentLoaded", function() {
    const city = document.getElementById("city1")
    const dropdown = document.getElementById("cities1")
    const cities = dropdown.querySelector("ul")
    const city_li = cities.querySelectorAll("li")

    city.addEventListener("click", function() {
        console.log("clicked")
        if (dropdown.classList.contains("hidden")) {
            dropdown.classList.remove("hidden")
        } else {
            dropdown.classList.add("hidden")
        }
    })

    city_li.forEach((item, id) => {
        item.addEventListener("click", function() {
            dropdown.classList.add("hidden")
            city.innerHTML = `${item.innerHTML} <img class="ml-2 mt-1" src="../imgs/arrow-down.svg" width="10" >`
        })
    })
})

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