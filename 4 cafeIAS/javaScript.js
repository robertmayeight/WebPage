xhr = new XMLHttpRequest();
xhr.open("GET","schematic.svg",false);
xhr.overrideMimeType("image/svg+xml");
xhr.send("");
var schematic = document.getElementById("showWindow").appendChild(xhr.responseXML.documentElement);
schematic.classList.add("center");

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

// TweenMax.set(schematic, {y:-500});

// -----------------------------------------------------------------------------------------------------------------------------

var leftDoorSwitchRotated=false;
leftDoorSwitch.setAttribute('onclick','changeTimerSwitch();');
leftDoorSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');

function changeTimerSwitch(){
	if(leftDoorSwitchRotated === false){
		TweenMax.to(path8166,1,{rotation:28, transformOrigin: "100% 0%"});
		TweenMax.to(path8166copy,1,{rotation:28, transformOrigin: "100% 0%"});
		leftDoorSwitchRotated=true;
	}else{
		TweenMax.to(path8166,1,{rotation:0});
		TweenMax.to(path8166copy,1,{rotation:0});
		leftDoorSwitchRotated=false;
	}
}

var rightDoorSwitchRotated=false;
rightDoorSwitch.setAttribute('onclick','changerightDoorSwitch();');
rightDoorSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');

function changerightDoorSwitch(){
	if(rightDoorSwitchRotated === false){
		TweenMax.to(path10622,1,{rotation:-25, transformOrigin: "0% 0%"});
		TweenMax.to(path10622copy,1,{rotation:-25, transformOrigin: "0% 0%"});
		rightDoorSwitchRotated=true;
	}else{
		TweenMax.to(path10622,1,{rotation:0});
		TweenMax.to(path10622copy,1,{rotation:0});
		rightDoorSwitchRotated=false;
	}
}

var ffBimetalRotated=false;
ffBimetal.setAttribute('onclick','changeffBimetal();');
ffBimetal.setAttribute('onmouseover','this.style.cursor = "pointer";');

function changeffBimetal(){
	if(ffBimetalRotated === false){
		TweenMax.to(path9510,1,{rotation:25, transformOrigin: "0% 0%"});
		TweenMax.to(path9510copy,1,{rotation:25, transformOrigin: "0% 0%"});
		ffBimetalRotated=true;
	}else{
		TweenMax.to(path9510,1,{rotation:0});
		TweenMax.to(path9510copy,1,{rotation:0});
		ffBimetalRotated=false;
	}
}

var fzBimetalRotated=false;
fzBimetal.setAttribute('onclick','changefzBimetal();');
fzBimetal.setAttribute('onmouseover','this.style.cursor = "pointer";');

function changefzBimetal(){
	if(fzBimetalRotated === false){
		TweenMax.to(path9430,1,{rotation:25, transformOrigin: "0% 0%"});
		TweenMax.to(path9430copy,1,{rotation:25, transformOrigin: "0% 0%"});
		fzBimetalRotated=true;
	}else{
		TweenMax.to(path9430,1,{rotation:0});
		TweenMax.to(path9430copy,1,{rotation:0});
		fzBimetalRotated=false;
	}
}

var fzDoorSwitchRotated=false;
fzDoorSwitch.setAttribute('onclick','changefzDoorSwitch();');
fzDoorSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');

function changefzDoorSwitch(){
	if(fzDoorSwitchRotated === false){
		TweenMax.to(path10626,1,{rotation:25, transformOrigin: "0% 0%"});
		TweenMax.to(path10626copy,1,{rotation:25, transformOrigin: "0% 0%"});
		fzDoorSwitchRotated=true;
	}else{
		TweenMax.to(path10626,1,{rotation:0});
		TweenMax.to(path10626copy,1,{rotation:0});
		fzDoorSwitchRotated=false;
	}
}

var cupSwitchRotated=false;
cupSwitch.setAttribute('onclick','changecupSwitch();');
cupSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');

function changecupSwitch(){
	if(cupSwitchRotated === false){
		TweenMax.to(path11098,1,{rotation:-25, transformOrigin: "0% 0%"});
		TweenMax.to(path11098copy,1,{rotation:-25, transformOrigin: "0% 0%"});
		cupSwitchRotated=true;
	}else{
		TweenMax.to(path11098,1,{rotation:0});
		TweenMax.to(path11098copy,1,{rotation:0});
		cupSwitchRotated=false;
	}
}

var fzImBimetalRotated=false;
fzImBimetal.setAttribute('onclick','changefzImBimetal();');
fzImBimetal.setAttribute('onmouseover','this.style.cursor = "pointer";');

function changefzImBimetal(){
	if(fzImBimetalRotated === false){
		TweenMax.to(path5397,1,{rotation:25, transformOrigin: "0% 0%"});
		TweenMax.to(path5397copy,1,{rotation:25, transformOrigin: "0% 0%"});
		fzImBimetalRotated=true;
	}else{
		TweenMax.to(path5397,1,{rotation:0});
		TweenMax.to(path5397copy,1,{rotation:0});
		fzImBimetalRotated=false;
	}
}

var brewModPresentRotated=false;
brewModPresent.setAttribute('onclick','changebrewModPresent();');
brewModPresent.setAttribute('onmouseover','this.style.cursor = "pointer";');

function changebrewModPresent(){
	if(brewModPresentRotated === false){
		TweenMax.to(path5403,1,{rotation:-25, transformOrigin: "100% 0%"});
		TweenMax.to(path5403copy,1,{rotation:-25, transformOrigin: "100% 0%"});
		brewModPresentRotated=true;
	}else{
		TweenMax.to(path5403,1,{rotation:0});
		TweenMax.to(path5403copy,1,{rotation:0});
		brewModPresentRotated=false;
	}
}

var nozzlePosSwitchRotated=false;
nozzlePosSwitch.setAttribute('onclick','changenozzlePosSwitch();');
nozzlePosSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');

function changenozzlePosSwitch(){
	if(nozzlePosSwitchRotated === false){
		TweenMax.to(path5409,1,{rotation:23, transformOrigin: "100% 0%"});
		TweenMax.to(path5409copy,1,{rotation:23, transformOrigin: "100% 0%"});
		nozzlePosSwitchRotated=true;
	}else{
		TweenMax.to(path5409,1,{rotation:0});
		TweenMax.to(path5409copy,1,{rotation:0});
		nozzlePosSwitchRotated=false;
	}
}

var pladdleSwitchRotated=false;
pladdleSwitch.setAttribute('onclick','changepladdleSwitch();');
pladdleSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');

function changepladdleSwitch(){
	if(pladdleSwitchRotated === false){
		TweenMax.to(path67358,1,{rotation:80, transformOrigin: "100% 0%"});
		TweenMax.to(path67358copy,1,{rotation:80, transformOrigin: "100% 0%"});
		pladdleSwitchRotated=true;
	}else{
		TweenMax.to(path67358,1,{rotation:0});
		TweenMax.to(path67358copy,1,{rotation:0});
		pladdleSwitchRotated=false;
	}
}