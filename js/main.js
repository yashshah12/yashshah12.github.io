(function ($) {
    $(function () {
        var viewport = $('html, body');
        // $( ".proj" ).click(function() {
        //   $('#projects').hide();
        // });
        // $(".close-modal").click(function() {
        //   $('#projects').show();
        // });
        $('#proj-link').click(function (event) {
            event.preventDefault();
            viewport.bind("scroll mousedown DOMMouseScroll mousewheel keyup", function () {
                viewport.stop();
            });
            viewport.animate({
                scrollTop: $('.projects').offset().top-70
            }, 700);
        });

    });

})(jQuery);