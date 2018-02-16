$(document).ready(function() {

    // $(function() {
    //
    //     //Configs
    //     var width = 720;
    //     var animationSpeed = 700;
    //     var pause = 6000;
    //     var currentSlide = 1;
    //
    //     //Cache DOM
    //     var $carouselWrapper = $('.carousel-wrapper')
    //     var $carousel = $carouselWrapper.find('.carousel')
    //     var $slides = $carousel.find('.slide')
    //
    //     //setInterval
    //     var carouselTimer = setInterval(function() {
    //         $carousel.animate({'margin-left': '-='+width}, animationSpeed, function() {
    //             currentSlide++;
    //             if(currentSlide === $slides.length) {
    //                 currentSlide = 1;
    //                 $carousel.css('margin-left', 0);
    //             }
    //         });
    //     }, pause);
    //
    // });

    $(function() {

        //Configs
        var width = 720;
        var animationSpeed = 700;
        var pause = 4000;
        var currentSlide = 1;
        var hideSpeed = 200;

        //Cache DOM
        var $carouselWrapper = $('.carousel-wrapper')
        var $carousel = $carouselWrapper.find('.carousel')
        var $slides = $carousel.find('.slide')
        var $leftArrow = $carouselWrapper.find('#left')
        var $rightArrow = $carouselWrapper.find('#right')

        var $thumb1 = $('.thumbs').find('#thumb1')
        var $thumb2 = $('.thumbs').find('#thumb2')
        var $thumb3 = $('.thumbs').find('#thumb3')
        var $thumb4 = $('.thumbs').find('#thumb4')
        var $thumb5 = $('.thumbs').find('#thumb5')
        var $thumb6 = $('.thumbs').find('#thumb6')
        var $thumb7 = $('.thumbs').find('#thumb7')
        var $thumb8 = $('.thumbs').find('#thumb8')
        var $thumb9 = $('.thumbs').find('#thumb9')
        var $thumb10 = $('.thumbs').find('#thumb10')

        function hideNav() {
            if (currentSlide > 1) {
                $leftArrow.animate({ 'margin-left': '0px' }, hideSpeed);
            } else {
                $leftArrow.animate({ 'margin-left': '-60px' }, hideSpeed);
            }
            if (currentSlide == $slides.length) {
                $rightArrow.animate({ 'margin-right': '-60px' }, hideSpeed);
            } else {
                $rightArrow.animate({ 'margin-right': '0px' }, hideSpeed);
            }
        };

        function activeSlide() {
            if (currentSlide == 1) {
                $thumb1.css('border', '3px black solid')
                $thumb1.css('transform', '1.05');
            } else {
              $thumb1.css('border', 'none');
            };
            if (currentSlide == 2) {
                $thumb2.css('border', '3px black solid')
                $thumb2.css('transform', '1.05');
            } else {
              $thumb2.css('border', 'none');
            };
            if (currentSlide == 3) {
                $thumb3.css('border', '3px black solid')
                $thumb3.css('transform', '1.05');
            } else {
              $thumb3.css('border', 'none');
            };
            if (currentSlide == 4) {
                $thumb4.css('border', '3px black solid')
                $thumb4.css('transform', '1.05');
            } else {
              $thumb4.css('border', 'none');
            };
            if (currentSlide == 5) {
                $thumb5.css('border', '3px black solid')
                $thumb5.css('transform', '1.05');
            } else {
              $thumb5.css('border', 'none');
            };
            if (currentSlide == 6) {
                $thumb6.css('border', '3px black solid')
                $thumb6.css('transform', '1.05');
            } else {
                $thumb6.css('border', 'none');
            };
            if (currentSlide == 7) {
                $thumb7.css('border', '3px black solid')
                $thumb7.css('transform', '1.05');
            } else {
              $thumb7.css('border', 'none');
            };
            if (currentSlide == 8) {
                $thumb8.css('border', '3px black solid');
                $thumb8.css('transform', '1.05');
            } else {
              $thumb8.css('border', 'none');
            };
            if (currentSlide == 9) {
                $thumb9.css('border', '3px black solid')
                $thumb9.css('transform', '1.05');
            } else {
              $thumb9.css('border', 'none');
            };
            if (currentSlide == 10) {
                $thumb10.css('border', '3px black solid')
                $thumb10.css('transform', '1.05');
            } else {
              $thumb10.css('border', 'none');
            };
        };

        $leftArrow.css('margin-left', '-60px');
        activeSlide();

        $leftArrow.bind('click', function() {
            currentSlide--;
            activeSlide();
            hideNav();
            $carousel.animate({ 'margin-left': '+=' + width }, animationSpeed, function() {
                hideNav();
            });
        });

        $rightArrow.bind('click', function() {
            currentSlide++;
            activeSlide();
            hideNav();
            $carousel.animate({ 'margin-left': '-=' + width }, animationSpeed, function() {
                hideNav();
            });
        });

        //Thumbnails
        $thumb1.bind('click', function() {
            currentSlide = 1;
            activeSlide();
            hideNav();
            $carousel.animate({ 'margin-left': '0px' }, animationSpeed);
            console.log(currentSlide);
        });

        $thumb2.bind('click', function() {
            currentSlide = 2;
            activeSlide();
            hideNav();
            $carousel.animate({ 'margin-left': '-720px' }, animationSpeed);
            console.log(currentSlide);
        });

        $thumb3.bind('click', function() {
            currentSlide = 3;
            activeSlide();
            hideNav();
            $carousel.animate({ 'margin-left': '-1440px' }, animationSpeed);
            console.log(currentSlide);
        });

        $thumb4.bind('click', function() {
            currentSlide = 4;
            activeSlide();
            hideNav();
            $carousel.animate({ 'margin-left': '-2160px' }, animationSpeed);
            console.log(currentSlide);
        });

        $thumb5.bind('click', function() {
            currentSlide = 5;
            activeSlide();
            hideNav();
            $carousel.animate({ 'margin-left': '-2880px' }, animationSpeed);
            console.log(currentSlide);
        });

        $thumb6.bind('click', function() {
            currentSlide = 6;
            activeSlide();
            hideNav();
            $carousel.animate({ 'margin-left': '-3600px' }, animationSpeed);
            console.log(currentSlide);
        });

        $thumb7.bind('click', function() {
            currentSlide = 7;
            activeSlide();
            hideNav();
            $carousel.animate({ 'margin-left': '-4320px' }, animationSpeed);
            console.log(currentSlide);
        });

        $thumb8.bind('click', function() {
            currentSlide = 8;
            activeSlide();
            hideNav();
            $carousel.animate({ 'margin-left': '-5040px' }, animationSpeed);
            console.log(currentSlide);
        });

        $thumb9.bind('click', function() {
            currentSlide = 9;
            activeSlide();
            hideNav();
            $carousel.animate({ 'margin-left': '-5760px' }, animationSpeed);
            console.log(currentSlide);
        });

        $thumb10.bind('click', function() {
            currentSlide = 10;
            activeSlide();
            hideNav();
            $carousel.animate({ 'margin-left': '-6480px' }, animationSpeed);
            console.log(currentSlide);
        });

    });

});
