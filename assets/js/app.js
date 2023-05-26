$(document).ready(function() {

    $.get( "../../views/components/Menu/index.html", function( data ) {
        $( "header" ).html( data );
    });

      $.get( "../../views/components/Footer/index.html", function( data ) {
        $( "footer" ).html( data );
      });

   
 });
