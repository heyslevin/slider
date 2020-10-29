var dom = function () {
	//Global Count Variable
	var _slidePosition = 1;
	var _movement = 0;

	//Selectors
	var slides = document.querySelectorAll(".sliderImage");
	var slideArray = [...slides];
	var rightArrow = document.querySelector(".arrowRight");
	var leftArrow = document.querySelector(".arrowLeft");

	var sliderSet = document.querySelector(".sliderSet");

	//Event
	//Arrow Action
	rightArrow.addEventListener("click", function () {
		moveRight(slideArray);
	});
	leftArrow.addEventListener("click", function () {
		moveLeft(slideArray);
	});

	var currentSlide = () => {
		return _slidePosition;
	};

	var moveRight = function (slideArray) {
		if (_slidePosition === slideArray.length) {
			alert("end of slide");
		} else {
			_movement += 1200;
			sliderSet.style.transform = `translateX(-${_movement}px)`;
			_slidePosition += 1;
		}
	};

	var moveLeft = function (slideArray) {
		if (_slidePosition === 1) {
			alert("end of slide");
		} else {
			//Fix math on move left
			_movement -= 1200;
			sliderSet.style.transform = `translateX(-${_movement}px)`;
			_slidePosition -= 1;
		}
	};

	//Bubble Zone

	//Selectors
	var bubbleArea = document.querySelector(".bubbles");
	var bubble = `<div class="bubble"></div>`;
	var bubbleArray = [];

	var bubbleSelect = function (bubble) {
		let bubbleIndex = bubbleArray.indexOf(bubble) + 1;
		let distance = bubbleIndex - _slidePosition;
		let moveDistance = distance * 1200;

		_slidePosition += distance;
		_movement += moveDistance;

		sliderSet.style.transform = `translateX(-${_movement}px)`;
	};

	var bubbleGenerator = function () {
		for (let i = 0; i < slideArray.length; i++) {
			bubbleArea.innerHTML += bubble;
		}

		let bubbles = document.querySelectorAll(".bubble");
		bubbleArray = [...bubbles];
		bubbleArray.forEach((bubble) => {
			bubble.addEventListener("click", function () {
				bubbleSelect(bubble);
			});
		});
	};

	return {
		currentSlide,
		rightArrow,
		bubbleGenerator,
	};
};

export default dom;
