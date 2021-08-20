(function( $ ) {

	//Function to animate slider captions
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';

		elems.each(function () {
			var $this = $(this),
			$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}

	//Variables on page load
	var $myCarousel = $('#myCarousel'),
	$firstAnimatingElems = $myCarousel.find('.carousel-item:first').find("[data-animation ^= 'animated']");

	//Initialize carousel
	$myCarousel.carousel();

	//Animate captions in first slide on page load
	doAnimations($firstAnimatingElems);

	//Pause carousel
	$myCarousel.carousel('pause');


	//Other slides to be animated on carousel slide event
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});
	$('#myCarousel').carousel({
		interval:3000,
		pause: "false"
	});



})(jQuery);

AOS.init({
	easing: 'ease-in-out-sine'
});


$("document").ready(function($){
	var nav = $('#Navbar');

	$(window).scroll(function () {
		if ($(this).scrollTop() > 58) {
			nav.addClass("fixed-top");
			nav.addClass("bg-white");
			$(".navbar-brand").css({
				"margin-top": "0",
			});
			$(".navbar-toggler-right").css({
				"top": "25px",
			});
		} else {
			nav.removeClass("fixed-top");
			nav.removeClass("bg-white");
			$(".navbar-brand").css({
				"margin-top": "-40px",
			});
			$(".navbar-toggler-right").css({
				"top": "10px",
			});
		}
	});
});

jQuery(document).ready(function($) {

// site preloader -- also uncomment the div in the header and the css style for #preloader
$(window).on('load', function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});

});


$(document).ready(function(){
	$('#teamCarousel').owlCarousel({
		items: 4,
		margin: 25,
		nav:false,
		dotsEach: true,
		autoplay: true,
		autoplayHoverPause: true,
		responsiveClass:true,
    responsive:{
        0:{
            items:2,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
            loop:false
        }
    }
	});
});

$(document).ready(function(){
	$('#sevenCarousel').owlCarousel({
		items: 3,
		margin: 10,
		nav:false,
		dotsEach: true,
		autoplay: true,
		autoplayHoverPause: true,
		responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:4,
            loop:false
        }
    }
	});
});

// jQuery(window).on('load', function() {
//     setTimeout(function () {
// 				$('#preloader').fadeOut('slow',function(){$(this).remove();});
//     }, 100);
//
// });

$(function() {

    // Call Gridder
    $('.gridder').gridderExpander({
        scroll: true,
        scrollOffset: 300,
        scrollTo: "panel",                  // panel or listitem
        animationSpeed: 400,
        animationEasing: "easeInOutExpo",
        showNav: true,                      // Show Navigation
        nextText: "<i class='fa fa-arrow-right fa-lg'></i>",                   // Next button text
        prevText: "<i class='fa fa-arrow-left fa-lg'></i>",               // Previous button text
        closeText: "<i class='fa fa-close fa-lg'></i>",                 // Close button text
        onStart: function(){
            //Gridder Inititialized
        },
        onContent: function(){
            //Gridder Content Loaded
        },
        onClosed: function(){
            //Gridder Closed
        }
    });

});
