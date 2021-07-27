var part_name = ["main", "exhibitions", "tickets"];

$(document).ready(function() {
    part_name.forEach(element => {
        $("#nav-"+element).click(function() {
            hide_all();
            $('#'+element).show();
            $("#nav-"+element).addClass("active");
        });
    });
});

var hide_all = () => {
    part_name.forEach(element => {
        $("#"+element).hide();
        $("#nav-"+element).removeClass("active");
    });
};
