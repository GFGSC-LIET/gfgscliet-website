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




