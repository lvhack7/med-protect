document.getElementById("footer").innerHTML = `
<div class="container-sm py-10">
            <div class="flex flex-wrap gap-10 items-start justify-between">
                <div class="flex flex-col space-y-6">
                    <img src="../imgs/logo-white.png" width="160">
                    <p class="underline text-white text-lg">Связаться с нами</p>
                    <div class="flex items-center space-x-4">
                    <a href="https://t.me/pkfsteel">
                        <img src="../imgs/telegramm.svg" width="25">
                    </a>
                    <a href="https://wa.me/77003007212"><img src="../imgs/watsapp.svg" width="25"></a>
                    </div>
                </div>
                <div class="flex flex-col space-y-4">
                    <a href="../catalog.html" class="text-white">Каталог</a>
                    <a href="../index.html#about" class="text-white">О компании</a>
                    <a href="../delivery.html" class="text-white">Доставка и оплата</a>
                </div>
                <div class="flex flex-col space-y-4">
                    <a href="../construction/index.html" class="text-white">Рентгенозащитные конструкции</a>
                    <a href="./index.html" class="text-white">Рентгенозащитная одежда</a>
                    <a href="../materials/index.html" class="text-white">Рентгенозащитные материалы</a>
                </div>
                <div class="flex flex-col space-y-4">
                    <a href="tel:+77003007212" class="text-white">+7 700 300 72 12</a>
                </div>
            </div>
        </div>
`

const modal = document.getElementById('myModal');
const openModalButton = document.querySelectorAll(".order")
const closeModalButton = document.getElementById('closeModal');

openModalButton.forEach((btn, id) => {
    btn.addEventListener('click', function (event) {
        event.preventDefault();
        modal.style.display = 'block';
    });
}) 
// Open the modal when the button is clicked

// Close the modal when the close button is clicked
closeModalButton.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});