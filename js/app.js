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

var help_id = $(".bulan").attr('data-id')

$("#card-"+help_id+"").click(function(){
    // alert(help_id)
    // animate__fadeInTopLeft
    $("#show-card-"+help_id+"").addClass('ceks animate__animated animate__zoomInDown')
})

$(".closex").click(function(){
    // animate__bounceOut
    $(this).parent().removeClass('ceks')
})