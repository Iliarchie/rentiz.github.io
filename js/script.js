const openMenu = document.querySelector('.menu__icon');
const menu = document.querySelector('.header__navigation');
const body = document.querySelector('.body');
const close = document.querySelector('.close');

close.addEventListener('click', function () {
    menu.classList.remove('active');
})

openMenu.addEventListener('click', function () {
    menu.classList.toggle("active");
    body.classList.toggle("_active");
})


const filter = document.querySelector('.filter');

if (filter) {
    const items = filter.querySelectorAll('.block__filter');

    items.forEach(item => {
        item.addEventListener('click', event => {
            item.querySelector('.block-filter__dropdown').classList.toggle('active');
            item.querySelector('.block-filter__icon').classList.toggle('active');

            if (event.target.classList.contains('.block-filter__item')) {
                item.querySelector('.block-filter__value').textContent = event.target.textContent;
            }
        })
    })
}

// -- -- -- -- -- -- SLIDER
//const swiper = new Swiper('.popualr-slider', {
//    spaceBetween: 20,
//    slidesPerView: 3,
//    navigation: {
//        nextEl: '.swiper-button-next',
//        prevEl: '.swiper-button-prev',
//    },
//});
// -- -- -- -- -- SLIDER
