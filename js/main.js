/* scriting for bios */

var coll = document.getElementsByClassName("bio-collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("act");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

/* google maps js */

function initMap() {
	const map = new google.maps.Map(document.getElementById("map"), {
	  zoom: 10,
	  center: { lat: 30.42834, lng: -97.83689 },
	});

	setMarkers(map);
  }

  // Data for the markers consisting of a name, a LatLng and a zIndex for the
  // order in which these markers should display on top of each other.
  const locs = [
	["North Austin", 30.46348, -97.79302, 2],
	["Lake Travis", 30.32288, -97.95868, 1],
  ];

  function setMarkers(map) {
	// Adds markers to the map.
	// Marker sizes are expressed as a Size of X,Y where the origin of the image
	// (0,0) is located in the top left of the image.
	// Origins, anchor positions and coordinates of the marker increase in the X
	// direction to the right and in the Y direction down.
	const image = {
	  url: "https://centraltexasanxiety.azurewebsites.net/images/pin.png",
	  // This marker is 20 pixels wide by 32 pixels high.
	  size: new google.maps.Size(32, 32),
	  // The origin for this image is (0, 0).
	  origin: new google.maps.Point(0, 0),
	  // The anchor for this image is the base of the flagpole at (0, 32).
	  anchor: new google.maps.Point(0, 32),
	};
	// Shapes define the clickable region of the icon. The type defines an HTML
	// <area> element 'poly' which traces out a polygon as a series of X,Y points.
	// The final coordinate closes the poly by connecting to the first coordinate.
	const shape = {
	  coords: [1, 1, 1, 20, 18, 20, 18, 1],
	  type: "poly",
	};

	for (let i = 0; i < locs.length; i++) {
	  const loc = locs[i];

	  new google.maps.Marker({
		position: { lat: loc[1], lng: loc[2] },
		map,
		icon: image,
		shape: shape,
		title: loc[0],
		zIndex: loc[3],
	  });
	}
  }

  window.initMap = initMap;


(function($) {
	'use strict';
	
	jQuery(document).ready(function(){
		
		/*PRELOADER JS*/
			$(window).load(function() { 
				$('.loader_wrap').fadeOut();
				$('.preloader').delay(350).fadeOut('slow'); 
			}); 
		/*END PRELOADER JS*/

		/* START MENU JS */
			$('a').on('click', function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});		
			
			$(window).on('scroll',function(){
		    if($(this).scrollTop() > 100){
		    	$('.main_header').addClass('sticky_menu');
			}
			else{
			   $('.main_header').removeClass('sticky_menu');
			}
			});
			$(document).on('click', '.navbar-collapse.in', function (e) {
				if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
					$(this).collapse('hide');
				}
			});
		/* END MENU JS */
		
		/*START ISOTOP JS*/
			var $grid = $('.grid_item_area').isotope({
			  // options
			});
			// filter items on button click
			$('.our_port_menu').on( 'click', 'li', function() {
			  var filterValue = $(this).attr('data-filter');
			  $grid.isotope({ filter: filterValue });
			});
			// filter items on button click
			$('.our_port_menu').on( 'click', 'li', function() {
				$(this).addClass('active').siblings().removeClass('active')
			});
		/*END ISOTOP JS*/
		
		
		// START LIGHTBOX
			lightbox.option({
			  'resizeDuration': 200,
			  'wrapAround': true
			})
		
		/*START COUNDOWN JS*/
			$('.counter-content').on('inview', function(event, visible, visiblePartX, visiblePartY) {
				if (visible) {
					$(this).find('.counter').each(function () {
						var $this = $(this);
						$({ Counter: 0 }).animate({ Counter: $this.text() }, {
							duration: 5000,
							easing: 'swing',
							step: function () {
								$this.text(Math.ceil(this.Counter));
							}
						});
					});
					$(this).unbind('inview');
				}
			});
		/*END COUNDOWN JS */
		
		// Owl Carousel for Testimonials	
			$('#testimonial-slider').owlCarousel({
				loop:true,
				margin:10,
				nav:false,
				dots: true,
				autoPlay:true,
				item: 1,
				responsive:{
					0:{
						items:1
					},
					6000:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});	
					
	}); 	
	
		/*  Stellar for background scrolling  */
			(function () {

				if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				 
				} else {
					$(window).stellar({
						horizontalScrolling: false,
						responsive: true
					});
				}

			}());
		/* End Stellar for background scrolling  */		
			
		/*START WOW ANIMATION JS*/
			new WOW().init();	
		/*END WOW ANIMATION JS*/

		     		
})(jQuery);		