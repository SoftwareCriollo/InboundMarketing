$(document).ready(function(cuenta) {
	$scrollorama = $.scrollorama({blocks:'#wrapper', enablePin:false});
	$scrollorama.animate('.fold_quees .quees',{
		duration: 1000, property:'zoom', start: 0, end: 1},{
		duration: 1100, property:'opacity', start: 0, end: 1}
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

	/*WANT*/
	$('#submit').click(function(){
		$('.notice').remove();
		$('#submit').attr('disabled', true);
		if(($('input#name').val() != '') && ($('input#mail').val() != '') && ($('input#description').val() != '')){
			var name = $('input#name').val();
			var mail = $('input#mail').val();
			var description = $('input#description').val();
			$.ajax({  
			url: '/new_user',  
			type: 'POST',  
			data: 'name=' + name + '&mail=' + mail + '&description=' + description,
  
			success: function() {
				$('.form_bg').append('<p class="notice"><span>¡Gracias!</span> Una persona de nuestro equipo estará en contacto contigo.</span>');
				$('.title').remove();
				$('.form').remove();
				document.contact_form.reset();
			}
			});
			return false;
		}else{
			$('.form').append('<p class="notice">¡Oh! Falto algo.</span>');
			$('#submit').attr('disabled', false);
		}
	});
	
	/*FORM*/
	$('input').focusin(function(){
		if($(this).val() == ''){
			$(this).parent('.input-placeholder').children('label.label_input').hide();
		}
	});

	$('input').focusout(function(){
		if($(this).val() == ''){
			$(this).parent('.input-placeholder').children('label.label_input').show();
		}
	});

});
