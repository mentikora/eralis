'use strict';

$(function() {

  // menu switcher
	$('.menu_switch').on('click', function(){
		$(this).toggleClass('active');
		$('#navigation').toggleClass('open');
	});

	// menu navigation li dropdown
	$('.is_dropdown').on('click', function(){
		$('.nav_dropdown').toggleClass('open');
	});

	// product image
	$(window).on("load resize", function(){
	  $('#product_img').height( $('#product_img').width() );

	  // mediaquery product form height
		// if (window.matchMedia("(min-width: 991px)").matches) {
	 //  	$('.product_form').height($('#product_img').height() - 10);
		// }
	});
});