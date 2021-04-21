$(function(){
  
  var openDropdown = $(".with_dropdown");

  var dropdown = $(".dropdown");

  // / OPTION: HOVER ///
  // setto l'evento hover sugli elementi con classe .with_dropdown
  openDropdown.hover(function(){
    // $(this) corrisponde all'elemento che ha attivato l'evento (openDropdown)
    // $(this) cerca un elemento con classe .dropdown dentro se stesso. Se lo trova gli aggiunge la classe active
    $(this).find(dropdown).fadeToggle().toggleClass("active");
  })

  /// OPTION: FADEIN E FADEOUT ///
  // openDropdown.mouseleave(function(){
  //   $(this).find(dropdown).fadeOut()
  // })
  // openDropdown.mouseenter(function(){
  //   $(this).find(dropdown).fadeIn()
  // })

  /// OPTION: SLIDEDOWN E SLIDEUP ///
  // openDropdown.click(function () {
  //   $(this).find(dropdown).slideDown(1000);
  // });
  // openDropdown.dblclick(function () {
  //   $(this).find(dropdown).slideUp(1000);
  // });
});