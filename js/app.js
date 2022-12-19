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
// var bulan = $(".bulan");

// var a;
// for(a=0; a<bulan.length;a++) {
//     // var help_id = $(".bulan").attr('data-id')
//     var clickers = $(".bulan").attr('data-id',a)
//     console.log(a);
//     clickers.click(function(){
//         // animate__fadeInTopLeft
//         // $("#show-card-"+help_id+"").addClass('ceks animate__animated animate__zoomInDown')
//     })
// }
$("#card-1").click(function(){
    // alert(help_id)
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