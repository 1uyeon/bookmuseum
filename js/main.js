$(document).ready(function() {

  // swiper
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  // swiper autoplay button
  $(".swiper-button-pause").click(function() {
    swiper.autoplay.stop();
    $(this).addClass("nonedp");
    $(".swiper-button-play").removeClass("nonedp");
  });
  $(".swiper-button-play").click(function() {
    swiper.autoplay.start();
    $(this).addClass("nonedp");
    $(".swiper-button-pause").removeClass("nonedp");
  });

  // more plus button
  $('.subBanner>div').mouseover(function() {
    $(this).children('.moreBtn').css("visibility","visible").css("opacity","1");;
  });
  $('.subBanner>div').mouseout(function() {
    $(this).children('.moreBtn').css("visibility","hidden").css("opacity","0");;
  });

  // top scroll button 
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('.topButton').fadeIn();
    } else {
        $('.topButton').fadeOut();
    }
  });
  $(".topButton").click(function() {
    $('html, body').animate({scrollTop:0}, '300');
  });

  // navi
  $('.menu').click(function() {
    $('.navi').css("left","0");
    $('.dimmed').css("display","block");
    $('body').addClass('ofHidden');
  });
  $('.navi>div>img').click(function() {
    $('.navi').css("left","-394px");
    $('.dimmed').css("display","none");
    $('body').removeClass('ofHidden');
  });
  $('.dimmed').click(function() {
    $('.navi').css("left","-394px");
    $('.dimmed').css("display","none");
    $('body').removeClass('ofHidden');
  });
  $('.navi ul li a').mouseover(function() {
    $(this).children('img').addClass('blueFilter');
  });
  $('.navi ul li a').mouseout(function() {
    $(this).children('img').removeClass('blueFilter');
  });

  // 본문 바로가기
  $('.skip a').on('focus', function() {
    $(this).stop().animate({"top":0, "opacity":1});
  });
  $('.skip a').on('click', function(){
    $(this).stop().animate({"top":"-30px", "opacity":0});
  });
  $('.skip a').on('focusout', function(){
      $(this).stop().animate({"top":"-30px", "opacity":0});
  });
});

