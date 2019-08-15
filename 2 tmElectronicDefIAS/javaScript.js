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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var mainTl = new TimelineMax({paused:true, onUpdate:adjustUI, repeat:0});
// mainTl
// .to(colorBoxDiv,1, {autoAlpha:0})
// // .to(showWindow,.5,{x:73, y:18, scaleX:1.1, scaleY:1.1, transformOrigin: "50% 50%",ease:Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[new Error().lineNumber]})
// .set([path6367copy,path106copy,path1154copy,defrostControlWipercopy], {stroke:brown, opacity:1})
// .set([path1152copy], {stroke:black, opacity:1})

// .fromTo([path6367copy], 3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .fromTo([path106copy], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .fromTo([path1154copy], .3, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
// .fromTo([path1152copy], 2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone}, "+=.5")
// .from([text1440,image1451],1, {autoAlpha:0})

// .addPause()

// .to([path1152copy,], .5, {autoAlpha:0})
// .fromTo([defrostControlWipercopy,image1451], .3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .to([defrostControlWiper, defrostControlWipercopy],1, {rotation:-60})

// .set(text0, {text:"Power Cord", className:"h3", x:530, y:-193}).to([text0],1, {autoAlpha:1})
// .set([receptacleBorder_copy], {stroke:red})
// .staggerFromTo([receptacleBorder_copy], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .addPause()
// .to(['#text0'],1, {autoAlpha:0})
// .to([receptacleBorder_copy], .5, {drawSVG: '0%', ease: Power0.easeNone},"-=1")

// .set(text1, {text:"Long prong is neutral.", className:"h3 blackBg", x:622, y:-186}).to([text1],1, {autoAlpha:1})
// .set([path4425_copy], {stroke:red})
// .staggerFromTo([path4425_copy], .1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .addPause()
// .to(['#text1'],1, {autoAlpha:0})
// .to([path4425_copy], .5, {drawSVG: '0%', ease: Power0.easeNone},"-=1")

// .set(text2, {text:"Short prong is L1.", className:"h3 blackBg", x:348, y:-188}).to([text2],1, {autoAlpha:1})
// .set([path36_copy], {stroke:red})
// .staggerFromTo([path36_copy], .1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .addPause()
// .to(['#text2'],1, {autoAlpha:0})
// .to([path36_copy], .5, {drawSVG: '0%', ease: Power0.easeNone},"-=1")

// .set(text3, {text:"GND", className:"h3 blackBg", x:617, y:-119}).to([text3],1, {autoAlpha:1})
// .set([path32_copy], {stroke:red})
// .staggerFromTo([path32_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
// .addPause()
// .set(text7, {text:"GND does not operate loads.", className:"h3 blackBg", x:156, y:-174}).to([text7],1, {autoAlpha:1})
// .addPause()
// .to(['#text3',text7],1, {autoAlpha:0})
// .to([path32_copy], .5, {drawSVG: '0%', ease: Power0.easeNone},"-=1")

// .set(text4, {text:"L1", className:"h3 blackBg", x:485, y:-142}).to([text4],1, {autoAlpha:1})
// .set([path2783_copy], {stroke:red})
// .staggerFromTo([path2783_copy], 2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set([path3420_copy], {stroke:red})
// .staggerFromTo([path3420_copy], .1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set(text5, {text:"Female Connector", className:"h3 blackBg", x:209, y:173}).to([text5],1, {autoAlpha:1})
// .addPause()

// .to(['#text5',text4],1, {autoAlpha:0})
// .to(schematic,1,{x:222, y:-315, scaleX:1.8415725617280227, scaleY:1.8415725617280227, transformOrigin: "50% 50%",ease:Power0.easeNone})
// .set([path2775_copy], {stroke:red})
// .staggerFromTo([path2775_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set(text6, {text:"Male Connector", className:"h3 blackBg", x:211, y:-9}).to([text6],1, {autoAlpha:1})
// .set(text8, {text:"Component and connector<br>locator found on mini manual.<br>", className:"h3 blackBg", x:473, y:-181}).to([text8],1, {autoAlpha:1})
// .from(['#diagram'],1, {autoAlpha:0},"-=1")
// .addPause()
// .to(['#text8'],1, {autoAlpha:0})
// .staggerFromTo([diagram_callOut1], 2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set(text9, {text:"Connector location with pin out.<br>", className:"h3 blackBg", x:466, y:70}).to([text9],1, {autoAlpha:1})
// .addPause()

// .to([text6,'#text8',text9,diagram],1, {autoAlpha:0})
// .set([path3424_copy], {stroke:red})
// .staggerFromTo([path3424_copy], 1.2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .staggerFromTo([path2691_copy], .2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .staggerFromTo([tcBlade_copy], .2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})

// .set(text10, {text:"<center>Temperature Control<br>SPST Temperature Controlled Switch</center>", className:"h3 blackBg", x:57, y:86}).to([text10],1, {autoAlpha:1})
// .addPause()
// .to(['#text10'],1, {autoAlpha:0})
// .set(text11, {text:"Single Pole", className:"h3 blackBg", x:77, y:86})
// .add(function(){path8.setAttribute("d", "M578.8240051269531 449.1628646850586 L616.9003295898438 516.8453674316406");path8.style.strokeWidth = 3; path8.style.stroke = black;})
// .from(path8, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
// .to([text11],1, {autoAlpha:1},"-=1")
// .addPause()

// .set(text12, {text:"Single Throw", className:"h3 blackBg", x:316, y:106})
// .add(function(){path7.setAttribute("d", "M689.8240051269531 467.1628646850586 L640.9003295898438 513.8453674316406");path7.style.strokeWidth = 3; path7.style.stroke = black;})
// .from(path7, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
// .to([text12],1, {autoAlpha:1},"-=1")
// .addPause()

// .set(text13, {text:"Pole below dot indicates switch<br>closes on temperature rise.<br>", className:"h3 blackBg", x:306, y:187}).to([text13],1, {autoAlpha:1})
// .addPause()
