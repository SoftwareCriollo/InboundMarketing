$(document).ready(function() {
    var scrollorama = $.scrollorama({
        blocks:'.fold_quees', enablePin:false
    });
    scrollorama.animate('.fold_quees .quees',{
    duration: 150, property:'opacity', start:0, end:1
    });
});
