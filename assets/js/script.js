$(function(){
  
  var openDropdown = $("with_dropdown");
  console.log(openDropdown);

  var open = $(".open");
  console.log(open);

  open.hover(function(){
    $('.dropdown').toggleClass("active");
    // console.log(openDropdown)
    // $(this).find('.dropdown').toggleClass("active");
  })
  

});