xhr = new XMLHttpRequest();
xhr.open("GET","schematic.svg",false);
xhr.overrideMimeType("image/svg+xml");
xhr.send("");
var schematic = document.getElementById("showWindow").appendChild(xhr.responseXML.documentElement);
schematic.classList.add("center");
zoomSlider.value=0;

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

var schematicDrag = Draggable.create(schematic, {zIndexBoost:false});
schematic.addEventListener("DOMMouseScroll", function(e){zoomSchematic(e)}, false);

var scaleUp = 1;
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

TweenMax.to(schematic, .01, {scaleX:2, scaleY:2, x:100, y:-200, transformOrigin: "50% 50%", ease: Power0.easeNone});

// -----------------------------------------------------------------------------------------------------------------------------

function clearHighlights(){
	TweenMax.to([defrostControlWiper,path200,path334,tcBlade,IMSwitch],1,{rotation:0});
	TweenMax.to([defrostControlWipercopy,path200copy,path334copy,tcBladecopy,IMSwitchcopy],1,{rotation:0});
	ccSwitchRotated=false;
	timerSwitchRotated=false;
	doorSwitchRotated=false;
	defrostThermostatRotated=false;
	waterValveSwitchRotated=false;

	for(i=0; i<noPathsLength; i++){
		noPaths[i].style.stroke = "black"
		}
}


function showL1(){
	TweenMax.to([path2783,path2775,path2691,tcBlade,"#path178-2",path1077,defrostControlWiper,"#path162-5","#path1583-6",path1097,path1100,path1366,path2801,path2792,path2803,path116,path142,path2479,path182,path4025,path200,path9983,path2477], .1, {stroke:"red"})
}

function showNeutral(){
	TweenMax.to([path1116,path1099,path1101,path1370,path1103,path294,path1587,path6011,path348,path334,path2773,path302,path304,path1414,path168,path1416,path1418,"#path40-7",path6617,path3913,path6641,"#heater-0",path2750,path306,path308,path1117,path1177,path1179,path1084,path3961,path3965,path3959,path3963,pathfzLight,path40], .1, {stroke:"blue"})
}

function showCompressor(){
	clearHighlights();
	TweenMax.to([path2783,path2775,path2691,tcBlade,"#path178-2",path1077,defrostControlWiper,"#path162-5",path1097,path1100,path2801], .1, {stroke:"red"});
	TweenMax.to([path1116,path1099,path1117], .1, {stroke:"blue"});
}

function showDefrostTimerMotor(){
	clearHighlights();
	TweenMax.to([path2783,path2775,path2691,tcBlade,"#path178-2"], .1, {stroke:"red"});
	TweenMax.to([path1116,path1099,path1101,path1103,path294,path6011,path1414,path168], .1, {stroke:"blue"});
	TweenMax.to([path296], .1, {stroke:"orange"});
}

function showConFanMotor(){
	clearHighlights();
	TweenMax.to([path2783,path2775,path2691,tcBlade,"#path178-2",path1077,"#path162-5",path1097,path1100,path1366,defrostControlWiper], .1, {stroke:"red"});
	TweenMax.to([path1116,path1099,path1101,path1370], .1, {stroke:"blue"});
	TweenMax.to(["#path1370-4"], .1, {stroke:"orange"});
}

function showEvapFanMotor(){
	clearHighlights();
	TweenMax.to([path2783,path2775,path2691,tcBlade,"#path178-2",path1077,defrostControlWiper,"#path162-5","#path1583-6"], .1, {stroke:"red"});
	TweenMax.to([path1116,path1099,path1101,path1103,path294,path1587], .1, {stroke:"blue"});
	TweenMax.to([evapFanMotor], .1, {stroke:"orange"});
}

function showDefHeater(){
	clearHighlights();
	TweenMax.to([path2783,path2775,path2691,tcBlade,"#path178-2",path1077,defrostControlWiper,path2750,path306,path308], .1, {stroke:"red"});
	TweenMax.to([path1116,path1099,path1101,path1103,path294,path6011,path348,path334,path2773,path302,path304], .1, {stroke:"blue"});
	TweenMax.to(["#heater-0"], .1, {stroke:"orange"});
	TweenMax.to(defrostControlWiper,1,{rotation:-33});
	TweenMax.to(defrostControlWipercopy,1,{rotation:-33});
	timerSwitchRotated=true;
}

