xhr = new XMLHttpRequest();
xhr.open("GET","lowEndRef.svg",false);
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


/////////////////////////////////////////////////////////////////////////////
var strip1Elements = document.getElementById("strip1").childNodes;
var noPathsLength = document.getElementById("strip1").getElementsByTagName("path").length
var noPaths = document.getElementById("strip1").getElementsByTagName("path")
for(i=0; i<noPathsLength; i++){
	var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		path.setAttribute('stroke','red');
		path.setAttribute('fill','none');
		path.setAttribute('id',noPaths[i].id + 'copy');
		path.setAttribute('onclick','console.log(this.id); this.style.stroke=violet; drawSVGArray.push("" + this.id); codeText.innerHTML=drawSVGArray');
		path.setAttribute('onmouseover','this.style.pointer = "default";this.setAttribute("opacity", ".1"); ');
		path.setAttribute('onmouseout','this.setAttribute("opacity", "1");');
		path.style['stroke-width']=5;
		path.style['stroke-linecap']="round";
		noPaths[i].style['stroke-linecap']="round";
		path.setAttribute("d", noPaths[i].getAttribute("d"))
		strip1.appendChild(path);		
	
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


TweenMax.to(meterKnob, .001, {rotation:off1,transformOrigin: "100% 50%", onComplete:changeMeterFunction, onCompleteParams:["off1"]})
TweenMax.set([schematic,redLead,blackLead,path4047copy,path4351copy,gndSymbolcopy], {autoAlpha:0});
TweenMax.set(multimeterGroup,{x:421, y:173, scaleX:1.3600000000000003, scaleY:1.3600000000000003, transformOrigin: "50% 50%"})
TweenMax.set(text0, {text:"Basic Electricity", className:"h1", x:354, y:-290,autoAlpha:1});
TweenMax.set([strip2], {autoAlpha:0});

var mainTl = new TimelineMax({paused:true, onUpdate:adjustUI, repeat:0});
mainTl
.to(text0, 1, {autoAlpha:0, y:"-=120"})
.to(['#background'],1, {autoAlpha:0},"-=1")

.set(text1, {text:"Black Lead", className:"h2", x:50, y:-7})
.add(function(){path2.setAttribute("d", "M591.8240051269531 350.1628646850586 L700.9003295898438 350.8453674316406 864.5032653808594 471.6350555419922");path2.style.strokeWidth = 3; path2.style.stroke = black;})
.to([text1],1, {autoAlpha:1})
.from(path2, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})

.set(text2, {text:"Black lead always<br>goes here.<br>", className:"h2", x:54, y:80}).to([text2],1, {autoAlpha:1})
.addPause()
.to(text2, 1, {autoAlpha:0})

.set(text3, {text:"Red Lead", className:"h2", x:58, y:64})
.add(function(){path3.setAttribute("d", "M587.8240051269531 421.1628646850586 L733.9003295898438 419.8453674316406 803.5032653808594 472.6350555419922");path3.style.strokeWidth = 3; path3.style.stroke = black;})
.to([text3],1, {autoAlpha:1})
.from(path3, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone,delay:.001},"-=.5")

.set(text4, {text:"For current readings over 1 amp (max 10 amps).", className:"h2", x:169, y:182}).to([text4],1, {autoAlpha:1})
.addPause()

.set(text68, {text:"Break circuit and place leads in series.", className:"h2", x:232, y:226}).to([text68],1, {autoAlpha:1})
.addPause()

.to([text3,text4, path3, text89, text68,ampProbe],1, {autoAlpha:0})
.set(text89, {text:"Note: Use Amp Probe<br>to measure current<br>instead of multimeter.", className:"h2", x:662, y:-191}).to([text89],1, {autoAlpha:1})
.from(ampProbe,1,{autoAlpha:0},"-=1")
.addPause()

.to([text89,ampProbe],1, {autoAlpha:0})

.add(function(){path4.setAttribute("d", "M1098.8240051269531 439.1628646850586 L1098.9003295898438 473.8453674316406 933.5032653808594 473.6350555419922");path4.style.strokeWidth = 3; path4.style.stroke = black;})
.set(text5, {text:"Red Lead", className:"h2", x:665, y:60}).to([text5],1, {autoAlpha:1})

.from(path4, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.001},"-=.5")

.set(text6, {text:"For all other measurements.", className:"h2", x:296, y:221}).to([text6],1, {autoAlpha:1})
.addPause()
.to([text1,text5, text6, path2, path4],1, {autoAlpha:0})

//Move meter for Selections
.to(multimeterGroup,1,{x:769, y:212, scaleX:1.5900000000000005, scaleY:1.5900000000000005, transformOrigin: "50% 50%",ease:Power0.easeNone})

.to([knobBorder,meterKnob], .1, {stroke:red})
.to(meterKnob, 1.5, {rotation:360, transformOrigin: "100% 50%"})
.set(meterKnob, {rotation:0})
.to([knobBorder,meterKnob], .1, {stroke:black})

.set(text7, {text:"Use selector knob to select<br>measurement type.", className:"h2", x:215, y:-126}).to([text7],1, {autoAlpha:1})
.addPause()
.add(function(){changeMeterFunction("off1")})
.to(meterKnob, .5, {rotation:off1})

.to(text7, 1, {autoAlpha:0})

.set(text8, {text:"Use Vdc setting for DC voltage readings.", className:"h2", x:42, y:-159}).to([text8],1, {autoAlpha:1})
.add(function(){changeMeterFunction("vDc")})
.to(meterKnob, .5, {rotation:vDc},"-=.5")
.addPause()

.to([text8],1, {autoAlpha:0})

.set(text9, {text:"Meter lead placement matters when<br>measuring DC voltages.", className:"h2", x:70, y:-196}).to([text9],1, {autoAlpha:1})
.addPause()
.to(multimeterGroup,1,{x:711, y:159, scaleX:0.9721656300207695, scaleY:0.9721656300207695, transformOrigin: "50% 50%"})

.to([strip2],1, {autoAlpha:1})
.to([redLead, blackLead], 1, {autoAlpha:1},"-=1")
.addPause()

.set(text10, {text:"Red Lead on +DC", className:"h3", x:14, y:-18}).to([text10],1, {autoAlpha:1})
.to(redLead, 1, {morphSVG:"M144.211,283.432 C 50,600 -700,300 -641.7887344360352, 220.4323272705078", ease: Power0.easeNone},"-=1")
.addPause()

.set(text11, {text:"Black Lead on DC GND", className:"h3", x:366, y:-18}).to([text11],1, {autoAlpha:1})
.to(blackLead, 1, {morphSVG:"M 93.480472,282.09292 C 50,600 -200,300 -209.78873443603516, 220.4323272705078", ease: Power0.easeNone},"-=1")
.add(function(){changeMeterReading("13.00")})
.addPause()

.to([display], .5, {scaleX:2, scaleY:2, transformOrigin: '50% 50%'})
.to(displayBorder, .5, {stroke:red},"-=.5")
.addPause()
.to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:0})
.to(displayBorder, .5, {stroke:black},"-=.5")

.to([text9],1, {autoAlpha:0})
.set(text13, {text:"If leads are reversed, reading will be -13VDC.", className:"h2", x:12, y:-150}).to([text13],1, {autoAlpha:1})

.to(redLead, 1, {morphSVG:"M144.211,283.432 C 50,600 -700,300 -209.78873443603516, 220.4323272705078", ease: Power0.easeNone})
.add(function(){changeMeterReading("13.00")})
.to(blackLead, 1, {morphSVG:"M 93.480472,282.09292 C 50,600 -200,300 -641.7887344360352, 220.4323272705078", ease: Power0.easeNone},"-=1")
.to(meterPolarity, .01, {autoAlpha:1})
.to([display], .5, {scaleX:2, scaleY:2, transformOrigin: '50% 50%'})
.to(displayBorder, .5, {stroke:red},"-=.5")
.addPause()
.to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:0})
.to(displayBorder, .5, {stroke:black},"-=.5")

.to([text10, text11, text13,strip2,redLead,blackLead,meterPolarity],1, {autoAlpha:0})
.to(multimeterGroup,1,{x:529, y:203, scaleX:1.5900000000000005, scaleY:1.5900000000000005, transformOrigin: "50% 50%",ease:Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[new Error().lineNumber]},"+=0")
.to(redLead, 1, {morphSVG:redLead, ease: Power0.easeNone},"-=1")
.to(blackLead, 1, {morphSVG:blackLead, ease: Power0.easeNone},"-=1")
.add(function(){changeMeterReading("0.000")})

//Meter AC Section
.set(text12, {text:"Use Vac for AC voltage readings.", className:"h2", x:42, y:-159}).to([text12],1, {autoAlpha:1})
.add(function(){changeMeterFunction("vAc")})
.to(meterKnob, .5, {rotation:vAc},"-=.5")
.addPause()

