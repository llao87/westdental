jQuery(function () {
    const homeSlider = new Swiper(".home-slider .swiper", {
        loop: true,
    });

    const specialistsSlider = new Swiper(".specialists-slider .swiper", {
        loop: true,
        slidesPerView: 6,
    });
});
