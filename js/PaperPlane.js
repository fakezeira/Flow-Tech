/*global jQuery, document, window, smoothScroll, WOW*/
/* ==========================================================================
Document Ready Function
========================================================================== */
jQuery(document).ready(function () {


    'use strict';


    var onMobile;


    /* ==========================================================================
    Modify Copied Text
    ========================================================================== */
    function addLink() {
        var body_element, selection, pagelink, copytext, newdiv;
        body_element = document.getElementsByTagName('body')[0];
        selection = window.getSelection();
        pagelink = " Read more at: <a href='" + document.location.href + "'>" + document.location.href + "</a>";
        copytext = selection + pagelink;
        newdiv = document.createElement('div');
        newdiv.style.position = 'absolute';
        newdiv.style.left = '-99999px';
        body_element.appendChild(newdiv);
        newdiv.innerHTML = copytext;
        selection.selectAllChildren(newdiv);
        window.setTimeout(function () {
            body_element.removeChild(newdiv);
        }, 0);
    }
    document.oncopy = addLink;


    /* ==========================================================================
    Placeholder
    ========================================================================== */
    jQuery('input, textarea').placeholder();


    /* ==========================================================================
    Data Spy
    ========================================================================== */
    jQuery('body').attr('data-spy', 'scroll').attr('data-target', '#nav-wrapper').attr('data-offset', '100');

    jQuery('a.scrollto').click(function (event) {
        event.preventDefault();
        if (jQuery('.navbar-collapse').hasClass('in')) {
            jQuery('.navbar-collapse').removeClass('in').addClass('collapse');
        }
    });


    /* ==========================================================================
    on mobile ?
    ========================================================================== */
    onMobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) { onMobile = true; }

    if (onMobile === true) {

        /* ==========================================================================
        Smooth Scroll
        ========================================================================== */
        smoothScroll.init({
            offset: 90,
            speed: 500,
            updateURL: false
        });

        /* ==========================================================================
        Remove Parallax
        ========================================================================== */
        jQuery('.parallax-image #home-section').css({backgroundAttachment: 'scroll'});
        jQuery('.parallax-slider #owl-home-wrapper .slide-item').css({backgroundAttachment: 'scroll'});
        jQuery('.parallax-image #home-blog-section').css({backgroundAttachment: 'scroll'});
        jQuery('#download-section').css({backgroundAttachment: 'scroll'});
        jQuery('#video-section').css({backgroundAttachment: 'scroll'});
        jQuery('#numbers-section').css({backgroundAttachment: 'scroll'});
        jQuery('#purchase-section').css({backgroundAttachment: 'scroll'});
        jQuery('#subscribe-section').css({backgroundAttachment: 'scroll'});
        jQuery('#testimonials-section').css({backgroundAttachment: 'scroll'});

        /* ==========================================================================
        Remove ToolTip
        ========================================================================== */
        jQuery("a[data-rel=tooltip]").tooltip('destroy');

        /* ==========================================================================
        okvideo
        ========================================================================== */
        jQuery('.video-background #home-section').css({backgroundSize: 'cover'});
        jQuery('.video-background #home-section').css({background: 'url(images/background/homebg.jpg) center center'});

    } else {

        /* ==========================================================================
        Smooth Scroll
        ========================================================================== */
        smoothScroll.init({
            offset: 90,
            speed: 800,
            updateURL: false
        });

        /* ==========================================================================
        Parallax
        ========================================================================== */
        jQuery('.parallax-image #home-section').parallax('50%', 0.2);
        jQuery('.parallax-slider #owl-home-wrapper .slide-item').parallax('50%', -0.3);
        jQuery('.parallax-image #home-blog-section').parallax('50%', 0.2);

        /* ==========================================================================
        ToolTip
        ========================================================================== */
        jQuery("a[data-rel=tooltip]").tooltip({container: 'body'});

        if (jQuery('body').hasClass('video-background')) {
            /* ==========================================================================
            okvideo
            ========================================================================== */
            jQuery(function () {
                jQuery('.video-background #home-section').okvideo({
                    hd: true,
                    volume: 0,
                    loop: true,
                    adproof: true,
                    autoplay: true,
                    annotations: false,
                    source: 'https://www.youtube.com/watch?v=odyPwv8Nyrc'
                });
            });
        }

    }


    /* ==========================================================================
    Play Video
    ========================================================================== */
    // Open Video
    jQuery('.play-video').on('click', function (e) {
        jQuery('.play-video').css({display: 'none'});
        jQuery('.stop-video').css({display: 'block'});
        jQuery('.video-player').css({display: 'block'});
        e.preventDefault();
    });

    // Close Video
    jQuery('.stop-video').on('click', function (e) {
        jQuery('.stop-video').css({display: 'none'});
        jQuery('.video-player').css({display: 'none'});
        jQuery('.play-video').css({display: 'block'});
        e.preventDefault();
    });


    /* ==========================================================================
    Count To
    ========================================================================== */
    jQuery('.box-numbers [data-to]').each(function () {
        var $this = jQuery(this);
        $this.waypoint(function () {
            $this.countTo({speed: 3000});
        }, {offset: '100%', triggerOnce: true });
    });


    /* ==========================================================================
    Gray Scale
    ========================================================================== */
    jQuery(this).find('.team-box img').each(function () {
        jQuery(this).addClass('grayscale');
    });

    jQuery(this).find('.portfolio-content img').each(function () {
        jQuery(this).addClass('grayscale');
    });

    jQuery(this).find('.post-image img').each(function () {
        jQuery(this).addClass('grayscale');
    });

    jQuery(this).find('.client-img img').each(function () {
        jQuery(this).addClass('grayscale');
    });

    jQuery(this).find('.avatar-image img').each(function () {
        jQuery(this).addClass('grayscale');
    });


    /* ==========================================================================
    Fancy Box
    ========================================================================== */
    jQuery('.fancybox').fancybox({
        helpers : {
            title: {
                type: 'over'
            }
        }
    });
    jQuery('.fancybox-media').fancybox({
        helpers : {
            media : {},
            overlay : {
                speedOut : 0,
                locked: false
            }
        }
    });


    /* ==========================================================================
    MailChimp
    ========================================================================== */
    function mailchimpCallback(response) {
        jQuery('form#newsletter-form .nesto-response').show();
        if (response.result === 'success') {
            jQuery('form#newsletter-form input').val('');
            jQuery('.nesto-response').html('Please check your e-mail to complete the subscription');
        } else if (response.result === 'error') {
            jQuery('.nesto-response').html('Please enter unsubscribed / valid e-mail address');
        }
    }
    jQuery('form#newsletter-form input').focus(function () {
        jQuery('form#newsletter-form .nesto-response').hide();
    });
    jQuery('#newsletter-form').ajaxChimp({
        callback: mailchimpCallback,
        url: 'http://nestolab.us8.list-manage1.com/subscribe/post?u=1bb0930eeb3f8c90f187eb8ac&id=52e0f44deb'
    });


    /* ==========================================================================
    Sidebar Menu Button
    ========================================================================== */
    jQuery('.navbar-toggle').click(function (event) {
        jQuery('.navbar-collapse').toggleClass('nav-visable');
    });
    jQuery('.navbar-collapse').click(function (event) {
        jQuery('.navbar-collapse').removeClass('nav-visable');
        jQuery('.navbar-collapse').removeClass('in').addClass('collapse');
    });


    /* ==========================================================================
    Home Slider
    ========================================================================== */
    jQuery('.owl-home').owlCarousel({
        items: 1,
        autoPlay: false,
        autoHeight: true,
        singleItem: true,
        stopOnHover: true,
        pagination: false,
        navigation: false
    });

    jQuery('a.home-next').click(function () {
        jQuery('.owl-home').trigger('owl.next');
    });
    jQuery('a.home-prev').click(function () {
        jQuery('.owl-home').trigger('owl.prev');
    });


    /* ==========================================================================
    Client Slider
    ========================================================================== */
    jQuery('.owl-client').owlCarousel({
        items: 4,
        autoPlay: true,
        stopOnHover: true,
        pagination: false,
        navigation: false,
        itemsDesktop : [1199, 4],
        itemsDesktopSmall : [992, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: [480, 1],
        itemsMobile : [479, 1]
    });

    jQuery('a.client-next').click(function () {
        jQuery('.owl-client').trigger('owl.next');
    });
    jQuery('a.client-prev').click(function () {
        jQuery('.owl-client').trigger('owl.prev');
    });


    /* ==========================================================================
    Portfolio Slider
    ========================================================================== */
    jQuery('.owl-portfolio').owlCarousel({
        items: 1,
        autoPlay: true,
        singleItem: true,
        stopOnHover: true,
        pagination: false,
        navigation: false
    });

    jQuery('a.portfolio-next').click(function () {
        jQuery('.owl-portfolio').trigger('owl.next');
    });
    jQuery('a.portfolio-prev').click(function () {
        jQuery('.owl-portfolio').trigger('owl.prev');
    });


    /* ==========================================================================
    Testimonials Slider
    ========================================================================== */
    jQuery('.owl-testimonials').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        lazyLoad: true,
        autoplay: true,
        autoplayHoverPause: true
    });


}); // JavaScript Document




