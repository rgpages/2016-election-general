/* jshint -W008 */

RG.register(function() {
	
	'use strict';
	
	var $window = $(window);
	
	function parallax() {
		
		var scrolled = $window.scrollTop();
		
		$('#parallax').css('background-position', '50% ' + ((scrolled * .5) + 'px'));
		
	}
	
	$window.scroll(function() {
		
		parallax();
		
	});
	
}); // RG
