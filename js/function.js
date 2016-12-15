$(document).ready(function() {

	// First screen full height
	function setHeiHeight() {
	    $('.full__height').css({
	        minHeight: $(window).height() + 'px'
	    });
	}

    // Запуск скриптов для десктопа и моб версий
    if ($(window).width() >= 768 ) {
        fullpageStart();
        $('.first_screen_kit').mouseenter(function() {
            kitAnimation();
        });

        $('body').on('click', '.next_section', function() {
            if ($('html').hasClass('fp-enabled') == true) {
                $.fn.fullpage.moveSectionDown('2');
            }
        });

        setTimeout(function() {
            kitAnimation();
        }, 2000);

    } else {

        var tempScrollTop, currentScrollTop = 0;
            elTopHei = 0;


        setHeiHeight();
        resetClickLink();
        first_screen_link();
        scrollToSectionAfterClick();
        seviceBoxHei();
        awardsItemHei();
    }

    $(window).scroll(function() {

        if ($(window).width() < 768) {        
            stikyMenu();

            tempScrollTop = currentScrollTop;
        }


    });

    // Запуск скриптов при изменении размера экрана
    $(window).resize(function() {
        if ($(window).width() >= 768 ) {
            // fullpageStart();
        } else {
            setHeiHeight();
            resetClickLink();
            seviceBoxHei();
            awardsItemHei();
        }

    });

	// Reset link whte attribute href="#"
    function resetClickLink() {
    	$('[href*="#"]').click(function(event) {
            if ($(window).width() <= 768 ) {            
        		event.preventDefault();
            } else {
                return true;
            }
    	});
    }

    // Scroll after click to first_screen_link
    function first_screen_link() {
        $('.first_screen_link').on('click', function(event) {
            event.preventDefault();
            $('html, body').animate({ 'scrollTop': $('#about').offset().top }, 500);
        });
    }

	// Scroll to ID // Плавный скролл к элементу при нажатии на ссылку. В ссылке указываем ID элемента
    function scrollToSectionAfterClick() {
        $('.header a[href^="#"]').click( function(){
            var scroll_el = $(this).attr('data-href');
            setTimeout(function() {
                if ($(scroll_el).length != 0) {
                    $('html, body').animate({ 'scrollTop': $(scroll_el).offset().top +2 }, 500);
                    $('html, body').animate({ 'scrollTop': $(scroll_el).offset().top -2 }, 50);
                }
            }, 10);
            // return false;
        });
    }

	// Stiky menu // Липкое меню. При прокрутке к элементу #header добавляется класс .stiky который и стилизуем
    function stikyMenu() {

        var scrollHei = $(window).height();
            firstHei = $('#first_screen').height();
            aboutHei = $('#about').height();
            head = $('#header');
            currentScrollTop = $(window).scrollTop();

        if( $(window).scrollTop() > firstHei -40 ) {
            if (head.hasClass('stiky') != true ) {
                head.addClass('stiky');
            }
        } else {
            head.removeClass('stiky');
        }

        if (tempScrollTop < currentScrollTop ) {
            if (currentScrollTop >= firstHei + aboutHei) {            
                if (head.hasClass('stiky') == true ) {
                    head.removeClass('stiky');
                    console.log('Sroll up');
                }
            }
        } else {
            console.log('Scroll down');
        }

    }

    // Mobile menu
    function hideMobileMenu() {
        // if ($(window).width() > 1024 && isMobile.iOS() ) {
        if ($(window).width() >= 768 ) {
            $('.header_wave').addClass('close');
            setTimeout(function() {
                $('.logo_big').removeClass('hide')
            }, 10);
            setTimeout(function() {        
                $('.navbar').removeClass('open');
            }, 700);
            setTimeout(function() {
                $('.header_wave').removeClass('close');
            }, 1400);
            // console.log('desktop hide menu')
        } else {
            $('.header_wave').addClass('close');
            $('.logo_big').removeClass('hide')
            $('.navbar').removeClass('open');
            $('.header_wave').removeClass('close');
            // console.log('mobile hide menu')
        }
    }

    function hideShowMenu() {
        $('#header').css('opacity', '0');
        setTimeout(function() {
            $('#header').css('opacity', '1');
        }, 1000);
    }

    $('.toggle_menu').click(function() {
        $('.header_wave').addClass('open');
        setTimeout(function() {        
            $('.navbar').addClass('open');
        }, 700);
        setTimeout(function() {
            $('.header_wave').removeClass('open');
        }, 1400);
    });

    $('.header .icon_close,.header .navbar__link').click(function() {
        hideMobileMenu();
    });

    function tabsToglle() {
        if (isMobile.iOS()) {        
            $('.jobs_tab').on('tap', 'a', function(event) {
                event.preventDefault();
                
                var activeTab = $(this).attr('href');
                    activeGrid = $('.jobs_grid.active');
                    grid = $('.jobs_grid');

                $('.jobs_tab a').removeClass('active');
                $(this).addClass('active');

                if ($(window).width() >= 768) {            
                    grid.removeClass('active animated zoomInDown');
                    $(activeTab).addClass('active animated zoomInDown');

                    if ($(activeTab).hasClass('zoomInDown') == true) {            
                        $(activeTab).removeClass('animated zoomInDown');
                        $(activeTab).addClass('animated zoomInDown');
                    } else {
                        $(activeTab).addClass('animated zoomInDown');
                    }
                } else {
                    grid.removeClass('active animated fadeIn');
                    $(activeTab).addClass('active animated fadeIn');

                    if ($(activeTab).hasClass('fadeIn') == true) {            
                        $(activeTab).removeClass('animated fadeIn');
                        $(activeTab).addClass('animated fadeIn');
                    } else {
                        $(activeTab).addClass('animated fadeIn');
                    }
                }
            });
        } else {
            $('.jobs_tab').on('click', 'a', function(event) {
                event.preventDefault();
                
                var activeTab = $(this).attr('href');
                    activeGrid = $('.jobs_grid.active');
                    grid = $('.jobs_grid');

                $('.jobs_tab a').removeClass('active');
                $(this).addClass('active');

                if ($(window).width() >= 768) {            
                    grid.removeClass('active animated zoomInDown');
                    $(activeTab).addClass('active animated zoomInDown');

                    if ($(activeTab).hasClass('zoomInDown') == true) {            
                        $(activeTab).removeClass('animated zoomInDown');
                        $(activeTab).addClass('animated zoomInDown');
                    } else {
                        $(activeTab).addClass('animated zoomInDown');
                    }
                } else {
                    grid.removeClass('active animated fadeIn');
                    $(activeTab).addClass('active animated fadeIn');

                    if ($(activeTab).hasClass('fadeIn') == true) {            
                        $(activeTab).removeClass('animated fadeIn');
                        $(activeTab).addClass('animated fadeIn');
                    } else {
                        $(activeTab).addClass('animated fadeIn');
                    }
                }
            });
        }
    }

    tabsToglle();

    $('#fp-nav').hide();

    function fullpageStart() {
        $(".main__content").fullpage({
            //Navigation
            menu: '#header',
            lockAnchors: false,
            anchors:['firstScreen', 'aboutPage', 'uslugiBox', 'jobsiBox', 'reviewBox', 'awardsBox', 'bxBox', 'contactBox'],

            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['Наверх', 'Обо мне', 'Услуги', 'Работы', 'Отзывы', 'Сертификаты', 'Преимущества', 'Контакты'],
            showActiveTooltip: false,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',

            //Scrolling
            css3: true,
            scrollingSpeed: 700,
            scrollOverflow: true,
            // scrollOverflowOptions: null,
            touchSensitivity: 15,

            //Design
            verticalCentered: false,

            //Custom selectors
            sectionSelector: 'section',
            slideSelector: '.slide',

            //events
            onLeave: function(index, nextIndex, direction){
                if (index == 1) {
                    hideShowMenu();
                }
                if (index == 2 && direction =='up') {
                    hideShowMenu();
                    $('#fp-nav').hide();
                }
            },
            afterLoad: function(anchorLink, index){
                if (anchorLink != 'firstScreen') {
                    $('#header').addClass('stiky');
                    $('#fp-nav').show();
                } else {
                    $('#header').removeClass('stiky');
                }
                if (index == 2) {
                    var aboutBox = $('.about_history,.about_photo,.about_text').hasClass('animated');
                    if (aboutBox != true) {
                        $('.about_history').addClass('animated fadeInLeft');
                        $('.about_photo').addClass('animated fadeInUp');
                        $('.about_text').addClass('animated fadeInRight');
                    }
                }
                if (index == 3) {
                    var serviceBox = $('.service_point_item').hasClass('animated');
                    if (serviceBox != true) {
                        $.each($('.service_point_item'), function(i, el) {
                            setTimeout(function() {
                                $(el).addClass("animated fadeInRight");
                            }, 200 + (i * 200));
                        });
                    }
                }
                if (index == 8) {
                    var aboutBox = $('.contact_grid').hasClass('animated');
                    if (aboutBox != true) {
                        $('.contact_grid').addClass('animated fadeInUp');
                    }
                }
            },
            // afterRender: function(){
            // },
            afterResize: function(){
                var pluginContainer = $(this);
                console.log(pluginContainer)
                // console.log($(window).width());
            },
            // afterResponsive: function(isResponsive){
            // },
            // afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
            // onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
        });

    }


    // Service box height
    function seviceBoxHei() {
        var servHei = $('.service_descr').height();
        $('.service_point').css('minHeight', (+servHei + 100)+'px');
    }

    // Awards box grid item height
    function awardsItemHei() {
        var awardsHei = $(window).height();
            orientHeight = $(window).height();
            orientWidth = $(window).width();
        if (orientWidth>orientHeight) {        
            $('.awards_grid .grid__item').css('height', (+awardsHei/2.5)+'px');
        } else {
            $('.awards_grid .grid__item').css('height', (+awardsHei/4)+'px');
        }
    }

    function kitAnimation() {
        if ($(window).width() >= 960) {
            if ($('.first_screen_kit').hasClass('splash') != true ) {
                $('.first_screen_kit').addClass('splash');
                setTimeout(function() {
                    $('.first_screen_kit').addClass('view');
                }, 500);
                setTimeout(function() {
                    $('.grid_kit').addClass('animated fadeInUp');
                    $('#tonn').animateNumber({
                       number: 150, 
                    },  1800);
                    $('#metr').animateNumber({
                       number: 33, 
                    }, 1000);
                    $('#year').animateNumber({
                       number: 110, 
                    }, 1500);
                }, 2000);
                setTimeout(function() {
                    $('.kit_description').addClass('animated fadeInUp');
                }, 2500);
                setTimeout(function() {
                    $('.kit_description_text').typed({
                        strings: ["Самый большой кит, самое большое современное животное, а также, вероятно, крупнейшее из всех животных, когда-либо обитавших на Земле. Его длина достигает 33 метров, а масса может значительно превышать 150 тонн"],
                        typeSpeed: -100,
                        showCursor: false,
                        preStringTyped: function() {
                            audioPlay();
                        },
                        onStringTyped: function() {
                            audioStop();
                            setTimeout(function() {
                                $('.kit_like').addClass('animated fadeInUp');
                            }, 1000);
                        }
                    });
                }, 3000);
            }
        }
    }

    formFeld = $('input:not([type]), input[type=text], input[type=password], input[type=email], input[type=url], input[type=search], input[type=tel], input[type=number], input[type=datetime], textarea');
    formFeld.focus(function() {
        $(this).parent('.form__row').addClass('focus');
    });

    formFeld.blur(function() {
        $(this).parent('.form__row').removeClass('focus');
    });

    function audioPlay() {
        document.getElementById('audio').play();
    }

    function audioStop() {
        document.getElementById('audio').pause();
    }

    $(".tel_mask").mask("+7 (999) 999-9999");


    // Form validate for Ios
    if (isMobile.iOS()) {
        $("form").submit(function(e) {

        var ref = $(this).find("[required]");

        $(ref).each(function(){
            if ( $(this).val() == '' )
            {
                alert("Заполните обязательные поля");

                $(this).focus();

                e.preventDefault();
                return false;
                }
            });  return true;
        });
    }

    $('.partners_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 574,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });

});



/// ================================================================
var isMobile = null;
(function () {
    'use strict';
    isMobile = function () {
        return !!(isMobile.any());
    };

    isMobile.Android = function () {
        return !!(navigator.userAgent.match(/Android/i));
    };
    isMobile.BlackBerry = function () {
        return !!(navigator.userAgent.match(/BlackBerry/i));
    };
    isMobile.iOS = function () {
        return !!(navigator.userAgent.match(/iPhone|iPad|iPod/i));
        console.log('iOS');
    };
    isMobile.Opera = function () {
        return !!(navigator.userAgent.match(/Opera Mini/i));
    };
    isMobile.Windows = function () {
        return !!(navigator.userAgent.match(/IEMobile/i));
    };
    isMobile.any = function () {
        return !!(isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    };

}());