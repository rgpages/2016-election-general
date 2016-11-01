/* jshint unused:vars */

RG.register(function() {
	
	'use strict';
	
	$.pollster({
		api: './results/topset.json',
		seconds: 1800, //30 mins
		target: 'tbi-list',
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
								
								$div1 = $('<div />');
								
								$.each(v2, function(k3, v3) {
									
									var target = 'con-' + v3.contest_id;
									var id1 = 'topcon-' + v3.contest_id;
									
									template = [
										//'<div class="story tbi-results" id="' + id1a + '">',
										'<div id="' + id1 + '" class="story tbi-results">',
											'<div class="tbi-flex tbi-results-row">',
												'<h6 class="tbi-flex-2 tbi-resultes-row-header"><a href="#' + target + '">' + v3.contest_wrapper + '</a></h6>',
												'<span class="tbi-flex-1 tbi-results-row-header tbi-percent">Lane</span>',
												'<span class="tbi-flex-1 tbi-results-row-header tbi-percent">State</span>',
											'</div> <!-- /.tbi.flex /.tbi-results-row -->',
										'</div> <!-- /.tbi-results -->'
									].join('\n');
									
									$div1.append(template);
									
									$.each(v3.race.slice(0, 2), function(k4, v4) {
									
										var id2 = 'topcon-' + v3.contest_id + '_cand-meas-' + v4.cand_meas_id;
										var lane = Math.round(v4.percent_of_lane_votes) + '%';
										var state = Math.round(v4.percent_of_state_votes) + '%';
										var lastname = v4.name.split(' ').pop();
									
										template = [
											'<div id="' + id2 + '" class="tbi-flex tbi-results-row">',
												'<span class="tbi-flex-2 tbi-candidate h3">' + lastname + '</span>',
												'<span class="tbi-flex-1 tbi-percent sh3">' + lane + '</span>',
												'<span class="tbi-flex-1 tbi-percent sh3">' + state + '</span>',
											'</div>'
										].join('\n');
									
										$div1
											.find('#' + id1)
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
								
									var target = 'con-' + v3.contest_id;
									var id1 = 'topcon-' + v3.contest_id;
								
									template = [
										//'<div class="story tbi-results" id="' + id1a + '">',
										'<div id="' + id1 + '" class="story tbi-results">',
											'<div class="tbi-flex tbi-results-row">',
												'<h6 class="tbi-flex-2 tbi-resultes-row-header"><a href="#' + target + '">' + v3.contest_name + '</a></h6>',		//Change
												'<span class="tbi-flex-1 tbi-results-row-header tbi-percent">Lane</span>',
												'<span class="tbi-flex-1 tbi-results-row-header tbi-percent">State</span>',
											'</div> <!-- /.tbi.flex /.tbi-results-row -->',
										'</div> <!-- /.tbi-results -->'
									].join('\n');
								
									$div2.append(template);
								
									$.each(v3.measure, function(k4, v4) {
									
										var id2 = 'topcon-' + v3.contest_id + '_cand-meas-' + v4.cand_meas_id;
										var lane = Math.round(v4.percent_of_lane_votes) + '%';
										var state = Math.round(v4.percent_of_state_votes) + '%';
										var option = v4.name;																									//Change
									
										template = [
											'<div id="' + id2 + '" class="tbi-flex tbi-results-row">',
												'<span class="tbi-flex-2 tbi-candidate h3">' + option + '</span>',															//Change
												'<span class="tbi-flex-1 tbi-percent sh3">' + lane + '</span>',
												'<span class="tbi-flex-1 tbi-percent sh3">' + state + '</span>',
											'</div>'
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
