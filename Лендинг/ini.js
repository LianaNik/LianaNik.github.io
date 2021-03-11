document.addEventListener('DOMContentLoaded', () => {
    
$(window).on('load resize change', function(){
  if ($(window).width()<768) {
    $('.promo-two__text-about').insertAfter('.promo-two__about');
    $('.promo-two__character').insertAfter('.promo-two__img');
}
else {
    $('.promo-two__text-about').insertAfter('.promo-two__img');
    $('.promo-two__character').insertAfter('.promo-two__about');
}
});

//блок consist
var lineA = new LeaderLine(
    document.getElementById('start'),
    document.getElementById('end1')
  );

var lineB = new LeaderLine(
    document.getElementById('start'),
    document.getElementById('end2')
  );

var lineC = new LeaderLine(
    document.getElementById('start'),
    document.getElementById('end3')
  );

var lineD = new LeaderLine(
    document.getElementById('start'),
    document.getElementById('end4')
  );

var lineE = new LeaderLine(
    document.getElementById('start'),
    document.getElementById('end5')
  );

var lineF = new LeaderLine(
    document.getElementById('start'),
    document.getElementById('end6')
  );

lineA.setOptions({
    path: 'straight',
    color: 'rgb(254, 200, 39)',
    endPlug: 'behind',
    dropShadow: {color: 'rgb(103, 57, 109)', dx: 0, dy: 0},
  });

  lineB.setOptions({
    path: 'straight',
    color: 'rgb(254, 200, 39)',
    endPlug: 'behind',
    dropShadow: {color: 'rgb(103, 57, 109)', dx: 0, dy: 0},
  });

  lineC.setOptions({
    path: 'straight',
    color: 'rgb(254, 200, 39)',
    endPlug: 'behind',
    dropShadow: {color: 'rgb(103, 57, 109)', dx: 0, dy: 0},
  });

  lineD.setOptions({
    path: 'straight',
    color: 'rgb(254, 200, 39)',
    endPlug: 'behind',
    dropShadow: {color: 'rgb(103, 57, 109)', dx: 0, dy: 0},
  });

  lineE.setOptions({
    path: 'straight',
    color: 'rgb(254, 200, 39)',
    endPlug: 'behind',
    dropShadow: {color: 'rgb(103, 57, 109)', dx: 0, dy: 0},
  });

  lineF.setOptions({
    path: 'straight',
    color: 'rgb(254, 200, 39)',
    endPlug: 'behind',
    dropShadow: {color: 'rgb(103, 57, 109)', dx: 0, dy: 0},
  });

//блок reviews
$('.reviews-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: false,
            adaptiveHeight: false,
            centerMode: false,
          }
        },
        {
          breakpoint: 575,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            adaptiveHeight: false,
            centerMode: false,
          }
        }
      ]
})

//блок form
var countdown = 30 * 60 * 1000;
var timerId = setInterval(function(){
  countdown -= 1000;
  var min = Math.floor(countdown / (60 * 1000));
  var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);  


  if (countdown < 0) {
     clearInterval(timerId);
  } else if (sec < 10) {
     $(".form__timecount-content").html(min + " : " + 0 + sec);
  } else {
    $(".form__timecount-content").html(min + " : " + sec);
  }

}, 1000); 

//плавный переход
    $(".promo").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(".consist").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });

  $(".promo-two").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});


});