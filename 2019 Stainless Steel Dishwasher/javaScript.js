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
	path.setAttribute('ontouch','touchHappened(this);');
	// path.setAttribute('ontouchend','outWire(this);');	
}

function touchHappened(){
	console. log("touch happened")
}

function toggleAnswers(){
	answers.className = "hidden"
}

function clearHighlights(){
	TweenMax.to([lineSwitchBlade,lineSwitchBladecopy,neutralSwitchBlade,neutralSwitchBladecopy],1,{rotation:0});
	lineSwitchBladeRotated=true;
	neutralSwitchBladeRotated=true;

	TweenMax.to([cpTCO,dpTCO], 1, {autoAlpha:0});

	TweenMax.to([diverterSwitch1Blade,diverterSwitch1Bladecopy,diverterSwitch2Blade,diverterSwitch2Bladecopy],1,{rotation:0, transformOrigin: "100% 0%"});
	lineSwitchBladeRotated=true;


	for(i=0; i<noPathsLength; i++){
		noPaths[i].style.stroke = "black"
		}
}
clearHighlights();

function showL1(){
	TweenMax.to([path76590], .1, {stroke:"red"})
}

function showNeutral(){
	TweenMax.to([path76582], .1, {stroke:"blue"})
}

function showWaterValve(){
	clearHighlights();
	TweenMax.to([path76122], .1, {stroke:"red"});
	TweenMax.to([path76102], .1, {stroke:"blue"});
	TweenMax.to([waterValve], .1, {stroke:"orange"});
}


function showDoorLatch(){
	clearHighlights();
	TweenMax.to([path42945,path75810,path42965,path42949,path75902,path60103,path42959,path75574,lineSwitchBlade,neutralSwitchBlade], .1, {stroke:"red"});

	TweenMax.to(lineSwitchBlade,1,{rotation:45, transformOrigin: "100% 0%"});
	TweenMax.to(lineSwitchBladecopy,1,{rotation:0, transformOrigin: "50% 50%"});
	lineSwitchBladeRotated=true;

	TweenMax.to(neutralSwitchBlade,1,{rotation:45, transformOrigin: "100% 0%"});
	TweenMax.to(neutralSwitchBladecopy,1,{rotation:0, transformOrigin: "50% 50%"});
	neutralSwitchBladeRotated=true;
}

function showDiverterSensor(){
	clearHighlights();
	TweenMax.to([path75522,diverterSwitch1Blade,path60569,path75518,diverterSwitch2Blade,path75262], .1, {stroke:"red"});

	TweenMax.to([diverterSwitch1Blade,diverterSwitch1Bladecopy,diverterSwitch2Blade,diverterSwitch2Bladecopy],1,{rotation:-5, transformOrigin: "100% 0%"});
	lineSwitchBladeRotated=true;
}

function showPressureSensor(){
	clearHighlights();
	TweenMax.to([PSReturn], .1, {stroke:"blue"});
	TweenMax.to([PSGND], .1, {stroke:"green"});
	TweenMax.to([PS5VDC], .1, {stroke:"red"});
}

function showLeakPanSensor(){
	clearHighlights();
	TweenMax.to([path74350,path74362], .1, {stroke:"blue"});
}

function showThermistor(){
	clearHighlights();
	TweenMax.to([path75066,path43023], .1, {stroke:"purple"});
	TweenMax.to([path43005,path43001,path75070], .1, {stroke:"red"});
	TweenMax.to([thermistor], .1, {stroke:"orange"});
}

function showTurbiditySensor(){
	clearHighlights();
	TweenMax.to([path42995,path74822], .1, {stroke:"blue"});
	TweenMax.to([path75070,path43001,path74706,path61335,path74570], .1, {stroke:"red"});
	TweenMax.to([turbLED,turbTransistor], .1, {stroke:"orange"});
	TweenMax.to([path43015,path75030], .1, {stroke:"purple"});
}

function showInverterPower(){
	clearHighlights();
	TweenMax.to([path75386,path75966], .1, {stroke:"blue"});
	TweenMax.to([path75354,path75278], .1, {stroke:"red"});
	TweenMax.to([path75998], .1, {stroke:"green"});
}

function showDrainPump(){
	clearHighlights();
	TweenMax.to([path67891,path76210], .1, {stroke:"blue"});
	TweenMax.to([path67909,path76238], .1, {stroke:"red"});
	TweenMax.to([path76266,path67965], .1, {stroke:"yellow"});
	TweenMax.to([path76294,path76610,path76622], .1, {stroke:"purple"});
	TweenMax.to([cpTCO,dpTCO], 1, {autoAlpha:1});
}

function showCircPump(){
	clearHighlights();
	TweenMax.to([path76746,path67981], .1, {stroke:"blue"});
	TweenMax.to([path76646,path68001], .1, {stroke:"red"});
	TweenMax.to([path76766,path67965], .1, {stroke:"yellow"});
	TweenMax.to([path76294,path76610,path76622], .1, {stroke:"purple"});
	TweenMax.to([cpTCO,dpTCO], 1, {autoAlpha:1});
}

