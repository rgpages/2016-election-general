/* jshint unused:vars */

RG.register(function() {
	
	'use strict';
	
	$.pollster.defaults.loader = 'poll-spinner';
	$.pollster.defaults.seconds = 300; // 5 mins.
	
	$.pollster({
		target: 'state-races-results',
		//api: 'http://vote.registerguard.com/results/stater/',
		type: 'json',
		api: './results/stater.json',
		callback: function($data, $options) {
			
			var $this = $(this);
			var template;
			
			$.each($data, function(i1, v1) {
				
				var id1 = 'con-' + v1.contest_id;
				var display = ((v1.web_front) ? 'block': 'none');
				
				if ($options.first) {
					
					template = [
						'<div id="' + id1 + '" class="poll">',
							'<h6 class="poll-head">',
								(v1.contest_wrapper && v1.contest_wrapper) + ' ' + (v1.contest_name && v1.contest_name) + (((v1.explainer_text) ? (': <span class="poll-explainer">' + v1.explainer_text + '</span>') : '' )),
							'</h6>',
							'<div class="poll-content ' + v1.web_front + '" style="display:' + display + ';">',
							'</div>',
						'</div>'
					].join('\n');
					
					$this
						.removeClass('loading')
						.append(template);
					
				}
				
				$.each(v1.options, function(i2, v2) {
					
					var id2 = 'con-' + v1.contest_id + '_cand-meas-' + v2.cand_meas_id;
					var id3 = id2 + '_state';
					var percent = v2.percent_of_lane_votes + '%';
					var percent_state = v2.percent_of_state_votes + '%';
					
					if ($options.first) {
						
						template = [
							'<div class="poll-bar">',
								'<div class="poll-bar-title">',
									'<span>',
										(v2.incumbent ? '<i class="key-incumbent fa fa-info-circle" title="Incumbent"></i>' : ''),
										v2.name,
									'</span>',
									(((v2.affiliation != 'N') && (v2.affiliation !== '')) ? '<span><span class="key-affilition key-affilition-' + v2.affiliation.toLowerCase() + '">' + v2.affiliation_pretty + '</span></span>' : ''),
								'</div>',
								'<div class="poll-grid">',
									'<div class="poll-grid-secondary">',
										'<span class="poll-bar-count">' + v2.lane_votes + '</span>',
									'</div>',
									'<div class="poll-grid-tertiary">',
										'<span class="poll-bar-count">Lane:</span>',
									'</div>',
									'<div class="poll-grid-primary">',
										'<div class="poll-bar-wrap">',
											'<div id="' + id2 + '" class="poll-bar-votes">',
												'<span></sapn>',
											'</div>',
										'</div>',
									'</div>',
								'</div>',
								'<div class="poll-grid">',
									'<div class="poll-grid-secondary">',
										'<span class="poll-bar-count">' + v2.state_votes + '</span>',
									'</div>',
									'<div class="poll-grid-tertiary">',
										'<span class="poll-bar-count">State:</span>',
									'</div>',
									'<div class="poll-grid-primary">',
										'<div class="poll-bar-wrap">',
											'<div id="' + id3 + '" class="poll-bar-votes">',
												'<span></sapn>',
											'</div>',
										'</div>',
									'</div>',
								'</div>',
							'</div>'
						].join('\n');
						
						$('#' + id1)
							.find('.poll-content')
							.append(template)
							.end()
							.fadeIn();
						
					}
					
					$('#' + id2)
						.width(percent)
						.children('span')
						.text(percent);
					
					$('#' + id3)
						.width(percent_state)
						.children('span')
						.text(percent_state);
					
				});
				
			});
			
		}
	});
	
	$.pollster({
		target: 'state-measures-results',
		//api: 'http://projects.registerguard.com/ballot/json/statem/',
		type: 'json',
		api: './results/statem.json',
		callback: function($data, $options) {
			
			var $this = $(this);
			var template;
			
			$.each($data, function(i1, v1) {
				
				var id1 = 'con-' + v1.contest_id;
				var display = ((v1.web_front) ? 'block': 'none');
				
				if ($options.first) {
					
					template = [
						'<div id="' + id1 + '" class="poll">',
							'<h6 class="poll-head">',
								(v1.contest_wrapper && v1.contest_wrapper) + ' ' + (v1.contest_name && v1.contest_name) + (((v1.explainer_text) ? (': <span class="poll-explainer">' + v1.explainer_text + '</span>') : '' )),
							'</h6>',
							'<div class="poll-content ' + v1.web_front + '" style="display:' + display + ';">',
							'</div>',
						'</div>'
					].join('\n');
					
					$this
						.removeClass('loading')
						.append(template);
					
				}
				
				$.each(v1.options, function(i2, v2) {
					
					var id2 = 'con-' + v1.contest_id + '_cand-meas-' + v2.cand_meas_id;
					var id3 = id2 + '_state';
					var percent = v2.percent_of_lane_votes + '%';
					var percent_state = v2.percent_of_state_votes + '%';
					
					if ($options.first) {
						
						template = [
							'<div class="poll-bar">',
								'<div class="poll-bar-title">',
									'<span>',
										(v2.incumbent ? '<i class="key-incumbent fa fa-info-circle" title="Incumbent"></i>' : ''),
										v2.name,
									'</span>',
									(((v2.affiliation != 'N') && (v2.affiliation !== '')) ? '<span><span class="key-affilition key-affilition-' + v2.affiliation.toLowerCase() + '">' + v2.affiliation_pretty + '</span></span>' : ''),
								'</div>',
								'<div class="poll-grid">',
									'<div class="poll-grid-secondary">',
										'<span class="poll-bar-count">' + v2.lane_votes + '</span>',
									'</div>',
									'<div class="poll-grid-tertiary">',
										'<span class="poll-bar-count">Lane:</span>',
									'</div>',
									'<div class="poll-grid-primary">',
										'<div class="poll-bar-wrap">',
											'<div id="' + id2 + '" class="poll-bar-votes">',
												'<span></sapn>',
											'</div>',
										'</div>',
									'</div>',
								'</div>',
								'<div class="poll-grid">',
									'<div class="poll-grid-secondary">',
										'<span class="poll-bar-count">' + v2.state_votes + '</span>',
									'</div>',
									'<div class="poll-grid-tertiary">',
										'<span class="poll-bar-count">State:</span>',
									'</div>',
									'<div class="poll-grid-primary">',
										'<div class="poll-bar-wrap">',
											'<div id="' + id3 + '" class="poll-bar-votes">',
												'<span></sapn>',
											'</div>',
										'</div>',
									'</div>',
								'</div>',
							'</div>'
						].join('\n');
						
						$('#' + id1)
							.find('.poll-content')
							.append(template)
							.end()
							.fadeIn();
						
					}
					
					$('#' + id2)
						.width(percent)
						.children('span')
						.text(percent);
					
					$('#' + id3)
						.width(percent_state)
						.children('span')
						.text(percent_state);
					
				});
				
			});
			
		}
	});
	
	$.pollster({
		target: 'lane-county-results',
		//api: 'http://projects.registerguard.com/ballot/json/laneco/',
		type: 'json',
		api: './results/laneco.json',
		callback: function($data, $options) {
			
			var $this = $(this);
			var template;
			
			$.each($data, function(i1, v1) {
				
				var id1 = 'con-' + v1.contest_id;
				var display = ((v1.web_front) ? 'block': 'none');
				
				if ($options.first) {
					
					template = [
						'<div id="' + id1 + '" class="poll">',
							'<h6 class="poll-head">',
								(v1.contest_wrapper && v1.contest_wrapper) + ' ' + (v1.contest_name && v1.contest_name) + (((v1.explainer_text) ? (': <span class="poll-explainer">' + v1.explainer_text + '</span>') : '' )),
							'</h6>',
							'<div class="poll-content ' + v1.web_front + '" style="display:' + display + ';">',
							'</div>',
						'</div>'
					].join('\n');
					
					$this
						.removeClass('loading')
						.append(template);
					
				}
				
				$.each(v1.options, function(i2, v2) {
					
					var id2 = 'con-' + v1.contest_id + '_cand-meas-' + v2.cand_meas_id;
					var percent = v2.percent_of_lane_votes + '%';
					
					if ($options.first) {
						
						template = [
							'<div class="poll-bar">',
								'<div class="poll-bar-title">',
									'<span>',
										(v2.incumbent ? '<i class="key-incumbent fa fa-info-circle" title="Incumbent"></i>' : ''),
										v2.name,
									'</span>',
									(((v2.affiliation != 'N') && (v2.affiliation !== '')) ? '<span><span class="key-affilition key-affilition-' + v2.affiliation.toLowerCase() + '">' + v2.affiliation_pretty + '</span></span>' : ''),
								'</div>',
								'<div class="poll-grid">',
									'<div class="poll-grid-secondary">',
										'<span class="poll-bar-count">' + v2.lane_votes + '</span>',
									'</div>',
									'<div class="poll-grid-primary">',
										'<div class="poll-bar-wrap">',
											'<div id="' + id2 + '" class="poll-bar-votes">',
												'<span></sapn>',
											'</div>',
										'</div>',
									'</div>',
								'</div>',
							'</div>'
						].join('\n');
						
						$('#' + id1)
							.find('.poll-content')
							.append(template)
							.end()
							.fadeIn();
						
					}
					
					$('#' + id2)
						.width(percent)
						.children('span')
						.text(percent);
					
				});
				
			});
			
		}
	});
	
	$.pollster({
		target: 'eugspr-results',
		//api: 'http://projects.registerguard.com/ballot/json/eugspr/',
		type: 'json',
		api: './results/eugspr.json',
		callback: function($data, $options) {
			
			var $this = $(this);
			var template;
			
			$.each($data, function(i1, v1) {
				
				var id1 = 'con-' + v1.contest_id;
				var display = ((v1.web_front) ? 'block': 'none');
				
				if ($options.first) {
					
					template = [
						'<div id="' + id1 + '" class="poll">',
							'<h6 class="poll-head">',
								(v1.contest_wrapper && v1.contest_wrapper) + ' ' + (v1.contest_name && v1.contest_name) + (((v1.explainer_text) ? (': <span class="poll-explainer">' + v1.explainer_text + '</span>') : '' )),
							'</h6>',
							'<div class="poll-content ' + v1.web_front + '" style="display:' + display + ';">',
							'</div>',
						'</div>'
					].join('\n');
					
					$this
						.removeClass('loading')
						.append(template);
					
				}
				
				$.each(v1.options, function(i2, v2) {
					
					var id2 = 'con-' + v1.contest_id + '_cand-meas-' + v2.cand_meas_id;
					var percent = v2.percent_of_lane_votes + '%';
					
					if ($options.first) {
						
						template = [
							'<div class="poll-bar">',
								'<div class="poll-bar-title">',
									'<span>',
										(v2.incumbent ? '<i class="key-incumbent fa fa-info-circle" title="Incumbent"></i>' : ''),
										v2.name,
									'</span>',
									(((v2.affiliation != 'N') && (v2.affiliation !== '')) ? '<span><span class="key-affilition key-affilition-' + v2.affiliation.toLowerCase() + '">' + v2.affiliation_pretty + '</span></span>' : ''),
								'</div>',
								'<div class="poll-grid">',
									'<div class="poll-grid-secondary">',
										'<span class="poll-bar-count">' + v2.lane_votes + '</span>',
									'</div>',
									'<div class="poll-grid-primary">',
										'<div class="poll-bar-wrap">',
											'<div id="' + id2 + '" class="poll-bar-votes">',
												'<span></sapn>',
											'</div>',
										'</div>',
									'</div>',
								'</div>',
							'</div>'
						].join('\n');
						
						$('#' + id1)
							.find('.poll-content')
							.append(template)
							.end()
							.fadeIn();
						
					}
					
					$('#' + id2)
						.width(percent)
						.children('span')
						.text(percent);
					
				});
				
			});
			
		}
	});
	
	$.pollster({
		target: 'regional-races-results',
		//api: 'http://projects.registerguard.com/ballot/json/region/',
		type: 'json',
		api: './results/region.json',
		callback: function($data, $options) {
			
			var $this = $(this);
			var template;
			
			$.each($data, function(i1, v1) {
				
				var id1 = 'con-' + v1.contest_id;
				var display = ((v1.web_front) ? 'block': 'none');
				
				if ($options.first) {
					
					template = [
						'<div id="' + id1 + '" class="poll">',
							'<h6 class="poll-head">',
								(v1.contest_wrapper && v1.contest_wrapper) + ' ' + (v1.contest_name && v1.contest_name) + (((v1.explainer_text) ? (': <span class="poll-explainer">' + v1.explainer_text + '</span>') : '' )),
							'</h6>',
							'<div class="poll-content ' + v1.web_front + '" style="display:' + display + ';">',
							'</div>',
						'</div>'
					].join('\n');
					
					$this
						.removeClass('loading')
						.append(template);
				}
				
				$.each(v1.options, function(i2, v2) {
					
					var id2 = 'con-' + v1.contest_id + '_cand-meas-' + v2.cand_meas_id;
					var percent = v2.percent_of_lane_votes + '%';
					
					if ($options.first) {
						
						template = [
							'<div class="poll-bar">',
								'<div class="poll-bar-title">',
									'<span>',
										(v2.incumbent ? '<i class="key-incumbent fa fa-info-circle" title="Incumbent"></i>' : ''),
										v2.name,
									'</span>',
									(((v2.affiliation != 'N') && (v2.affiliation !== '')) ? '<span><span class="key-affilition key-affilition-' + v2.affiliation.toLowerCase() + '">' + v2.affiliation_pretty + '</span></span>' : ''),
								'</div>',
								'<div class="poll-grid">',
									'<div class="poll-grid-secondary">',
										'<span class="poll-bar-count">' + v2.lane_votes + '</span>',
									'</div>',
									'<div class="poll-grid-primary">',
										'<div class="poll-bar-wrap">',
											'<div id="' + id2 + '" class="poll-bar-votes">',
												'<span></sapn>',
											'</div>',
										'</div>',
									'</div>',
								'</div>',
							'</div>'
						].join('\n');
						
						$('#' + id1)
							.find('.poll-content')
							.append(template)
							.end()
							.fadeIn();
						
					}
					
					$('#' + id2)
						.width(percent)
						.children('span')
						.text(percent);
					
				});
				
			});
			
		}
	});
	
	$.pollster({
		target: 'lane-county-measures-results',
		//api: 'http://projects.registerguard.com/ballot/json/laneme/',
		type: 'json',
		api: './results/laneme.json',
		cache: false,
		callback: function($data, $options) {
			
			var $this = $(this);
			var template;
			
			console.log($data);
			
			$.each($data, function(i1, v1) {
				
				var id1 = 'con-' + v1.contest_id;
				var display = ((v1.web_front) ? 'block': 'none');
				
				if ($options.first) {
					
					template = [
						'<div id="' + id1 + '" class="poll">',
							'<h6 class="poll-head">',
								(v1.contest_wrapper && v1.contest_wrapper) + ' ' + (v1.contest_name && v1.contest_name) + (((v1.explainer_text) ? (': <span class="poll-explainer">' + v1.explainer_text + '</span>') : '' )),
							'</h6>',
							'<div class="poll-content ' + v1.web_front + '" style="display:' + display + ';">',
							'</div>',
						'</div>'
					].join('\n');
					
					$this
						.removeClass('loading')
						.append(template);
					
				}
				
				$.each(v1.options, function(i2, v2) {
					
					var id2 = 'con-' + v1.contest_id + '_cand-meas-' + v2.cand_meas_id;
					var percent = v2.percent_of_lane_votes + '%';
					
					if ($options.first) {
						
						template = [
							'<div class="poll-bar">',
								'<div class="poll-bar-title">',
									'<span>',
										(v2.incumbent ? '<i class="key-incumbent fa fa-info-circle" title="Incumbent"></i>' : ''),
										v2.name,
									'</span>',
									(((v2.affiliation != 'N') && (v2.affiliation !== '')) ? '<span><span class="key-affilition key-affilition-' + v2.affiliation.toLowerCase() + '">' + v2.affiliation_pretty + '</span></span>' : ''),
								'</div>',
								'<div class="poll-grid">',
									'<div class="poll-grid-secondary">',
										'<span class="poll-bar-count">' + v2.lane_votes + '</span>',
									'</div>',
									'<div class="poll-grid-primary">',
										'<div class="poll-bar-wrap">',
											'<div id="' + id2 + '" class="poll-bar-votes">',
												'<span></sapn>',
											'</div>',
										'</div>',
									'</div>',
								'</div>',
							'</div>'
						].join('\n');
						
						$('#' + id1)
							.find('.poll-content')
							.append(template)
							.end()
							.fadeIn();
						
					}
					
					// Fill in .poll-bar-votes bars
					$('#' + id2)
						.width(percent)
						.children('span')
						.text(percent);
					
				});
				
			});
			
		}
	});
	
	/*$.pollster({
		target: 'test-results',
		api: '../results/eugspr.json',
		cache: 'true',
		seconds: '1800',
		type: 'json',
		callback: function($data, $options) {
			
			var $this = $(this);
			var template;
			
			$.each($data, function(i1, v1) {
				
				var id1 = 'con-' + v1.contest_id;
				
				if ($options.first) {
					
					template = [
						'<div id="' + id1 + '" class="poll">',
							'<div class="poll-spinner"></div>',
							'<h6 class="poll-head' + (v1.explainer_text && ' poll-click') + '">',
								v1.contest_wrapper,
								(v1.contest_name && v1.contest_name),
								(v1.explainer_text && '<i class="key-info fa fa-question-circle"></i>'),
							'</h6>',
							(v1.explainer_text && '<div class="poll-info">' + v1.explainer_text + '</div>'),
							'<div class="poll-content">',
							'</div>',
						'</div>'
					].join('\n');
					
					$this
						.removeClass('loading')
						.append(template);
					
				}
				
				$.each(v1.options, function(i2, v2) {
					
					var id2 = 'con-' + v1.contest_id + '_cand-meas-' + v2.cand_meas_id;
					var percent = v2.percent_of_lane_votes + '%';
					
					if ($options.first) {
						
						template = [
							'<div class="poll-bar">',
								'<div class="poll-bar-title">',
									'<span>',
										(v2.incumbent ? '<i class="key-incumbent fa fa-info-circle" title="Incumbent"></i>' : ''),
										v2.name,
									'</span>',
									(((v2.affiliation != 'N') && (v2.affiliation !== '')) ? '<span><span class="key-affilition key-affilition-' + v2.affiliation.toLowerCase() + '">' + v2.affiliation_pretty + '</span></span>' : ''),
								'</div>',
								'<div class="poll-grid">',
									'<div class="poll-grid-secondary">',
										'<span class="poll-bar-count">' + v2.lane_votes + '</span>',
									'</div>',
									'<div class="poll-grid-primary">',
										'<div class="poll-bar-wrap">',
											'<div id="' + id2 + '" class="poll-bar-votes">',
												'<span></sapn>',
											'</div>',
										'</div>',
									'</div>',
								'</div>',
							'</div>'
						].join('\n');
						
						$('#' + id1)
							.find('.poll-content')
							.append(template)
							.end()
							.fadeIn();
						
					}
					
					$('#' + id2)
						.width(percent)
						.children('span')
						.text(percent);
					
				});
				
			});
			
		}
	});*/
	
	$('#results').on('click', '.poll-head', function() {
		
		$(this)
			.next()
			.slideToggle('fast');
		
	});
	
}); // RG
