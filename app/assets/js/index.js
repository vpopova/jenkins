$(document).ready(function () {
    equalHeight($(".brick"));
    canvasheight();
});


$(window).resize(function () {
    equalHeight($(".brick"));
    canvasheight();
});

function equalHeight(group) {
    var tallest = 0;
    group.each(function () {
        thisHeight = $(this).height();
        thisHeight = $(this).width();
        if (thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    group.height(tallest);
}

function canvasheight() {
    var platform = $('.platform-img').height();
    var platformAnimation = $('#swiffycontainer');
    platformAnimation.css("height", platform);
}

new WOW().init();
(function ($) {
    window.fnames = [];
    window.ftypes = [];
    fnames[0] = 'EMAIL';
    ftypes[0] = 'email';

});

<!-- 1. The <iframe> (and video player) will replace this <div> tag. -->


//$(function () {
//    $('.subscribe').click(function (e) {
//        e.preventDefault(); // the important thing I think
//        e.stopPropagation();
//        var target = $(this.hash);
//        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//        if (target.length) {
//            $('html,body').animate({
//                scrollTop: target.offset().top
//            }, 1500, function () {
//                $("#mce-EMAIL").focus();
//            });
//            return false;
//        }
//
//    });
//});
//
$('#videoModal').on('hidden.bs.modal', function () {
    $(".youtube-embed").attr('src', '');
});

$("#videoModal").on('shown.bs.modal', function() {
    $(".youtube-embed").attr('src', 'https://www.youtube.com/embed/ZWVdQ7D5fMI?autoplay=1');
});
//$(function () {
//    $('.subscribe').click(function (e) {
//        e.preventDefault(); // the important thing I think
//        e.stopPropagation();
//        var target = $(this.hash);
//        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//        if (target.length) {
//            $('html,body').animate({
//                scrollTop: target.offset().top
//            }, 1500, function () {
//                $("#mce-EMAIL").focus();
//            });
//            return false;
//        }
//
//    });
//});

(function ($) {
    window.fnames = [];
    window.ftypes = [];
    fnames[0] = 'EMAIL';
    ftypes[0] = 'email';

});