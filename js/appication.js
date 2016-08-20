'use strict';

$(function() {

  //menu switcher
	$('.menu_switch').on('click', function(){
		$(this).toggleClass('active');
		$('#navigation').toggleClass('open');
	});

	//menu navigation li dropdown
	$('.is_dropdown').on('click', function(){
		$('.nav_dropdown').toggleClass('open');
	});
});