$(document).ready(function(){
    new WOW().init();
    AOS.init({
        duration: 700,
      })
})
// $(window).on("load", function () {
//   $(".preloader").fadeOut(10000);
//   $(".preloader").remove();
// });

$.ajax({
    url:"js/data.json",
    type:"GET",
    beforeSend: function(){
      $(".preloader").show()
    },
    complete: function(){
      $(".preloader").hide();
    },
    success:(response)=>{
        // console.log(response);
        var a;
        for(a=0; a<response.length; a++) {
            var bulan = response[a].bulan;
            var img = response[a].popup;
            var id_ = response[a].id;
            var addClass = response[a].addClass

            var x;

            var o ="";
            var depan="";

            img.map((a, n) => {
                o += `<div class="datax">
                <div class="datax__card">
                  <div class="image">
                    <img src="${a.img}" alt="">
                  </div>
                  <div class="desc">
                    <h3>${a.title}</h3>
                    <p>${a.desc}</p>
                  </div>
                </div>
              </div>`;

              depan+= `<li>${a.title}</li>`
            });

            // data-aos="fade-right"
            $(".trimester-1").append(`
                <div class="wrap-test ${addClass}" data-aos="fade-right">
                    <div class="w-70">
                    <div id="card-${id_}" data-id="${id_}" class="bulan">
                        <h2 class="skew-fix">${bulan}</h2>
                        <div class="click">
                        <img src="img/click.png" alt="" width="30">
                        </div>
                    </div>
                    <ul>
                        ${depan}
                    </ul>
                    </div>
                </div>
            `)

            $("#card-"+id_+"").on('click',function(){
            // $(".bulan").on('click',function(){
                var cek = $(this).attr("data-id")
                // console.log(cek)
                // alert(1)
                // animate__fadeInTopLeft
                $("#show-card-"+cek+"").addClass('ceks animate__animated animate__zoomInDown')
            })


            $("main").append(`
            <div class="fullpagex" id="show-card-${id_}">
                <div class="closex">
                <i class="fa fa-times" aria-hidden="true"></i>
                </div>
                <div class="mt-5">
                ${o}
        
                
                </div>
            </div>
            `)
            $(".closex").on('click',function(){
                // animate__bounceOut
                $(this).parent().removeClass('ceks animate__animated animate__zoomInDown')
            })

        }
    }
})


$(".scroll-down").click(() => {
    $('html, body').animate({
      scrollTop: $(".trimester-1").offset().top
    }, 500);
  
  })

  const pauseVar = "fa-pause-circle";
const playVar = "fa-play-circle";

const btns = document.querySelectorAll(".all");

function onChange(event) {
  const buttonElement = event.currentTarget;

  const isPlayButton = buttonElement.classList.contains(playVar);

  if (isPlayButton) {
    buttonElement.classList.remove(playVar);
    buttonElement.classList.add(pauseVar);
    $("#play-button").removeClass("animate__infinite");
    $("#myAudio").get(0).play();
  } else {
    buttonElement.classList.remove(pauseVar);
    buttonElement.classList.add(playVar);
    $("#play-button").addClass("animate__infinite");
    $("#myAudio").get(0).pause();
  }
}

// query selector all returns a list of nodes, therefore we need to iterate over it and attach an event listener to each button seperatly
btns.forEach((btn) => {
  btn.addEventListener("click", onChange);
});