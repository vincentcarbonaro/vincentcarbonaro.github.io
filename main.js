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

  $('.vinstagram').tooltip({
    content: 'A class project - An Instagram inspired picture sharing platform',
    position: { my: "middle", at: "bottom"}
  });

  $('.snake').tooltip({
    content: 'A class project - A remake of the classic arcade game Snake',
    position: { my: "middle", at: "bottom"}
  });

  $('.ar').tooltip({
    content: "A class project - Meta-Programming Ruby on Rails' Active Record",
    position: { my: "middle", at: "bottom"}
  });

  $('.cityspade').tooltip({
    content: "A Programming challenged in which I scraped data from a real estate website and plotted the locations on a Google Map",
    position: { my: "middle", at: " bottom"}
  });

})
