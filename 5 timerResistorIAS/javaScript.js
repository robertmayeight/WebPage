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

// -----------------------------------------------------------------------------------------------------------------------------

var tBtoCRotated=false;
tBtoC.setAttribute('onclick','changetBtoC();');
tBtoC.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changetBtoC(){
	if(tBtoCRotated === false){
		TweenMax.to(path9368,1,{rotation:30, transformOrigin: "0% 100%"});
		TweenMax.to(path9368copy,1,{rotation:30, transformOrigin: "0% 100%"});
		tBtoCRotated=true;
	}else{
		TweenMax.to(path9368,1,{rotation:0})
		TweenMax.to(path9368copy,1,{rotation:0})
		tBtoCRotated=false;
	}
}

var tBtoARotated=false;
tBtoA.setAttribute('onclick','changetBtoA();');
tBtoA.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changetBtoA(){
	if(tBtoARotated === false){
		TweenMax.to(path5197,1,{rotation:-29, transformOrigin: "100% 0%"});
		TweenMax.to(path5197copy,1,{rotation:-29, transformOrigin: "100% 0%"});
		tBtoARotated=true;
	}else{
		TweenMax.to(path5197,1,{rotation:0})
		TweenMax.to(path5197copy,1,{rotation:0})
		tBtoARotated=false;
	}
}

var highLimitRightRotated=false;
highLimitRight.setAttribute('onclick','changehighLimitRight();');
highLimitRight.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changehighLimitRight(){
	if(highLimitRightRotated === false){
		TweenMax.to(path9378,1,{y:-5, transformOrigin: "100% 0%"});
		TweenMax.to(path9378copy,1,{y:-5, transformOrigin: "100% 0%"});
		highLimitRightRotated=true;
	}else{
		TweenMax.to(path9378,1,{y:0})
		TweenMax.to(path9378copy,1,{y:0})
		highLimitRightRotated=false;
	}
}

var motorOverloadRotated=false;
motorOverload.setAttribute('onclick','changemotorOverload();');
motorOverload.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changemotorOverload(){
	if(motorOverloadRotated === false){
		TweenMax.to(path93789,1,{y:-5, transformOrigin: "100% 0%"});
		TweenMax.to(path93789copy,1,{y:-5, transformOrigin: "100% 0%"});
		motorOverloadRotated=true;
	}else{
		TweenMax.to(path93789,1,{y:0})
		TweenMax.to(path93789copy,1,{y:0})
		motorOverloadRotated=false;
	}
}

var safetyThermostatRotated=false;
safetyThermostat.setAttribute('onclick','changesafetyThermostat();');
safetyThermostat.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changesafetyThermostat(){
	if(safetyThermostatRotated === false){
		TweenMax.to(path93785,1,{y:-5, transformOrigin: "100% 0%"});
		TweenMax.to(path93785copy,1,{y:-5, transformOrigin: "100% 0%"});
		safetyThermostatRotated=true;
	}else{
		TweenMax.to(path93785,1,{y:0})
		TweenMax.to(path93785copy,1,{y:0})
		safetyThermostatRotated=false;
	}
}

var drumOutletThermostatRotated=false;
drumOutletThermostat.setAttribute('onclick','changedrumOutletThermostat();');
drumOutletThermostat.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changedrumOutletThermostat(){
	if(drumOutletThermostatRotated === false){
		TweenMax.to(path93784,1,{y:-5, transformOrigin: "100% 0%"});
		TweenMax.to(path93784copy,1,{y:-5, transformOrigin: "100% 0%"});
		drumOutletThermostatRotated=true;
	}else{
		TweenMax.to(path93784,1,{y:0})
		TweenMax.to(path93784copy,1,{y:0})
		drumOutletThermostatRotated=false;
	}
}

var controlInletThermostatRotated=false;
controlInletThermostat.setAttribute('onclick','changecontrolInletThermostat();');
controlInletThermostat.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changecontrolInletThermostat(){
	if(controlInletThermostatRotated === false){
		TweenMax.to(path93782,1,{y:-5, transformOrigin: "100% 0%"});
		TweenMax.to(path93782copy,1,{y:-5, transformOrigin: "100% 0%"});
		controlInletThermostatRotated=true;
	}else{
		TweenMax.to(path93782,1,{y:0})
		TweenMax.to(path93782copy,1,{y:0})
		controlInletThermostatRotated=false;
	}
}

var selector15To16Rotated=false;
selector15To16.setAttribute('onclick','changeselector15To16();');
selector15To16.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeselector15To16(){
	if(selector15To16Rotated === false){
		TweenMax.to(path5215,1,{rotation:34, transformOrigin: "100% 100%"});
		TweenMax.to(path5215copy,1,{rotation:34, transformOrigin: "100% 100%"});
		selector15To16Rotated=true;
	}else{
		TweenMax.to(path5215,1,{rotation:0})
		TweenMax.to(path5215copy,1,{rotation:0})
		selector15To16Rotated=false;
	}
}

