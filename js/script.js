$(document).ready(function () {
    let WindowWidth = window.innerWidth;

    if (WindowWidth >= 991) {

        //hover эффект
        $('.header__menu__item').mouseover(function () {
            $(this).addClass('hover');
        });
        $('.header__menu__item').mouseleave(function () {
            $(this).removeClass('hover');
        });
        $('.header__social_link').mouseover(function () {
            $(this).addClass('hover');
        });
        $('.header__social_link').mouseleave(function () {
            $(this).removeClass('hover');
        });
        $('.footer__content_social_link').mouseover(function () {
            $(this).addClass('hover');
        });
        $('.footer__content_social_link').mouseleave(function () {
            $(this).removeClass('hover');
        });
    };

    //подключаем nice select
    $('select').niceSelect();

    //слайдер
    const slider = document.querySelector('.swiper-container_main');
    const sliderVideo = document.querySelector('.swiper-container_video');
    const trueTitleElems = document.querySelectorAll('.mainslider__title');


    
    let mySwiper = new Swiper(slider, {
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        pagination: {
            el: ".swiper-pagination_main",
            clickable: true,
            renderBullet: function (index, className) {
            return `<span class="${className}">${trueTitleElems[index].textContent}</span>`;
            },
        },
        allowTouchMove: false,
    });

    let mySwiperVideo = new Swiper(sliderVideo, {
        direction: 'vertical',
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 90,
        allowTouchMove: false,
    });
    
    mySwiper.controller.control = mySwiperVideo;

    // видео
    // const sliderActive = document.querySelectorAll('.swiper-slide_video');
    // const slideVideo = document.querySelectorAll('.mainslider__video');


    //     slideVideo.setAttribute('preload', '');
    //     slideVideo.setAttribute('autoplay', '');
    //     slideVideo.setAttribute('playsinline', '');
    //     slideVideo.setAttribute('muted', '');
    //     slideVideo.setAttribute('loop', '');
    //     console.log('try');
    // }
    // if ($('.swiper-slide').hasClass('swiper-slide-active')) { 
    //     // $('.mainslider__video').attr("preload", '');
    //     $('.mainslider__video').attr("autoplay", 'autoplay');
    //     $('.mainslider__video').attr("playsinline", '');
    //     $('.mainslider__video').attr("muted", 'muted');
    //     $('.mainslider__video').attr("loop", 'loop');
    //     console.log('try');
    // } else {
    //     // $('.mainslider__video').removeAttr("preload", '');
    //     $('.mainslider__video').removeAttr("autoplay", 'autoplay');
    //     $('.mainslider__video').removeAttr("playsinline", '');
    //     $('.mainslider__video').removeAttr("muted", 'muted');
    //     $('.mainslider__video').removeAttr("loop", 'loop');
    //     console.log('false');
    // }

    const sliderActive = document.querySelectorAll('.swiper-slide_video');
    const slideVideoTrue = document.querySelectorAll('.mainslider__video');
    const testVar = document.querySelector('.swiper-pagination_main');
    const wrapVideo = document.querySelectorAll('.mainslider__video_wrapper > video');
    console.log(testVar)

    // function stopVideo(){
    //     document.querySelectorAll('.mainslider__video').forEach(element => {
    //         element.pause();
    //     })
    // }
    function startVideo() {
        wrapVideo.forEach(video => {
            if(video.classList.contains('start')) {
                video.play();

            }
        });
    }




    function stopVideo(){
        wrapVideo.forEach(video => {
            if(video.classList.contains('pause')) {
                video.pause();
                video.addEventListener('pause',function(){
                    video.load();     
                },false);
            }
        });
    }

    setTimeout(() => {
        startVideo();
    }, 5000);


    testVar.addEventListener('click', (e) => {
        console.log('click');
        const target = e.target;
        console.dir(target);
        
        sliderActive.forEach((element, i) => {
            if((target.className === 'swiper-pagination-bullet swiper-pagination-bullet-active')) {
                wrapVideo[i].classList.remove('pause');
                wrapVideo[i].classList.add('start');
                startVideo();
            } 
            if(!(element.classList.contains('swiper-slide-active'))) {
                wrapVideo[i].classList.remove('start');

                wrapVideo[i].classList.add('pause');
                stopVideo();
            } 

        });
    })    
});


