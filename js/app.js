$(document).ready(function(){
    new WOW().init();
})
$(window).on("load", function () {
  $(".preloader").fadeOut(10000);
  $(".preloader").remove();
});
// $(() => {
//   new WOW().init();
//   var mobile = $(".menu").addClass("mob");
//   $(document).on("click", ".m-menu", () => {
//     $(".menu").fadeIn("fast");
//   });

//   if ($(window).width() > 768) {

//   }


// });

$("#card-1").click(function(){
    // animate__fadeInTopLeft
    $("#show-card-1").addClass('ceks animate__animated animate__zoomInDown')
})

$("#card-2").click(function(){
    // animate__fadeInTopLeft
    $("#show-card-2").addClass('ceks animate__animated animate__zoomInDown')
})

$(".closex").click(function(){
    // animate__bounceOut
    $(this).parent().removeClass('ceks')
})