.set(text14, {text:"AC polarity is changing 60 times per<br>second so meter lead color doesn't<br>matter.", className:"h2", x:42, y:-74}).to([text14],1, {autoAlpha:1})
.addPause()
.to([text12, text14],1, {autoAlpha:0})

//Meter Ohms Section
.set(text15, {text:"Use Ω for resistance readings.", className:"h2", x:42, y:-159}).to([text15],1, {autoAlpha:1})
.add(function(){changeMeterFunction("ohms")})
.to(meterKnob, .5, {rotation:ohms},"-=.5")
.addPause()

.set(text16, {text:"Use this setting to check resistance<br>or continuity.", className:"h2", x:43, y:-101}).to([text16],1, {autoAlpha:1})
.addPause()

.set(text17, {text:"Resistance and continuity are not<br>the same. Continuity means the path is<br>not broken, however it may still have <br>resistance.<br>", className:"h2", x:42, y:32}).to([text17],1, {autoAlpha:1})
.addPause()
.to([text15,text16,text17],1, {autoAlpha:0})

//Meter Diode Section
.set(text18, {text:"<img src='diodePic.svg'>&nbsp;&nbsp;represents diode check. &nbsp;", className:"h2", x:45, y:-199}).to([text18],1, {autoAlpha:1})
.add(function(){changeMeterFunction("diode")})

.to(meterKnob, .5, {rotation:diode},"-=.5")
.addPause()

.to([redLead, blackLead], .001, {autoAlpha:1},"-=0")
.to(multimeterGroup,1,{x:505, y:150, scaleX:0.9721656300207695, scaleY:0.9721656300207695, transformOrigin: "50% 50%"})
.set(text19, {text:"Checked reverse biased - Red lead<br>on negative, black lead on positive.<br>", className:"h2", x:163, y:-86}).to([text19],1, {autoAlpha:1})

.addPause()
.to(blackLead, 1 ,{morphSVG:"M 93.480472,282.09292 C -50,600 -800,400 -705.7887344360352, 1.4323272705078125"})
.to(redLead, 1 ,{morphSVG:"M 144.211,283.432 C 0,600 -600,400 -669.7887344360352, 1.4323272705078125"})
.to([display], .5, {scaleX:2, scaleY:2, transformOrigin: '50% 50%'})
.to(displayBorder, .5, {stroke:red},"-=.5")
.addPause()
.to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:0})
.to(displayBorder, .5, {stroke:black},"-=.5")
.to(['#text19'],1, {autoAlpha:0})

.set(text20, {text:"Checked forward biased - Black lead<br>on negative, red lead on positive.<br>", className:"h2", x:162, y:-86}).to([text20],1, {autoAlpha:1})

.to(blackLead, 1 ,{morphSVG:"M 93.480472,282.09292 C0,600 -600,400 -669.7887344360352, 1.4323272705078125"})
.to(redLead, 1 ,{morphSVG:"M 144.211,283.432 C -50,600 -800,400 -705.7887344360352, 1.4323272705078125"},"-=1")
.add(function(){changeMeterReading("0.707")})
.to([display], .5, {scaleX:2, scaleY:2, transformOrigin: '50% 50%'})
.to(displayBorder, .5, {stroke:red},"-=.5")
.addPause()
.to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:0})
.to(displayBorder, .5, {stroke:black},"-=.5")

.to([text20],1, {autoAlpha:0})
.to(redLead, 1, {morphSVG:redLead, ease: Power0.easeNone},"-=1")
.to(blackLead, 1, {morphSVG:blackLead, ease: Power0.easeNone},"-=1")

.set(text85, {text:"Note: Diode tester can not check<br>HV diodes in microwaves.<br>", className:"h2", x:48, y:-75}).to([text85],1, {autoAlpha:1})
.addPause()
.to(text85,1,{autoAlpha:0})

.add(function(){changeMeterReading(" 0.L ")})
.set(text21, {text:"<img src='tonePic.svg'>&nbsp;&nbsp;represents audible tone. &nbsp;", className:"h2", x:52, y:-134}).to([text21],1, {autoAlpha:1})
.addPause()

