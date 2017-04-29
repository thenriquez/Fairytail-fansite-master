//$('.dropdown-toggle').dropdown()
//$('#mainNav').affix({
//  offset: {
//    top: 100
//  }
//})
//$( "li" ).hover(
//  function() {
//      $(this).find("span").stop().animate({
//      width:"100%",
//      opacity:"1",
//    }, 400, function () {
//    })
//  }, function() {
//      $(this).find("span").stop().animate({
//      width:"0%",
//      opacity:"0",
//    }, 400, function () {
//    })
//  }
//);
$(document).ready(function(){
		$('.navbar-fostrap').click(function(){
			$('.nav-fostrap').toggleClass('visible');
			$('body').toggleClass('cover-bg');
		});
	});