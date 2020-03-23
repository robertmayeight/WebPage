xhr = new XMLHttpRequest();
xhr.open("GET","miniManual.svg",false);
xhr.overrideMimeType("image/svg+xml");
xhr.send("");
document.getElementById("showWindow").appendChild(xhr.responseXML.documentElement);
mainSvg.setAttribute("stroke", "red")
var bezierWeight = 0.675;

var rects = document.getElementsByTagName("rect")

for(i=0; i<rects.length; i++){
	rectIdSplit = rects[i].id.split("_")
	if(rectIdSplit[1] === "hide"){
		rects[i].style.display="none";
	}
}

try{
	document.getElementById("layer1").style.display="inline";
	document.getElementById("layer2").style.display="inline";
	document.getElementById("layer3").style.display="inline";
	document.getElementById("layer4").style.display="inline";
	document.getElementById("layer5").style.display="inline";
	document.getElementById("layer6").style.display="inline";
	document.getElementById("layer7").style.display="inline";
	document.getElementById("layer8").style.display="inline";
	document.getElementById("layer9").style.display="inline";
	document.getElementById("layer10").style.display="inline";
	document.getElementById("layer11").style.display="inline";
	document.getElementById("layer12").style.display="inline";
	document.getElementById("layer13").style.display="inline";
	document.getElementById("layer14").style.display="inline";
	document.getElementById("layer15").style.display="inline";
}catch(err){};

// var strip1Elements = document.getElementById("strip1").childNodes;
var object1 = document.getElementById("schematic").getElementsByTagName("path").length
var numPaths = document.getElementById("schematic").getElementsByTagName("path")
for(i=0; i<object1; i++){
	var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		path.setAttribute('stroke','red');
		path.setAttribute('fill','none');
		path.setAttribute('id',numPaths[i].id + '_copy');
		path.setAttribute('onclick','console.log(this.id); this.style.stroke=violet; drawSVGArray.push("" + this.id); codeText.innerHTML=drawSVGArray');
		path.setAttribute('onmouseover','this.style.pointer = "default";this.setAttribute("opacity", ".1"); ');
		path.setAttribute('onmouseout','this.setAttribute("opacity", "1");');
		path.style['stroke-width']=2;
		path.style['stroke-linecap']="round";
		numPaths[i].style['stroke-linecap']="round";
		path.setAttribute("d", numPaths[i].getAttribute("d"))
		schematic.appendChild(path);		
	
}

//Create Callout Lines
for(i=0; i<500; i++){
	var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	path.setAttribute('stroke','red');
	path.setAttribute('fill','none');
	path.setAttribute('id','path'+i);
	path.setAttribute('onclick','console.log(this.id); callOutPath = this.id; traceLines(this)');
	path.setAttribute('onmouseover','this.style.pointer = "default"; this.setAttribute("opacity", ".1"); ');
	path.setAttribute('onmouseout','this.setAttribute("opacity", "1");');
	path.style['stroke-width']=3;
	path.style["z-index"] = 100000;
	g2088.appendChild(path);
}

//Create Text Fields
for(i=0; i<500; i++){
	var para = document.createElement("span");
    para.id="text"+ (i);
    para.className = "textDrag";
    para.oncontextmenu = function(e) {e.stopPropagation(); e.preventDefault(); this.setAttribute("contenteditable", "false");};
    para.onmousedown = function(){showWindowDrag[0].disable(); };
    para.onmouseup = function(){showWindowDrag[0].enable(); this.className=changeClass.value; selectedText = this.id;};
    para.ondblclick = function(event){this.setAttribute("contenteditable", "true");};
    document.getElementById("showWindow").appendChild(para)
    Draggable.create(para, {zIndexBoost:false, type:"x,y", edgeResistance:0.65});
    rob = document.getElementById(para.id)
    rob.innerHTML=para.id;
    TweenLite.set(rob, { x: "+=10", overwrite: false });
    TweenLite.set(rob,{autoAlpha:0})
}

//Meter Code
var positionAndScale = "";

var multmeterDrag = Draggable.create(multimeterGroup, {zIndexBoost:false});
multimeterGroup.addEventListener("DOMMouseScroll", function(e){zoomMeter(e)}, false)
multimeterGroup.onmouseover = function(){
	this.style.cursor="grab";
	showWindow.removeEventListener ("DOMMouseScroll", zoomHandler, false)
	scaleUp = this._gsTransform.scaleX;
};
multimeterGroup.onmousedown = function(){showWindowDrag[0].disable();};
multimeterGroup.onmouseup = function(){
	showWindowDrag[0].enable();
	codeText.innerHTML = this.id;
};
multimeterGroup.onmouseout = function(){showWindow.addEventListener ("DOMMouseScroll", zoomHandler, false);};

