(function ($) {
    //Scrolling feature incase I want to add a navbar
    // $('#home-image').click(function (event) {
    //     event.preventDefault();
    //     viewport.bind("scroll mousedown DOMMouseScroll mousewheel keyup", function () {
    //         viewport.stop();
    //     });
    //     viewport.animate({
    //         scrollTop: $('#about').offset().top
    //     }, 700);
    // });

    // $('#projects-link').click(function (event) {
    //     event.preventDefault();
    //     viewport.bind("scroll mousedown DOMMouseScroll mousewheel keyup", function () {
    //         viewport.stop();
    //     });
    //     viewport.animate({
    //         scrollTop: $('#projects').offset().top
    //     }, 700);
    // });


    $(function () {
        $('#home').waypoint(function () {
            setTimeout(function () {
                $('#home-header').addClass('animated bounceIn')
            }, 0);
            setTimeout(function () {
                $('#home-image').addClass('animated fadeInDown')
            }, 500);
        }, {
            offset: '50%'
        });
        // Typing Animation
        $("#typed").typed({
            strings: ["A Developer", "A Designer", "A Student"],
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });

        $(".reset").click(function(){
            $("#typed").typed('reset');
        });
    });

})(jQuery);