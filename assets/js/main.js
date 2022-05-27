$(document).ready(function() {

        // Pop Up Image Activation
        $('.popup-image').magnificPopup({
            type:'image',
            gallery:{
                enabled:true
              }
        });

        // Pop Up Video Activation
        $('.popup-video').magnificPopup({
            type:'iframe',
        });

        // One Page Nav Activation
        $('#nav').onePageNav({
            currentClass: 'current'
        });

        // Counter Up Activation
        $('.counter-up').counterUp({
            delay: 10,
            time: 1000
        });

        // Testimonial Slider Activation
        $('.testimonials').slick({
            slidesToShow: 3,
            infinite: true,
            dots: true,
            loop: true,
            autoplay: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>' ,
            nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                    breakpoint: 900,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      arrows: false,
                    }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                  }
                }]
          });


        // Partner Brand Slick Slider Activation
        $('.partners').slick({
            slidesToShow: 4,
            infinite: true,
            loop: true,
            autoplay: true,
            prevArrow: false,
            nextArrow: false,
            responsive: [
               {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                  }
                }]
          });
        
        // Slick Nav Activation
        
        $(function(){
            $('#nav').slicknav({
                'label' : '',
                'easingClose': 'swing' ,
                'easingOpen': 'swing' ,
                'closeOnClick': true,
                'duration': false,
            });
        });

});


// Navbar Activation      
$(window).on('scroll', function(){
    if($(this).scrollTop() > 25){
        $('.header-area').addClass('sticky');
    }else{
        $('.header-area').removeClass('sticky');
    }
})