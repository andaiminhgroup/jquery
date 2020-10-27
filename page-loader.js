//<![CDATA[
$(document.body).append('<div id="page-loader"></div>');
$(window).on("beforeunload", function() {
    // ... Show the Animation `.fadeIn()`
    $('#page-loader').fadeIn(1000).delay(2000).fadeOut(1000);
});
//]]>
