(function($){
	$(document).ready(function(){
	$('#jq').LineProgressbar({
percentage:90,
radius: '3px',
height: '20px',
});
$('#html').LineProgressbar({
percentage:80,
radius: '3px',
height: '20px',
fillBackgroundColor: '#DA4453'
});
$('#css').LineProgressbar({
percentage:70,
radius: '3px',
height: '20px',
fillBackgroundColor: '#E0C341'
});	


  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

		// finished progress
		
		// navo slider function
		
	
		
		
	$(window).load(function(){
			
			$('#slider').nivoSlider();
			
		});
		
		
		
		
		
		
		
		
		
		
		
	});
})(jQuery)