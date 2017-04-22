var $loading = $('#loading');
$loading.height($(window).height());
/*setTimeout(function () {
    $loading.fadeOut();
}, 3000);*/

$('[data-toggle="tooltip"]').tooltip();

$('#start').on("click", function () {
    $('#start_menu').slideToggle(300);
});

function format(str) {
    str = str + "";
    if(str.length === 1){
        return "0" + str;
    }else {
        return str;
    }
}