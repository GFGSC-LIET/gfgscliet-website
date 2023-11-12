const page = document.querySelector('.page');
const preloader = document.querySelector('.preloader');

page.style.display = 'none';

window.addEventListener('load', function () {
	preloader.style.display = 'none';
	page.style.display = 'block';
});



// faq


const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

    const currentlyActiveAccordionItemHeader = document.querySelector(
      ".accordion-item-header.active"
    );
    if (
      currentlyActiveAccordionItemHeader &&
      currentlyActiveAccordionItemHeader !== accordionItemHeader
    ) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});




const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebar-overlay");

sidebarOverlay.addEventListener("click", () => {
	sidebar.classList.remove("sidebar-open");
	sidebarOverlay.classList.remove("sidebar-overlay-open");
})

const menubar = document.getElementById("menubar");

menubar.addEventListener("click", () => {
	if(sidebar.classList.contains("sidebar-open")) {
		sidebar.classList.remove("sidebar-open");
		sidebarOverlay.classList.remove("sidebar-overlay-open");
	} else {
		sidebar.classList.add("sidebar-open");
		sidebarOverlay.classList.add("sidebar-overlay-open");
	}
})



// "use strict";
// (function () {
// 	// Global variables
// 	var userAgent = navigator.userAgent.toLowerCase(),
// 		initialDate = new Date(),

// 		$document = $(document),
// 		$window = $(window),
// 		$html = $("html"),
// 		$body = $("body"),

// 		isDesktop = $html.hasClass("desktop"),
// 		isIE = userAgent.indexOf("msie") !== -1 ? parseInt(userAgent.split("msie")[1], 10) : userAgent.indexOf("trident") !== -1 ? 11 : userAgent.indexOf("edge") !== -1 ? 12 : false,
// 		isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
// 		windowReady = false,
// 		isNoviBuilder = false,
// 		loaderTimeoutId,

// 		plugins = {
// 			bootstrapModalDialog: $('.modal'),
// 			bootstrapTabs: $(".tabs-custom"),
// 			rdNavbar: $(".rd-navbar"),
// 			materialParallax: $(".parallax-container"),
// 			rdMailForm: $(".rd-mailform"),
// 			rdInputLabel: $(".form-label"),
// 			regula: $("[data-constraints]"),
// 			wow: $(".wow"),
// 			owl: $(".owl-carousel"),
// 			swiper: $(".swiper-slider"),
// 			isotope: $(".isotope"),
// 			radio: $("input[type='radio']"),
// 			checkbox: $("input[type='checkbox']"),
// 			customToggle: $("[data-custom-toggle]"),
// 			counter: $(".counter"),
// 			preloader: $(".preloader"),
// 			captcha: $('.recaptcha'),
// 			scroller: $(".scroll-wrap"),
// 			lightGallery: $('[data-lightgallery="group"]'),
// 			lightGalleryItem: $('[data-lightgallery="item"]'),
// 			lightDynamicGalleryItem: $('[data-lightgallery="dynamic"]'),
// 			copyrightYear: $(".copyright-year"),
// 			maps: $(".google-map-container"),
// 			particlesJs: $('#particles-js')
// 		};


// 	// Initialize scripts that require a finished document
// 	$(function () {
// 		isNoviBuilder = window.xMode;
// 		// RD Navbar
// 		if (plugins.rdNavbar.length) {
// 			var aliaces, i, j, len, value, values, responsiveNavbar;

// 			aliaces = ["-", "-sm-", "-md-", "-lg-", "-xl-", "-xxl-"];
// 			values = [0, 576, 768, 992, 1200, 1600];
// 			responsiveNavbar = {};

// 			for (i = j = 0, len = values.length; j < len; i = ++j) {
// 				value = values[i];
// 				if (!responsiveNavbar[values[i]]) {
// 					responsiveNavbar[values[i]] = {};
// 				}
// 				if (plugins.rdNavbar.attr('data' + aliaces[i] + 'layout')) {
// 					responsiveNavbar[values[i]].layout = plugins.rdNavbar.attr('data' + aliaces[i] + 'layout');
// 				}
// 				if (plugins.rdNavbar.attr('data' + aliaces[i] + 'device-layout')) {
// 					responsiveNavbar[values[i]]['deviceLayout'] = plugins.rdNavbar.attr('data' + aliaces[i] + 'device-layout');
// 				}
// 				if (plugins.rdNavbar.attr('data' + aliaces[i] + 'hover-on')) {
// 					responsiveNavbar[values[i]]['focusOnHover'] = plugins.rdNavbar.attr('data' + aliaces[i] + 'hover-on') === 'true';
// 				}
// 				if (plugins.rdNavbar.attr('data' + aliaces[i] + 'auto-height')) {
// 					responsiveNavbar[values[i]]['autoHeight'] = plugins.rdNavbar.attr('data' + aliaces[i] + 'auto-height') === 'true';
// 				}
// 				if (isNoviBuilder) {
// 					responsiveNavbar[values[i]]['stickUp'] = false;
// 				} else if (plugins.rdNavbar.attr('data' + aliaces[i] + 'stick-up')) {
// 					responsiveNavbar[values[i]]['stickUp'] = plugins.rdNavbar.attr('data' + aliaces[i] + 'stick-up') === 'true';
// 				}

// 				if (plugins.rdNavbar.attr('data' + aliaces[i] + 'stick-up-offset')) {
// 					responsiveNavbar[values[i]]['stickUpOffset'] = plugins.rdNavbar.attr('data' + aliaces[i] + 'stick-up-offset');
// 				}
// 			}
// 			plugins.rdNavbar.RDNavbar({
// 				anchorNav: !isNoviBuilder,
// 				stickUpClone: (plugins.rdNavbar.attr("data-stick-up-clone") && isNoviBuilder) ? plugins.rdNavbar.attr("data-stick-up-clone") === 'true' : false,
// 				responsive: responsiveNavbar,
// 				callbacks: {
// 					onStuck: function () {
// 						var navbarSearch = this.$element.find('.rd-search input');

// 						if (navbarSearch) {
// 							navbarSearch.val('').trigger('propertychange');
// 						}
// 					},
// 					onDropdownOver: function () {
// 						return !isNoviBuilder;
// 					},
// 					onUnstuck: function () {
// 						if (this.$clone === null)
// 							return;

// 						var navbarSearch = this.$clone.find('.rd-search input');

// 						if (navbarSearch) {
// 							navbarSearch.val('').trigger('propertychange');
// 							navbarSearch.trigger('blur');
// 						}

// 					}
// 				}
// 			});
// 			if (plugins.rdNavbar.attr("data-body-class")) {
// 				document.body.className += ' ' + plugins.rdNavbar.attr("data-body-class");
// 			}
// 		}
// 	});
// }());

