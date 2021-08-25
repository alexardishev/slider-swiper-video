


        window.addEventListener('DOMContentLoaded', ()=> {

            const sliderActive = document.querySelectorAll('.swiper-slide_video');
            const slideVideoTrue = document.querySelectorAll('.mainslider__video');
            const testVar = document.querySelector('.swiper-pagination_main');
            const wrapVideo = document.querySelectorAll('.mainslider__video_wrapper > video');
    
    
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
    
                    }
                });
            }
    
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