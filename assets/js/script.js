//Cambio de color de la barra de navegación
function myFunction(x) {
  if (x.matches) {
    $(document).ready(function() {
      $( window ).scroll(function() {
        if($( window ).scrollTop()>($( "#presentacion" ).offset().top - $( "#navegador" ).height())) {
          $( "#navegador" ).removeClass( "navstyle" ).addClass( "newnavstyle" );
        } else {
          $( "#navegador" ).removeClass( "newnavstyle" ).addClass( "navstyle" );
        }
      });
    });
  }
}
var x = window.matchMedia("(min-width: 768px)")
myFunction(x)
x.addListener(myFunction)

//Smooth scrolling
$(document).ready(function(){
  $("nav a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1600, function(){
        window.location.hash = hash;
      });
    }
  });
});

//Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
