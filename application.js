$( document ).ready(function() {
  // anchor animation
  $("#nav-menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body, html').animate({scrollTop: top-85}, 1000);
  });
});
