// Sticky Header
$(document).ready(function() {
    $("#sec1").click(function() {
        $("html, body").animate({
            scrollTop: $("#sec01").offset().top }, {duration: 500,easing: "swing"});
            return false;
    });
    $("#sec2").click(function() {
        $("html, body").animate({
        scrollTop: $("#sec02").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
    $("#sec3").click(function() {
        $("html, body").animate({
        scrollTop: $("#sec03").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
	$("#sec4").click(function() {
        $("html, body").animate({
        scrollTop: $("#sec04").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
});


$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// Navigation Scroll - ljepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});