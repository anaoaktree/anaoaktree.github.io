
/* HTML document is loaded. DOM is ready.
-------------------------------------------*/
$(function(){

  // PRELOADER
  $(window).load(function(){
    $('.preloader').delay(500).fadeOut("slow"); // set duration in brackets
  });
  // WOW ANIMATED
  wow = new WOW(
  {
    mobile: false
  });
  // wow.init();

});
