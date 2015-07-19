(function ($) {
    $(function () {
        var viewport = $('html, body');
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
        // // Typing Animation
        // $("#typed").typed({
        //     strings: ["A Developer", "A Designer", "A Student"],
        //     typeSpeed: 30,
        //     backDelay: 500,
        //     loop: false,
        //     contentType: 'html', // or text
        //     // defaults to false for infinite loop
        //     loopCount: false,
        //     callback: function(){ foo(); },
        //     resetCallback: function() { newTyped(); }
        // });

        // $(".reset").click(function(){
        //     $("#typed").typed('reset');
        // });
        $( ".cta" ).click(function() {
          $('#projects').hide();
        });
        $(".close-modal").click(function() {
          $('#projects').show();
        });

        $('#game-link').click(function (event) {
            event.preventDefault();
            viewport.bind("scroll mousedown DOMMouseScroll mousewheel keyup", function () {
                viewport.stop();
            });
            viewport.animate({
                scrollTop: $('#projects').offset().top
            }, 700);
        });
        $('#work-link').click(function (event) {
            event.preventDefault();
            viewport.bind("scroll mousedown DOMMouseScroll mousewheel keyup", function () {
                viewport.stop();
            });
            viewport.animate({
                scrollTop: $('#work').offset().top
            }, 700);
        });
    });

})(jQuery);