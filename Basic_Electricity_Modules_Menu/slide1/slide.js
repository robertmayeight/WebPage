// slide = new XMLHttpRequest();
// slide.open("GET","slide.svg",false);
// slide.overrideMimeType("image/svg+xml");
// slide.send("");
// var slide= document.getElementById("main").appendChild(slide.responseXML.documentElement);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var svgWindow = document.getElementById("main");
var svg = d3.select(svgContent);
function redraw(){
	var width = svgWindow.clientWidth;
	var height = svgWindow.clientHeight;
	svg
	.attr("width", width)
	 .attr("height", height);
}
redraw();
window.addEventListener("resize", redraw);



