$(document).ready(function(){

	$('.position').keypress(function(e){
		if (e.keyCode==13){
			StatInput();
			}
	});

	$('.position').blur(function(e){
		StatInput();
		}
	});

	function StatInput(){
		var nameInput = $('input:text[name=name]').val();
		var positionInput = $('input:text[name=position]').val();

			$.ajax({
				url: '/main/playerstats'
				data: { name: nameInput, position: positionInput}
				type: 'POST'
			}).done(function(data){
				console.log
			});

			if positionInput.downcase == "quarterback"
				{$('.longest_throw').removeClass('hide');
				$('.longest_throw_h3').removeClass('hide');
				$('.longest_throw').keypress(function(e){
					if (e.keyCode==13){
						ThrowInput();
						}
				})
				$('.longest_throw').blur(function(){
					ThrowInput();
				})
			};

			function ThrowInput(){
				var longestThrowInput = $('input:text[name=longest_throw]').val();

				$.ajax({
					url: '/main/throwstats'
					data: { longest_throw: longestThrowInput}
					type: 'POST'
				}).done(function(data){
					console.log(data);
				});
			}

			if positionInput.downcase == "runningback"
				{$('.longest_run').removeClass('hide');
				$('.longest_run_h3').removeClass('hide');
				$('.longest_run').keypress(function(e){
					if (e.keyCode==13){
						RunInput();
						}
				})
				$('.longest_run').blur(function(){
					RunInput();
				})
			};

			function RunInput(){
				var longestRunInput = $('input:text[name=longest_run]').val();

				$.ajax({
					url: '/main/runstats'
					data: { longest_run: longestRunInput}
					type: 'POST'
				}).done(function(data){
					console.log(data);
				});

			};




		
	};

});
