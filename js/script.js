const checkBox = document.querySelector('.checkbox');
const loader = document.querySelector('.pre-loader');
const body = document.querySelector('.body');
const dr = document.querySelectorAll('.dr');

body.style.display = 'none';
window.addEventListener('load', function () {
	loader.style.display = 'none';
	body.style.display = 'block';


});

checkBox.addEventListener('change', function () { 
  for (var i = 0; i < dr.length; i++) {
    if (checkBox.checked == true){
      dr[i].classList.add("dark");
      } else {
       dr[i].classList.remove("dark");
    }

  }
});


// header


(function ($) {
    "use strict";
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
})(jQuery);


// swiper









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


