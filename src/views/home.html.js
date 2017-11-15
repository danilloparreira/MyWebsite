$(document).ready(function(){
	window.location.hash = "#projects";
	
	$("li a").on('click', function(e){
		if(this.hash !== "")
		{
			e.preventDefault();
			var hash = this.hash;
			$('html, body').animate({ scrollTop: $(hash).offset().top}, 900, function(){window.location.hash = hash;});
		}
	});
});
