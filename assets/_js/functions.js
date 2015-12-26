//set currecnt page link as active


$(document).ready(function() {
  var str = location.href.toLowerCase();
  $("nav.site-nav a").each(function() {
    if (str.indexOf(this.href.toLowerCase()) > -1) {
      $("a.current").removeClass("current");
      $(this).addClass("current");
    }
  });
});

//Menu nav toggle
$(document).ready(function() {
  var $nav = $(".mobile-nav");
  var $homeContent = $(".home-content");
  $('.mobile-nav-toggle').click(function(show) {
    show.stopPropagation();
    $nav.toggle('slide', {
      direction: 'up'
    }, 500);
    $homeContent.toggle('slide', {
      direction: 'right'
    }, 500);
    //or .site-nav / .mobile-nav

  });
});
