$(document).ready(function () {
    $('.slider-rooms').slick({
        arrows: true,
        dots: true,
        speed: 1500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        responsive: [{
            breakpoint: 961,
            settings: {
                arrows: false
            }
        }]
    });



    $('.slider-reviews').slick({
        adaptiveHeight: true,
        slidesToShow: 3,
        arrows: true,
        dots: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3500,
        responsive: [{
                breakpoint: 961,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });



    $('.room-card__slider-min').slick({
        slidesToShow: 3,
        arrows: false,
        dots: false,
        focusOnSelect: true,
        vertical: true,

        asNavFor: ".room-card__slider-big",
    });



    $('.room-card__slider-big').slick({
        slidesToShow: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: ".room-card__slider-min",
        // autoplay: true,
        // autoplaySpeed: 1500,
        // vertical: true,
        // verticalSwiping: true,
    });




    $(function () {
        $('.header__burger').on('click', function () {
            $('.burger-link').slideToggle(300, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });

        });

    });


    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
    });


});



let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');

    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');

    }

};


select();

//первая модалка
$('.js-button-reserv').click(function () {
    $('.js-overlay-reserv').fadeIn();
    $('.js-overlay-reserv').addClass('disabled');

});

$('.js-close-reserv').click(function () {
    $('.js-overlay-reserv').fadeOut();

});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
    var popup = $('.js-popup-reserv');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.js-overlay-reserv').fadeOut();

    }
});

// открыть по таймеру 
$(window).on('load', function () {
    setTimeout(function () {
        if ($('.js-overlay-reserv').hasClass('disabled')) {
            return false;
        } else {

            $(".js-overlay-reserv").fadeIn();
        }
    }, 5000);
});

//вторая модалка
$('.js-button-sent').click(function () {
    $('.js-overlay-sent').fadeIn();
    $('.js-overlay-sent').addClass('disabled');

});

$('.js-close-sent,.popup-sent__button').click(function () {
    $('.js-overlay-sent').fadeOut();

});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
    var popup = $('.js-popup-sent');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.js-overlay-sent').fadeOut();

    }
});