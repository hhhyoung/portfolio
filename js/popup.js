$(function () {
    $('.thumb1 a').click(function () {
        $('.popup1').fadeIn();
        $('html').css({ 'overflow': 'hidden', 'height': '100%' });
    });
});
$(function () {
    $('.thumb2 a').click(function () {
        $('.popup2').fadeIn();
        $('html').css({ 'overflow': 'hidden', 'height': '100%' });
    });
    
});
$(function () {
    $('.thumb3 a').click(function () {
        $('.popup3').fadeIn();
        $('html').css({ 'overflow': 'hidden', 'height': '100%' });
    });

});

$(function () {
    $('.popup a').click(function () {
        $('.popup').fadeOut();
        $('html').css({ 'overflow-y': 'visible', 'height': 'auto','overflow-x': 'hidden' });
    });
});