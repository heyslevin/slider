import RandomColor from "./randomColor.js";
import Controller from "./controller.js";
import Dom from "./dom.js";

//Selectors
var slides = document.querySelectorAll(".sliderImage");
var slideArray = [...slides];
var rightArrow = document.querySelector(".arrowRight");

//Module Start

const dom = Dom();

function works() {
	alert("works");
}

//Arrow Action
rightArrow.addEventListener("click", function () {
	dom.rightArrow(slideArray);
});
