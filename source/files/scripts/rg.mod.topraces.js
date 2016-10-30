/* jshint unused:vars */

RG.register(function() {
	
	'use strict';
	
	$.pollster.defaults.loader = 'poll-spinner';
	$.pollster.defaults.seconds = 300; // 5 mins.
	
	$.pollster({
		//api: 'http://projects.registerguard.com/ballot/json/topset/',
		api: './results/topset.json',
		seconds: 1800, // 30 min.
		target: 'topraces',
		type: 'json',
		callback: function($data, $options) {
			
			var $this = $(this);
			var $div1;
			var $div2;
			
			$.each($data, function(k1, v1) {
				
				$.each(v1, function(k2, v2) {
					
					switch (k2) {
						
						case 'races':
							
							// Encapsulate:
							(function() {
								
								var template;
								
								$div1 = $('<div class="tbi-flex" />');
								
								$.each(v2, function(k3, v3) {
									
									var id1 = 'con-' + v3.contest_id;
									var id1a = id1 + 'link';
									
									/*
										<div class="pure-u-1 pure-u-md-1-5" id="con-360" href="#con-360">
											<span class="attn-head">U.S. President</span>
											<div class="pure-g">
												<div class="pure-u-1-2" class="attn-name">Clinton</div>
												<div class="pure-u-1-2" class="attn-percent">43%</div>
											</div> <!-- /.pure-g -->
											<div class="pure-g">
												<div class="pure-u-1-2" class="attn-name">Sanders</div>
												<div class="pure-u-1-2" class="attn-percent">56%</div>
											</div> <!-- /.pure-g -->
										</div>
									*/
									
									template = [
										'<div class="tbi-col tbi-item">',
											'<a id="' + id1a + '" href="#' + id1 + '">',
												'<div class="tbi-head center">' + v3.contest_wrapper + '</div>',
											'</a>',
										'</div>'
									].join('\n');
									
									$div1.append(template);
									
									$.each(v3.race.slice(0, 2), function(k4, v4) {
									
										var id2 = 'con-' + v3.contest_id + '_cand-meas-' + v4.cand_meas_id;
										var percent = Math.round(v4.percent_of_state_votes) + '%';
										var lastname = v4.name.split(' ').pop();
									
										template = [
											'<div id="' + id2 + '" class="tbi-row pure-g">',
												'<div class="tbi-unit pure-u-1-2">' + lastname + '</div>',
												'<div class="tbi-unit pure-u-1-2">' + percent + '</div>',
											'</span>'
										].join('\n');
									
										$div1
											.find('#' + id1a)
											.append(template);
									
									});
									
								});
							
							})();
						
							break;
					
						case 'measures':
						
							// Encapsulate:
							(function() {
							
								var template;
							
								$div2 = $('<div />');
							
								$.each(v2, function(k3, v3) {
								
									var id1 = 'con-' + v3.contest_id;
								
									template = [
										'<a id="' + id1 + '" href="http://vote.registerguard.com/#' + id1 + '">',
											'<span class="attn-head">' + v3.short_description + '</span>',
											'<span class="attn-row attn-label">',
												'<span class="attn-col attn-name">' + v3.contest_name + '</span>',
											'</span>',
										'</a>'
									].join('\n');
								
									$div2.append(template);
								
									$.each(v3.measure, function(k4, v4) {
									
										var id2 = 'con-' + v3.contest_id + '_cand-meas-' + v4.cand_meas_id;
										var percent = Math.round(v4.percent_of_state_votes) + '%';
										var name = v4.name.charAt(0).toLowerCase();
									
										template = [
											'<span id="' + id2 + '" class="attn-row">',
												'<span class="attn-col">',
													'<span class="attn-circle attn-' + name + '">' + name + '</span>',
												'</span>',
												'<span class="attn-col">' + percent + '</span>',
											'</span>'
										].join('\n');
									
										$div2
											.find('#' + id1)
											.append(template);
									
									});
								
								});
							
							})();
						
							break;
					
					}
				
				});
			
			});
		
			$this
				.removeClass('loading')
				.html($div1.add($div2));
		
		}
	});
	
}); // RG
