$(document).ready(function() {
    $('#nav-main').click(function() {
        $('html,body').animate({ scrollTop: $("#main").offset().top}, 200);
    });
    $('#nav-exhibitions').click(function() {
        $('html,body').animate({ scrollTop: $("#exhibitions").offset().top}, 200);
    });
    $('#nav-tickets').click(function() {
        $('html,body').animate({ scrollTop: $("#tickets").offset().top}, 200);
    });
});
