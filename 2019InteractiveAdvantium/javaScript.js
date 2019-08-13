xhr = new XMLHttpRequest();
xhr.open("GET","schematic.svg",false);
xhr.overrideMimeType("image/svg+xml");
xhr.send("");
var schematic = document.getElementById("showWindow").appendChild(xhr.responseXML.documentElement);
schematic.classList.add("center");
zoomSlider.value=2;

var noPaths = document.getElementById("diagram1").getElementsByTagName("path");
var noPathsLength = noPaths.length;
for(i=0; i<noPathsLength; i++){

	var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	path.setAttribute('stroke','blue');
	path.setAttribute('fill','none');
	path.setAttribute('opacity',0);
	path.setAttribute('id',noPaths[i].id + 'copy');
	path.setAttribute('onclick','wireClicked(this);');
	path.setAttribute('onmouseover','this.style.cursor = "default"; overWire(this);');
	path.setAttribute('onmouseout','outWire(this);');
	path.style['stroke-width']=1;
	path.style['stroke-linecap']="round";
	noPaths[i].style['stroke-linecap']="round";
	path.setAttribute("d", noPaths[i].getAttribute("d"));
	diagram1.appendChild(path);
	path.style["stroke-width"]= 3;
	path.setAttribute('touchmove','wireClicked(this);');	
}

function clearHighlights(){
	for(i=0; i<noPathsLength; i++){
		noPaths[i].style.stroke = "black"
	}
}

function showL1(){
	TweenMax.to([path4394,path14236,path14230,path14232,path10442,path5600,path10444,path10426,path14249,path10730,mgtTCO,path6738,path10744,path10740], .1, {stroke:"red"})
}

function showOvenLamp(){
	TweenMax.to([path4394,path14236,path14230,path14232,path10442,path5600,path10444,path10426,path14249,path14247], .1, {stroke:"red"});
	TweenMax.to([path17166], .1, {stroke:"orange"});
	TweenMax.to([path17156,path11626,path10586,ry2Blade,path10528,path14654,path14656,path10736,path10734,path10008,path3872], .1, {stroke:"blue"});
	TweenMax.to(ry2Blade,1,{rotation:26});
		TweenMax.to(ry2Bladecopy,1,{rotation:26});
		// TweenMax.to(g3942,1,{y:"-=6"});
		ry2Rotated=true;
}


var schematicDrag = Draggable.create(schematic, {zIndexBoost:false});
schematic.addEventListener("DOMMouseScroll", function(e){zoomSchematic(e)}, false);

var scaleUp = 2;
function zoomSchematic(e){
	e.preventDefault();
	switch(e.detail>0) {
		case true:
		if(scaleUp > .5 ){
			scaleUp = scaleUp - .25;
			TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
		}
		break;
		case false:
		scaleUp = scaleUp + .25;
    	TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
        break;
    }
    zoomSlider.value=scaleUp;
}

zoomSlider.addEventListener("input", update);
function update(){
	TweenMax.set(schematic, {scaleX:zoomSlider.value, scaleY:zoomSlider.value, transformOrigin: "50% 50%", ease: Power0.easeNone});
}

function wireClicked(wire){
	nameSplit = wire.id.split("copy");
	wire2 = document.getElementById(nameSplit[0]);
	TweenMax.to(wire2,.1,{stroke:highlightColor});
}

function overWire(wire){
	nameSplit = wire.id.split("copy");
	wire.setAttribute("opacity", ".5"); 
}

function outWire(wire){
nameSplit = wire.id.split("copy");
	wire.setAttribute("opacity", "0");
}

var highlightColor=black;
function changeColors(myColor){
	redBox.style.border = "none";
	blueBox.style.border = "none";
	orangeBox.style.border = "none";
	yellowBox.style.border = "none";
	purpleBox.style.border = "none";
	greenBox.style.border = "none";
	greyBox.style.border = "none";
	blackBox.style.border = "none";
	brownBox.style.border = "none";
	highlightColor=myColor;
	switch(myColor) {
    case "red":
    redBox.style.border = "medium solid #000000";
    break;
    case "blue":
    blueBox.style.border = "medium solid #000000";
    break;
    case "orange":
    orangeBox.style.border = "medium solid #000000";
    break;
    case "yellow":
    yellowBox.style.border = "medium solid #000000";
    break;
    case "purple":
    purpleBox.style.border = "medium solid #000000";
    break;
    case "green":
    greenBox.style.border = "medium solid #000000";
    break;
    case "grey":
    greyBox.style.border = "medium solid #000000";
    highlightColor="#f2f4f4";
    break;
    case "brown":
    brownBox.style.border = "medium solid #000000";
    highlightColor=brown;
    break;
    case "black":
    blackBox.style.border = "medium solid #000000";
    break;
	}
}