function zoomMeter(e){
	e.preventDefault();
	switch(e.detail>0) {
		case true:
		if(scaleUp > .5 ){
			scaleUp = scaleUp - .01;
			TweenMax.to(multimeterGroup, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
		}
		break;
		case false:
		scaleUp = scaleUp + .01;
    	TweenMax.to(multimeterGroup, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
        break;
    }
}

var schematicDrag = Draggable.create(schematic, {zIndexBoost:false});
schematic.addEventListener("DOMMouseScroll", function(e){zoomSchematic(e)}, false)
schematic.onmouseover = function(){
	this.style.cursor="grab";
	showWindow.removeEventListener ("DOMMouseScroll", zoomHandler, false)
	scaleUp = this._gsTransform.scaleX;
};
schematic.onmousedown = function(){showWindowDrag[0].disable();};
schematic.onmouseup = function(){
	showWindowDrag[0].enable();
	codeText.innerHTML = this.id;
};
schematic.onmouseout = function(){showWindow.addEventListener ("DOMMouseScroll", zoomHandler, false);};

function zoomSchematic(e){
	e.preventDefault();
	switch(e.detail>0) {
		case true:
		if(scaleUp > .5 ){
			scaleUp = scaleUp - .01;
			TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
		}
		break;
		case false:
		scaleUp = scaleUp + .01;
    	TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
        break;
    }
}


var blueDotDrag = Draggable.create([blueDot]);
var blueDotXPos = blueDot.getBBox().x + blueDot.getBBox().width/2;
var blueDotYPos = blueDot.getBBox().y + blueDot.getBBox().height/2;
blueDot.onmousedown = function(){showWindowDrag[0].disable(); multmeterDrag[0].disable();this.style.cursor="default"};
blueDot.onmouseup = function(){showWindowDrag[0].enable(); multmeterDrag[0].enable(); console.log(blueDotXPos + blueDot._gsTransform.x); console.log(blueDotYPos + blueDot._gsTransform.y)};

var off1=0;
var vDc=18;
var vAc=35;
var ohms=55;
var diode=67;
var cap=90;
var degreesF=115;
var degreesC=138;
var hz=162;
var microAmps=185;
var milliAmps=200;
var amps=215;
var off2=235;


function changeMeterFunction(setting){
	TweenMax.to([meterPolarity], .001, {opacity:0}) 
	TweenMax.to([meterHoldIndicator], .001, {autoAlpha:0}) 
	TweenMax.to([meterAutoIndicator], .001, {autoAlpha:0})
	TweenMax.to([meterDCIndicator], .001, {autoAlpha:0})
	TweenMax.to([meterACIndicator], .001, {autoAlpha:0})
	TweenMax.to([displayDiodeSymbol], .001, {autoAlpha:0})
	meterVoltagePrefix.textContent = "";
	meterCapPrefix.textContent = "";
	ohmsPrefix.textContent = "";
	meterCapPrefix.textContent="";
	TweenMax.to([meterText], .001, {autoAlpha:0})
	TweenMax.to([offMeter,off2Meter,vdcMeter,vacMeter,ohmsMeter,dp1,dp2,diodeArrow,capMeter,degreesFMeter,degreesCMeter,hertzMeter,percentMeter,microAmpsMeter,milliAmpsMeter,ampsMeter,off2Meter], instant, {fill:"black"});
	TweenMax.to([dp1,dp2,diodeArrow,toneMeter], instant, {stroke:"black"});
		
		switch(setting) {
		case "off1":
		TweenMax.to([offMeter], instant, {fill:"red"})
		TweenMax.to([offMeter], .25, {scaleX:1.5, scaleY:1.5, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
		TweenMax.to([offMeter], .25, {scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
		TweenMax.to([offMeter], instant, {fill:"black"})
		break;
		case "off2":
		TweenMax.to([offTwoMeter], instant, {fill:"red"})
		TweenMax.to([offTwoMeter], .25, {scaleX:1.5, scaleY:1.5, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
		TweenMax.to([offTwoMeter], .25, {scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
		TweenMax.to([offTwoMeter], instant, {fill:"black"})
		break;
	    case "vDc":
	    TweenMax.to([vdcMeter], instant, {fill:"red"})
	    TweenMax.to([vdcMeter], .25, {scaleX:1.5, scaleY:1.5, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
	    TweenMax.to([vdcMeter], .25, {scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7),delay:.5})
	    TweenMax.to([display], .001, {autoAlpha:1})
	    TweenMax.to([meterText], .001, {autoAlpha:1})
	    TweenMax.to([meterAutoIndicator], .001, {autoAlpha:1}) 
		TweenMax.to([meterDCIndicator], .001, {autoAlpha:1})
		TweenMax.to([meterPolarity], .001, {autoAlpha:0}) 
		meterVoltagePrefix.textContent = "V";
	    
        break;
        case "vAc":
        TweenMax.to([display], .001, {autoAlpha:1})
        TweenMax.to([meterPolarity], .001, {autoAlpha:0}) 
        TweenMax.to([meterText], .001, {autoAlpha:1})
		TweenMax.to([meterACIndicator], .001, {autoAlpha:1})
		TweenMax.to([meterAutoIndicator], .001, {autoAlpha:1}) 
	    TweenMax.to([meterText], .001, {autoAlpha:1})
	    meterVoltagePrefix.textContent = "V";
	    meterText.textContent = "000.0";
	    TweenMax.to([vacMeter], instant, {fill:"red"})
	    TweenMax.to([vacMeter], .25, {scaleX:1.5, scaleY:1.5, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
	    TweenMax.to([vacMeter], .25, {scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7),delay:.5})
        break;
        case "ohms":
        TweenMax.to([display], .001, {autoAlpha:1})
		TweenMax.to([meterAutoIndicator], .001, {autoAlpha:1}) 
	    TweenMax.to([meterText], .001, {autoAlpha:1})
	    meterText.textContent = "O.L";
	    ohmsPrefix.textContent = "MΩ";
	    TweenMax.to([ohmsMeter], instant, {fill:"red"})
	    TweenMax.to([ohmsMeter], .25, {scaleX:1.5, scaleY:1.5, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
	    TweenMax.to([ohmsMeter], .25, {scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7),delay:.5})
        break;
        case "diode":
        TweenMax.to([displayDiodeSymbol], .001, {autoAlpha:1}) 
	    TweenMax.to([meterText], .001, {autoAlpha:1})
	    meterText.textContent = "O.L";
	    ohmsPrefix.textContent = "";
	    TweenMax.to([toneMeter], instant, {stroke:"red"});
	    TweenMax.to([ohmsPrefix,meterAutoIndicator], instant, {autoAlpha:0})
	    TweenMax.to([dp1,dp2,diodeArrow], instant, {stroke:"red"})
	    TweenMax.to([diodeArrow], instant, {fill:"red"})
	    TweenMax.to([diodeMeter,toneMeter], .25, {scaleX:1.5, scaleY:1.5, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
	    TweenMax.to([diodeMeter,toneMeter], .25, {scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7),delay:.5})
	    TweenMax.to([diodeMeter], instant, {stroke:"black"})
        break;
        case "cap":
	    TweenMax.to([meterText], .001, {autoAlpha:1})
	    meterText.textContent = "0.000";
	    meterCapPrefix.textContent="nF";
	    TweenMax.to([capMeter], instant, {fill:"red"})
	    TweenMax.to([capMeter], .25, {scaleX:1.5, scaleY:1.5, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
	    TweenMax.to([capMeter], .25, {scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7),delay:.5})
        break;
        case "degreesF":
        console.log("degreesF Fired")
	    TweenMax.to([meterText], .001, {autoAlpha:1})
	    meterText.textContent = "OL";
	    meterCapPrefix.textContent="";
	    TweenMax.to([degreesFMeter], instant, {fill:"red"})
	    TweenMax.to([degreesFMeter], .25, {scaleX:1.5, scaleY:1.5, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
	    TweenMax.to([degreesFMeter], .25, {scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7),delay:.5})
        break;

        case "degreesC":
	    console.log("degreesC Fired")
	    TweenMax.to([meterText], .001, {autoAlpha:1})
	    meterText.textContent = "OL";
	    meterCapPrefix.textContent="";
	    TweenMax.to([degreesCMeter], instant, {fill:"red"})
	    TweenMax.to([degreesCMeter], .25, {scaleX:1.5, scaleY:1.5, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
	    TweenMax.to([degreesCMeter], .25, {scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7),delay:.5})
        break;
        case "hz":
	    console.log("hertz Fired")
	    TweenMax.to([meterText], .001, {autoAlpha:1})
	    meterText.textContent = "OL";
	    meterCapPrefix.textContent="";
	    TweenMax.to([hertzMeter,percentMeter], instant, {fill:"red"})
	    TweenMax.to([hertzMeter,percentMeter], .25, {scaleX:1.5, scaleY:1.5, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
	    TweenMax.to([hertzMeter,percentMeter], .25, {scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7),delay:.5})
	    break;
	    case "microAmps":
	    console.log("microAmps Fired")
	    TweenMax.to([meterText], .001, {autoAlpha:1})
	    meterText.textContent = "OL";
	    meterVoltagePrefix.textContent="µA";
	    TweenMax.to([meterVoltagePrefix], instant, {autoAlpha:1})
	    TweenMax.to([microAmpsMeter], instant, {fill:"red"})
	    TweenMax.to([microAmpsMeter], .25, {scaleX:1.5, scaleY:1.5, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
	    TweenMax.to([microAmpsMeter], .25, {scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7),delay:.5})
	    break;
	    case "milliAmps":
	    console.log("microAmps Fired")
	    TweenMax.to([meterText], .001, {autoAlpha:1})
	    meterText.textContent = "OL";
	    meterVoltagePrefix.textContent="mA";
	    TweenMax.to([meterVoltagePrefix], instant, {autoAlpha:1})
	    TweenMax.to([milliAmpsMeter], instant, {fill:"red"})
	    TweenMax.to([milliAmpsMeter], .25, {scaleX:1.5, scaleY:1.5, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
	    TweenMax.to([milliAmpsMeter], .25, {scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7),delay:.5})
	    break;
	    case "amps":
	    console.log("Amps Fired")
	    TweenMax.to([meterText], .001, {autoAlpha:1})
	    meterText.textContent = "OL";
	    meterVoltagePrefix.textContent=" A";
	    TweenMax.to([meterVoltagePrefix], instant, {autoAlpha:1})
	    TweenMax.to([ampsMeter], instant, {fill:"red"})
	    TweenMax.to([ampsMeter], .25, {scaleX:1.5, scaleY:1.5, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
	    TweenMax.to([ampsMeter], .25, {scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7),delay:.5})
	    break;
	} 
}	

function changeMeterReading(reading){
	meterText.textContent = reading;
}

function zoomReadingLeft(){
		TweenMax.to([display], .5, {x:-30, scaleX:1.5, scaleY:1.5, transformOrigin: '250px 50%'})
		TweenMax.to([display], .5, {x:0, scaleX:1, scaleY:1, transformOrigin: '250px 50%',delay:1.5})
}
function zoomReadingRight(){
		TweenMax.to([display], .5, {x:30, scaleX:1.5, scaleY:1.5, transformOrigin: '250px 50%'})
		TweenMax.to([display], .5, {x:0, scaleX:1, scaleY:1, transformOrigin: '250px 50%',delay:1.5})
}


TweenMax.set([path22_copy,path190_copy,path186_copy,path162_copy,path362_copy,path1103_copy,path86_copy,path84_copy,path1097_copy,path1100_copy,path208_copy,path1110_copy,path286_copy,path280_copy,path286_copy,path274_copy,path292_copy,path92_copy,path108_copy,path110_copy,path112_copy,path106_copy,path104_copy,path94_copy,path96_copy,path88_copy,path102_copy,path1092_copy,path100_copy,path114_copy,path1086_copy,path1084_copy,path98_copy,path140_copy,path138_copy,path3995_copy,path4001_copy,path3999_copy,path4011_copy,path3997_copy,path4005_copy,path4003_copy,path4009_copy,path4007_copy,path306_copy,path302_copy,path346_copy,path308_copy,path304_copy,path322_copy,path320_copy,path298_copy,path324_copy,"#path162-5-0_copy",path192_copy,path194_copy,path42_copy,path50_copy,path60_copy,path68_copy,path68_copy,path48_copy,path48_copy,path48_copy,path48_copy,path48_copy,path48_copy,path4027_copy,path44_copy,path46_copy],{autoAlpha:0})
var mainTl = new TimelineMax({paused:true, onUpdate:adjustUI, repeat:0});
mainTl
.to(schematic,1,{x:217, y:-509, scaleX:1.8415725617280227, scaleY:1.8415725617280227, transformOrigin: "50% 50%",ease:Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[new Error().lineNumber]},"+=0")
.set(text0, {text:"Power Cord", className:"h3", x:530, y:-193}).to([text0],1, {autoAlpha:1})
.set([receptacleBorder_copy], {stroke:red})
.staggerFromTo([receptacleBorder_copy], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.addPause()
.to(['#text0'],1, {autoAlpha:0})
.to([receptacleBorder_copy], .5, {drawSVG: '0%', ease: Power0.easeNone},"-=1")

.set(text1, {text:"Long prong is neutral.", className:"h3 blackBg", x:622, y:-186}).to([text1],1, {autoAlpha:1})
.set([path4425_copy], {stroke:red})
.staggerFromTo([path4425_copy], .1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.addPause()
.to(['#text1'],1, {autoAlpha:0})
.to([path4425_copy], .5, {drawSVG: '0%', ease: Power0.easeNone},"-=1")

.set(text2, {text:"Short prong is L1.", className:"h3 blackBg", x:348, y:-188}).to([text2],1, {autoAlpha:1})
.set([path36_copy], {stroke:red})
.staggerFromTo([path36_copy], .1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.addPause()
.to(['#text2'],1, {autoAlpha:0})
.to([path36_copy], .5, {drawSVG: '0%', ease: Power0.easeNone},"-=1")

.set(text3, {text:"GND", className:"h3 blackBg", x:617, y:-119}).to([text3],1, {autoAlpha:1})
.set([path32_copy], {stroke:red})
.staggerFromTo([path32_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
.addPause()
.set(text7, {text:"GND does not operate loads.", className:"h3 blackBg", x:156, y:-174}).to([text7],1, {autoAlpha:1})
.addPause()
.to(['#text3',text7],1, {autoAlpha:0})
.to([path32_copy], .5, {drawSVG: '0%', ease: Power0.easeNone},"-=1")

.set(text4, {text:"L1", className:"h3 blackBg", x:485, y:-142}).to([text4],1, {autoAlpha:1})
.set([path2783_copy], {stroke:red})
.staggerFromTo([path2783_copy], 2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set([path3420_copy], {stroke:red})
.staggerFromTo([path3420_copy], .1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set(text5, {text:"Female Connector", className:"h3 blackBg", x:209, y:173}).to([text5],1, {autoAlpha:1})
.addPause()

.to(['#text5',text4],1, {autoAlpha:0})
.to(schematic,1,{x:222, y:-315, scaleX:1.8415725617280227, scaleY:1.8415725617280227, transformOrigin: "50% 50%",ease:Power0.easeNone})
.set([path2775_copy], {stroke:red})
.staggerFromTo([path2775_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set(text6, {text:"Male Connector", className:"h3 blackBg", x:211, y:-9}).to([text6],1, {autoAlpha:1})
.set(text8, {text:"Component and connector<br>locator found on mini manual.<br>", className:"h3 blackBg", x:473, y:-181}).to([text8],1, {autoAlpha:1})
.from(['#diagram'],1, {autoAlpha:0},"-=1")
.addPause()
.to(['#text8'],1, {autoAlpha:0})
.staggerFromTo([diagram_callOut1], 2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set(text9, {text:"Connector location with pin out.<br>", className:"h3 blackBg", x:466, y:70}).to([text9],1, {autoAlpha:1})
.addPause()

.to([text6,'#text8',text9,diagram],1, {autoAlpha:0})
.set([path3424_copy], {stroke:red})
.staggerFromTo([path3424_copy], 1.2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.staggerFromTo([path2691_copy], .2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.staggerFromTo([tcBlade_copy], .2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})

.set(text10, {text:"<center>Temperature Control<br>SPST Temperature Controlled Switch</center>", className:"h3 blackBg", x:57, y:86}).to([text10],1, {autoAlpha:1})
.addPause()
.to(['#text10'],1, {autoAlpha:0})
.set(text11, {text:"Single Pole", className:"h3 blackBg", x:77, y:86})
.add(function(){path8.setAttribute("d", "M578.8240051269531 449.1628646850586 L616.9003295898438 516.8453674316406");path8.style.strokeWidth = 3; path8.style.stroke = black;})
.from(path8, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
.to([text11],1, {autoAlpha:1},"-=1")
.addPause()

.set(text12, {text:"Single Throw", className:"h3 blackBg", x:316, y:106})
.add(function(){path7.setAttribute("d", "M689.8240051269531 467.1628646850586 L640.9003295898438 513.8453674316406");path7.style.strokeWidth = 3; path7.style.stroke = black;})
.from(path7, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
.to([text12],1, {autoAlpha:1},"-=1")
.addPause()

.set(text13, {text:"Pole below dot indicates switch<br>closes on temperature rise.<br>", className:"h3 blackBg", x:306, y:187}).to([text13],1, {autoAlpha:1})
.addPause()

.to([text11,text12,text13,path8,path7],1, {autoAlpha:0})
.set(["#path178-2_copy"], {stroke:red}).staggerFromTo(["#path178-2_copy"], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set([path_164_copy], {stroke:red}).staggerFromTo([path_164_copy], 2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set(text15, {text:"Defrost Timer", className:"h3 blackBg", x:292, y:1}).to([text15],1, {autoAlpha:1})
.addPause()
.to(['#text15',path_164_copy],1, {autoAlpha:0})

.set([path296_copy], {stroke:orange}).staggerFromTo([path296_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set(text16, {text:"Timer Motor", className:"h3 blackBg", x:306, y:203}).to([text16],1, {autoAlpha:1})
.addPause()

.set(text17, {text:"Represents infinite resistance.", className:"h3 blackBg", x:418, y:100})
.add(function(){path9.setAttribute("d", "M792.8240051269531 456.1628646850586 L740.9003295898438 493.8453674316406");path9.style.strokeWidth = 3; path9.style.stroke = black;})
.from(path9, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
.to([text17],1, {autoAlpha:1},"-=1")
.addPause()

.to(['#text16',text17,path9],1, {autoAlpha:0})
.set([path168_copy], {stroke:blue}).staggerFromTo([path168_copy], 2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set([path1414_copy], {stroke:blue}).staggerFromTo([path1414_copy], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set([path294_copy], {stroke:blue}).staggerFromTo([path294_copy], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set([path3946_copy], {stroke:blue}).staggerFromTo([path3946_copy], .25, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.to(schematic,1,{x:168, y:-442, scaleX:1.8415725617280227, scaleY:1.8415725617280227, transformOrigin: "50% 50%",ease:Power0.easeNone})
.set([path1101_copy], {stroke:blue}).staggerFromTo([path1101_copy], .3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set([path1099_copy], {stroke:blue}).staggerFromTo([path1099_copy], .4, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})

.set([path1116_copy], {stroke:blue}).staggerFromTo([path1116_copy], 2.5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set(text18, {text:"Neutral", className:"h3 blackBg", x:565, y:-272}).to([text18],1, {autoAlpha:1})
.addPause()

.to(['#text18'],1, {autoAlpha:0})
.to(schematic,1,{x:222, y:-315, scaleX:1.8415725617280227, scaleY:1.8415725617280227, transformOrigin: "50% 50%",ease:Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[new Error().lineNumber]},"+=0")

.set([path1077_copy], {stroke:red}).staggerFromTo([path1077_copy], .7, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
.set(text19, {text:"Internal Timer Connection", className:"h3 blackBg", x:22, y:113}).to([text19],1, {autoAlpha:1})
.addPause()

.to(['#text19'],1, {autoAlpha:0})
.set([defrostControlWiper_copy], {stroke:red}).staggerFromTo([defrostControlWiper_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set(text20, {text:"<center>Timer Switch<br>SPDT<c>", className:"h3 blackBg", x:233, y:-23}).to([text20],1, {autoAlpha:1})

.to([defrostControlWiper,defrostControlWiper_copy],1, {rotation:-30})
.to([defrostControlWiper,defrostControlWiper_copy],1, {rotation:0},"+=1")
.to(['#text20'],1, {autoAlpha:0})

.to(['#text19'],1, {autoAlpha:0})
.set(["#path162-5_copy"], {stroke:red}).staggerFromTo(["#path162-5_copy"], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set(["#path1583-6_copy"], {stroke:red}).staggerFromTo(["#path1583-6_copy"], .7, {drawSVG:'100% 100%'}, {drawSVG: '100% 00%', ease: Power0.easeNone})
.set(["#path1587-7_copy"], {stroke:orange}).staggerFromTo(["#path1587-7_copy"], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
.set(text21, {text:"Evaporator Fan Motor", className:"h3 blackBg", x:434, y:-98}).to([text21],1, {autoAlpha:1})
.addPause()

.set(text22, {text:"Infinite Resistance", className:"h3 blackBg", x:619, y:16})
.add(function(){path10.setAttribute("d", "M1090.8240051269531 353.1628646850586 L1090.9003295898438 311.8453674316406 943.5032653808594 311.6350555419922");path10.style.strokeWidth = 3; path10.style.stroke = black;})
.from(path10, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
.to([text22],1, {autoAlpha:1},"-=1")
.addPause()
.to([text22,path10,text21],1, {autoAlpha:0})

.set([path1587_copy], {stroke:blue}).staggerFromTo([path1587_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
.set(text23, {text:"Neutral", className:"h3 blackBg", x:881, y:4}).to([text23],1, {autoAlpha:1})
.addPause()

.to(['#text23'],1, {autoAlpha:0})
.set([path3954_copy], {stroke:red}).staggerFromTo([path3954_copy], .2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set([path3950_copy], {stroke:red}).staggerFromTo([path3950_copy], .1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
.set([path1366_copy], {stroke:red}).staggerFromTo([path1366_copy],1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
.set(["#path1370-4_copy"], {stroke:orange}).staggerFromTo(["#path1370-4_copy"], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
.set(text24, {text:"Condenser Fan Motor", className:"h3 blackBg", x:685, y:-185}).to([text24],1, {autoAlpha:1})
.addPause()
.set(text25, {text:"53 Ω", className:"h3 blackBg", x:646, y:-85})
.add(function(){path11.setAttribute("d", "M1047.8240051269531 256.1628646850586 L1047.9003295898438 220.84536743164062 1155.5032653808594 219.6350555419922");path11.style.strokeWidth = 3; path11.style.stroke = black;})
.from(path11, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
.to([text25],1, {autoAlpha:1},"-=1")
.addPause()
.to([text25,text24,path11],1, {autoAlpha:0})
.set([path1370_copy], {stroke:blue}).staggerFromTo([path1370_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set(text26, {text:"Neutral", className:"h3 blackBg", x:880, y:-142}).to([text26],1, {autoAlpha:1})
.addPause()

.to(['#text26'],1, {autoAlpha:0})
.to(schematic,1,{x:177, y:-436, scaleX:1.8415725617280227, scaleY:1.8415725617280227, transformOrigin: "50% 50%",ease:Power0.easeNone},"+-=1")

.set([path2801_copy], {stroke:red}).staggerFromTo([path2801_copy], 1.1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set([path90_copy], {stroke:red}).staggerFromTo([path90_copy], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set(text27, {text:"Combo Device", className:"h3 blackBg", x:518, y:-225}).to([text27],1, {autoAlpha:1})
.addPause()
.to([path90_copy,text27],1, {autoAlpha:0})

.set([path2792_copy], {stroke:red}).staggerFromTo([path2792_copy], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set(text28, {text:"Heater", className:"h3 blackBg", x:583, y:-210}).to([text28],1, {autoAlpha:1})
.addPause()

.set(text29, {text:"Heats overload if<br>compressor stalls.<br>", className:"h3 blackBg", x:490, y:-126}).to([text29],1, {autoAlpha:1})
.addPause()

.to([text28,text29],1, {autoAlpha:0})
.set([path2803_copy], {stroke:red}).staggerFromTo([path2803_copy], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set([path116_copy], {stroke:red}).staggerFromTo([path116_copy], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set(text30, {text:"Overload", className:"h3 blackBg", x:606, y:-133}).to([text30],1, {autoAlpha:1})
.addPause()

.set(text31, {text:"Protects compressor on stall.<br>", className:"h3 blackBg", x:509, y:-87}).to([text31],1, {autoAlpha:1})
.addPause()

.to([text30,text31],1, {autoAlpha:0})
.set([path142_copy], {stroke:red}).staggerFromTo([path142_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set([path2479_copy,path2477_copy], {stroke:red}).staggerFromTo([path2479_copy,path2477_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)


.set([path1094_copy], {stroke:red}).staggerFromTo([path1094_copy], 1.5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set(text32, {text:"Compressor", className:"h3 blackBg", x:723, y:-206}).to([text32],1, {autoAlpha:1})
.addPause()

.to([path1094_copy,text32],1, {autoAlpha:0})

.set([path1117_copy], {stroke:blue}).staggerFromTo([path1117_copy], 1.7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
.set([path1177_copy], {stroke:blue}).staggerFromTo([path1177_copy], .1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
.set([path1179_copy], {stroke:blue}).staggerFromTo([path1179_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set([path1956_copy], {stroke:orange,strokeWidth:1}).staggerFromTo([path1956_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})

.set(text33, {text:"Run Winding", className:"h3 blackBg", x:555, y:-120}).to([text33],1, {autoAlpha:1})
.addPause()

.to(['#text33'],1, {autoAlpha:0})
.set([path1606_copy], {stroke:blue}).staggerFromTo([path1606_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
.set(text34, {text:"<center>PTC Resistor<br>Positive Temperature Coefficient.</center>", className:"h3 blackBg", x:435, y:-4}).to([text34],1, {autoAlpha:1})
.addPause()

.set(text35, {text:"Low resistance initially. As temperature<br>increases, resistance goes up.<br>", className:"h3 blackBg", x:410, y:74}).to([text35],1, {autoAlpha:1})
.addPause()

.set(text36, {text:"Initial low resistance bypasses capacitor.", className:"h3 blackBg", x:79, y:-61}).to([text36],1, {autoAlpha:1})
.addPause()

.to([text34,text35,text36],1, {autoAlpha:0})

.set([path3959_copy], {stroke:blue}).staggerFromTo([path3959_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
.set(["#path1132-2_copy"], {stroke:yellow, strokeWidth:1.1}).staggerFromTo(["#path1132-2_copy"], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
.set(text38, {text:"Run Winding", className:"h3 blackBg", x:657, y:-65}).to([text38],1, {autoAlpha:1})
.addPause()
.to(['#text38'],1, {autoAlpha:0})


.set(text37, {text:"After PTC heats up, current<br>flows through the capacitor.<br>", className:"h3 blackBg", x:385, y:-150}).to([text37],1, {autoAlpha:1})
.to(['#path1606_copy'],1, {stroke:black})
.set([path3963_copy,path3961_copy], {stroke:blue}).staggerFromTo([path3963_copy,path3961_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
.set([path3965_copy], {stroke:blue}).staggerFromTo([path3965_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
.addPause()
.to(['#text37'],1, {autoAlpha:0})

.to(schematic,2,{x:169, y:-135, scaleX:1.8415725617280227, scaleY:1.8415725617280227, transformOrigin: "50% 50%",ease:Power0.easeNone})
.to([defrostControlWiper,defrostControlWiper_copy],1, {rotation:-30})
.to(['#path162-5_copy',path3954_copy,'#path1583-6_copy','#path1587-7_copy',path1587_copy],1, {autoAlpha:0})
.set([path2750_copy], {stroke:red}).staggerFromTo([path2750_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
.set(["#heater-0_copy"], {stroke:orange}).staggerFromTo(["#heater-0_copy"], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
.set(text39, {text:"Defrost Heater", className:"h3 blackBg", x:451, y:-191}).to([text39],1, {autoAlpha:1})
.addPause()
.to(['#text39'],1, {autoAlpha:0})

.set([path2773_copy], {stroke:blue}).staggerFromTo([path2773_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.2)
.set([path334_copy], {stroke:blue}).staggerFromTo([path334_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set(text40, {text:"Defrost Thermostat", className:"h3 blackBg", x:638, y:-191}).to([text40],1, {autoAlpha:1})
.addPause()

.set(text41, {text:"Opens on temperature rise.", className:"h3 blackBg", x:615, y:-104}).to([text41],1, {autoAlpha:1})
.addPause()

.to([text40,text41],1, {autoAlpha:0})
.set([path348_copy], {stroke:blue}).staggerFromTo([path348_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set(text41, {text:"Neutral", className:"h3 blackBg", x:812, y:-176}).to([text41],1, {autoAlpha:1})
.addPause()

.to([text41],1, {autoAlpha:0})
.set([path182_copy], {stroke:red}).staggerFromTo([path182_copy], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set([path4025_copy], {stroke:red}).staggerFromTo([path4025_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
.set([path200_copy], {stroke:red}).staggerFromTo([path200_copy], .2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set(text42, {text:"Door Switch<br>", className:"h3 blackBg", x:257, y:23}).to([text42],1, {autoAlpha:1})
.addPause()

.to(['#text42'],1, {autoAlpha:0})
.to([path200,path200_copy],1, {rotation:-25})
.set([path40_copy], {stroke:red}).staggerFromTo([path40_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
.set([pathfzLight_copy], {stroke:orange}).staggerFromTo([pathfzLight_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
.set(text43, {text:"FF Light", className:"h3 blackBg", x:575, y:25}).to([text43],1, {autoAlpha:1})
.addPause()

.to(['#text43'],1, {autoAlpha:0})
.set(["#path40-7_copy"], {stroke:blue}).staggerFromTo(["#path40-7_copy"], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
.set([path1416_copy], {stroke:blue}).staggerFromTo([path1416_copy], .7, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone},.7)
.set(text44, {text:"Neutral", className:"h3 blackBg", x:815, y:-44}).to([text44],1, {autoAlpha:1})
.addPause()

.to(['#text44'],1, {autoAlpha:0})
.set([path4023_copy], {stroke:red}).staggerFromTo([path4023_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
.set([path76_copy], {stroke:red}).staggerFromTo([path76_copy], .2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
.set([path74_copy], {stroke:red}).staggerFromTo([path74_copy], 2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
.set(text45, {text:"Icemaker", className:"h3 blackBg", x:347, y:116}).to([text45],1, {autoAlpha:1})
.addPause()

.set([path58_copy], {stroke:blue}).staggerFromTo([path58_copy], .2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
.set([path1412_copy], {stroke:blue}).staggerFromTo([path1412_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
.set([path1418_copy], {stroke:blue}).staggerFromTo([path1418_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
.set(text46, {text:"Neutral", className:"h3 blackBg", x:813, y:107}).to([text46],1, {autoAlpha:1})
.addPause()

.to([text45,text46],1, {autoAlpha:0})
.set([path350_copy,path66_copy,path6641_copy], {stroke:red}).staggerFromTo([path350_copy,path66_copy,path6641_copy], .2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.2)
.set([path3913_copy], {stroke:orange}).staggerFromTo([path3913_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
.set(text47, {text:"<center>Icemaker<br>Water Valve</center>", className:"h3 blackBg", x:806, y:158}).to([text47],1, {autoAlpha:1})
.addPause()

.set([path6617_copy], {stroke:blue}).staggerFromTo([path6617_copy], 3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set(text48, {text:"To Neutral", className:"h3 blackBg", x:870, y:-301}).to([text48],1, {autoAlpha:1})
.addPause()

.to([text47,text48],1, {autoAlpha:0})
.to(schematic,2,{x:133, y:16, scaleX:1.031572561728022, scaleY:1.031572561728022, transformOrigin: "50% 50%",ease:Power0.easeNone})

.add(function(){resetDrawing()})
.set(text49, {text:"Thank you for your attention.", className:"h1 blackBg", x:240, y:-158}).to([text49],1, {autoAlpha:1})



function resetDrawing(){
	var object1 = document.getElementById("schematic").getElementsByTagName("path").length
	var numPaths = document.getElementById("schematic").getElementsByTagName("path")
	for(i=0; i<object1; i++){
		pathSplit=numPaths[i].id.split("_");
		if(pathSplit[1] === "copy"){
			TweenMax.set([numPaths[i]], {drawSVG:'0% 0%'})
		}
	}
}

























// .to(text0, 1, {autoAlpha:0, y:"-=120"})

// .set(text1, {text:"Black Lead", className:"h2", x:50, y:-7})
// .add(function(){path2.setAttribute("d", "M591.8240051269531 350.1628646850586 L700.9003295898438 350.8453674316406 864.5032653808594 471.6350555419922");path2.style.strokeWidth = 3; path2.style.stroke = black;})
// .to([text1],1, {autoAlpha:1})
// .from(path2, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})

// .set(text2, {text:"Black lead always<br>goes here.<br>", className:"h2", x:54, y:80}).to([text2],1, {autoAlpha:1})
// .addPause()
// .to(text2, 1, {autoAlpha:0})

// .set(text3, {text:"Red Lead", className:"h2", x:58, y:64})
// .add(function(){path3.setAttribute("d", "M587.8240051269531 421.1628646850586 L733.9003295898438 419.8453674316406 803.5032653808594 472.6350555419922");path3.style.strokeWidth = 3; path3.style.stroke = black;})
// .to([text3],1, {autoAlpha:1})
// .from(path3, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone,delay:.001},"-=.5")

// .set(text4, {text:"For current readings over 1 amp (max 10 amps).", className:"h2", x:169, y:182}).to([text4],1, {autoAlpha:1})
// .addPause()

// .set(text68, {text:"Break circuit and place leads in series.", className:"h2", x:232, y:226}).to([text68],1, {autoAlpha:1})
// .addPause()

// .to([text3,text4, path3, text89, text68,ampProbe],1, {autoAlpha:0})
// .set(text89, {text:"Note: Use Amp Probe<br>to measure current<br>instead of multimeter.", className:"h2", x:662, y:-191}).to([text89],1, {autoAlpha:1})
// .from(ampProbe,1,{autoAlpha:0},"-=1")
// .addPause()

// .to([text89,ampProbe],1, {autoAlpha:0})

// .add(function(){path4.setAttribute("d", "M1098.8240051269531 439.1628646850586 L1098.9003295898438 473.8453674316406 933.5032653808594 473.6350555419922");path4.style.strokeWidth = 3; path4.style.stroke = black;})
// .set(text5, {text:"Red Lead", className:"h2", x:665, y:60}).to([text5],1, {autoAlpha:1})

// .from(path4, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.001},"-=.5")

// .set(text6, {text:"For all other measurements.", className:"h2", x:296, y:221}).to([text6],1, {autoAlpha:1})
// .addPause()
// .to([text1,text5, text6, path2, path4],1, {autoAlpha:0})

// //Move meter for Selections
// .to(multimeterGroup,1,{x:769, y:212, scaleX:1.5900000000000005, scaleY:1.5900000000000005, transformOrigin: "50% 50%",ease:Power0.easeNone})

// .to([knobBorder,meterKnob], .1, {stroke:red})
// .to(meterKnob, 1.5, {rotation:360, transformOrigin: "100% 50%"})
// .set(meterKnob, {rotation:0})
// .to([knobBorder,meterKnob], .1, {stroke:black})

// .set(text7, {text:"Use selector knob to select<br>measurement type.", className:"h2", x:215, y:-126}).to([text7],1, {autoAlpha:1})
// .addPause()
// .add(function(){changeMeterFunction("off1")})
// .to(meterKnob, .5, {rotation:off1})

// .to(text7, 1, {autoAlpha:0})

// .set(text8, {text:"Use Vdc setting for DC voltage readings.", className:"h2", x:42, y:-159}).to([text8],1, {autoAlpha:1})
// .add(function(){changeMeterFunction("vDc")})
// .to(meterKnob, .5, {rotation:vDc},"-=.5")
// .addPause()

// .to([text8],1, {autoAlpha:0})

// .set(text9, {text:"Meter lead placement matters when<br>measuring DC voltages.", className:"h2", x:70, y:-196}).to([text9],1, {autoAlpha:1})
// .addPause()
// .to(multimeterGroup,1,{x:711, y:159, scaleX:0.9721656300207695, scaleY:0.9721656300207695, transformOrigin: "50% 50%"})

// .to([strip2],1, {autoAlpha:1})
// .to([redLead, blackLead], 1, {autoAlpha:1},"-=1")
// .addPause()

// .set(text10, {text:"Red Lead on +DC", className:"h3", x:14, y:-18}).to([text10],1, {autoAlpha:1})
// .to(redLead, 1, {morphSVG:"M144.211,283.432 C 50,600 -700,300 -641.7887344360352, 220.4323272705078", ease: Power0.easeNone},"-=1")
// .addPause()

// .set(text11, {text:"Black Lead on DC GND", className:"h3", x:366, y:-18}).to([text11],1, {autoAlpha:1})
// .to(blackLead, 1, {morphSVG:"M 93.480472,282.09292 C 50,600 -200,300 -209.78873443603516, 220.4323272705078", ease: Power0.easeNone},"-=1")
// .add(function(){changeMeterReading("13.00")})
// .addPause()

// .to([display], .5, {scaleX:2, scaleY:2, transformOrigin: '50% 50%'})
// .to(displayBorder, .5, {stroke:red},"-=.5")
// .addPause()
// .to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:0})
// .to(displayBorder, .5, {stroke:black},"-=.5")

// .to([text9],1, {autoAlpha:0})
// .set(text13, {text:"If leads are reversed, reading will be -13VDC.", className:"h2", x:38, y:-202}).to([text13],1, {autoAlpha:1})

// .to(redLead, 1, {morphSVG:"M144.211,283.432 C 50,600 -700,300 -209.78873443603516, 220.4323272705078", ease: Power0.easeNone})
// .add(function(){changeMeterReading("13.00")})
// .to(blackLead, 1, {morphSVG:"M 93.480472,282.09292 C 50,600 -200,300 -641.7887344360352, 220.4323272705078", ease: Power0.easeNone},"-=1")
// .to(meterPolarity, .01, {autoAlpha:1})
// .to([display], .5, {scaleX:2, scaleY:2, transformOrigin: '50% 50%'})
// .to(displayBorder, .5, {stroke:red},"-=.5")
// .addPause()
// .to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:0})
// .to(displayBorder, .5, {stroke:black},"-=.5")

// .to([text10, text11, text13,strip2,redLead,blackLead,meterPolarity],1, {autoAlpha:0})
// .to(multimeterGroup,1,{x:529, y:203, scaleX:1.5900000000000005, scaleY:1.5900000000000005, transformOrigin: "50% 50%",ease:Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[new Error().lineNumber]},"+=0")
// .to(redLead, 1, {morphSVG:redLead, ease: Power0.easeNone},"-=1")
// .to(blackLead, 1, {morphSVG:blackLead, ease: Power0.easeNone},"-=1")
// .add(function(){changeMeterReading("0.000")})

// //Meter AC Section
// .set(text12, {text:"Use Vac for AC voltage readings.", className:"h2", x:42, y:-159}).to([text12],1, {autoAlpha:1})
// .add(function(){changeMeterFunction("vAc")})
// .to(meterKnob, .5, {rotation:vAc},"-=.5")
// .addPause()

// .set(text14, {text:"AC polarity is changing 60 times per<br>second so meter lead color doesn't<br>matter.", className:"h2", x:42, y:-74}).to([text14],1, {autoAlpha:1})
// .addPause()
// .to([text12, text14],1, {autoAlpha:0})

// //Meter Ohms Section
// .set(text15, {text:"Use Ω for resistance readings.", className:"h2", x:42, y:-159}).to([text15],1, {autoAlpha:1})
// .add(function(){changeMeterFunction("ohms")})
// .to(meterKnob, .5, {rotation:ohms},"-=.5")
// .addPause()

// .set(text16, {text:"Use this setting to check resistance<br>or continuity.", className:"h2", x:43, y:-101}).to([text16],1, {autoAlpha:1})
// .addPause()

// .set(text17, {text:"Resistance and continuity are not<br>the same. Continuity means the path is<br>not broken, however it may still have <br>resistance.<br>", className:"h2", x:42, y:32}).to([text17],1, {autoAlpha:1})
// .addPause()
// .to([text15,text16,text17],1, {autoAlpha:0})

// //Meter Diode Section
// .set(text18, {text:"<img src='diodePic.svg'>&nbsp;&nbsp;represents diode check. &nbsp;", className:"h2", x:45, y:-199}).to([text18],1, {autoAlpha:1})
// .add(function(){changeMeterFunction("diode")})

// .to(meterKnob, .5, {rotation:diode},"-=.5")
// .addPause()

// .to([redLead, blackLead], .001, {autoAlpha:1},"-=0")
// .to(multimeterGroup,1,{x:505, y:150, scaleX:0.9721656300207695, scaleY:0.9721656300207695, transformOrigin: "50% 50%"})
// .set(text19, {text:"Checked reverse biased - Red lead<br>on negative, black lead on positive.<br>", className:"h2", x:163, y:-86}).to([text19],1, {autoAlpha:1})

// .addPause()
// .to(blackLead, 1 ,{morphSVG:"M 93.480472,282.09292 C -50,600 -800,400 -705.7887344360352, 1.4323272705078125"})
// .to(redLead, 1 ,{morphSVG:"M 144.211,283.432 C 0,600 -600,400 -669.7887344360352, 1.4323272705078125"})
// .to([display], .5, {scaleX:2, scaleY:2, transformOrigin: '50% 50%'})
// .to(displayBorder, .5, {stroke:red},"-=.5")
// .addPause()
// .to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:0})
// .to(displayBorder, .5, {stroke:black},"-=.5")
// .to(['#text19'],1, {autoAlpha:0})

