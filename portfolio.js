$(document).ready(function(){

    $(window).scroll(function(){

        if(this.scrollY > 200){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        //scrolling button btn
        if(this.scrollY>500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    var typed = new Typed(".typing-1",{
        Strings: [
            "Engineer", "Developer"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2",{
        strings: [
            "Engineer", "Developer"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });

    // owl carousel animation
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        navigation: true,
        autoplay: true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,

        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: flase
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});   
 