.set(text22, {text:"Tone can be turned on and off with<br>the tone button.<br>", className:"h2",  x:50, y:-41}).to([text22],1, {autoAlpha:1})
.add(function(){path6.setAttribute("d", "M658.8240051269531 360.1628646850586 L1024.9003295898438 358.8453674316406 1134.5032653808594 240.6350555419922");path6.style.strokeWidth = 3; path6.style.stroke = black;})
.from(path6, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
.addPause()


.to([text18,text19,text20,text21,text22,path6],1, {autoAlpha:0})
.to(multimeterGroup,1,{x:548, y:210, scaleX:1.5900000000000005, scaleY:1.5900000000000005, transformOrigin: "50% 50%",ease:Power0.easeNone})

.to([redLead, blackLead], 1, {autoAlpha:0},"-=1")

.set(text23, {text:"Use CAP setting to check capacitors.", className:"h2", x:44, y:-172}).to([text23],1, {autoAlpha:1})
.add(function(){changeMeterFunction("cap")})
.to(meterKnob, .5, {rotation:cap},"-=.5")
.addPause()

.set(text24, {text:'Display shows:<br>"m" for microFarads<br>"n" for nanoFarads<br>"p" for picoFarads<br>', className:"h2", x:158, y:-102})
.add(function(){path7.setAttribute("d", "M836.8240051269531 312.1628646850586 L835.9003295898438 403.8453674316406 503.5032653808594 405.6350555419922 506.5032653808594 225.6350555419922 836.5032653808594 224.6350555419922 836.5032653808594 312.6350555419922 1264.5032653808594 163.6350555419922");path7.style.strokeWidth = 3; path7.style.stroke = black;})
.from(path7, 3, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
.to([text24],1, {autoAlpha:1},"-=3")
.addPause()

.set(text25, {text:"<span style='color:red;'>Caution:</span> Make sure capacitor is discharged<br>before connecting meter leads.<br>", className:"h2", x:23, y:162}).to([text25],1, {autoAlpha:1})
.addPause()
.to([text23,text24,text25,path7], 1, {autoAlpha:0})

.set(text26, {text:"Use this setting to check temperature<br>in Fahrenheit.", className:"h2", x:44, y:-172}).to([text26],1, {autoAlpha:1})
.add(function(){changeMeterFunction("degreesF")})
.add(function(){changeMeterReading(" 0.L ")})
.to(meterKnob, .5, {rotation:degreesF},"-=.5")
.addPause()

.set(text27, {text:'A thermocouple connects at<br>the "temp" input of the meter.<br>', className:"h2", x:96, y:-54}).to([text27],1, {autoAlpha:1})
.add(function(){path8.setAttribute("d", "M909.8240051269531 351.1628646850586 L1061.9003295898438 427.8453674316406 1128.5032653808594 429.6350555419922 1128.5032653808594 486.6350555419922 1065.5032653808594 485.6350555419922 1063.5032653808594 428.6350555419922");path8.style.strokeWidth = 3; path8.style.stroke = black;})
.from(path8, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
.addPause()

.set(text28, {text:"Use ºC for Celsius measurements.&nbsp;", className:"h2", x:74, y:84}).to([text28],1, {autoAlpha:1})
.add(function(){changeMeterFunction("degreesC")})
.add(function(){changeMeterReading(" 0.L ")})
.to(meterKnob, .5, {rotation:degreesC},"-=.5")
.addPause()
.to([text26,text27,text28,path8], 1, {autoAlpha:0})

//Hertz Section
.set(text29, {text:"Use this setting to measure frequency<br>and duty cycle.", className:"h2", x:44, y:-211}).to([text29],1, {autoAlpha:1})
.add(function(){changeMeterFunction("hz")})
.add(function(){changeMeterReading("0.000")})
.add(function(){ohmsPrefix.textContent = "Hz"; TweenMax.to(ohmsPrefix, .001, {autoAlpha:1})})
.to(meterKnob, .5, {rotation:hz},"-=.5")
.addPause()

.set(text30, {text:"Press Hz/% button to toggle between <br>Hz and duty cycle.", className:"h2", x:45, y:-96}).to([text30],1, {autoAlpha:1})
.add(function(){path9.setAttribute("d", "M698.8240051269531 306.1628646850586 L992.9003295898438 306.8453674316406 1116.5032653808594 220.6350555419922");path9.style.strokeWidth = 3; path9.style.stroke = black;})
.from(path9, 1.5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
.addPause()
.to([text29,text30,path9], 1, {autoAlpha:0})

//MicroAmps
.set(text31, {text:"Use µA and mA to measure currents<br>up to 400 miliAmps.", className:"h2", x:44, y:-220}).to([text31],1, {autoAlpha:1})
.add(function(){changeMeterFunction("microAmps")})
.add(function(){changeMeterReading("0.000")})
.to(meterKnob, .5, {rotation:microAmps},"-=.5")
.addPause()

.set(text32, {text:"Black lead always goes here.", className:"h2", x:43, y:-105}).to([text32],1, {autoAlpha:1})
.add(function(){path10.setAttribute("d", "M847.8240051269531 264.1628646850586 L1205.9003295898438 522.8453674316406");path10.style.strokeWidth = 3; path10.style.stroke = black;})
.from(path10, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
.addPause()

.set(text33, {text:"Red lead goes here for µA's and mA's.<br>", className:"h2", x:40, y:56}).to([text33],1, {autoAlpha:1})
.add(function(){path12.setAttribute("d", "M988.8240051269531 422.1628646850586 L1281.9003295898438 524.8453674316406");path12.style.strokeWidth = 3; path12.style.stroke = black;})
.from(path12, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
.addPause()

.to([text31,text32,text33,path10,path12], 1, {autoAlpha:0})
.add(function(){changeMeterFunction("amps")})
.add(function(){changeMeterReading("0.000")})
.to(meterKnob, .5, {rotation:amps},"-=.5")

.set(text34, {text:'Use "A" to measure currents up to<br>10 amps.<br>', className:"h2", x:61, y:-228}).to([text34],1, {autoAlpha:1})
.addPause()

.set(text35, {text:"Red lead goes here for current<br>measurements over 450 mA's.<br>", className:"h2", x:67, y:-123}).to([text35],1, {autoAlpha:1})
.add(function(){path13.setAttribute("d", "M895.8240051269531 285.1628646850586 L1131.9003295898438 523.8453674316406");path13.style.strokeWidth = 3; path13.style.stroke = black;})
.from(path13, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
.addPause()
.to([text34,text35,path13], 1, {autoAlpha:0})

.set(text36, {text:'To toggle between AC and DC amps,<br>press the "AC/DC" button.<br>', className:"h2", x:33, y:-202}).to([text36],1, {autoAlpha:1})
.add(function(){path14.setAttribute("d", "M801 206.1628646850586 L1113.9003295898438 217.84536743164062");path14.style.strokeWidth = 3; path14.style.stroke = black;})
.from(path14, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
.addPause()

.to([text36,path14], 1, {autoAlpha:0})
.add(function(){changeMeterFunction("vDc")})
.to(meterKnob, .5, {rotation:vDc},"-=.5")

.set(meterVoltagePrefix, {text:'mV'})
.to(multimeterGroup,2,{x:-93, y:502, scaleX:1.8253099708772729, scaleY:1.8253099708772729, transformOrigin: "50% 50%",ease:Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[new Error().lineNumber]},"+=0")
.set(meterPolarity, {autoAlpha:1})
.addPause()

.add(function(){path16.setAttribute("d", "M483.8240051269531 372.1628646850586 L485.90032958984375 142.84536743164062 764.5032653808594 141.6350555419922");path16.style.strokeWidth = 3; path16.style.stroke = black;})
.from(path16, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
.set(text37, {text:'"Auto" indicates auto range.', className:"h2", x:405, y:-214}).to([text37],1, {autoAlpha:1})
.addPause()

.set(text38, {text:"Samples reading and automatically<br>selects proper scale.<br>", className:"h2", x:418, y:-124}).to([text38],1, {autoAlpha:1})
.addPause()

.set(text39, {text:"Note: Auto takes a moment to display<br>reading.<br>", className:"h2", x:408, y:16}).to([text39],1, {autoAlpha:1})
.addPause()

.to([text38,text39], 1, {autoAlpha:0})

.add(function(){path17.setAttribute("d", "M493.8240051269531 402.1628646850586 L622.9003295898438 197.84536743164062 759.5032653808594 197.6350555419922");path17.style.strokeWidth = 3; path17.style.stroke = black;})
.from(path17, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
.set(text40, {text:"Indicates polarity in DC circuits.", className:"h2", x:409, y:-158}).to([text40],1, {autoAlpha:1})
.addPause()

.add(function(){path18.setAttribute("d", "M638.8240051269531 399.1628646850586 L704.9003295898438 251.84536743164062 755.5032653808594 251");path18.style.strokeWidth = 3; path18.style.stroke = black;})
.from(path18, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
.set(text41, {text:"Indicates voltage scale.", className:"h2", x:409, y:-103}).to([text41],1, {autoAlpha:1})
.addPause()

.set(text42, {text:"mV represents millivolts - 1/1000<br>of a volt.<br>", className:"h2", x:433, y:-21}).to([text42],1, {autoAlpha:1})
.addPause()

.set(text43, {text:"120.0 in the display could mean <br>120 Volts or 120 millivolts. Look at<br>this symbol to know which it is.<br>", className:"h2", x:432, y:90}).to([text43],1, {autoAlpha:1})
.addPause()

.to([text37,text40,text41,text42,text43,path16,path17,path18], 1, {autoAlpha:0})

.add(function(){path19.setAttribute("d", "M453.8240051269531 480.1628646850586 L553.9003295898438 127.84536743164062 724.5032653808594 126.63505554199219");path19.style.strokeWidth = 3; path19.style.stroke = black;})
.from(path19, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
.set(text44, {text:"Multi-function button.", className:"h2", x:377, y:-228}).to([text44],1, {autoAlpha:1})
.addPause()

.set(text45, {text:"For voltage and current measurements -<br>toggles between AC and DC.<br>", className:"h2", x:379, y:-136}).to([text45],1, {autoAlpha:1})
.addPause()

.set(text46, {text:"For diode/continuity - toggles tone<br>off and on.<br>", className:"h2", x:439, y:-18}).to([text46],1, {autoAlpha:1})
.addPause()

.set(text47, {text:"For frequency/duty cycle - toggles<br>between the 2 functions.<br>", className:"h2", x:443, y:95}).to([text47],1, {autoAlpha:1})
.addPause()

.to([text45,text46,text47], 1, {autoAlpha:0})
.add(function(){path24.setAttribute("d", "M522.8240051269531 479.1628646850586 L609.9003295898438 180.84536743164062 730.5032653808594 180.6350555419922");path24.style.strokeWidth = 3; path24.style.stroke = black;})
.from(path24, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
.set(text48, {text:"Changes the input range of meter.", className:"h2", x:377, y:-177}).to([text48],1, {autoAlpha:1})
.addPause()


.set(text49, {text:"Low range - readings less than<br>10 units.<br>", className:"h2", x:425, y:-103}).to([text49],1, {autoAlpha:1})

.add(function(){path25.setAttribute("d", "M783.8240051269531 251.1628646850586 L540.9003295898438 252.84536743164062 537.5032653808594 412.6350555419922");path27.style.strokeWidth = 3; path27.style.stroke = black;})
.from(path25, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
.addPause()
.set(text50, {text:"Next range - readings less than<br>100 units.<br>", className:"h2", x:425, y:-7}).to([text50],1, {autoAlpha:1})
.to(path25, 1, {autoAlpha:0},"-=1")
.add(function(){changeMeterReading("00.00")})
.add(function(){path29.setAttribute("d", "M783.8240051269531 350.1628646850586 L573.9003295898438 350.8453674316406 562.5032653808594 409.6350555419922");path29.style.strokeWidth = 3; path29.style.stroke = red;})
.from(path29, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
.addPause()

.set(text51, {text:"Next range - readings less than<br>1000 units.<br>", className:"h2", x:425, y:85}).to([text51],1, {autoAlpha:1})
.to(path29, 1, {autoAlpha:0},"-=1")
.add(function(){changeMeterReading("000.0")})
.add(function(){path85.setAttribute("d", "M782.8240051269531 435 L582.9003295898438 435 582.5032653808594 418.6350555419922");path85.style.strokeWidth = 3; path85.style.stroke = red;})
.from(path85, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
.addPause()

.set(text52, {text:"Next range - readings up to<br>9,999 units.<br>", className:"h2", x:425, y:179}).to([text52],1, {autoAlpha:1})
.to(path85, 1, {autoAlpha:0},"-=1")
.add(function(){changeMeterReading("0000")})
.addPause()

.to([text49,text50,text51,text52], 1, {autoAlpha:0})
.add(function(){path35.setAttribute("d", "M597.8240051269531 478.1628646850586 L660.9003295898438 240.84536743164062 731 239.6350555419922");path35.style.strokeWidth = 3; path35.style.stroke = black;})
.from(path35, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
.set(text53, {text:"Stores the current meter reading.", className:"h2", x:377, y:-115}).to([text53],1, {autoAlpha:1})
.addPause()

.add(function(){path36.setAttribute("d", "M660.8240051269531 477.1628646850586 L700.9003295898438 295.8453674316406 731 295.6350555419922");path36.style.strokeWidth = 3; path36.style.stroke = black;})
.from(path36, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})

.add(function(){path93.setAttribute("d", "M658.8240051269531 476.1628646850586 L703.9003295898438 295.8453674316406 731 295.6350555419922");path93.style.strokeWidth = 3; path93.style.stroke = black;})
.from(path93, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
.set(text54, {text:"When the button is pressed, subsequent<br>readings are displayed relative to the<br>stored value when pressed.", className:"h2", x:382, y:-59}).to([text54],1, {autoAlpha:1})
.addPause()

.to([text44,text48,text53,text54, path19,path24,path35,path36,multimeterGroup,path93], 1, {autoAlpha:0})
.to(text55, 1, {autoAlpha:0, y:"-=100"})

.set(text58, {text:"Electricity is the flow of electrons in a substance.", className:"h2", x:144, y:-226}).to([text58],1, {autoAlpha:1})
.addPause()

.set(text59, {text:"Under normal circumstance electrons are not in a state of flow.", className:"h2", x:37, y:-167}).to([text59],1, {autoAlpha:1})
.addPause()

.set(text60, {text:"If a force called voltage is applied to a circuit, electrons will flow.", className:"h2", x:33, y:-106}).to([text60],1, {autoAlpha:1})
.addPause()
.to([text58,text59,text60], 1, {autoAlpha:0})
//Attraction Illustration
.set(text76, {text:"L1 is attracted to neutral similar to how magnets<br>&nbsp;are attracted to one another.", className:"h2", x:147, y:-203}).to([text76],1, {autoAlpha:1})

.from([attractionDiagram],1, {autoAlpha:0})
.from(s5L1, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
.from(s5A1,.001,{autoAlpha:0})
.from(s5T1,1,{autoAlpha:0})
.addPause()
.to(text76,1,{autoAlpha:0})

.set(text65, {text:"The same attraction exists between L2 and neutral.", className:"h2", x:112, y:-184}).to([text65],1, {autoAlpha:1})
.from(s5L2, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
.from(s5A2,.001,{autoAlpha:0})
.addPause()
.to(text65,1,{autoAlpha:0})

.set(text66, {text:"Same attraction between L1 and L2 except the<br>attraction is twice as strong.<br>", className:"h2", x:163, y:-204}).to([text66],1, {autoAlpha:1})
.from(s5L3, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
.from([s5A3, s5A4],.001,{autoAlpha:0})
.from(s5T2,1,{autoAlpha:0})
.addPause()

.set(text84, {text:"If a conductive path is placed between any of the attractive<br>forces, current will flow.", className:"h2", x:62, y:176}).to([text84],1, {autoAlpha:1})
.addPause()

.to([text66,text84,attractionDiagram],1,{autoAlpha:0})

//Breaker Box
.from(breakerBox, 1, {autoAlpha:0})
.staggerFromTo([path3023,path3025,path3027,path3029], .7, {drawSVG:'100% 100%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})

.set(text61, {text:"The attractive forces (voltage) used in our<br>appliances come from the consumers<br>breaker box.<br>", className:"h2",  x:358, y:-194}).to([text61],1, {autoAlpha:1})
.addPause()

.staggerFromTo([path3031,path3033,path3683,path3685], 1.5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.from(g3729,1,{autoAlpha:0})

//Position Meter
.to(multimeterGroup,.001,{x:528, y:138, scaleX:1.0757507519454834, scaleY:1.0757507519454834, transformOrigin: "50% 50%",ease:Power0.easeNone,})
.add(function(){changeMeterFunction("vAc")})
.to(meterKnob, .5, {rotation:vAc},"-=.5")
.to([text61,meterPolarity], 1, {autoAlpha:0})
//Meter leads on left
.to(blackLead, .001 ,{morphSVG:"m 93.62045,282.58556 c 0,0 -41.02931,243.07612 -105.12045,97.41444 -44,-100 -25,-228 -25,-228"})
.to(redLead, .001, {morphSVG:"m 139.79781,277.16315 c 0,0 -65.029311,245.07612 -129.120456,99.41444 -44,-100 -34,-226 -34,-226"})
.to([redLead,blackLead,multimeterGroup], 1, {autoAlpha:1})
.to([meterPolarity], 1, {autoAlpha:0},"-=1")
.addPause()

.to(blackLead, 1 ,{morphSVG:"M 93.480472,282.09292 C 50,600 -200,350 -206.78873443603516, 440.4323272705078"})
.to(redLead, 1 ,{morphSVG:"M 144.211,283.432 C 50,600 -200,350 -206.78873443603516, 408.4323272705078"})
.add(function(){changeMeterReading("240.0")})
.set(meterVoltagePrefix, {text:"V"})
.to([display], .5, {scaleX:2, scaleY:2, transformOrigin: '50% 50%'})
.to(displayBorder, .5, {stroke:red},"-=.5")
.addPause()
.to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%'})
.to(displayBorder, .5, {stroke:black},"-=.5")

.to(redLead, 1 ,{morphSVG:"M 144.211,283.432 C 50,600 -200,400 -207.78873443603516, 370.4323272705078"})
.add(function(){changeMeterReading("120.0")})
.set(meterVoltagePrefix, {text:"V"})
.to([display], .5, {scaleX:2, scaleY:2, transformOrigin: '50% 50%'})
.to(displayBorder, .5, {stroke:red},"-=.5")
.addPause()
.to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%'})
.to(displayBorder, .5, {stroke:black},"-=.5")

.to(redLead, 1 ,{morphSVG:"M 144.211,283.432 C 50,600 -200,400 -207.78873443603516, 336.4323272705078"})
.add(function(){changeMeterReading("120.0")})
.set(meterVoltagePrefix, {text:"V"})
.to([display], .5, {scaleX:2, scaleY:2, transformOrigin: '50% 50%'})
.to(displayBorder, .5, {stroke:red},"-=.5")
.addPause()
.to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%'})
.to(displayBorder, .5, {stroke:black},"-=.5")

.to(blackLead, 1 ,{morphSVG:"M 93.480472,282.09292 C 50,600 -200,300 -208.78873443603516, 409.4323272705078"})
.add(function(){changeMeterReading("120.0")})
.set(meterVoltagePrefix, {text:"V"})
.to([display], .5, {scaleX:2, scaleY:2, transformOrigin: '50% 50%'})
.to(displayBorder, .5, {stroke:red},"-=.5")
.addPause()
.to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%'})
.to(displayBorder, .5, {stroke:black},"-=.5")

.to(redLead, 1 ,{morphSVG:"M 144.211,283.432 C 50,600 -200,350 -208.78873443603516, 369.4323272705078"})
.add(function(){changeMeterReading("120.0")})
.set(meterVoltagePrefix, {text:"V"})
.to([display], .5, {scaleX:2, scaleY:2, transformOrigin: '50% 50%'})
.to(displayBorder, .5, {stroke:red},"-=.5")
.addPause()
.to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%'})
.to(displayBorder, .5, {stroke:black},"-=.5")

.to(blackLead, 1 ,{morphSVG:"M 93.480472,282.09292 C 50,600 -200,300 -208.78873443603516, 337.4323272705078"})
.add(function(){changeMeterReading("000.0")})
.set(meterVoltagePrefix, {text:"V"})
.to([display], .5, {scaleX:2, scaleY:2, transformOrigin: '50% 50%'})
.to(displayBorder, .5, {stroke:red},"-=.5")
.addPause()
.to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%'})
.to(displayBorder, .5, {stroke:black},"-=.5")

.to(multimeterGroup, 1, {autoAlpha:0})
.from([text4365],1, {autoAlpha:0})
.addPause()
.from([text4369],1, {autoAlpha:0})
.addPause()
.from([text4373],1, {autoAlpha:0})
.addPause()


.to([text4365,text4369,text4373], 1, {autoAlpha:0})
.from(text4451,1,{autoAlpha:0})
.addPause()

.from(text4455,1,{autoAlpha:0})
.addPause()

.from(text4459,1,{autoAlpha:0})
.addPause()

.from(text4463,1,{autoAlpha:0})
.addPause()

.from(text4467,1,{autoAlpha:0})
.addPause()

.from(text4471,1,{autoAlpha:0})
.addPause()

.from(text4475,1,{autoAlpha:0})
.addPause()

.from(text4479,1,{autoAlpha:0})
.addPause()
.to([text4451,text4455,text4459,text4463,text4467,text4471,text4475,text4475,text4479,breakerBox,path3023,path3025,path3027,path3029,path3031,path3033,path3683,path3685,g3729],1,{autoAlpha:0})

//Strip Circuit


.to(["#text3798-6","#text3798-70","#text3798-4-0","#path2435","#path2435-6","#text3798-62","#text3798-4","#path2435-6-9-0","#text3798-8","#path2435-2","#path2435-6-9","#path2435-6-9-4-0","#path2435-6-9-1","#path2435-6-9-7","#text3798-7","#path2435-5","#path2435-6-8","#text3798-2","#text3798-84","#text3798-1","#path2435-6-9-4","#text3798-5-5","#path2435-6-9-77","#path2435-6-9-74","#text3798-9","#path2435-8","#path2435-6-0","#text3798-84-7","#text3798-84-3","#text3798-1-6","#text3798-1-3","#path2435-6-9-7-3-4","#path2435-6-9-7-3","#path2435-6-9-7-3-1","#path2435-6-9-8","#text3798-3","#text3798-69","#text3798-628-0","#text3798-79-4","#text3798-82","#text3798-82-1","#path2435-8-1-7-9","#path2435-6-0-3-6-9","#text2953","#path2435-6-9-1-7","#text2957","#path2435-6-9-1-1","#path4047","#path4351","#text5530","#path2435-6-9-1-1-3","#gndSymbol",doubleThrow, doubleThrow,morphLine1,morphLine1copy],.001,{autoAlpha:0})
.to([path2641,path2649,path7589,s2,path2645,s1,path7233,path2651,s3,path7250,path2653,s4,path7559,heater,path7089,s6,coil1,path2663copy,path2435,morphLine1], .001, {drawSVG:'0% 0%'})
.from(strip1,.001,{autoAlpha:0})
.to(text86,1,{autoAlpha:0})

.set([path2641,path2649,path7589,s2,path2645,s1,path7233,path2651,s3,path7250,path2653,s4,path7559,heater,path7089,s6,path2643,path2673,coil1,path7246,path2647,path7259,path2671,r2,path7178,r1,path2657,path7265,path2669,path3396,r3,path7593,path2663,path7591,r4,path2661,path7272,path7124,morphLine1], {stroke:black,strokeWidth:3,autoAlpha:1})
.set(text87, {text:"As mentioned before, L1 is attracted to and trying to<br>equalize with neutral.", className:"h2", x:108, y:-277}).to([text87],1, {autoAlpha:1})

.from(['#text2953'],1, {autoAlpha:0},"-=.5")
.from(['#path2435-6-9-1-7'],.001, {autoAlpha:0})
.to(coil1, .001 ,{morphSVG:"#morphLine1"})
.to(s2,.001,{rotation:30,transformOrigin:"0% 100%"})

.staggerFromTo([path2641], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.staggerFromTo([path2649], .15, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.staggerFromTo([path7589], .15, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})

.staggerFromTo([s2], .15, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.staggerFromTo([path7246], .5, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
.staggerFromTo([coil1], .15, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.staggerFromTo([path2673], .5, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
.staggerFromTo([path2643], .5, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
.from(['#text2957',"#path2435-6-9-1-1","#text3798-70",path4047,path4351],1, {autoAlpha:0})
.addPause()

.to(['#text87'],1, {autoAlpha:0})
.set(text70, {text:"Anything wrong with this circuit?", className:"h2", x:271, y:36}).to([text70],1, {autoAlpha:01})
.addPause()
.to(['#text70'],1, {autoAlpha:0})

.set(text71, {text:"Direct Short - No Load.", className:"h2", x:329, y:37}).to([text71],1, {autoAlpha:1})
.addPause()

.to(['#text71'],1, {autoAlpha:0})
.set(text73, {text:"Motor", className:"h3", x:592, y:-30},"-=1")
.to(coil1, .5,{morphSVG:"#coil1"})
.to([text73],1, {autoAlpha:1},"-=.5")

var motorTl=new TimelineMax({repeat:-1})
motorTl.to(motorBorder,1,{rotation:360,ease: Power0.easeNone, transformOrigin:"50% 50%"})

mainTl
.from(motorBorder,1,{autoAlpha:0})
.addPause()

.to(['#text71'],.5, {autoAlpha:0})
.set(text74, {text:"Anything wrong with this circuit?", className:"h2", x:268, y:56}).to([text74],1, {autoAlpha:1})
.addPause()

.to(['#text74'],1, {autoAlpha:0})
.set(text75, {text:"No control over the motor.", className:"h2", x:317, y:56})
.to([text75],1, {autoAlpha:1})
.add(function(){motorTl.play()})
.addPause()

.from(['#path2435-2','#path2435-6-9'],1, {autoAlpha:0})
.to(s2,.5,{rotation:0,transformOrigin:"0% 100%"},"-=1")
.add(function(){motorTl.pause()})
.to([text75],1, {autoAlpha:0})
.set(text77, {text:"Switch open, motor stops.", className:"h2", x:327, y:62}).to([text77],1, {autoAlpha:1})
.addPause()


.to(['#text77'],1, {autoAlpha:0})
.set(text78, {text:"Switch closes, motor runs.", className:"h2", x:318, y:62}).to([text78],1, {autoAlpha:1})
.to(s2,.5,{rotation:30,transformOrigin:"0% 100%"})
.add(function(){motorTl.play()})
.addPause()

.to(['#text78', motorBorder,text73],1, {autoAlpha:0})
.to(s2,.5,{rotation:0,transformOrigin:"0% 100%"},"-=1")
.set(text82, {text:"This type of circuit is called a series circuit.", className:"h2", x:188, y:-224}).to([text82],1, {autoAlpha:1})
.add(function(){motorTl.pause()})
.addPause()

.set(text83, {text:"Current flow is the same at any point in the circuit.", className:"h2", x:135, y:66}).to([text83],1, {autoAlpha:1})
.addPause()
.to([text82,text83],1, {autoAlpha:0})

.staggerFromTo([path7233,path2651], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.5)
.from(['#path2435-5'],.001, {autoAlpha:0})
.staggerFromTo([s3], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})

.from(['#path2435-6-8'],.001, {autoAlpha:0})
.staggerFromTo([path2657], .5, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
.staggerFromTo([r1], .5, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
.staggerFromTo([path7178], .5, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
.staggerFromTo([r2], .5, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
.staggerFromTo([path2671], .25, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
.staggerFromTo([path7259], .5, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})


.set(text83, {text:"This circuit is parallel to the first circuit.", className:"h2",  x:221, y:101}).to([text83],1, {autoAlpha:1})
.addPause()

.set(text79, {text:"Current flow in this circuit will be different than the first circuit.<br>", className:"h2", x:47, y:158}).to([text79],1, {autoAlpha:1})
.addPause()

.to(['#text83',text79],1, {autoAlpha:0})
.staggerFromTo([path7250], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.staggerFromTo([path2653], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.from(['#path2435-8'],.001, {autoAlpha:0})
.staggerFromTo([s4], .25, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.from(['#path2435-6-0'],.001, {autoAlpha:0})
.staggerFromTo([path2663], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.staggerFromTo([path7593], .25, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
.staggerFromTo([r3], .5, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
.staggerFromTo([path3396], .25, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
.staggerFromTo([path2669], .5, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
.staggerFromTo([path7265], .5, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
.set(text80, {text:"Parallel Branch", className:"h3",  x:501, y:79}).to([text80],1, {autoAlpha:1},"-=1.5")

.staggerFromTo([path2661], .35, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
.staggerFromTo([r4], .5, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
.staggerFromTo([path7591], .5, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
.set(text81, {text:"Parallel Branch", className:"h3", x:504, y:164}).to([text81],1, {autoAlpha:1})
.addPause()

.set(text86, {text:"The 2 parallel branches are in parallel with the<br>original parallel branches.<br>", className:"h3", x:261, y:211}).to([text86],1, {autoAlpha:1})
.addPause()

.to(['#text86',text80,text81],1, {autoAlpha:0})
.staggerFromTo([path7559], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.staggerFromTo([heater], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.staggerFromTo([path7089], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.from(['#path2435-8-1-7-9'],.001, {autoAlpha:0})
.staggerFromTo([s6], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.from(['#path2435-6-0-3-6-9'],.001, {autoAlpha:0})
.staggerFromTo([path7124], .7, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
.staggerFromTo([path7272], .4, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
.set(text90, {text:"Another parallel branch.", className:"h3", x:474, y:222}).to([text90],1, {autoAlpha:1})
.from(['#text3798-628-0', '#text3798-79-4'],1, {autoAlpha:0},"-=3")
.addPause()

.to(['#text90'],1, {autoAlpha:0})
.staggerFromTo([path2645,s1], .001, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.from(['#path2435','#path2435-6','#text3798-4-0','#text3798-6','#text3798-62','#text5530','#gndSymbol','#text3798-4','#text3798-8','#text3798-4','#text3798-7','#text3798-2','#text3798-84','#text3798-1','#text3798-5-5','#text3798-9','#text3798-69','#text3798-84-7','#text3798-1-6','#text3798-3','#text3798-3','#text3798-1-3','#text3798-84-3','#text3798-1-3','#text3798-84-3','#text3798-82','#text3798-82-1','#path2435-6-9-0','#path2435-6-9-7','#path2435-6-9-74','#path2435-6-9-8','#path2435-6-9-77','#path2435-6-9-1',"#path2435-6-9-7-3-4","#path2435-6-9-7-3","#path2435-6-9-7-3-1"],.001, {autoAlpha:0})
.staggerFromTo([path2647], .001, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
.to(strip1,1,{x:-100, y:50, scaleX:.9, scaleY:.9, transformOrigin: "50% 50%",ease:Power0.easeNone})
.set(text91, {text:"As mentioned before, L1 is trying to get to neutral.", className:"h3", x:41, y:-247}).to([text91],1, {autoAlpha:1})
.set([path2641copy,path2649copy,path7589copy,s2copy,path2645copy,s1copy], {stroke:red})
.staggerFromTo([path2641copy,path2649copy,path7589copy,s2copy,path2645copy,s1copy], .3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.3)
.set([path7233copy,path2651copy,s3copy,path7250copy,path2653copy,s4copy], {stroke:red})
.staggerFromTo([path7233copy,path2651copy,s3copy,path7250copy,path2653copy,s4copy], .3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.3)
.set([path7559copy,heatercopy,path7089copy,s6copy], {stroke:red})
.staggerFromTo([path7559copy,heatercopy,path7089copy,s6copy], .3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.3)
.set(text88, {text:"All paths are blocked<br>by open switches.<br>", className:"h3", x:643, y:-21}).to([text88],1, {autoAlpha:1})
.addPause()
.to([text91,text88],1,{autoAlpha:0})

.set([path2643copy,path2673copy,coil1copy,path7246copy,path2647copy], {stroke:blue})
.staggerFromTo([path2643copy,path2673copy,coil1copy,path7246copy,path2647copy], .3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.3)
.set([path7259copy,path2671copy,r2copy,path7178copy,r1copy,path2657copy], {stroke:blue})
.staggerFromTo([path7259copy,path2671copy,r2copy,path7178copy,r1copy,path2657copy], .3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.3)
.set([path7265copy,path2669copy,path3396copy,r3copy,path7593copy], {stroke:blue})
.staggerFromTo([path7265copy,path2669copy,path3396copy,r3copy,path7593copy], .3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.3)
.set([path2663copy], {stroke:blue})
.staggerFromTo([path2663copy], .3, {drawSVG:'100% 100%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.3)
.set([path7591copy,r4copy,path2661copy], {stroke:blue})
.staggerFromTo([path7591copy,r4copy,path2661copy], .3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.3)
.set([path7272copy], {stroke:blue})
.staggerFromTo([path7272copy], .3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.3)
.set([path7124copy], {stroke:blue})
.staggerFromTo([path7124copy], .3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.3)
.set(text57, {text:"The same is true with neutral.<br>", className:"h3", x:140, y:-235}).to([text57],1, {autoAlpha:1})
.addPause()
.to(text57,1,{autoAlpha:0})

.set(text62, {text:"120 volts is dropped across<br>each of the switches.<br>", className:"h3", x:155, y:-235}).to([text62],1, {autoAlpha:1})
.set(display,{y:"+=1.5"})


.to(multimeterGroup,.001,{x:574, y:115, scaleX:1.0757507519454834, scaleY:1.0757507519454834, transformOrigin: "50% 50%",ease:Power0.easeNone})
.to(blackLead, .001 ,{morphSVG:"m 93.62045,282.58556 c 0,0 -41.02931,243.07612 -105.12045,97.41444 -44,-100 -25,-228 -25,-228"})
.to(redLead, .001, {morphSVG:"m 139.79781,277.16315 c 0,0 -65.029311,245.07612 -129.120456,99.41444 -44,-100 -34,-226 -34,-226"})
.to(multimeterGroup,1,{autoAlpha:1})

.to(blackLead, 1 ,{morphSVG:"M 93.480472,282.09292 C 50,600 -500,500 -595.7887344360352, 151.4323272705078"})
.to(redLead, 1 ,{morphSVG:"M 144.211,283.432 C 50,600 -500,500 -562.7887344360352, 151.4323272705078"})
.add(function(){changeMeterReading("120.0")})
.to([display], .5, {scaleX:2, scaleY:2, transformOrigin: '50% 50%'})
.to(displayBorder, .5, {stroke:red},"-=.5")
.addPause()
.to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:0})
.to(displayBorder, .5, {stroke:black},"-=.5")

.to(blackLead, .25 ,{morphSVG:"M 93.480472,282.09292 C 50,600 -500,500 -595.7887344360352, 202.4323272705078"})
.to(redLead, .25 ,{morphSVG:"M 144.211,283.432 C 50,600 -500,500 -563.7887344360352, 202.4323272705078"})
.add(function(){changeMeterReading("120.0")})
.to([display], .5, {scaleX:2, scaleY:2, transformOrigin: '50% 50%'})
.to(displayBorder, .5, {stroke:red},"-=.5")
.addPause()
.to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:0})
.to(displayBorder, .5, {stroke:black},"-=.5")

.to(blackLead, .25 ,{morphSVG:"M 93.480472,282.09292 C 50,600 -500,500 -596.7887344360352, 261.4323272705078"})
.to(redLead, .25 ,{morphSVG:"M 144.211,283.432 C 50,600 -500,500 -561.7887344360352, 261.4323272705078"})
.add(function(){changeMeterReading("120.0")})
.to([display], .5, {scaleX:2, scaleY:2, transformOrigin: '50% 50%'})
.to(displayBorder, .5, {stroke:red},"-=.5")
.addPause()
.to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:0})
.to(displayBorder, .5, {stroke:black},"-=.5")

.to(blackLead, .25 ,{morphSVG:"M 93.480472,282.09292 C 50,600 -500,500 -594.7887344360352, 326.4323272705078"})
.to(redLead, .25 ,{morphSVG:"M 144.211,283.432 C 50,600 -500,500 -562.7887344360352, 329.4323272705078"})
.add(function(){changeMeterReading("120.0")})
.to([display], .5, {scaleX:2, scaleY:2, transformOrigin: '50% 50%'})
.to(displayBorder, .5, {stroke:red},"-=.5")
.addPause()
.to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:0})
.to(displayBorder, .5, {stroke:black},"-=.5")

.to(blackLead, .5,{morphSVG:"M 93.480472,282.09292 C 50,600 -500,500 -378.78873443603516, 398.4323272705078"})
.to(redLead, .5,{morphSVG:"M 144.211,283.432 C 50,600 -500,500 -346.78873443603516, 401.4323272705078"})
.add(function(){changeMeterReading("120.0")})
.to([display], .5, {scaleX:2, scaleY:2, transformOrigin: '50% 50%'})
.to(displayBorder, .5, {stroke:red},"-=.5")
.addPause()
.to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:0})
.to([displayBorder], .5, {stroke:black},"-=.5")
.to(text62,1,{autoAlpha:0})

.set(text63, {text:"If 120 volts is dropped across switch 5,<br>how much voltage is dropped across the <br>240 watt heater?", className:"h3", x:89, y:-281}).to([text63],1, {autoAlpha:1})
.addPause()

.to(blackLead, .5,{morphSVG:"M 93.480472,282.09292 C 50,600 -500,500 -573.7887344360352, 400.4323272705078"})
.to(redLead, .5,{morphSVG:"M 144.211,283.432 C 50,600 -500,500 -479.78873443603516, 400.4323272705078"})
.add(function(){changeMeterReading("000.0")})
.to([display], .5, {scaleX:2, scaleY:2, transformOrigin: '50% 50%'})
.to(displayBorder, .5, {stroke:red},"-=.5")
.addPause()
.to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:0})
.to([displayBorder], .5, {stroke:black},"-=.5")
.to(text63,1,{autoAlpha:0})

.set(text67, {text:"0 volts because all of the supply voltage<br>is dropped by the open switch.<br>", className:"h3", x:95, y:-256}).to([text67],1, {autoAlpha:1})
.addPause()

.to(['#text67'],1, {autoAlpha:0})
.set(text92, {text:"In a series circuit voltage will be dropped in <br>proportion to the resistance of each component<br>in the circuit.<br>", className:"h3", x:70, y:-279}).to([text92],1, {autoAlpha:1})
.addPause()

.to(['#text92'],1, {autoAlpha:0})
.set(text69, {text:"The resistance of an open switch is infinite so all<br>of the voltage will be dropped across the switch.<br>", className:"h3", x:51, y:-255}).to([text69],1, {autoAlpha:1})
.addPause()
.to(['#text69'],1, {autoAlpha:0})

// .to(multimeterGroup,1,{autoAlpha:0},"-=1")
.to(blackLead, 1 ,{morphSVG:"m 93.62045,282.58556 c 0,0 -41.02931,243.07612 -105.12045,97.41444 -44,-100 -25,-228 -25,-228"})
.to(redLead, 1, {morphSVG:"m 139.79781,277.16315 c 0,0 -65.029311,245.07612 -129.120456,99.41444 -44,-100 -34,-226 -34,-226"},"-=1")

//Clear Diagram Highlights

.to([path2641copy,path2649copy,path7589copy,s2copy,path2645copy,s1copy,path7233copy,path2651copy,s3copy,path7250copy,path2653copy,s4copy,path7559copy,heatercopy,path7089copy,s6copy,path2643copy,path2673copy,coil1copy,path7246copy,path2647copy,path7259copy,path2671copy,r2copy,path7178copy,r1copy,path2657copy,path7265copy,path2669copy,path3396copy,r3copy,path7593copy,path7591copy,r4copy,path2661copy,path7272copy,path7124copy,path2663copy], .3, {drawSVG:'0% 0%'})

.to([s3,s3copy],1,{rotation:30, transformOrigin: '0% 100%'})
.set(ohmsPrefix, {text:""})
.set(meterVoltagePrefix, {text:""})
.add(function(){changeMeterFunction("ohms")})
.to(meterKnob, .5, {rotation:ohms})

.to(blackLead, 1 ,{morphSVG:"M 93.480472,282.09292 C 50,600 -200,200 -679.7887344360352, 201.4323272705078"})
.to(redLead, 1 ,{morphSVG:"M 144.211,283.432 C 50,600 -600,500 -562.7887344360352, 261.4323272705078"})
.set(text55, {text:"With power disconnected, what resistance<br>would the meter read?<br>", className:"h3", x:83, y:-254}).to([text55],1, {autoAlpha:1})
.addPause()

.add(function(){changeMeterReading("0.000")})
.set(ohmsPrefix, {text:"Ω"})
.to([display], .5, {scaleX:1.7, scaleY:1.7, transformOrigin: '50% 50%'})
.to(displayBorder, .5, {stroke:red},"-=.5")
.addPause()
.to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:0})
.to(displayBorder, .5, {stroke:black},"-=.5")

.staggerFromTo([path7233copy,path2651copy], .4, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.4)
.staggerFromTo([s3copy], .25, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})

.set(text93, {text:"Because meter is reading this circuit.", className:"h3 blackBg", x:4, y:57}).to([text93],1, {autoAlpha:1})
.addPause()
.to(['#text55',text93],1, {autoAlpha:0})
.to(["#path7233copy",path2651copy,s3copy], 1, {autoAlpha:0},"-=1")

.to(blackLead, 1 ,{morphSVG:"M 93.480472,282.09292 C 50,600 -200,500 -203.78873443603516, 327.4323272705078"})
.to(['#text55'],1, {autoAlpha:1})
.addPause()
.add(function(){changeMeterReading("20.00")})
.to([display], .5, {scaleX:1.7, scaleY:1.7, transformOrigin: '50% 50%'})
.to(displayBorder, .5, {stroke:red},"-=.5")
.addPause()
.to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:0})
.to(displayBorder, .5, {stroke:black},"-=.5")


.set([path2657copy,r1copy,path7178copy,r2copy,path2671copy,path7265copy], {stroke:red})
.staggerFromTo([path2657copy,r1copy,path7178copy,r2copy], .7, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone},.7)
.staggerFromTo([path2671copy], .25, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
.staggerFromTo([path7265copy], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.set(text94, {text:"Meter is reading this circuit.<br>", className:"h3 blackBg", x:288, y:-35}).to([text94],1, {autoAlpha:1})
.addPause()

.to([text55,text94,path2657copy,r1copy,path7178copy,r2copy,path2671copy,path7265copy],1, {autoAlpha:0})
.to(redLead, 1 ,{morphSVG:"M 144.211,283.432 C 50,600 -500,500 -562.7887344360352, 329.4323272705078"})
.add(function(){changeMeterReading("00.00")})
.to(blackLead, 1 ,{morphSVG:"M 93.480472,282.09292 C 50,600 -200,500 -286.78873443603516, 329.4323272705078"})
.to(['#text55'],1, {autoAlpha:1})
.addPause()


.add(function(){changeMeterReading("10.00")})
.to([display], .5, {scaleX:1.7, scaleY:1.7, transformOrigin: '50% 50%'})
.to(displayBorder, .5, {stroke:red},"-=.5")
.addPause()
.to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:0})
.to(displayBorder, .5, {stroke:black},"-=.5")

.set([path2663copy,path2661copy,r4copy,path7591copy,path7593copy,r3copy,path3396copy], {stroke:red})
.staggerFromTo([path2663copy], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.5)
.staggerFromTo([path2661copy], .3, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone},.3)
.staggerFromTo([r4copy], .3, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone},.3)
.staggerFromTo([path7591copy], .3, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone},.3)
.set(text95, {text:"Path 1 20 Ω", className:"h3 blackBg", x:326, y:158}).to([text95],1, {autoAlpha:1})
.addPause()

.staggerFromTo([path7593copy], .5, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone},.5)
.staggerFromTo([r3copy], .5, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone},.5)
.staggerFromTo([path3396copy], .5, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone},.5)
.set(text96, {text:"Path 2 20 Ω", className:"h3 blackBg", x:317, y:22}).to([text96],1, {autoAlpha:1})
.addPause()

.set(text97, {text:"Is the resistance doubled or halved<br>by the parallel circuit?<br>", className:"h3 blackBg", x:109, y:-74}).to([text97],1, {autoAlpha:1})
.addPause()
.to(['#text97'],1, {autoAlpha:0})

.set(text98, {text:"Halved because the parallel circuit offers<br>another path for current to flow.<br>", className:"h3 blackBg", x:85, y:-77}).to([text98],1, {autoAlpha:1})
.addPause()

.to([text55,text98,text96,text95,strip1,multimeterGroup],1, {autoAlpha:0})

.set(text99, {text:"Voltage, current, resistance and power (watts) are all affected<br>be each other.<br>", className:"h2", x:34, y:-275}).to([text99],1, {autoAlpha:1})
.addPause()

.to(['#text99'],1, {autoAlpha:0})
.set(text100, {text:"The Ohm's law chart below shows their relationships.", className:"h2", x:114, y:-274}).to([text100],1, {autoAlpha:1})
.from(['#ohmsLawchart'],1, {autoAlpha:0},"-=1")
.addPause()

.to([path14309,path14545],1,{opacity:.1})
.set(text101, {text:"Current Formulas", className:"h2", x:66, y:-155}).to([text101],1, {autoAlpha:1},"-=1")
.addPause()

.to([path14309,path14545],1,{opacity:1})
.to([path14525,path14535],1,{opacity:.1},"-=1")
.set(text102, {text:"Voltage Formulas", className:"h2", x:664, y:-149}).to([text102],1, {autoAlpha:1})
.addPause()

.to([path14525,path14535],1,{opacity:1})
.to([path14522,path14540],1,{opacity:.1},"-=1")
.set(text103, {text:"Resistance Formulas", className:"h2", x:668, y:163}).to([text103],1, {autoAlpha:1})
.addPause()

.to([path14522,path14540],1,{opacity:1})
.to([path14530,path143096],1,{opacity:.1},"-=1")
.set(text104, {text:"Power Formulas", className:"h2", x:82, y:152}).to([text104],1, {autoAlpha:1})
.addPause()

.to([text100,text101,text102,text103,text104,ohmsLawchart],1, {autoAlpha:0})
.set(text105, {text:"<a href='http://www.ohmslawcalculator.com/ohms-law-calculator'>Ohm's Law Calculator</a>", className:"h2", x:334, y:-274}).to([text105],1, {autoAlpha:1})


























// .to(text63,1,{autoAlpha:0})
// .set([strip1H2copy], {stroke:black, strokeWidth:10})
// .from([strip1H2copy], 2.5, {drawSVG: '0%', ease: Power0.easeNone})
// .set(text63, {text:"Red lead is electrically the same as neutral.<br>", className:"h3 blackBg", x:74, y:118}).to([text63],1, {autoAlpha:1})



// .set(text91, {text:"All of the supply voltage is dropped<br>across the open switches.<br>", className:"h2 blackBg", x:220, y:32}).from([text91],1, {autoAlpha:0})
// .addPause()
// .to(text91,1,{autoAlpha:0})

// .to([s3,s3copy],1,{rotation:31, transformOrigin: '0% 100%'})
// .to(path2657copy,.001,{stroke:red})
// .add(function(){changeMeterReading("000.0")})
// .set(text85, {text:"When switch closes 0 volts is<br>dropped across the switch.<br>", className:"h2 blackBg", x:72, y:-40}).from([text85],1, {autoAlpha:0})
// .addPause()

// .set(text90, {text:"That leaves 120 volts for<br>the 2 resistors to drop.", className:"h2 blackBg", x:233, y:107}).from([text90],1, {autoAlpha:0})
// .addPause()
// .to([text85,text90],1,{autoAlpha:0})

// .set(text94, {text:"120 volts will now be dropped<br>proportionally to the resistance<br>of each resistor.<br>", className:"h2 blackBg", x:74, y:-101}).from([text94],1, {autoAlpha:0})
// .addPause()

// .to(blackLead, 1 ,{morphSVG:"M 93.480472,282.09292 C 50,600 -500,500 -466.78873443603516, 263.4323272705078"})
// .to(redLead, 1 ,{morphSVG:"M 144.211,283.432 C 50,600 -500,500 -396.78873443603516, 260.4323272705078"})
// .add(function(){changeMeterReading("60.00")})
// .to([display], .5, {scaleX:2, scaleY:2, transformOrigin: '50% 50%'})
// .to(displayBorder, .5, {stroke:red},"-=.5")
// .addPause()
// .to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:0})
// .to(displayBorder, .5, {stroke:black},"-=.5")
// .addPause()

// .to(blackLead, 1 ,{morphSVG:"M 93.480472,282.09292 C 50,600 -500,500 -314.78873443603516, 262.4323272705078"})
// .to(redLead, 1 ,{morphSVG:"M 144.211,283.432 C 50,600 -500,500 -241.78873443603516, 259.4323272705078"})
// .add(function(){changeMeterReading("60.00")})
// .to([display], .5, {scaleX:2, scaleY:2, transformOrigin: '50% 50%'})
// .to(displayBorder, .5, {stroke:red},"-=.5")
// .addPause()
// .to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:0})
// .to(displayBorder, .5, {stroke:black},"-=.5")
// .addPause()

// // .to([multimeterGroup,text94],1,{autoAlpha:0})
// .to(blackLead, .001 ,{morphSVG:"m 93.62045,282.58556 c 0,0 -41.02931,243.07612 -105.12045,97.41444 -44,-100 -25,-228 -25,-228"})
// .to(redLead, .001, {morphSVG:"m 139.79781,277.16315 c 0,0 -65.029311,245.07612 -129.120456,99.41444 -44,-100 -34,-226 -34,-226"})

// //Explain Resistance

// .add(function(){path62.setAttribute("d", "M419.8240051269531 182.1628646850586 L417.90032958984375 377.8453674316406 930.5032653808594 376.6350555419922 931.5032653808594 185.6350555419922");path62.style.strokeWidth = 7; path62.style.stroke = black;})
// .from(path62, 3, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
// .set(text95, {text:"This type of circuit is called a series circuit because<br>all components are inline with the supply voltage.<br>", className:"h2 blackBg", x:155, y:-237}).from([text95],1, {autoAlpha:0})
// .addPause()
// .to(path62,1,{autoAlpha:0})

// .add(function(){path64.setAttribute("d", "M419.8240051269531 184.1628646850586 L417.90032958984375 376.8453674316406 507.5032653808594 377.6350555419922");path64.style.strokeWidth = 7; path64.style.stroke = black;})
// .from(path64, 2, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
// .set(text96, {text:"Switch", className:"h3 blackBg", x:121, y:40}).from([text96],1, {autoAlpha:0})
// .addPause()

// .add(function(){path65.setAttribute("d", "M544.8240051269531 378.1628646850586 L652.9003295898438 377.8453674316406");path65.style.strokeWidth = 7; path65.style.stroke = black;}).from(path65, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
// .set(text97, {text:"Resistor 1", className:"h3 blackBg", x:253, y:35}).from([text97],1, {autoAlpha:0})
// .addPause()

// .add(function(){path67.setAttribute("d", "M725.8240051269531 377.1628646850586 L813.9003295898438 376.8453674316406");path67.style.strokeWidth = 7; path67.style.stroke = black;})
// .from(path67, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
// .set(text98, {text:"Resistor 2", className:"h3 blackBg", x:420, y:35}).from([text98],1, {autoAlpha:0})
// .addPause()

// .add(function(){path69.setAttribute("d", "M886.8240051269531 377.1628646850586 L932.9003295898438 376.8453674316406 931.5032653808594 184.6350555419922");path69.style.strokeWidth = 7; path69.style.stroke = black;})
// .from(path69, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
// .addPause()
// .to([text95,text96,text97,text98,path64,path65,path67,path69],1,{autoAlpha:0})
// .to([s3,s3copy],1,{rotation:0, transformOrigin: '0% 100%'},"-=1")
// .addPause()



// .add(function(){path73.setAttribute("d", "M419.8240051269531 186.1628646850586 L418.90032958984375 312.8453674316406 464.5032653808594 311");path73.style.strokeWidth = 7; path73.style.stroke = black;})
// .from(path73, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})

// .set(text100, {text:"When a circuit comes to a branch, the branch<br>circuits are called parallel circuits.<br>", className:"h3 blackBg", x:59, y:-217}).from([text100],1, {autoAlpha:0})
// .addPause()

// .add(function(){path72.setAttribute("d", "M463.8240051269531 313.1628646850586 L728.9003295898438 312.8453674316406");path72.style.strokeWidth = 7; path72.style.stroke = black;})
// .from(path72, 1.25, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})

// .set(text99, {text:"Branch 1", className:"h3 blackBg", x:152, y:25}).from([text99],1, {autoAlpha:0})
// .addPause()

// .add(function(){path75.setAttribute("d", "M464.8240051269531 313.1628646850586 L464.90032958984375 259.8453674316406 732.5032653808594 260.6350555419922 730.5032653808594 314.6350555419922");path75.style.strokeWidth = 7; path75.style.stroke = black;})
// .from(path75, 1.5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
// .set(text101, {text:"Branch 2", className:"h3 blackBg", x:213, y:-82}).from([text101],1, {autoAlpha:0})
// .addPause()

// .to([text99,text100,text101,path73,path72,path75],1,{autoAlpha:0})

// .set(text102, {text:"If switch1 and 2 are open, what will the<br>meter read between points A and D?&nbsp;", className:"h3 blackBg", x:87, y:-199}).from([text102],1, {autoAlpha:0})
// .add(function(){changeMeterReading("0.000")})
// .to([multimeterGroup],1,{autoAlpha:1})
// .addPause()

// .to(blackLead, 1 ,{morphSVG:"M 93.480472,282.09292 C 50,600 -500,500 -678.7887344360352, 201.4323272705078"})
// .to(redLead, 1 ,{morphSVG:"M 144.211,283.432 C 50,600 -500,500 -563.7887344360352, 201.4323272705078"})
// .addPause()
// .add(function(){changeMeterReading("120.0")})
// .to([display], .5, {scaleX:2, scaleY:2, transformOrigin: '50% 50%'})
// .to(displayBorder, .5, {stroke:red},"-=.5")
// .addPause()
// .to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:0})
// .to(displayBorder, .5, {stroke:black},"-=.5")
// .addPause()
// .to(text102,1,{autoAlpha:0})
// .set(text103, {text:"The meter reads 120.0 volts because all of<br>the voltage is dropped across the 2 switches.<br>", className:"h3 blackBg", x:66, y:-201}).from([text103],1, {autoAlpha:0})
// .addPause()

// .set(text104, {text:"The black lead is electrically<br>the same as L1.<br>", className:"h3 blackBg", x:79, y:-130}).from([text104],1, {autoAlpha:0})
// .add(function(){path77.setAttribute("d", "M419.8240051269531 312.1628646850586 L420.90032958984375 185.84536743164062");path77.style.strokeWidth = 7; path77.style.stroke = black;})
// .from(path77, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
// .addPause()

// .set(text105, {text:"The red lead is electrically<br>the same as neutral.<br>", className:"h3 blackBg", x:250, y:-63}).from([text105],1, {autoAlpha:0})
// .add(function(){path79.setAttribute("d", "M544.8240051269531 312.1628646850586 L930.9003295898438 312.8453674316406 931.5032653808594 185.6350555419922");path79.style.strokeWidth = 7; path79.style.stroke = black;})
// .from(path79, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
// .addPause()
// .to([text103,text104,text105,path77,path79],1,{autoAlpha:0})
// .to(blackLead, 1 ,{morphSVG:"m 93.62045,282.58556 c 0,0 -41.02931,243.07612 -105.12045,97.41444 -44,-100 -25,-228 -25,-228"},"-=1")
// .to(redLead, 1, {morphSVG:"m 139.79781,277.16315 c 0,0 -65.029311,245.07612 -129.120456,99.41444 -44,-100 -34,-226 -34,-226"},"-=1")
// .to([multimeterGroup, strip1],1,{autoAlpha:0},"-=1")



// .to(strip1,1,{autoAlpha:1})

// .set(text109, {text:"Use Amp Probe WX5X604 to make current measurements.", className:"h3 blackBg", x:-1, y:-204}).from([text109,ampProbe],1, {autoAlpha:0})
// .addPause()
// .to([text109,ampProbe],1,{autoAlpha:0})

// .set(text110, {text:"Based on current = volts/resistance, what would the <br>current reading be in the heater circuit?&nbsp;", className:"h3 blackBg", x:37, y:-212}).from([text110],1, {autoAlpha:0})
// .addPause()

// .add(function(){path81.setAttribute("d", "M527.8240051269531 485.1628646850586 L637.9003295898438 484.8453674316406 635.5032653808594 560.6350555419922 530.5032653808594 559.6350555419922 529.5032653808594 485.6350555419922");path81.style.strokeWidth = 3; path81.style.stroke = black;})
// .from(path81, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})