// Opening view for schematic
TweenMax.to(schematic,.01,{scaleX:2, scaleY:2, y:-125})

// -----------------------------------------------------------------------------------------------------------------------------
var ry1Rotated=false;
ry1.setAttribute('onclick','changery1();');
ry1.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changery1(){
	if(ry1Rotated === false){
		TweenMax.to(ry1Blade,1,{rotation:26});
		TweenMax.to(ry1Bladecopy,1,{rotation:26});
		// TweenMax.to(g3942,1,{y:"-=6"});
		ry1Rotated=true;
	}else{
		TweenMax.to(ry1Blade,1,{rotation:0});
		TweenMax.to(ry1Bladecopy,1,{rotation:0});
		// TweenMax.to(g3942,1,{y:"+=7"});
		ry1Rotated=false;
	}
}

var ry2Rotated=false;
ry2.setAttribute('onclick','changery2();');
ry2.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changery2(){
	if(ry2Rotated === false){
		TweenMax.to(ry2Blade,1,{rotation:26});
		TweenMax.to(ry2Bladecopy,1,{rotation:26});
		// TweenMax.to(g3942,1,{y:"-=6"});
		ry2Rotated=true;
	}else{
		TweenMax.to(ry2Blade,1,{rotation:0});
		TweenMax.to(ry2Bladecopy,1,{rotation:0});
		// TweenMax.to(g3942,1,{y:"+=7"});
		ry2Rotated=false;
	}
}

var ry3Rotated=false;
ry3.setAttribute('onclick','changery3();');
ry3.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changery3(){
	if(ry3Rotated === false){
		TweenMax.to(ry3Blade,1,{rotation:26});
		TweenMax.to(ry3Bladecopy,1,{rotation:26});
		// TweenMax.to(g3942,1,{y:"-=6"});
		ry3Rotated=true;
	}else{
		TweenMax.to(ry3Blade,1,{rotation:0});
		TweenMax.to(ry3Bladecopy,1,{rotation:0});
		// TweenMax.to(g3942,1,{y:"+=7"});
		ry3Rotated=false;
	}
}

var ry4Rotated=false;
ry4.setAttribute('onclick','changery4();');
ry4.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changery4(){
	if(ry4Rotated === false){
		TweenMax.to(ry4Blade,1,{rotation:28});
		TweenMax.to(ry4Bladecopy,1,{rotation:28});
		// TweenMax.to(g3942,1,{y:"-=6"});
		ry4Rotated=true;
	}else{
		TweenMax.to(ry4Blade,1,{rotation:0});
		TweenMax.to(ry4Bladecopy,1,{rotation:0});
		// TweenMax.to(g3942,1,{y:"+=7"});
		ry4Rotated=false;
	}
}

ry5.setAttribute('onclick','changery5();');
ry5.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changery5(){
	if(ry5Rotated === false){
		TweenMax.to(ry5Blade,1,{rotation:28});
		TweenMax.to(ry5Bladecopy,1,{rotation:28});
		// TweenMax.to(g3942,1,{y:"-=6"});
		ry5Rotated=true;
	}else{
		TweenMax.to(ry5Blade,1,{rotation:0});
		TweenMax.to(ry5Bladecopy,1,{rotation:0});
		// TweenMax.to(g3942,1,{y:"+=7"});
		ry5Rotated=false;
	}
}

var ry7Rotated=false;
ry7.setAttribute('onclick','changery7();');
ry7.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changery7(){
	if(ry7Rotated === false){
		TweenMax.to(ry7Blade,1,{rotation:28});
		TweenMax.to(ry7Bladecopy,1,{rotation:28});
		// TweenMax.to(g3942,1,{y:"-=6"});
		ry7Rotated=true;
	}else{
		TweenMax.to(ry7Blade,1,{rotation:0});
		TweenMax.to(ry7Bladecopy,1,{rotation:0});
		// TweenMax.to(g3942,1,{y:"+=7"});
		ry7Rotated=false;
	}
}

