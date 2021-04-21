$(function(){
  
  var openDropdown = $(".with_dropdown");
  console.log(openDropdown.html());

  // setto l'evento hover sugli elementi con classe .with_dropdown
  openDropdown.hover(function(){
    // $(this) corrisponde all'elemento che ha attivato l'evento (openDropdown)
    // $(this) cerca un elemento con classe .dropdown dentro se stesso. Se lo trova gli aggiunge la classe active
    $(this).find('.dropdown').toggleClass("active");
  })

});