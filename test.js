

/* responsive nav */

$(function() {
	var pull 		= $('.pull');
		menu 		= $('nav ul');
		menuHeight	= menu.height();

	$('.pull').on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});

	$(window).resize(function(){
		var w = $(window).width();
		if(w > 320 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
});

/* toggle sidebar */

$(document).ready(function() {
	$('#sideBar').click(function(e) {
		e.preventDefault();
			$('.sidebar').toggle('slow');
	});
});

// $(function(){
// 	$('.nav-list').selected(function(){
// 		$('.active').addClass();
// 	});
// });