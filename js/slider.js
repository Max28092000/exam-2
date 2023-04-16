$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplayspeed: 3000,
        speed: 1500,
        infinite: true,
        pauseOnHover: true,
        vertical: true,

        responsive: [
            {
                breakpoint: 770,
                settings: {
                    dots: true,
                }

            }
        ]
    });


    $('.slider-news').slick({
        slidesToShow: 3,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 821,
                settings: {
                    slidesToShow: 1,
                    dots: false,

                }
            },
        ]
    })
});