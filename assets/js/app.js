$(document).ready(function() {

    $.get( "../../views/components/Menu/index.html", function( data ) {
        $( "header" ).html( data );
      });

 });