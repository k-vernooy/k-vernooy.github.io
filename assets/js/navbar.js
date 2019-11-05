$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 70) {
        $(".navBar").addClass("whiteBar");
        $(".under").each(function() {
            $( this ).addClass( "white" );
        });
    }
    else {
        $(".navBar").removeClass("whiteBar");
        $(".under").each(function() {
            $( this ).removeClass( "white" );
        });
    }
}); 
