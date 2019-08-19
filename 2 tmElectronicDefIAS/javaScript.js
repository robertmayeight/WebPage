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
scaleX:zoomSlider.value=1.8;

var scaleUp = 1.8;
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

TweenMax.to(schematic, .01, {scaleX:1.8, scaleY:1.8, x:100, y:-150, transformOrigin: "50% 50%", ease: Power0.easeNone});

// -----------------------------------------------------------------------------------------------------------------------------

function clearHighlights(){
	TweenMax.to([defrostControlWiper,tcBlade,doorSwitchBlade,waterValveSwitch,defrostThermostat1Blade,defrostThermostat2Blade],1,{rotation:0});
	TweenMax.to([defrostControlWipercopy,tcBladecopy,doorSwitchBladecopy,waterValveSwitchcopy,defrostThermostat1Bladecopy,defrostThermostat2Bladecopy],1,{rotation:0});
	ry1Rotated = false;
	ry2Rotated = false;
	ry3Rotated = false;
	ry4Rotated = false;
	ry5Rotated = false;
	ry7Rotated = false;
	ry8Rotated = false;
	ry9Rotated = false;
	ry10Rotated = false;
	ry11Rotated = false;
	ry13Rotated = false;
	ry15Rotated = false;
	ry16Rotated = false;
	ry19Rotated = false;
	MISRotated = false;
	
	for(i=0; i<noPathsLength; i++){
		noPaths[i].style.stroke = "black"
		}
}

function showL1(){
	TweenMax.to([path6367,path106,path1154,defrostControlWiper,path6970,tcBlade,path7006,path130,doorSwitchBlade,path1443,path1544,path1445], .1, {stroke:"red"})
}

function showNeutral(){
	TweenMax.to([path6357,path7069,path7052,path7054,path7056,path7058,path1463,path7113,path7115,path7020,,path7073,path7075,path7016,path7077,path328,defrostThermostat2Blade,path1120,defrostThermostat1Blade,path1118,path7079,path6361,path1470,path7081,path7095,path1497,path1507,path7071], .1, {stroke:"blue"})
}

function showOvenLamp(){
	clearHighlights();
	TweenMax.to([path4394,path14236,path14230,path14232,path10442,path5600,path10444,path10426,path14249,path14247], .1, {stroke:"red"});
	TweenMax.to([path17166], .1, {stroke:"orange"});
	TweenMax.to([path17156,path11626,path10586,ry2Blade,path10528,path14654,path14656,path10736,path10734,path10008,path3872], .1, {stroke:"blue"});
	TweenMax.to(ry2Blade,1,{rotation:26});
	TweenMax.to(ry2Bladecopy,1,{rotation:26});
	ry2Rotated=true;

	TweenMax.to(PISBlade,1,{rotation:28});
	TweenMax.to(PISBladecopy,1,{rotation:28});
	PISRotated=true;

	TweenMax.to(doorSwitchBlade,1,{rotation:28, transformOrigin: "100% 0%", ease: Power0.easeNone});
	TweenMax.to(doorSwitchBladecopy,1,{rotation:28, transformOrigin: "100% 0%", ease: Power0.easeNone});
	doorSwitchRotated=true;

	TweenMax.to(MISBlade,1,{rotation:28});
	TweenMax.to(MISBladecopy,1,{rotation:28});
	MISRotated=true;
}
















































var timerSwitchRotated=false;
timerSwitch.setAttribute('onclick','changeTimerSwitch();');
timerSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');

function changeTimerSwitch(){
	if(timerSwitchRotated === false){
		TweenMax.to(defrostControlWiper,1,{rotation:-60})
		TweenMax.to(defrostControlWipercopy,1,{rotation:-60})
		timerSwitchRotated=true;
	}else{
		TweenMax.to(defrostControlWiper,1,{rotation:0})
		TweenMax.to(defrostControlWipercopy,1,{rotation:0})
		timerSwitchRotated=false;
	}
}

//Door Switch Rotation
var doorSwitchRotated=false;
doorSwitch.setAttribute('onclick','changeDoorSwitch();');
doorSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');

function changeDoorSwitch(){
	if(doorSwitchRotated === false){
		TweenMax.to(doorSwitchBlade,1,{rotation:-26})
		TweenMax.to(doorSwitchBladecopy,1,{rotation:-26})
		doorSwitchRotated=true;
	}else{
		TweenMax.to(doorSwitchBlade,1,{rotation:0})
		TweenMax.to(doorSwitchBladecopy,1,{rotation:0})
		doorSwitchRotated=false;
	}
}

//Defrost Thermostat 1 Switch Rotation
var defrostThermostat1Rotated=false;
defrostThermostat.setAttribute('onclick','changeDefrostThermostatSwitch();');
defrostThermostat.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeDefrostThermostatSwitch(){
	if(defrostThermostat1Rotated === false){
		TweenMax.to(defrostThermostat1Blade,1,{rotation:30});
		TweenMax.to(defrostThermostat1Bladecopy,1,{rotation:30});
		TweenMax.to(path324,1,{y:3});
		defrostThermostat1Rotated=true;
	}else{
		TweenMax.to(defrostThermostat1Blade,1,{rotation:0})
		TweenMax.to(defrostThermostat1Bladecopy,1,{rotation:0})
		TweenMax.to(path324,1,{y:0});
		defrostThermostat1Rotated=false;
	}
}

//Defrost Thermostat Switch Rotation
var ccSwitchRotated=false;
ccSwitch.setAttribute('onclick','changeccSwitch();');
ccSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeccSwitch(){
	if(ccSwitchRotated === false){
		TweenMax.to(tcBlade,1,{rotation:-28});
		TweenMax.to(tcBladecopy,1,{rotation:-28});
		ccSwitchRotated=true;
	}else{
		TweenMax.to(tcBlade,1,{rotation:0})
		TweenMax.to(tcBladecopy,1,{rotation:0})
		ccSwitchRotated=false;
	}
}

//Defrost Thermostat 2 Switch Rotation
var defrostThermostat2Rotated=false;
defrostThermostat2.setAttribute('onclick','changeDefrostThermostat2Switch();');
defrostThermostat2.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeDefrostThermostat2Switch(){
	if(defrostThermostat2Rotated === false){
		TweenMax.to(defrostThermostat2Blade,1,{rotation:30});
		TweenMax.to(defrostThermostat2Bladecopy,1,{rotation:30});
		TweenMax.to(path324,1,{y:3});
		defrostThermostat2Rotated=true;
	}else{
		TweenMax.to(defrostThermostat2Blade,1,{rotation:0})
		TweenMax.to(defrostThermostat2Bladecopy,1,{rotation:0})
		TweenMax.to(path324,1,{y:0});
		defrostThermostat2Rotated=false;
	}
}

//DIM Water Valve Switch Rotation
var imvSwitchRotated=false;
imvSwitch.setAttribute('onclick','changeimvSwitch();');
imvSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeimvSwitch(){
	if(imvSwitchRotated === false){
		TweenMax.to(waterValveSwitch,1,{rotation:-40});
		TweenMax.to(waterValveSwitchcopy,1,{rotation:-40});
		imvSwitchRotated=true;
	}else{
		TweenMax.to(waterValveSwitch,1,{rotation:0})
		TweenMax.to(waterValveSwitchcopy,1,{rotation:0})
		imvSwitchRotated=false;
	}
}

