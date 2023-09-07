let offset = 0;
const sliderBody = document.querySelector('.swiper-wrapper');

document.querySelector('.swiper-button-next').addEventListener('click', function () {
    offset = offset + 468;

    if (offset > 1404) {
        offset = 0;
    }

    sliderBody.style.left = -offset + 'px';
})

document.querySelector('.swiper-button-prev').addEventListener('click', function () {
    offset = offset - 468;

    if (offset < 0) {
        offset = 1404;
    }

    sliderBody.style.left = -offset + 'px';
})
