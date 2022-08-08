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

});

