document.addEventListener("DOMContentLoaded", function () {
	const header = document.querySelector(".customHeader");

	function checkScroll() {
		if (window.scrollY > 30) {
			header.classList.add("customHeaderScroll");
		} else {
			header.classList.remove("customHeaderScroll");
		}
	}
	checkScroll();
	window.addEventListener("scroll", checkScroll);

	wow = new WOW({
		animateClass: "animated",
		offset: 100,
		callback: function (box) {
			console.log("WOW: animating <" + box.tagName.toLowerCase() + ">");
		},
	});
	wow.init();
	document.getElementById("moar").onclick = function () {
		var section = document.createElement("section");
		section.className = "section--purple wow fadeInDown";
		this.parentNode.insertBefore(section, this);
	};
});
