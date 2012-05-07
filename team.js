$(document).ready(function(){
	$('div.team ul a#al').click(function(event){
		event.preventDefault();
		$('div.description').load('team/alholbrook.html');
		$('a').removeClass('now');
		$('div.team ul a#al').addClass('now');
		$('nav a#train, nav a#pack').removeClass();
	});
	$('div.team ul a#laurie').click(function(event){
		event.preventDefault();
		$('div.description').load('team/laurie.html');
		$('a').removeClass('now');
		$('div.team ul a#laurie').addClass('now');
	});
	$('div.team ul a#brad').click(function(event){
		event.preventDefault();
		$('div.description').load('team/brad.html');
		$('a').removeClass('now');
		$('div.team ul a#brad').addClass('now');
	});
	$('div.team ul a#vicki').click(function(event){
		event.preventDefault();
		$('div.description').load('team/vicki.html');
		$('a').removeClass('now');
		$('div.team ul a#vicki').addClass('now');
	});
	$('div.team ul a#bill').click(function(event){
		event.preventDefault();
		$('div.description').load('team/bill.html');
		$('a').removeClass('now');
		$('div.team ul a#bill').addClass('now');
	});
	$('div.team ul a#angela').click(function(event){
		event.preventDefault();
		$('div.description').load('team/angela.html');
		$('a').removeClass('now');
		$('div.team ul a#angela').addClass('now');
	});
	$('div.team ul a#stuart').click(function(event){
		event.preventDefault();
		$('div.description').load('team/stuart.html');
		$('a').removeClass('now');
		$('div.team ul#stuart').addClass('now');
	});
	$('div.team ul a#charles').click(function(event){
		event.preventDefault();
		$('div.description').load('team/charles.html');
		$('a').removeClass('now');
		$('div.team ul a#charles').addClass('now');
	});
	$('div.team ul a#jim').click(function(event){
		event.preventDefault();
		$('div.description').load('team/jim.html');
		$('a').removeClass('now');
		$('div.team ul a#jim').addClass('now');
	})
	$('div.team ul a#stan').click(function(event){
		event.preventDefault();
		$('div.description').load('team/stan.html')
		$('a').removeClass('now');
		$('div.team ul a#stan').addClass('now');
	});
	$('div.team ul a#david').click(function(event){
		event.preventDefault();
		$('div.description').load('team/david.html');
		$('a').removeClass('now');
		$('div.team ul a#david').addClass('now');
	});
	$('div.team ul a#paula').click(function(event){
		event.preventDefault();
		$('div.description').load('team/paula.html');
		$('a').removeClass('now');
		$('div.team ul a#paula').addClass('now');
	});

});