var ry8Rotated=false;
ry8.setAttribute('onclick','changery8();');
ry8.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changery8(){
	if(ry8Rotated === false){
		TweenMax.to(ry8Blade,1,{rotation:38});
		TweenMax.to(ry8Bladecopy,1,{rotation:38});
		// TweenMax.to(g3942,1,{y:"-=6"});
		ry8Rotated=true;
	}else{
		TweenMax.to(ry8Blade,1,{rotation:0});
		TweenMax.to(ry8Bladecopy,1,{rotation:0});
		// TweenMax.to(g3942,1,{y:"+=7"});
		ry8Rotated=false;
	}
}

var ry9Rotated=false;
ry9.setAttribute('onclick','changery9();');
ry9.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changery9(){
	if(ry9Rotated === false){
		TweenMax.to(ry9Blade,1,{rotation:38});
		TweenMax.to(ry9Bladecopy,1,{rotation:38});
		// TweenMax.to(g3942,1,{y:"-=6"});
		ry9Rotated=true;
	}else{
		TweenMax.to(ry9Blade,1,{rotation:0});
		TweenMax.to(ry9Bladecopy,1,{rotation:0});
		// TweenMax.to(g3942,1,{y:"+=7"});
		ry9Rotated=false;
	}
}

var ry10Rotated=false;
ry10.setAttribute('onclick','changery10();');
ry10.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changery10(){
	if(ry10Rotated === false){
		TweenMax.to(ry10Blade,1,{rotation:46});
		TweenMax.to(ry10Bladecopy,1,{rotation:46});
		// TweenMax.to(g3942,1,{y:"-=6"});
		ry10Rotated=true;
	}else{
		TweenMax.to(ry10Blade,1,{rotation:0});
		TweenMax.to(ry10Bladecopy,1,{rotation:0});
		// TweenMax.to(g3942,1,{y:"+=7"});
		ry10Rotated=false;
	}
}

var ry11Rotated=false;
ry11.setAttribute('onclick','changery11();');
ry11.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changery11(){
	if(ry11Rotated === false){
		TweenMax.to(ry11Blade,1,{rotation:46});
		TweenMax.to(ry11Bladecopy,1,{rotation:46});
		// TweenMax.to(g3942,1,{y:"-=6"});
		ry11Rotated=true;
	}else{
		TweenMax.to(ry11Blade,1,{rotation:0});
		TweenMax.to(ry11Bladecopy,1,{rotation:0});
		// TweenMax.to(g3942,1,{y:"+=7"});
		ry11Rotated=false;
	}
}

var ry13Rotated=false;
ry13.setAttribute('onclick','changery13();');
ry13.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changery13(){
	if(ry13Rotated === false){
		TweenMax.to(ry13Blade,1,{rotation:46});
		TweenMax.to(ry13Bladecopy,1,{rotation:46});
		// TweenMax.to(g3942,1,{y:"-=6"});
		ry13Rotated=true;
	}else{
		TweenMax.to(ry13Blade,1,{rotation:0});
		TweenMax.to(ry13Bladecopy,1,{rotation:0});
		// TweenMax.to(g3942,1,{y:"+=7"});
		ry13Rotated=false;
	}
}

var ry15Rotated=false;
ry15.setAttribute('onclick','changery15();');
ry15.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changery15(){
	if(ry15Rotated === false){
		TweenMax.to(ry15Blade,1,{rotation:42});
		TweenMax.to(ry15Bladecopy,1,{rotation:42});
		// TweenMax.to(g3942,1,{y:"-=6"});
		ry15Rotated=true;
	}else{
		TweenMax.to(ry15Blade,1,{rotation:0});
		TweenMax.to(ry15Bladecopy,1,{rotation:0});
		// TweenMax.to(g3942,1,{y:"+=7"});
		ry15Rotated=false;
	}
}

