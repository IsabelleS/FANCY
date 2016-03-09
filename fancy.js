$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 760) {
        $('.menuScroll').fadeIn();
    } else {
        $('.menuScroll').fadeOut();
    }

    if (  740 < y && y < 940 ) {
    	$('.scroll1').fadeIn();
    }  else {
    	$('.scroll1').fadeOut();
    }

    if ( y > 940 ) {
    	$('.scroll2').fadeIn();
    } else {
    	$('.scroll2').fadeOut();
    }




});