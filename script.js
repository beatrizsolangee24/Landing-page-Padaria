$(document).ready(function(){
    $('#mobile-btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $(this).toggleClass('bi-list bi-x');
    });
});


