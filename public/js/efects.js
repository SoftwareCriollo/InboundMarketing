$(document).ready(function() {
	var scrollorama = $.scrollorama({blocks:'.fold_quees', enablePin:false});
	scrollorama.animate('.fold_quees .quees',{
		duration: 150, property:'opacity', start:0, end:1}
	);

	/*HOW*/
	$('#clave').click(function(){
		$('.description').hide();
		$('#text_clave').fadeIn();
		$('.arrow').css("margin-left","70px");
	});
	$('#meta').click(function(){
		$('.description').hide();
		$('#text_meta').fadeIn();
		$('.arrow').css("margin-left","300px");
	});
	$('#contenido').click(function(){
		$('.description').hide();
		$('#text_contenido').fadeIn();
		$('.arrow').css("margin-left","525px");
	});
	$('#viral').click(function(){
		$('.description').hide();
		$('#text_viral').fadeIn();
		$('.arrow').css("margin-left","750px");
	});
	$('#viral2').click(function(){
		$('.description').hide();
		$('#text_viral').fadeIn();
		$('.arrow').css("margin-left","980px");
	});
	
});
