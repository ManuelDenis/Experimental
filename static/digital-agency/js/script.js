$(window).on("load", function () {

    "use strict";
    /* ===================================
            Loading Timeout
     ====================================== */


    $('.side-menu').removeClass('hidden');


    setTimeout(function () {
        $(".loader").fadeOut("slow");
    }, 1000);


});


jQuery(function ($) {
    "use strict";

    $(window).on('scroll', function () {

        if ($(this).scrollTop() > 260) { // Set position from top to add class
            $('.fixed-nav-on-scroll').removeClass('d-none');
        }
        else {
            $('.fixed-nav-on-scroll').addClass('d-none');
        }

    });

    /* =====================================
      Parallax
   ====================================== */

    if ($(window).width() > 992) {
        $(".parallax").parallaxie({
            speed: 0.55,
            offset:-100,
        });
    }

    if ($(window).width() > 992) {
        $(".parallax1").parallaxie({
            speed: 0.55,
            offset:0,
        });
    }


    //scroll to appear
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500)
            $('.scroll-top-arrow').fadeIn('slow');
        else
            $('.scroll-top-arrow').fadeOut('slow');
    });

    //Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });


    /* ===================================
        Side Menu
    ====================================== */
    if ($("#sidemenu_toggle,#sidemenu_toggle1").length) {
        $("#sidemenu_toggle,#sidemenu_toggle1").on("click", function () {
            $(".side-menu").removeClass("side-menu-opacity");
            $(".pushwrap").toggleClass("active");
            $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
        }), $("#close_side_menu").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active");
            setTimeout(function(){
            $(".side-menu").addClass("side-menu-opacity");
            }, 500);
        }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
            setTimeout(function(){
                $(".side-menu").addClass("side-menu-opacity");
            }, 500);

        }), $("#btn_sideNavClose").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
            setTimeout(function(){
                $(".side-menu").addClass("side-menu-opacity");
            }, 500);
        });
    }

    /* ===================================
      WOW Animation
   ====================================== */

    if ($(window).width() > 991) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        new WOW().init();
    }


/* ===================================
     Mouse parallax
====================================== */

    if($(window).width() > 991) {


        $('.banner,header').mousemove(function (e) {
            $('[data-depth]').each(function () {
                var depth = $(this).data('depth');
                var amountMovedX = (e.pageX * -depth / 4);
                var amountMovedY = (e.pageY * -depth / 4);

                $(this).css({
                    'transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
                });
            });
        });

    }

/* ===================================
    Skill Section Bars
====================================== */

    $(".bar").each(function(){
        $(this).find(".bar-inner").animate({
            width: $(this).attr("data-width")},2000)
    });

    /*=========================================
               Team OWL Carousel
    ===========================================*/
    $('.testimonial-team').owlCarousel({
        loop:true,
        autoplay:false,
        margin: 0,
        nav:true,
        center:true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            },
        }
    });

    $('#team-circle-right').click(function() {
        var owl = $('.testimonial-team');
        owl.owlCarousel();
        owl.trigger('next.owl.carousel');
    });
    $('#team-circle-left').click(function() {
        var owl = $('.testimonial-team');
        owl.owlCarousel();
        owl.trigger('prev.owl.carousel', [300]);
    });

/*=========================================
           Cube Portfolio Initializing
===========================================*/
    $('#js-grid-mosaic').cubeportfolio({
        filters: '#js-filters-mosaic',
        layoutMode: 'grid',
        sortByDimension: true,
        mediaQueries: [{
            width: 1500,
            cols: 2,
        }, {
            width: 1100,
            cols: 2,
        }, {
            width: 768,
            cols: 1,
        }, {
            width: 480,
            cols: 1,
            options: {
                gapHorizontal: 60
            }
        }],
        defaultFilter: '*',
        animationType: 'fadeOut',
        gapHorizontal: 50,
        gapVertical: 50,
        gridAdjustment: 'responsive',
        caption: 'zoom',

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        plugins: {
            loadMore: {
                element: "#js-loadMore-lightbox-gallery",
                action: "click",
                loadItems: 5,
            }
        }

    })
        .on('initComplete.cbp', function () {
            // your functionality
            var $this = $(this);
            if ($(".cbp-filter-item-active").attr("data-filter") === "*") {
                $("#js-loadMore-lightbox-gallery").addClass("active");
            } else {
                $("#js-loadMore-lightbox-gallery").removeClass("active");
            }
            $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
                $(this).removeClass("even");

                console.log();
                var val = index + 1;
                if ($(this).css('left') !== "0px") {
                    $(this).addClass("even");

                }
            });
        })
        .on('onAfterLoadMore.cbp', function () {
            // your functionality
            var $this = $(this);
            $("#js-loadMore-lightbox-gallery a").addClass("d-none");
            $("#js-loadMore-lightbox-gallery").addClass("active-outer");
            $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
                $(this).removeClass("even");
                console.log();
                var val = index + 1;
                if ($(this).css('left') !== "0px") {
                    $(this).addClass("even");
                }
            });
        })
        .on('filterComplete.cbp', function () {
            // your functionality
            var $this = $(this);
            if ($(".cbp-filter-item-active").attr("data-filter") === "*") {
                $("#js-loadMore-lightbox-gallery").addClass("active");
                $("#js-loadMore-lightbox-gallery").removeClass("d-none");
            } else {
                $("#js-loadMore-lightbox-gallery").removeClass("active");
                $("#js-loadMore-lightbox-gallery").addClass("d-none");
            }
            $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
                $(this).removeClass("even");
                var val = index + 1;
                if ($(this).css('left') !== "0px") {
                    $(this).addClass("even");
                }
            });
        });

/*=====================================
      Testimonial Carousel
======================================*/
    $('.testimonial-box').owlCarousel({

        loop: true,
        margin: 20,
        slideSpeed: 5000,
        slideTransition: 'linear',
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            },
        }

    });

/*=====================================
      Partners Carousel
======================================*/
    $('.partners-slider').owlCarousel({
        items: 4,
        autoplay: false,
        smartSpeed: 1500,
        autoplayHoverPause: true,
        slideBy: 1,
        mouseDrag:false,
        loop: false,
        margin: 30,
        dots: false,
        nav: false,
        responsive: {
            1200: {
                items: 4,
                touchDrag:false,
                mouseDrag:false,
            },
            768: {
                items: 3,
                touchDrag:false,
                mouseDrag:false,
            },
            480: {
                items: 2,
                touchDrag:true,
                mouseDrag:true,
            },
            320: {
                items: 1,
                touchDrag:true,
                mouseDrag:true,
            },
        }
    });

/*========================================
      Blog Slick Carousel Vertical
===========================================*/
    $(document).ready(function(){

        if ($(".slider-detail").length) {
            $('.slider-detail').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                active: true,
                // fade: true,
                asNavFor: '.slider-img'
            });
        }

        if ($(".slider-img").length) {
            $('.slider-img').slick({
                vertical: true,
                verticalSwiping: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.slider-detail',
                dots: false,
                arrows: false,
                focusOnSelect: true,
            });
        }


        $('#blog-circle-left').click(function(){
            $('.slider-img').slick('slickNext');
        });
        $('#blog-circle-right').click(function(){
            $('.slider-img').slick('slickPrev');
        });



    });

/*=============================================
     Scroll Top Button
===========================================*/
    $(".scroll").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 20}, 1200);
    });

    $(".scroll1").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 180}, 1200);
    });



});