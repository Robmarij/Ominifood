

$(document).ready(function() {
    var waypoint = new Waypoint({
      element: $('.js--section-features'),
      handler: function(direction) {
            if (direction == "down") {
                $('nav').addClass('sticky');
            } 
            else {
                $('nav').removeClass('sticky');
            }
        }, offset: '60px;'
    });
    
    $('.js--scroll-to-plans').click(function (){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
        $('.js--scroll-to-start').click(function (){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    $(function() {
    $('a[href*=\\#]:not([href=\\#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
    
/* Animation on scrool */
    
    $('.js--wp-1').waypoint(  
  (direction) => {
    $('.js--wp-1').addClass('animate__animated animate__fadeIn');
  },
  {
    offset: '50%',
  }
); 
    
    $('.js--wp-2').waypoint(  
  (direction) => {
    $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
  },
  {
    offset: '50%',
  }
);
$('.js--wp-3').waypoint(  
  (direction) => {
    $('.js--wp-3').addClass('animate__animated animate__fadeIn');
  },
  {
    offset: '50%',
  }
);
  $('.js--wp-4').waypoint(  
  (direction) => {
    $('.js--wp-4').addClass('animate__animated animate__pulse');
  },
  {
    offset: '50%',
  }
);
  
    /* Mobile nav */
    
    $(".js--nav-icon").click(() => {
    const nav = $(".js--main-nav");
    nav.slideToggle(200); /* def uses display: !value + css slide drawer */
 
    const icon = $(".js--nav-icon ion-icon");
 
    console.log(icon[0].name);
 
    if (icon[0].name === "menu-outline") {
        icon[0].name = "close-outline";
    } else {
        icon[0].name = "menu-outline";
    }
});
});