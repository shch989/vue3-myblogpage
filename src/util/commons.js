$(document).ready(function () {
    $('.outer-menu-item').hover(function () {
        $(this).find('.inner-menu').show();
    }, function () {
        $(this).find('.inner-menu').hide();
    });
});