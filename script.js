let css = document.querySelector("#h3");
let colors = document.querySelector("#h3i");
let left_color = document.querySelector(".left_color");
let right_color = document.querySelector(".right_color");
let body = document.getElementById("body");
let topTitle = document.querySelector("span");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ left_color.value 
	+ ", " 
	+ right_color.value 
	+ ")";

	css.textContent = body.style.background + ";";
	colors.textContent = "Right color: " + right_color.value + "   Left color: " + left_color.value;
	//topTitle.style.color = "linear-gradient(to right, rgb(0, 174, 255) , rgb(235, 83, 184));"
}

left_color.addEventListener("input", setGradient);

right_color.addEventListener("input", setGradient);