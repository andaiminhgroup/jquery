	$.fn.jQuerySimpleCounter = function( options ) {
	    var settings = $.extend({
	        start:  0,
	        end:    100,
	        easing: &#39;swing&#39;,
	        duration: 400,
	        complete: &#39;&#39;
	    }, options );

	    var thisElement = $(this);

	    $({count: settings.start}).animate({count: settings.end}, {
			duration: settings.duration,
			easing: settings.easing,
			step: function() {
				var mathCount = Math.ceil(this.count);
				thisElement.text(mathCount);
			},
			complete: settings.complete
		});
	};


$(&#39;#number1&#39;).jQuerySimpleCounter({end: 12,duration: 3000});
$(&#39;#number2&#39;).jQuerySimpleCounter({end: 55,duration: 3000});
$(&#39;#number3&#39;).jQuerySimpleCounter({end: 359,duration: 2000});
$(&#39;#number4&#39;).jQuerySimpleCounter({end: 246,duration: 2500});



  	/* AUTHOR LINK */
     $(&#39;.about-me-img&#39;).hover(function(){
            $(&#39;.authorWindowWrapper&#39;).stop().fadeIn(&#39;fast&#39;).find(&#39;p&#39;).addClass(&#39;trans&#39;);
        }, function(){
            $(&#39;.authorWindowWrapper&#39;).stop().fadeOut(&#39;fast&#39;).find(&#39;p&#39;).removeClass(&#39;trans&#39;);
        })
