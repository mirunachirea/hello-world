jQuery(document).ready(function($){

  $('#coin1').on('mouseover', function(){
    var flipResult = Math.random();
    $('#coin1').removeClass();
    setTimeout(function(){
      if(flipResult <= 0.5){
        $('#coin1').addClass('heads');
        console.log('it is head');
      }
      else{
        $('#coin1').addClass('tails');
        console.log('it is tails');
      }
    },100); 
  });

});
$('#coin1').click(function()
{
    setTimeout(function(){ window.location.href='btc.html'; }, 1000);       
});



jQuery(document).ready(function($){

  $('#coin2').on('mouseover', function(){
    var flipResult = Math.random();
    $('#coin2').removeClass();
    setTimeout(function(){
      if(flipResult <= 0.5){
        $('#coin2').addClass('heads');
        console.log('it is head');
      }
      else{
        $('#coin2').addClass('tails');
        console.log('it is tails');
      }
    }, 100);
  });
});
$('#coin2').click(function()
{
    setTimeout(function(){ window.location.href='eth.html'; }, 1000);       
});
jQuery(document).ready(function($){

  $('#coin3').on('mouseover', function(){
    var flipResult = Math.random();
    $('#coin3').removeClass();
    setTimeout(function(){
      if(flipResult <= 0.5){
        $('#coin3').addClass('heads');
        console.log('it is head');
      }
      else{
        $('#coin3').addClass('tails');
        console.log('it is tails');
      }
    }, 100);
  });
});
$('#coin3').click(function()
{
    setTimeout(function(){ window.location.href='ltc.html'; }, 1000);       
});
jQuery(document).ready(function($){

  $('#coin4').on('mouseover', function(){
    var flipResult = Math.random();
    $('#coin4').removeClass();
    setTimeout(function(){
      if(flipResult <= 0.5){
        $('#coin4').addClass('heads');
        console.log('it is head');
      }
      else{
        $('#coin4').addClass('tails');
        console.log('it is tails');
      }
    }, 100);
  });
});
$('#coin4').click(function()
{
    setTimeout(function(){ window.location.href='xmr.html'; }, 1000);       
});
jQuery(document).ready(function($){

  $('#coin5').on('mouseover', function(){
    var flipResult = Math.random();
    $('#coin5').removeClass();
    setTimeout(function(){
      if(flipResult <= 0.5){
        $('#coin5').addClass('heads');
        console.log('it is head');
      }
      else{
        $('#coin5').addClass('tails');
        console.log('it is tails');
      }
    }, 100);
  });
});
$('#coin5').click(function()
{
    setTimeout(function(){ window.location.href='xrp.html'; }, 1000);       
});
jQuery(document).ready(function($){

  $('#coin6').on('mouseover', function(){
    var flipResult = Math.random();
    $('#coin6').removeClass();
    setTimeout(function(){
      if(flipResult <= 0.5){
        $('#coin6').addClass('heads');
        console.log('it is head');
      }
      else{
        $('#coin6').addClass('tails');
        console.log('it is tails');
      }
    }, 100);
  });
});
$('#coin6').click(function()
{
    setTimeout(function(){ window.location.href='zec.html'; }, 1000);       
});




(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$banner = $('#banner');

		var $height = $('#header').height();

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});
		

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Banner

			if ($banner.length > 0) {

				// IE: Height fix.
					if (skel.vars.browser == 'ie'
					&&	skel.vars.IEVersion > 9) {

						skel.on('-small !small', function() {
							$banner.css('height', '100vh');
						});

						skel.on('+small', function() {
							$banner.css('height', '');
						});

					}

				// More button.
					$banner.find('.more')
						.addClass('scrolly');

			}


		// Get BG Image

			if ( $( ".bg-img" ).length ) {

				$( ".bg-img" ).each(function() {

					var post 	= $(this),
						bg 		= post.data('bg');

					post.css( 'background-image', 'url(images/' + bg + ')' );

				});


			}

		// Posts

			$( ".post" ).each( function() {
				var p = $(this),
					i = p.find('.inner'),
					m = p.find('.more');

				m.addClass('scrolly');

				p.scrollex({
					top: '40vh',
					bottom: '40vh',
					terminate: 	function() { m.removeClass('current'); i.removeClass('current'); },
					enter: 		function() { m.addClass('current'); i.addClass('current'); },
					leave: 		function() { m.removeClass('current'); i.removeClass('current'); }
				});

			});

		// Scrolly.
			if ( $( ".scrolly" ).length ) {

				$('.scrolly').scrolly();
			}

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right'
				});

	});

})(jQuery);