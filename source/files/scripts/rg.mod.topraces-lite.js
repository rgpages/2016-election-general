/* jshint unused:vars */

RG.register(function() {
	
	'use strict';
	
	$.pollster.defaults.loader = 'poll-spinner';
	$.pollster.defaults.seconds = 300; // 5 mins.
	
	$.pollster({
		//api: 'http://projects.registerguard.com/ballot/json/topset/',
		api: './results/topset.json',
		seconds: 1800, // 30 min.
		target: 'topraces-lite',
		type: 'json',
		callback: function($data, $options) {
			
			console.log($data);
			
			var $this = $(this);
			var $div1;
			var $div2;
			
			$.each($data, function(k1, v1) {
				
				$.each(v1, function(k2, v2) {
					
					var template;
					
					$div1 = $('<div id="pure-g" />');
					
					$div1.append('<div class="trl-item pure-u-1 pure-u-sm-1-3 pure-u-md-1-6">Jump to the results</div>');
					
					$.each(v2, function(k3, v3) {
						
						var id1 = 'con-' + v3.contest_id;
						var id1a = id1 + 'link';
						
						/*
						
						<div class="trl-item pure-u-1 pure-u-sm-1-3 pure-u-md-1-6">Jump to the results</div>
						<div class="trl-item pure-u-1 pure-u-sm-1-3 pure-u-md-1-6"><a id="con-360link" href="#con-360">U.S. President</a></div>
						<div class="trl-item pure-u-1 pure-u-sm-1-3 pure-u-md-1-6"><a id="con-360link" href="#con-360">Governor</a></div>
						<div class="trl-item pure-u-1 pure-u-sm-1-3 pure-u-md-1-6"><a id="con-360link" href="#con-360">Measure 97</a></div>
						<div class="trl-item pure-u-1 pure-u-sm-1-3 pure-u-md-1-6"><a id="con-360link" href="#con-360">Eugene pot tax</a></div>
						<div class="trl-item pure-u-1 pure-u-sm-1-3 pure-u-md-1-6"><a id="con-360link" href="#con-360">Springfield pot tax</a></div>
						
						
						*/
						
						template = [
							'<div class="trl-item pure-u-1 pure-u-sm-1-3 pure-u-md-1-6">',
								'<a id="' + id1a + '" href="#' + id1 + '">' + v3.contest_wrapper + '</a>',
							'</div>'
						].join('\n');
						
						$div1.append(template);
						
					});
				
				});
			
			});
		
			$this
				.removeClass('loading')
				.html($div1.add($div2));
		
		}
	});
	
}); // RG