function showDoorLamp(){
	clearHighlights();
	TweenMax.to([path2783,path2775,path182,path4025,path4025,path200,path40], .1, {stroke:"red"});
	TweenMax.to([path1116,path1099,path1101,path1103,path294,path6011,path1414,path1416,"#path40-7"], .1, {stroke:"blue"});
	TweenMax.to([pathfzLight], .1, {stroke:"orange"});
	TweenMax.to(path200,1,{rotation:-26});
	TweenMax.to(path200copy,1,{rotation:-26});
	doorSwitchRotated=true;
}

function showWaterValve(){
	clearHighlights();
	TweenMax.to([path2783,path2775,path182,path9983,path6641,path3064,path3066,IMSwitch], .1, {stroke:"red"});
	TweenMax.to([path1116,path6617], .1, {stroke:"blue"});
	TweenMax.to([path3913], .1, {stroke:"orange"});
	TweenMax.to(IMSwitch,1,{rotation:-28});
	TweenMax.to(IMSwitchcopy,1,{rotation:-28});
	waterValveSwitchRotated=true;
}


function showIMPower(){
	clearHighlights();
	TweenMax.to([path2783,path2775,path182,path9983], .1, {stroke:"red"});
	TweenMax.to([path1116,path1099,path1101,path1103,path294,path6011,path1414,path1416,path1418], .1, {stroke:"blue"});
}


















































var ccSwitchRotated=false;
ccSwitch.setAttribute('onclick','changeccSwitch();');
ccSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeccSwitch(){
	if(ccSwitchRotated === false){
		TweenMax.to(tcBlade,1,{rotation:-30});
		TweenMax.to(tcBladecopy,1,{rotation:-30});
		TweenMax.to(g3942,1,{y:"-=6"});
		ccSwitchRotated=true;
	}else{
		TweenMax.to(tcBlade,1,{rotation:0});
		TweenMax.to(tcBladecopy,1,{rotation:0});
		TweenMax.to(g3942,1,{y:"+=7"});
		ccSwitchRotated=false;
	}
}

var timerSwitchRotated=false;
timerSwitch.setAttribute('onclick','changeTimerSwitch();');
timerSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');

function changeTimerSwitch(){
	if(timerSwitchRotated === false){
		TweenMax.to(defrostControlWiper,1,{rotation:-33});
		TweenMax.to(defrostControlWipercopy,1,{rotation:-33});
		timerSwitchRotated=true;
	}else{
		TweenMax.to(defrostControlWiper,1,{rotation:0});
		TweenMax.to(defrostControlWipercopy,1,{rotation:0});
		timerSwitchRotated=false;
	}
}

var doorSwitchRotated=false;
doorSwitch.setAttribute('onclick','changeDoorSwitch();');
doorSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');

function changeDoorSwitch(){
	if(doorSwitchRotated === false){
		TweenMax.to(path200,1,{rotation:-26});
		TweenMax.to(path200copy,1,{rotation:-26});
		doorSwitchRotated=true;
	}else{
		TweenMax.to(path200,1,{rotation:0});
		TweenMax.to(path200copy,1,{rotation:0});
		doorSwitchRotated=false;
	}
}

var defrostThermostatRotated=false;
defrostThermostat.setAttribute('onclick','changeDefrostThermostatSwitch();');
defrostThermostat.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeDefrostThermostatSwitch(){
	if(defrostThermostatRotated === false){
		TweenMax.to(path334,1,{rotation:30});
		TweenMax.to(path334copy,1,{rotation:30});
		TweenMax.to(path324,1,{y:3});
		defrostThermostatRotated=true;
	}else{
		TweenMax.to(path334,1,{rotation:0});
		TweenMax.to(path334copy,1,{rotation:0});
		TweenMax.to(path324,1,{y:0});
		defrostThermostatRotated=false;
	}
}

var waterValveSwitchRotated=false;
waterValveSwitch.setAttribute('onclick','changeIMSwitch();');
waterValveSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeIMSwitch(){
	if(waterValveSwitchRotated === false){
		TweenMax.to(IMSwitch,1,{rotation:-28});
		TweenMax.to(IMSwitchcopy,1,{rotation:-28});
		waterValveSwitchRotated=true;
	}else{
		TweenMax.to(IMSwitch,1,{rotation:0});
		TweenMax.to(IMSwitchcopy,1,{rotation:0});
		waterValveSwitchRotated=false;
	}
}

