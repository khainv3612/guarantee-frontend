// JScript File
$(document).ready(function () {
  $(".menuMobile img").click(function (e) {
    //$(".topMenuMobile").css({ "display": "block" });
    $(".top_4a").css({"display": "none"});
    $(".btnSeachMobile-collapse .fa.fa-times").css({"display": "none"});
    $(".btnSeachMobile-collapse .fa.fa-search").css({"display": "block"});

    //$(".menuMobile i").css({ "display": "block" });
    //$(".menuMobile img").css({ "display": "none" });
    $(".topMenuMobile").css({"left": "0", "transition": "left 1s"})

  });
  $(".menuMobile i").click(function (e) {
    //$(".topMenuMobile").css({ "display": "none" });
    $(".top_4a").css({"display": "none"});
    $(".btnSeachMobile-collapse .fa.fa-times").css({"display": "none"});
    $(".btnSeachMobile-collapse .fa.fa-search").css({"display": "block"});

    //$(".menuMobile i").css({ "display": "none" });
    //$(".menuMobile img").css({ "display": "block" });
    $(".topMenuMobile").css({"left": "-100%", "transition": "left 1s"})
  });

  $(".closeSeach").click(function (e) {
    $(".topMenuMobile").css({"left": "-100%", "transition": "left 1s"})
  });

  $(".btnSeachMobile-collapse .fa.fa-search").click(function (e) {
    $(this).css({"display": "none"});
    $(".btnSeachMobile-collapse .fa.fa-times").css({"display": "block"});
    $(".top_4a").css({"display": "block"});
    //$(".topMenuMobile").css({ "display": "none" });

    $(".menuMobile i").css({"display": "none"});
    $(".menuMobile img").css({"display": "block"});
  });
  $(".btnSeachMobile-collapse .fa.fa-times").click(function (e) {
    $(this).css({"display": "none"});
    $(".btnSeachMobile-collapse .fa.fa-search").css({"display": "block"});
    $(".top_4a").css({"display": "none"});
    //$(".topMenuMobile").css({ "display": "none" });

    $(".menuMobile i").css({"display": "none"});
    $(".menuMobile img").css({"display": "block"});
  });

  ///*******************************************///
  $(".topMenuMobile_b>.menu>ul>li.totalM>img.img1").click(function () {
    if ($(">ul", $(".topMenuMobile_b>.menu>ul>li.totalM").has(this)).css("display") == "none") {
      $(">ul", $(".topMenuMobile_b>.menu>ul>li.totalM").has(this)).css("display", "block");
    }
    ;
    $(this).css("display", "none");
    $(">img.img2", $(".topMenuMobile_b>.menu>ul>li.totalM").has(this)).css("display", "block");
  });
  $(".topMenuMobile_b>.menu>ul>li.totalM>img.img2").click(function () {
    if ($(">ul", $(".topMenuMobile_b>.menu>ul>li.totalM").has(this)).css("display") == "block") {
      $(">ul", $(".topMenuMobile_b>.menu>ul>li.totalM").has(this)).css("display", "none");
    }
    ;
    $(this).css("display", "none");
    $(">img.img1", $(".topMenuMobile_b>.menu>ul>li.totalM").has(this)).css("display", "block");
  });
  ///*******************************************///
  $(".topMenuMobile_b>.menu>ul>li>ul>li.total2M>img.img1").click(function () {
    if ($(">ul", $(".topMenuMobile_b>.menu>ul>li>ul>li.total2M").has(this)).css("display") == "none") {
      $(">ul", $(".topMenuMobile_b>.menu>ul>li>ul>li.total2M").has(this)).css("display", "block");
    }
    ;
    $(this).css("display", "none");
    $(">img.img2", $(".topMenuMobile_b>.menu>ul>li>ul>li.total2M").has(this)).css("display", "block");
  });
  $(".topMenuMobile_b>.menu>ul>li>ul>li.total2M>img.img2").click(function () {
    if ($(">ul", $(".topMenuMobile_b>.menu>ul>li>ul>li.total2M").has(this)).css("display") == "block") {
      $(">ul", $(".topMenuMobile_b>.menu>ul>li>ul>li.total2M").has(this)).css("display", "none");
    }
    ;
    $(this).css("display", "none");
    $(">img.img1", $(".topMenuMobile_b>.menu>ul>li>ul>li.total2M").has(this)).css("display", "block");
  });


  $(".menuServiceL>ul>li>.fa.fa-angle-right").click(function (e) {
    $(".menuServiceL ul>li>ul li").css("display", "none");
    $("i.fa.fa-angle-down").css("display", "none");
    $("i.fa.fa-angle-right").css("display", "block");
    if ($(">ul li", $(".menuServiceL ul>li").has(this)).css("display") == "none") {
      $(">ul li", $(".menuServiceL ul>li").has(this)).css("display", "inline-block");
      $(this).css("display", "none");
      $(">i.fa.fa-angle-down", $(".menuServiceL ul>li").has(this)).css("display", "block");
    }
  });

  $(".menuServiceL>ul>li>.fa.fa-angle-down").click(function (e) {
    $(">ul li", $(".menuServiceL ul>li").has(this)).css("display", "none");
    $(this).css("display", "none");
    $(">i.fa.fa-angle-right", $(".menuServiceL ul>li").has(this)).css("display", "block");
  });


  try {
    var carousel = $(".owl-carousel-slide");
    carousel.on({
      "initialized.owl.carousel": function () {
        carousel.find(".owl-item").show(), $(".owl-loading").hide()
      }
    }).owlCarousel({
      items: 1,
      margin: 0,
      lazyLoad: true,
      autoHeight: !0,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 10000,
      loop: true,
      smartSpeed: 1000,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      navText: ['<i class="fa fa-angle-left arrow-i" aria-hidden="true"></i>', '<i class="fa fa-angle-right arrow-i" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        },
      }
    });
  } catch (err) {

  }
  ;
  //<i class="fas fa-minus-square"></i>
  //Click event to scroll to top
  $('.gotoTop').click(function () {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
  });

  // Scoll top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('.gotoTop').fadeIn();
    } else {
      $('.gotoTop').fadeOut();
    }
    ;

    if ($(this).scrollTop() > 47) {
      $(".top_2a").css({
        'position': 'fixed',
        'width': '100%',
        'z-index': '3',
        'top': '0',
        'background': '#fff',
        'border-bottom': '1px solid #ddd'
      });
      $('.top_2a .menu>ul>li>a').css('padding', '5px 10px');
      $('.top_2a .logo img').css('height', '61px');
      $(".top_1a").css({
        'position': 'fixed',
        'width': '100%',
        'z-index': '3',
        'top': '-5px',
        'background': '#fff',
        'border-bottom': '1px solid #ddd'
      });
    } else {
      $(".top_2a").css({'position': 'relative', 'background': '#fff', 'border-bottom': '1px solid #ddd'});
      $('.top_2a .menu>ul>li>a').css('padding', '30px 10px');
      $('.top_2a .logo img').css('height', 'auto');
      $(".top_1a").css({'position': 'relative', 'background': '#fff', 'border-bottom': '1px solid #ddd'});
    }

  });

  jQuery("#btnClose").click(function (e) {
    HideDialog();
    e.preventDefault();
  });

  $('.carousel .vertical .item').each(function () {
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 1; i < 2; i++) {
      next = next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }

      next.children(':first-child').clone().appendTo($(this));
    }
  });

  $(document).on("click", function (e) {
    if ($(e.target).hasClass('topMenuMobile')) {
      return false;
    } else {
      if ($(e.target).hasClass('imgMenuMo')) {
        return false;
      } else {
        $(".topMenuMobile").css({"left": "-100%", "transition": "left 1s"})
      }
    }
    ;

  });
  $('.tk .txt').on("click", function () {
    $('.tk .txt').css({'width': '187px', 'transition': 'all 1s'});
  });

  $('.lang_1 div:first-child').on("click", function () {
    if ($(".lang_1 div:last-child").css("visibility") == "hidden") {
      $('.lang_1 div:last-child').css({'visibility': 'visible', 'top': '30px', 'transition': 'all 0.5s'});
    } else {
      $('.lang_1 div:last-child').css({'visibility': 'hidden', 'top': '20px', 'transition': 'all 0.5s'});
    }
  });

})


function ShowDialog(modal) {
  jQuery("#overlay").show();
  jQuery("#dialog").fadeIn(300);
}

function HideDialog() {
  jQuery("#overlay").hide();
  jQuery("#dialog").fadeOut(300);

}


//********************************************//
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  //            d.setTime(d.getTime() + (exdays));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

