(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var carousel = function() {
		$('.featured-carousel').owlCarousel({
	    loop: true,
	    autoplay: true,
	    margin:30,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:true,
	    dots: true,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:2
	      },
	      1000:{
	        items:3
	      }
	    }
		});

	};
	carousel();

})(jQuery);







//preloader

const checkBox = document.querySelector('.checkbox');
const dr = document.querySelectorAll('.dr');
const drw = document.querySelectorAll('.drw');
const drp = document.querySelectorAll('.drp');
const page = document.querySelector('.page');
const preloader = document.querySelector('.preloader');

page.style.display = 'none';

window.addEventListener('load', function () {
	preloader.style.display = 'none';
	page.style.display = 'block';
});


//toggle
checkBox.addEventListener('change', function () { 
  for (var i = 0; i < dr.length; i++) {
    if (checkBox.checked == true){
		dr[i].classList.add("dark");
		drw[i].classList.add("darkw");
		drp[i].classList.add("darkp");
      } else {
		dr[i].classList.remove("dark");
		drw[i].classList.remove("darkw");
		drp[i].classList.remove("darkp");
    }

  }
});