function showHeaterWater(){
	clearHighlights();
	TweenMax.to([path77062], .1, {stroke:"blue"});
	TweenMax.to([path76634], .1, {stroke:"red"});
	TweenMax.to([path79246], .1, {stroke:"orange"});
}

function showWifi(){
	clearHighlights();
	TweenMax.to([path75558], .1, {stroke:"blue"});
	TweenMax.to([path75590], .1, {stroke:"red"});
	TweenMax.to([path75570], .1, {stroke:"orange"});
}

function showThermistorAir(){
	clearHighlights();
	TweenMax.to([path76126,path67839], .1, {stroke:"purple"});
	TweenMax.to([path67825,path76158], .1, {stroke:"red"});
	TweenMax.to([thermistorAir], .1, {stroke:"orange"});
}

function showFanDry(){
	clearHighlights();
	TweenMax.to([path75198,path76170], .1, {stroke:"blue"});
	TweenMax.to([path75190,path76170], .1, {stroke:"red"});
	TweenMax.to([path76018,path67849], .1, {stroke:"yellow"});
	TweenMax.to([path75918,path67849], .1, {stroke:"purple"});
}

function showHeaterAir(){
	clearHighlights();
	TweenMax.to([path67861,path75822], .1, {stroke:"blue"});
	TweenMax.to([path67875,path75674], .1, {stroke:"red"});
	TweenMax.to([heaterAir], .1, {stroke:"orange"});

}

function showDuctFan(){
	clearHighlights();
	TweenMax.to([path77342], .1, {stroke:"blue"});
	TweenMax.to([path77350], .1, {stroke:"red"});
	TweenMax.to([path77334], .1, {stroke:"purple"});
	TweenMax.to([ductFan], .1, {stroke:"orange"});
}

function showRinseAid(){
	clearHighlights();
	TweenMax.to([path77282], .1, {stroke:"blue"});
	TweenMax.to([path77246], .1, {stroke:"red"});
	TweenMax.to([path77218], .1, {stroke:"purple"});
	TweenMax.to([rinseAidSensor], .1, {stroke:"orange"});
}

function showDetergentDispenser(){
	clearHighlights();
	TweenMax.to([path77166], .1, {stroke:"blue"});
	TweenMax.to([path77170], .1, {stroke:"red"});
	TweenMax.to([detergentDispenser], .1, {stroke:"orange"});
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
	wire.setAttribute("opacity", "0");

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
TweenMax.to(schematic,.01,{scaleX:2, scaleY:2, x:100, y:-200})

// -----------------------------------------------------------------------------------------------------------------------------
var lineSwitchRotated=false;
lineSwitch.setAttribute('onclick','changelineSwitch();');
lineSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changelineSwitch(){
	console.log("fired")
	if(lineSwitchRotated === false){
		TweenMax.to([lineSwitchBlade,lineSwitchBladecopy],1,{rotation:45, transformOrigin: "100% 0%"});
		lineSwitchRotated=true;
	}else{
		TweenMax.to([lineSwitchBlade,lineSwitchBladecopy],1,{rotation:0});
		lineSwitchRotated=false;
	}
}

var neutralSwitchRotated=false;
neutralSwitch.setAttribute('onclick','changeneutralSwitch();');
neutralSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeneutralSwitch(){
	console.log("fired")
	if(neutralSwitchRotated === false){
		TweenMax.to([neutralSwitchBlade,neutralSwitchBladecopy],1,{rotation:45, transformOrigin: "100% 0%"});
		neutralSwitchRotated=true;
	}else{
		TweenMax.to([neutralSwitchBlade,neutralSwitchBladecopy],1,{rotation:0});
		neutralSwitchRotated=false;
	}
}

var diverterSwitch1Rotated=false;
diverterSwitch1.setAttribute('onclick','changediverterSwitch1();');
diverterSwitch1.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changediverterSwitch1(){
	console.log("fired")
	if(diverterSwitch1Rotated === false){
		TweenMax.to([diverterSwitch1Blade,diverterSwitch1Bladecopy],1,{rotation:-5, transformOrigin: "100% 0%"});
		diverterSwitch1Rotated=true;
	}else{
		TweenMax.to([diverterSwitch1Blade,diverterSwitch1Bladecopy],1,{rotation:0});
		diverterSwitch1Rotated=false;
	}
}

var diverterSwitch2Rotated=false;
diverterSwitch2.setAttribute('onclick','changediverterSwitch2();');
diverterSwitch2.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changediverterSwitch2(){
	console.log("fired")
	if(diverterSwitch2Rotated === false){
		TweenMax.to([diverterSwitch2Blade,diverterSwitch2Bladecopy],1,{rotation:-5, transformOrigin: "100% 0%"});
		diverterSwitch2Rotated=true;
	}else{
		TweenMax.to([diverterSwitch2Blade,diverterSwitch2Bladecopy],1,{rotation:0});
		diverterSwitch2Rotated=false;
	}
}


///Show image on mouseover
noiseFilter_btn.setAttribute('onclick','showNoiseFilter();');
noiseFilter_btn.setAttribute('onmouseover','this.style.cursor = "pointer";');
function showNoiseFilter(){
	console.log("Noise Filter")
}