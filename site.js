$(function () {

  $('.logo').click(function (event) {
    $('.section').toggle(false);
    $('#home').toggle(true);
    $('nav li').removeClass("active");
    $('.home').addClass("active");
  });

  $('.home').click(function (event) {
    $('.section').toggle(false);
    $('#home').toggle(true);
    $('nav li').removeClass("active");
    $('.home').addClass("active");
  });

  $('.resume').click(function (event) {
    $('.section').toggle(false);
    $('#resume').toggle(true);
    $('nav li').removeClass("active");
    $('.resume').addClass("active");
  });

  $('.portfolio').click(function (event) {
    $('.section').toggle(false);
    $('#portfolio').toggle(true);
    $('nav li').removeClass("active");
    $('.portfolio').addClass("active");
  });

  $('.contact').click(function (event) {
    $('.section').toggle(false);
    $('#contact').toggle(true);
    $('nav li').removeClass("active");
    $('.contact').addClass("active");
  });

})
