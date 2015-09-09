(function ($) {
    $(function () {
        var viewport = $('html, body');
        $( ".proj" ).click(function() {
          $('#projects').hide();
        });
        $(".close-modal").click(function() {
          $('#projects').show();
        });

    });

})(jQuery);