var selector8To7Rotated=false;
selector8To7.setAttribute('onclick','changeselector8To7();');
selector8To7.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeselector8To7(){
	if(selector8To7Rotated === false){
		TweenMax.to(path5257,1,{rotation:-43, transformOrigin: "100% 0%"});
		TweenMax.to(path5257copy,1,{rotation:-43, transformOrigin: "100% 0%"});
		selector8To7Rotated=true;
	}else{
		TweenMax.to(path5257,1,{rotation:0})
		TweenMax.to(path5257copy,1,{rotation:0})
		selector8To7Rotated=false;
	}
}

var timerTtoXRotated=false;
timerTtoX.setAttribute('onclick','changetimerTtoX();');
timerTtoX.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changetimerTtoX(){
	if(timerTtoXRotated === false){
		TweenMax.to(path5317,1,{rotation:33, transformOrigin: "100% 0%"});
		TweenMax.to(path5317copy,1,{rotation:33, transformOrigin: "100% 0%"});
		timerTtoXRotated=true;
	}else{
		TweenMax.to(path5317,1,{rotation:0})
		TweenMax.to(path5317copy,1,{rotation:0})
		timerTtoXRotated=false;
	}
}

var timerTtoSRotated=false;
timerTtoS.setAttribute('onclick','changetimerTtoS();');
timerTtoS.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changetimerTtoS(){
	if(timerTtoSRotated === false){
		TweenMax.to(path5319,1,{rotation:19, transformOrigin: "0% 100%"});
		TweenMax.to(path5319copy,1,{rotation:19, transformOrigin: "0% 100%"});
		timerTtoSRotated=true;
	}else{
		TweenMax.to(path5319,1,{rotation:0})
		TweenMax.to(path5319copy,1,{rotation:0})
		timerTtoSRotated=false;
	}
}

var buzzerSwitchRotated=false;
buzzerSwitch.setAttribute('onclick','changebuzzerSwitch();');
buzzerSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changebuzzerSwitch(){
	if(buzzerSwitchRotated === false){
		TweenMax.to(path5219,1,{rotation:25, transformOrigin: "0% 100%"});
		TweenMax.to(path5219copy,1,{rotation:25, transformOrigin: "0% 100%"});
		buzzerSwitchRotated=true;
	}else{
		TweenMax.to(path5219,1,{rotation:0})
		TweenMax.to(path5219copy,1,{rotation:0})
		buzzerSwitchRotated=false;
	}
}

var startSwitchRotated=false;
startSwitch.setAttribute('onclick','changestartSwitch();');
startSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changestartSwitch(){
	if(startSwitchRotated === false){
		TweenMax.to(path5247,1,{y:6, transformOrigin: "0% 100%"});
		TweenMax.to(path5247copy,1,{y:6, transformOrigin: "0% 100%"});
		startSwitchRotated=true;
	}else{
		TweenMax.to(path5247,1,{y:0})
		TweenMax.to(path5247copy,1,{y:0})
		startSwitchRotated=false;
	}
}

var idlerSwitchRotated=false;
idlerSwitch.setAttribute('onclick','changeidlerSwitch();');
idlerSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeidlerSwitch(){
	if(idlerSwitchRotated === false){
		TweenMax.to(path10958,1,{rotation:41, transformOrigin: "0% 100%"});
		TweenMax.to(path10958copy,1,{rotation:41, transformOrigin: "0% 100%"});
		idlerSwitchRotated=true;
	}else{
		TweenMax.to(path10958,1,{rotation:0})
		TweenMax.to(path10958copy,1,{rotation:0})
		idlerSwitchRotated=false;
	}
}

var centrifugalSwitchRotated=false;
centrifugalSwitch.setAttribute('onclick','changecentrifugalSwitch();');
centrifugalSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changecentrifugalSwitch(){
	if(centrifugalSwitchRotated === false){
		TweenMax.to(path5251,1,{rotation:20, transformOrigin: "0% 0%"});
		TweenMax.to(path5251copy,1,{rotation:20, transformOrigin: "0% 0%"});
		TweenMax.to(path5339,1,{rotation:20, transformOrigin: "0% 0%"});
		TweenMax.to(path5199,1,{x:-5, transformOrigin: "0% 0%"});
		
		centrifugalSwitchRotated=true;
	}else{
		TweenMax.to(path5251,1,{rotation:0})
		TweenMax.to(path5251copy,1,{rotation:0, transformOrigin: "0% 0%"});
		TweenMax.to(path5339,1,{rotation:0, transformOrigin: "0% 0%"});
		TweenMax.to(path5199,1,{x:0, transformOrigin: "0% 0%"});
		centrifugalSwitchRotated=false;
	}
}

var doorSwitchRotated=false;
doorSwitch.setAttribute('onclick','changedoorSwitch();');
doorSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changedoorSwitch(){
	if(doorSwitchRotated === false){
		TweenMax.to(path5331,1,{rotation:41, transformOrigin: "0% 0%"});
		TweenMax.to(path5331copy,1,{rotation:41, transformOrigin: "0% 0%"});
		doorSwitchRotated=true;
	}else{
		TweenMax.to(path5331,1,{rotation:0})
		TweenMax.to(path5331copy,1,{rotation:0})
		doorSwitchRotated=false;
	}
}