var ry16Rotated=false;
ry16.setAttribute('onclick','changery16();');
ry16.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changery16(){
	if(ry16Rotated === false){
		TweenMax.to(ry16Blade,1,{rotation:42});
		TweenMax.to(ry16Bladecopy,1,{rotation:42});
		// TweenMax.to(g3942,1,{y:"-=6"});
		ry16Rotated=true;
	}else{
		TweenMax.to(ry16Blade,1,{rotation:0});
		TweenMax.to(ry16Bladecopy,1,{rotation:0});
		// TweenMax.to(g3942,1,{y:"+=7"});
		ry16Rotated=false;
	}
}

var PISRotated=false;
PIS.setAttribute('onclick','changePIS();');
PIS.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changePIS(){
	if(PISRotated === false){
		TweenMax.to(PISBlade,1,{rotation:28});
		TweenMax.to(PISBladecopy,1,{rotation:28});
		// TweenMax.to(g3942,1,{y:"-=6"});
		PISRotated=true;
	}else{
		TweenMax.to(PISBlade,1,{rotation:0});
		TweenMax.to(PISBladecopy,1,{rotation:0});
		// TweenMax.to(g3942,1,{y:"+=7"});
		PISRotated=false;
	}
}

var MISRotated=false;
MIS.setAttribute('onclick','changeMIS();');
MIS.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeMIS(){
	if(MISRotated === false){
		TweenMax.to(MISBlade,1,{rotation:28});
		TweenMax.to(MISBladecopy,1,{rotation:28});
		// TweenMax.to(g3942,1,{y:"-=6"});
		MISRotated=true;
	}else{
		TweenMax.to(MISBlade,1,{rotation:0});
		TweenMax.to(MISBladecopy,1,{rotation:0});
		// TweenMax.to(g3942,1,{y:"+=7"});
		MISRotated=false;
	}
}

var ry19Rotated=false;
ry19.setAttribute('onclick','changery19();');
ry19.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changery19(){
	if(ry19Rotated === false){
		TweenMax.to(ry19Blade,1,{rotation:42});
		TweenMax.to(ry19Bladecopy,1,{rotation:42});
		// TweenMax.to(g3942,1,{y:"-=6"});
		ry19Rotated=true;
	}else{
		TweenMax.to(ry19Blade,1,{rotation:0});
		TweenMax.to(ry19Bladecopy,1,{rotation:0});
		// TweenMax.to(g3942,1,{y:"+=7"});
		ry19Rotated=false;
	}
}



// var timerSwitchRotated=false;
// timerSwitch.setAttribute('onclick','changeTimerSwitch();');
// timerSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');

// function changeTimerSwitch(){
// 	if(timerSwitchRotated === false){
// 		TweenMax.to(defrostControlWiper,1,{rotation:-33});
// 		TweenMax.to(defrostControlWipercopy,1,{rotation:-33});
// 		timerSwitchRotated=true;
// 	}else{
// 		TweenMax.to(defrostControlWiper,1,{rotation:0});
// 		TweenMax.to(defrostControlWipercopy,1,{rotation:0});
// 		timerSwitchRotated=false;
// 	}
// }

// var doorSwitchRotated=false;
// doorSwitch.setAttribute('onclick','changeDoorSwitch();');
// doorSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');

// function changeDoorSwitch(){
// 	if(doorSwitchRotated === false){
// 		TweenMax.to(path200,1,{rotation:-26});
// 		TweenMax.to(path200copy,1,{rotation:-26});
// 		doorSwitchRotated=true;
// 	}else{
// 		TweenMax.to(path200,1,{rotation:0});
// 		TweenMax.to(path200copy,1,{rotation:0});
// 		doorSwitchRotated=false;
// 	}
// }

// var defrostThermostatRotated=false;
// defrostThermostat.setAttribute('onclick','changeDefrostThermostatSwitch();');
// defrostThermostat.setAttribute('onmouseover','this.style.cursor = "pointer";');
// function changeDefrostThermostatSwitch(){
// 	if(defrostThermostatRotated === false){
// 		TweenMax.to(path334,1,{rotation:30});
// 		TweenMax.to(path334copy,1,{rotation:30});
// 		TweenMax.to(path324,1,{y:3});
// 		defrostThermostatRotated=true;
// 	}else{
// 		TweenMax.to(path334,1,{rotation:0});
// 		TweenMax.to(path334copy,1,{rotation:0});
// 		TweenMax.to(path324,1,{y:0});
// 		defrostThermostatRotated=false;
// 	}
// }

