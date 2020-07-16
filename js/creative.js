/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function ($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
        minFontSize: '35px',
        maxFontSize: '65px'
    }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    $(function () {
        $('[data-toggle="tooltip"]').tooltip({
            animated: 'fade',
            placement: 'bottom',
            html: true
        }).on('click', function () {
            $(this).tooltip('hide'); // smartphone
        });
    })

    $('#zui').on('click', function () {
        $.fancybox.open([
            {
                src: '../img/data/z2o.jpg',
                opts: {
                    caption: '<p>「ぎゅぅう～っと、もっと頑張ります！」</p>'
                }
            },
            {
                src: '../img/data/z.jpg',
                opts: {
                    caption: '<p>「瑞鳳です。軽空母ですが、練度があがれば、正規空母並の活躍をおみせできます。」</p>'
                }
            },
            {
                src: '../img/data/zk.jpg',
                opts: {
                    caption: '<p>♡♡おべんと、食べる？♡♡</p>'
                }
            },
            {
                src: '../img/data/z2.jpg',
                opts: {
                    caption: '<p>「大規模改装、しちゃいました！」</p>'
                }
            }
        ], {
            loop: true,
            buttons: [
                "fullScreen",
                "close"
            ],
            protect: true,
            transitionEffect: "tube",
            transitionDuration: 500
        });
    });

    $('#sg').on('click', function () {
        $.fancybox.open([
            {
                src: '../img/data/s2.jpg',
                opts: {
                    caption: '<p>「ありがとう。少し、強くなれたみたいだ。」</p>'
                }
            },
            {
                src: '../img/data/s.jpg',
                opts: {
                    caption: '<p>「僕は白露型駆逐艦、時雨。これからよろしくね。」</p>'
                }
            },
            {
                src: '../img/data/sk.jpg',
                opts: {
                    caption: '<p>「僕に興味があるの？...いいよ、何でも聞いてよ。」</p>'
                }
            }
        ], {
            loop: true,
            buttons: [
                "fullScreen",
                "close"
            ],
            protect: true,
            transitionEffect: "zoom-in-out",
            transitionDuration: 500
        });
    });

    // $('#watch').on({
    //     'mouseenter': function () {

    //         $('#watch').addClass('animated bounceIn')

    //     },
    //     'mouseleave': function () {
    //         $('#watch').removeClass('bounceIn')



    //     }
    // })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
