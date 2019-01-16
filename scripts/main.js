$(document).ready(function(){	
	$("header > .menu-button").click(function(){
	    $("header").toggleClass("open");
	});
});



$(function() {
	
	$(document).ready(function(){	
		
		// Open overlay
		$(".overlay > .close-overlay").click(function(){
		    $(".overlay").toggleClass("visible");
		});
		
		// Close overlay
		$("#open-overlay").click(function(){
		    $(".overlay").toggleClass("visible");
		});
	});
	
	
	
	// Scroll To #
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});



});