/* ==========================================================================
Window Resize
========================================================================== */
jQuery(window).resize(function () {


    'use strict';


    /* ==============================================
    Refresh Data Spy
    =============================================== */
    jQuery('[data-spy="scroll"]').each(function () {
        var $spy = jQuery(this).scrollspy('refresh');
    });


});




/* ==========================================================================
Window Scroll
========================================================================== */
jQuery(window).scroll(function () {


    'use strict';


    var enable_opacity, current_position, home_height;


    current_position = jQuery(document).scrollTop();


    /* ==============================================
    Home Section Opacity
    =============================================== */
    enable_opacity = true; /* Change it to false to disable the slider opacity */
    if (enable_opacity === true) {
        home_height = jQuery('#home-section').height() + 450;
        jQuery('#home-section').css({opacity: (1 - current_position / home_height * 1.2)});
    }


    /* ==============================================
    Menu Background Color
    =============================================== */
    if (current_position >= 10) {
        jQuery('#nav-wrapper').addClass('menubgC');
    } else {
        jQuery('#nav-wrapper').removeClass('menubgC');
    }


});




/* ==========================================================================
Window Load
========================================================================== */
jQuery(window).load(function () {


    'use strict';


    var LoaderDelay, wow, withanimation;


    /* ==============================================
    Loader
    =============================================== */
    LoaderDelay = 350;

    function hideLoader() {
        var loadingLoader = jQuery('#loader');
        loadingLoader.fadeOut();
    }
    hideLoader();


    /* ==========================================================================
    WOW Animation
    ========================================================================== */
    withanimation = true; /* Change it to false to disable the animation */
    if (withanimation === true) {
        wow = new WOW({
            offset: 40,
            mobile: true
        });
        wow.init();
    }


    /* ==========================================================================
    CountDown
    ========================================================================== */
    if (jQuery('body').hasClass('coming-soon')) {
        jQuery('#countdown_dashboard').countDown({
            targetDate: {
                'day': 14,
                'month': 10,
                'year': 2015,
                'hour': 0,
                'min': 0,
                'sec': 0
            },
            omitWeeks: true
        });
    }


});