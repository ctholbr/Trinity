$(document).ready(function(){
	$(window).scroll(function(){
       $("div.description")
              .stop()
              .animate({"marginTop": ($(window).scrollTop()) + "px"}, "slow" );
	});
	$('.affiliates a').each(function(index, affiliate) {
		$(affiliate).hover(function() {
			$('div.description').load('affiliates/' + $(affiliate).attr('id') + '.html');
			$('div.nav img').removeClass('select');
			$('img', affiliate).addClass('select');
		});
	});
});