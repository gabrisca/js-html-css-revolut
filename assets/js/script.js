$(function(){
  
  var openDropdown = $(".with_dropdown");

  var dropdown = $(".dropdown");

  // / OPTION 1: HOVER ///
  // setto l'evento hover sugli elementi con classe .with_dropdown
  // openDropdown.hover(function(){
  //   // $(this) corrisponde all'elemento che ha attivato l'evento (openDropdown)
  //   // $(this) cerca un elemento con classe .dropdown dentro se stesso. Se lo trova gli aggiunge la classe active
  //   $(this).find(dropdown).fadeToggle().toggleClass("active");
  // })

  /// OPTION 2: FADEIN E FADEOUT ///
  // openDropdown.mouseleave(function(){
  //   $(this).find(dropdown).fadeOut()
  // })
  // openDropdown.mouseenter(function(){
  //   $(this).find(dropdown).fadeIn()
  // })

  // / OPTION 3: SLIDEDOWN E SLIDEUP ///
  // openDropdown.click(function () {
  //   $(this).find(dropdown).toggleClass("active");
  // });

  // / OPTION 4: CLICK E MOUSENTER CON CHILDREN ///
  // quando clicco attivo o rimuovo la classe active
  openDropdown.click(function(){
    $(this).children(dropdown).toggleClass("active");
  })

  // effetto hover al passaggio del mouse
  openDropdown.mouseenter(function(){
    // innanzittutto rimuovo classe active
    dropdown.removeClass("active");
    // con this e children vado poi ad aggiungere la classe active
    $(this).children(dropdown).addClass("active");
  })

});