$(document).ready(function(){
    new WOW().init();
    AOS.init({
        duration: 1200,
      })
})
// $(window).on("load", function () {
//   $(".preloader").fadeOut(10000);
//   $(".preloader").remove();
// });

$.ajax({
    url:"js/data.json",
    type:"GET",
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


