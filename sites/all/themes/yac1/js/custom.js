(function($) {
  Drupal.behaviors.doSomething = {
    attach: function(context, settings) {
		// $('div.something', context).once('do-something').doSomething({
		//   param1: settings.somethingl.param,
		//   param2: 'something else'
		// });
		//alert("»»");
		var jPM = $.jPanelMenu({
		    menu: 'ul#nice-menu-1',
		    trigger: '.MobileMenuTrigger'
		});


		// call jRespond and add breakpoints
		var jRes = jRespond([
			{
			    label: 'handheld',
			    enter: 0,
			    exit: 767
			},{
			    label: 'tablet',
			    enter: 768,
			    exit: 979
			},{
			    label: 'laptop',
			    enter: 980,
			    exit: 1199
			},{
			    label: 'desktop',
			    enter: 1200,
			    exit: 10000
			}
		]);

		jRes.addFunc({
		    breakpoint: 'handheld',
		    enter: function() {
		        jPM.on();
		        // get the current breakpoint
				console.log(jRes.getBreakpoint());
		    },
		    exit: function() {
		        jPM.off();
		    }
		});

		
    }
  }
})(jQuery);
