jQuery(document).ready(function( $ ) {

  // Anchor management

  $('body').on('click', 'a', function(e) {

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {

      $(".cheeseburger").removeClass("active");

      var target = $(this.hash);

      var targetByHash = '';

      if (this.hash) {
        targetByHash = $('[name=' + this.hash.slice(1) +']');
      }

      target = target.length ? target : targetByHash;

      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 60
        }, 1000);
        return false;
      }
    }
  });

  // Anchor on page load

  setTimeout(function () {
    if (location.hash) {
      location.href = location.hash;
      $('html,body').animate({scrollTop: $(window).scrollTop() - 60}, 500);
    }
  }, 200);

  // Dynamic header positioning

  function mainNav() {
    var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    if (top < 150) {
      if ($("body").hasClass("dynamic-header")) {
        $('.page-header').css({"top": '0px'}).removeClass("header-body");
      }
    }
    if (top > 150 && top < 400) {
      $('.page-header').css({"top": '-90px'});
      $('.page-header').removeClass("menu-open");
    }
    if (top > $(window).height() - 100) {
      $('.page-header').css({"top": '0px'}).addClass("header-body");
    }
  }

  if ($("body").hasClass("dynamic-header")) {
    $(document).ready(function () { mainNav(); });
    $(window).scroll(function () {
      mainNav();
      $(".page-header .cheeseburger").removeClass("active");
    });
  }

  $(window).resize(function() {
    mainNav();
  });

  // Mobile navigation

  $(".page-header .cheeseburger").click(function (e) {
    $(this).toggleClass("active");
  });

  // Cookie management

  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-98765432;';
  }

  var checkOviCookie = getCookie('ovi-cookie');

  if (checkOviCookie != "Accepted") {
    $('.cookie-law-wrapper').addClass("unseen");
  }

  $('body').on('click', '.cookie-dismiss', function () {
    setCookie('ovi-cookie', 'Accepted', 28);
    $('.cookie-law-wrapper').removeClass("unseen").addClass("seen");
  });

  function validEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
  }

  $('body').on('contextmenu', 'img', function (e) {
    return false;
  });
  $("a, img").attr("draggable", "false")

});

$(window).on("load", function() {
  setTimeout(function () {
    $(".ovi-loader").remove();
  }, 500);
});