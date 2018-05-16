alert("connected");


var button = document.querySelector("button");
var isOrange = false;


 // button.addEventListener("click", function() {
 // 	if(isOrange) {
 // 		document.body.style.background = "white";
 // 	} else {
 // 		document.body.style.background = "orange";
 // 	}
 // 	isOrange = !isOrange;
	
 // });


 button.addEventListener("click", function() {
 	document.body.classList.toggle("orange")
 	
 });