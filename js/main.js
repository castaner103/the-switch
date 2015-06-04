$(document).ready(function(){
	$('button').click(function(event){
		event.preventDefault();
		
		$('.light').toggleClass('dark',"switch");
			$('.on').toggleClass('off',"switch");
		});					


	$('button').click(function(event){
		event.preventDefault();
		if ($('.status').text() === "It's so bright in here!") {
			$('.status').text("Who turned out the lights?");
		}
		else{
			$('.status').text("It's so bright in here!");
		}
	});	

});
