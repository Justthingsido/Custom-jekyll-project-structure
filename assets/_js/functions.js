var isShowing = false;
$(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() === $(document).height()) {
        // alert("Show Footer");
        $('.business-info').addClass("footerShowBuss");
        $('.footer-position').addClass("animated bounceInRight footerShow");
        isShowing = true;

    } else if (isShowing === true && $(window).scrollTop() + $(window).height() <= $(document).height() * 0.9) {
        // alert("Hide Footer");
        $('.business-info').removeClass("footerShowBuss");
        $('.footer-position').removeClass("animated bounceInRight footerShow");
        isShowing = false;
    }
});
