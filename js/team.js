const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebar-overlay");

sidebarOverlay.addEventListener("click", () => {
	sidebar.classList.remove("sidebar-open");
	sidebarOverlay.classList.remove("sidebar-overlay-open");
})

const menubar = document.getElementById("menubar");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");

menubar.addEventListener("click", () => {
	if(sidebar.classList.contains("sidebar-open")) {
		sidebar.classList.remove("sidebar-open");
		sidebarOverlay.classList.remove("sidebar-overlay-open");
		bar1.classList.remove("bar1-open");
		bar2.classList.remove("bar2-open");
		bar3.classList.remove("bar3-open");
	} else {
		sidebar.classList.add("sidebar-open");
		sidebarOverlay.classList.add("sidebar-overlay-open");
    bar1.classList.add("bar1-open");
		bar2.classList.add("bar2-open");
		bar3.classList.add("bar3-open");
	}
})





