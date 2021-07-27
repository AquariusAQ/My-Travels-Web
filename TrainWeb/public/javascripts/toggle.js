var part_name = ["main", "exhibitions", "tickets"];

$(document).ready(function() {
    part_name.forEach(element => {
        $("#nav-"+element).click(function() {
            if ($("#nav-"+element).hasClass("active")) {
                $('body,html').animate({scrollTop:0}, 200);
            } else {
                hide_all();
                // $('#'+element).show();
                setTimeout(() => {
                    $('body,html').animate({scrollTop:0}, 100);
                    $('#'+element).fadeIn(100);
                    $("#nav-"+element).addClass("active");
                }, 100);
            }
        });
    });
});

var hide_all = () => {
    part_name.forEach(element => {
        // $("#"+element).hide();
        $("#"+element).fadeOut(100);
        $("#nav-"+element).removeClass("active");
    });
};
