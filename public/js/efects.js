$(document).ready(function(cuenta) {
	$scrollorama = $.scrollorama({blocks:'#wrapper', enablePin:false});
	$scrollorama.animate('.fold_quees .quees',{
		duration: 1200, property:'zoom', start: 0, end: 1},{
		duration: 1300, property:'opacity', start: 0, end: 1}
	);

	/*PERCENT*/
	$next = "#graph_1";
	$percent = $('#percent img');
	$coming = graph1();
	function time() {
		$('.fold_inboundoutbound .image .text').fadeOut('slow');
		$('.slide_graph li').removeClass("slide_active").addClass("slide_off");
		$coming();
	}
	function graph1() {
		$($next).delay(600).fadeIn('slow');
		$('.slide_graph li#first').removeClass("slide_off").addClass("slide_active");
		$($percent).transition({ rotate: 37, easing: 'in'});
		setTimeout(function(){
			$next = "#graph_2";
			$coming = graph2;
			time();
		}, 5000);
		
	}
	function graph2() {
		$($next).delay(600).fadeIn('slow');
		$('.slide_graph li#second').removeClass("slide_off").addClass("slide_active");
		$($percent).transition({ rotate: 143, easing: 'in'});
		setTimeout(function(){
			$next = "#graph_3";
			$coming = graph3;
			time();
		}, 5000);
	}
	function graph3() {
		$($next).delay(600).fadeIn('slow');
		$('.slide_graph li#third').removeClass("slide_off").addClass("slide_active");
		$($percent).transition({ rotate: 147, easing: 'in'});
		setTimeout(function(){
			$next = "#graph_4";
			$coming = graph4;
			time();
		}, 5000);
	}
	function graph4() {
		$($next).delay(600).fadeIn('slow');
		$('.slide_graph li#fourth').removeClass("slide_off").addClass("slide_active");
		$($percent).transition({ rotate: 142, easing: 'in'});
		setTimeout(function(){
			$next = "#graph_5";
			$coming = graph5;
			time();
		}, 5000);
	}
	function graph5() {
		$($next).delay(600).fadeIn('slow');
		$('.slide_graph li#fifth').removeClass("slide_off").addClass("slide_active");
		$($percent).transition({ rotate: 73, easing: 'in'});
		setTimeout(function(){
			$next = "#graph_1";
			$coming = graph1;
			time();
		}, 5000);
	}
	
	/*HOW*/
	$('.icon_active').hide();
	if ($('#text_clave').show){
		$('#clave').children('.icon_default').hide();
		$('#clave').children('.icon_active').show();
	}
	$('#clave').click(function(){
		$('.description').hide();
		$('#text_clave').fadeIn();
		$('.arrow').css("margin-left","70px");
		$('.icon_active').hide();
		$('.icon_default').show();
		$(this).children('.icon_default').hide();
		$(this).children('.icon_active').show();
	});
	$('#meta').click(function(){
		$('.description').hide();
		$('#text_meta').fadeIn();
		$('.arrow').css("margin-left","280px");
		$('.icon_active').hide();
		$('.icon_default').show();
		$(this).children('.icon_default').hide();
		$(this).children('.icon_active').show();
	});
	$('#contenido').click(function(){
		$('.description').hide();
		$('#text_contenido').fadeIn();
		$('.arrow').css("margin-left","495px");
		$('.icon_active').hide();
		$('.icon_default').show();
		$(this).children('.icon_default').hide();
		$(this).children('.icon_active').show();
	});
	$('#social').click(function(){
		$('.description').hide();
		$('#text_viral').fadeIn();
		$('.arrow').css("margin-left","705px");
		$('.icon_active').hide();
		$('.icon_default').show();
		$(this).children('.icon_default').hide();
		$(this).children('.icon_active').show();
	});
	$('#viral').click(function(){
		$('.description').hide();
		$('#text_viral2').fadeIn();
		$('.arrow').css("margin-left","915px");
		$('.icon_active').hide();
		$('.icon_default').show();
		$(this).children('.icon_default').hide();
		$(this).children('.icon_active').show();
	});
	
});
