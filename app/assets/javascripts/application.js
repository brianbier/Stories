// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
/*$(document).read(function(){
$('.icon-menu').click( 
    function() {
        $('.menu').animate({ left: 250 }, 'slow', function() {
            $('.icon-menu').html('Close');
        });
    }, 
    function() {
        $('.icon-menu').animate({ left: 0 }, 'slow', function() {
            $('.').html('Menu');
        });
    }
);
});
*/
var main = function() {
$(".icon-menu").click(function() {
      $(".menu").animate({
          left: "0px"
      }, 200)
  }), 
    $(".icon-close").click(function() {
      $(".menu").animate({
          left: "-240px"
      }, 200)
  })

}
$(document).ready(main);