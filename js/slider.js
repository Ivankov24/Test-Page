$(document).ready()
$(window).on('load', function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
  $("select").val();
  $("#day :last").attr("selected", "selected");
  $("#year :last").attr("selected", "selected");
});