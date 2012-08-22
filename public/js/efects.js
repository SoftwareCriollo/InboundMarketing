$(document).ready(function(cuenta) {
	$scrollorama = $.scrollorama({blocks:'#wrapper', enablePin:false});
	$scrollorama.animate('.fold_quees .quees',{
		duration: 770, property:'zoom', start: 0, end: 1},{
		duration: 800, property:'opacity', start: 0, end: 1}
	);
	/*PERCENT*/
	$next = "#graph_1";
	$percent = $('#percent img');
	$coming = graph1();
	function time() {
		$('.fold_inboundoutbound .image .text').fadeOut('slow');
		$coming();
	}
	function graph1() {
		$($next).delay(600).fadeIn('slow');
		$($percent).transition({ rotate: 37, easing: 'in'});
		setTimeout(function(){
			$next = "#graph_2";
			$coming = graph2;
			time();
		}, 5000);
		
	}
	function graph2() {
		$($next).delay(600).fadeIn('slow');
		$($percent).transition({ rotate: 143, easing: 'in'});
		setTimeout(function(){
			$next = "#graph_3";
			$coming = graph3;
			time();
		}, 5000);
	}
	function graph3() {
		$($next).delay(600).fadeIn('slow');
		$($percent).transition({ rotate: 147, easing: 'in'});
		setTimeout(function(){
			$next = "#graph_4";
			$coming = graph4;
			time();
		}, 5000);
	}
	function graph4() {
		$($next).delay(600).fadeIn('slow');
		$($percent).transition({ rotate: 142, easing: 'in'});
		setTimeout(function(){
			$next = "#graph_5";
			$coming = graph5;
			time();
		}, 5000);
	}
	function graph5() {
		$($next).delay(600).fadeIn('slow');
		$($percent).transition({ rotate: 73, easing: 'in'});
		setTimeout(function(){
			$next = "#graph_1";
			$coming = graph1;
			time();
		}, 5000);
	}
	
	/*HOW*/
	$('#clave').click(function(){
		$('.description').hide();
		$('#text_clave').fadeIn();
		$('.arrow').css("margin-left","70px");
	});
	$('#meta').click(function(){
		$('.description').hide();
		$('#text_meta').fadeIn();
		$('.arrow').css("margin-left","280px");
	});
	$('#contenido').click(function(){
		$('.description').hide();
		$('#text_contenido').fadeIn();
		$('.arrow').css("margin-left","495px");
	});
	$('#viral').click(function(){
		$('.description').hide();
		$('#text_viral').fadeIn();
		$('.arrow').css("margin-left","705px");
	});
	$('#viral2').click(function(){
		$('.description').hide();
		$('#text_viral2').fadeIn();
		$('.arrow').css("margin-left","915px");
	});
	
});
