$(document).ready(function(){


	$('.position').keypress(function(e){
		if (e.keyCode==13){
			var nameInput = $('input:text[name=name]').val();
			var positionInput = $('input:text[name=position]').val();		
		
			
			if (positionInput == "quarterback"){
				{$('.longest_throw').removeClass('hide');
				$('.longest_throw_h3').removeClass('hide');
				$('.longest_throw').keypress(function(e){
					if (e.keyCode==13)
						ThrowInput();
				});
				// $('.player_button').click(function(){
					// ThrowInput();
				// })
			};

			function ThrowInput(){
				var longestThrowInput = $('input:text[name=longest_throw]').val();

				$.ajax({
					url: '/player/throwstats',
					data: { name: nameInput, position: positionInput, longest_throw: longestThrowInput},
					type: 'POST'
				}).done(function(data){
					console.log(data);
				});
				};
			};

			if (positionInput == ("runningback" || "running back")){
				{$('.longest_run').removeClass('hide');
				$('.longest_run_h3').removeClass('hide');
				$('.longest_run').keypress(function(e){
					if (e.keyCode==13)
						RunInput();
				});
				// $('.player_button').click(function(){
					// RunInput();
				// })
			};

			function RunInput(){
				var longestRunInput = $('input:text[name=longest_run]').val();

				$.ajax({
					url: '/player/runstats',
					data: { name: nameInput, position: positionInput, longest_run: longestRunInput},
					type: 'POST'
				}).done(function(data){
					console.log(data);
				});
				};
			};
				$.ajax({
					url: '/player/playerstats',
					data: { name: nameInput, position: positionInput},
					type: 'POST'
				}).done(function(data){
					console.log(data);
				});
			};
		});

});
