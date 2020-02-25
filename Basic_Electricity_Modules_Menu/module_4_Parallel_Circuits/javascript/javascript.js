slide = new XMLHttpRequest();
slide.open("GET","slide.svg",false);
slide.overrideMimeType("image/svg+xml");
slide.send("");
var slide= document.getElementById("main").appendChild(slide.responseXML.documentElement);
var slideTl = new TimelineMax({paused:true});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Resize Window
var svgWindow = document.getElementById("main");
var svg = d3.select(svgContent);
function resizeSVG(){
  var width = svgWindow.clientWidth;
  var height = svgWindow.clientHeight;
  svg
  .attr("width", width)
  .attr("height", height);
}
resizeSVG();
window.addEventListener("resize", resizeSVG)


//Audio
slideAudio.onplay = function() {
  slideTl.play();
};

slideAudio.onpause = function() {
  slideTl.pause();
};

slideAudio.onseeked = function() {
  slideTl.time(slideAudio.currentTime);
}

slideAudio.ontimeupdate = function() {
  slideTl.time(slideAudio.currentTime);
};

function playAudio(){
  slideAudio.play();
}

function pausePlayer(){
  slideAudio.pause();
}
//End Audio

highlighterSelected = true;
var originalLineSize = .5;
var highlightedWidth = 1.45;
var l1Color = 'rgb(0, 0, 0)';
var neutralColor = 'rgb(0,0,255)';
var energizedLoad = 'rgb(255,165,0)';
var deviceType = "not mobile";
var compensation = 0;
//Hide Code
var gArray = document.getElementsByTagName("g");
var tArray = document.getElementsByTagName("text");
var imageArray = document.getElementsByTagName("image");
var pathArray = document.getElementsByTagName("path");
var rectArray = document.getElementsByTagName("rect");
var objectArray=[];

for (i=0; i<gArray.length; i++) {
	objectArray.push(gArray[i]);
}
for (i=0; i<tArray.length; i++) {
	objectArray.push(tArray[i]);
}
for (i=0; i<imageArray.length; i++) {
	objectArray.push(imageArray[i]);
}
for (i=0; i<pathArray.length; i++) {
	objectArray.push(pathArray[i]);
}
for (i=0; i<rectArray.length; i++) {
	objectArray.push(rectArray[i]);
}
for (i=0; i<objectArray.length; i++) {
	objectArray[i].style.display="inline";
	groupNameSplit = objectArray[i].id.split("_");
	switch(groupNameSplit[1]) {
		case "hide":
		TweenMax.to(objectArray[i], .01, {autoAlpha:0})
		break;
		case "current":
		TweenMax.to(objectArray[i], .01, {autoAlpha:0})
		break;
	}
}
//End Hide Code

//Code for each diagram with current and highlights
var diag1 = document.getElementById("diag1_hide").getElementsByTagName("path");
var diag1Length=diag1.length;
var linesWithCurrentArray=[];

for(i=0; i<diag1Length; i++){
	//Make all lines same size, stroke, line-cap
	diag1[i].setAttribute('stroke','black');
	diag1[i].setAttribute('fill','none');
	diag1[i].style['stroke-width']=1;
	pathLastName = diag1[i].id.split("_")
	//Start current copies.
	var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	path.setAttribute('stroke','black');
	path.setAttribute('fill','none');
	path.setAttribute('id',diag1[i].id + 'Current');
	path.style['stroke-width']=1;
	path.style['stroke-linecap']="round";
	path.setAttribute("d", diag1[i].getAttribute("d"));
	// TweenMax.to(path,0,{autoAlpha:0});
	diag1_hide.appendChild(path);
	if(pathLastName[1] != "noCurrent"){
		linesWithCurrentArray.push(path)
	}
	//Start trace copies.
	var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	path.setAttribute('stroke','red');
	path.setAttribute('fill','none');
	path.setAttribute('id',diag1[i].id + 'Trace');
	path.style['stroke-width']=3;
	path.style['stroke-linecap']="round";
	path.setAttribute("d", diag1[i].getAttribute("d"));
	diag1_hide.appendChild(path);
	TweenMax.to(path, 0, {drawSVG:'0% 0%'});
}

// Start Meter Numbers
var onesArray=[oneA_hide,oneB_hide,oneC_hide,oneD_hide,oneE_hide,oneF_hide,oneG_hide];
var tensArray=[tenA_hide,tenB_hide,tenC_hide,tenD_hide,tenE_hide,tenF_hide,tenG_hide];
var hunsArray=[hunA_hide,hunB_hide,hunC_hide,hunD_hide,hunE_hide,hunF_hide,hunG_hide];
var thousArray=[thouA_hide,thouB_hide,thouC_hide,thouD_hide,thouE_hide,thouF_hide,thouG_hide];

var onesZeroArray=[oneA_hide,oneB_hide,oneC_hide,oneD_hide,oneE_hide,oneF_hide];
var onesOneArray=[oneB_hide,oneC_hide];
var onesTwoArray=[oneA_hide,oneB_hide,oneD_hide,oneE_hide,oneG_hide];
var onesThreeArray=[oneA_hide,oneB_hide,oneC_hide,oneD_hide,oneG_hide];
var onesFourArray=[oneB_hide,oneC_hide,oneF_hide,oneG_hide];
var onesFiveArray=[oneA_hide,oneC_hide,oneD_hide,oneF_hide,oneG_hide];
var onesSixArray=[oneA_hide,oneC_hide,oneD_hide,oneE_hide,oneF_hide,oneG_hide];
var onesSevenArray=[oneA_hide,oneB_hide,oneC_hide];
var onesEightArray=[oneA_hide,oneB_hide,oneC_hide,oneD_hide,oneE_hide,oneF_hide,oneG_hide];
var onesNineArray=[oneA_hide,oneB_hide,oneC_hide,oneD_hide,oneF_hide,oneG_hide];

var tensZeroArray=[tenA_hide,tenB_hide,tenC_hide,tenD_hide,tenE_hide,tenF_hide];
var tensOneArray=[tenB_hide,tenC_hide];
var tensTwoArray=[tenA_hide,tenB_hide,tenD_hide,tenE_hide,tenG_hide];
var tensThreeArray=[tenA_hide,tenB_hide,tenC_hide,tenD_hide,tenG_hide];
var tensFourArray=[tenB_hide,tenC_hide,tenF_hide,tenG_hide];
var tensFiveArray=[tenA_hide,tenC_hide,tenD_hide,tenF_hide,tenG_hide];
var tensSixArray=[tenA_hide,tenC_hide,tenD_hide,tenE_hide,tenF_hide,tenG_hide];
var tensSevenArray=[tenA_hide,tenB_hide,tenC_hide];
var tensEightArray=[tenA_hide,tenB_hide,tenC_hide,tenD_hide,tenE_hide,tenF_hide,tenG_hide];
var tensNineArray=[tenA_hide,tenB_hide,tenC_hide,tenD_hide,tenF_hide,tenG_hide];

var hunsZeroArray=[hunA_hide,hunB_hide,hunC_hide,hunD_hide,hunE_hide,hunF_hide];
var hunsOneArray=[hunB_hide,hunC_hide];
var hunsTwoArray=[hunA_hide,hunB_hide,hunD_hide,hunE_hide,hunG_hide];
var hunsThreeArray=[hunA_hide,hunB_hide,hunC_hide,hunD_hide,hunG_hide];
var hunsFourArray=[hunB_hide,hunC_hide,hunF_hide,hunG_hide];
var hunsFiveArray=[hunA_hide,hunC_hide,hunD_hide,hunF_hide,hunG_hide];
var hunsSixArray=[hunA_hide,hunC_hide,hunD_hide,hunE_hide,hunF_hide,hunG_hide];
var hunsSevenArray=[hunA_hide,hunB_hide,hunC_hide];
var hunsEightArray=[hunA_hide,hunB_hide,hunC_hide,hunD_hide,hunE_hide,hunF_hide,hunG_hide];
var hunsNineArray=[hunA_hide,hunB_hide,hunC_hide,hunD_hide,hunF_hide,hunG_hide];

var thousZeroArray=[thouA_hide,thouB_hide,thouC_hide,thouD_hide,thouE_hide,thouF_hide];
var thousOneArray=[thouB_hide,thouC_hide];
var thousTwoArray=[thouA_hide,thouB_hide,thouD_hide,thouE_hide,thouG_hide];
var thousThreeArray=[thouA_hide,thouB_hide,thouC_hide,thouD_hide,thouG_hide];
var thousFourArray=[thouB_hide,thouC_hide,thouF_hide,thouG_hide];
var thousFiveArray=[thouA_hide,thouC_hide,thouD_hide,thouF_hide,thouG_hide];
var thousSixArray=[thouA_hide,thouC_hide,thouD_hide,thouE_hide,thouF_hide,thouG_hide];
var thousSevenArray=[thouA_hide,thouB_hide,thouC_hide];
var thousEightArray=[thouA_hide,thouB_hide,thouC_hide,thouD_hide,thouE_hide,thouF_hide,thouG_hide];
var thousNineArray=[thouA_hide,thouB_hide,thouC_hide,thouD_hide,thouF_hide,thouG_hide];
//End Meter Numbers

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Current Diagram 1 Branch 1
var diag1branch1CurrentArray = [diag1Wire1Current,diag1s1Current,path7122Current,diag1r1Current,diag1Wire4Current];
var diag1branch1CurrentTl = new TimelineMax({repeat:-1})
diag1branch1CurrentTl.timeScale(.5);
diag1branch1CurrentTl
.to(diag1branch1CurrentArray, 0, {strokeDasharray:"2,6", ease:Linear.easeNone, strokeWidth:2.5})
.to(diag1branch1CurrentArray, 0.1, {strokeDashoffset:"-=8", repeat:-1, ease:Linear.easeNone,yoyo:false})

//Current Diagram 1 Branch 2
var diag1branch2CurrentArray = [path6824Current,diag1s2Current,diag1Wire2Current,diag1r2Current,path6826Current];
var diag1branch2CurrentTl = new TimelineMax({repeat:-1})
diag1branch2CurrentTl.timeScale(.5);
diag1branch2CurrentTl
.to(diag1branch2CurrentArray, 0, {strokeDasharray:"2,6", ease:Linear.easeNone, strokeWidth:2.5})
.to(diag1branch2CurrentArray, 0.1, {strokeDashoffset:"-=8", repeat:-1, ease:Linear.easeNone,yoyo:false})

TweenMax.to(mainBackground,0,{fill:"white"})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

TweenMax.to(["#r1SliderKnob"], 1, {y:-20})
TweenMax.to(["#r2SliderKnob"], 1, {y:-20})
sliderI1Text.textContent = ".68"
sliderI2Text.textContent = ".68"
sliderItText.textContent = "1.36"
sliderRtText.textContent = "10"

var r1Slider=Draggable.create(r1SliderKnob, {
  type: "y",
  bounds: "#r1SliderContainer",
  onDrag: function() {
  	TweenMax.to([sliderR1CO,sliderI1CO,sliderR1Text,sliderI1CO,sliderI1Text],0,{fill:"red"});
	sliderR1Text['innerText' in sliderR1Text ? "innerText" : "textContent"] = (Math.abs(r1SliderKnob._gsTransform.y) + 1) .toFixed(2);
	sliderI1Text['innerText' in sliderI1Text ? "innerText" : "textContent"] = (13.6/sliderR1Text.textContent).toFixed(2);
	sliderRtText['innerText' in sliderRtText ? "innerText" : "textContent"] = (1/((1/(Math.abs(sliderR1Text.textContent)) + (1/(Math.abs(sliderR2Text.textContent)))))).toFixed(2);
	
	sliderItText['innerText' in sliderItText ? "innerText" : "textContent"] = (Math.abs(sliderI1Text.textContent) + (Math.abs(sliderI2Text.textContent))).toFixed(2);
  },
  onDragEnd: function() {
    TweenMax.to([sliderR1CO,sliderI1CO,sliderR1Text,sliderI1CO,sliderI1Text],0,{fill:"black"});
  },
});

var r2Slider=Draggable.create(r2SliderKnob, {
  type: "y",
  bounds: "#r2SliderContainer",
  onDrag: function() {
  	TweenMax.to([sliderR2CO,sliderI2CO,sliderR2Text,sliderI2Text],0,{fill:"red"});
  	sliderR2Text['innerText' in sliderR2Text ? "innerText" : "textContent"] = (Math.abs(r2SliderKnob._gsTransform.y) + 1) .toFixed(2);
	sliderRtText['innerText' in sliderRtText ? "innerText" : "textContent"] = (1/((1/(Math.abs(sliderR1Text.textContent)) + (1/(Math.abs(sliderR2Text.textContent)))))).toFixed(2);
	sliderI2Text['innerText' in sliderI2Text ? "innerText" : "textContent"] = (13.6/sliderR2Text.textContent).toFixed(2);
	sliderItText['innerText' in sliderItText ? "innerText" : "textContent"] = (Math.abs(sliderI1Text.textContent) + (Math.abs(sliderI2Text.textContent))) .toFixed(2);
  },
  onDragEnd: function() {
    TweenMax.to([sliderR2CO,sliderI2CO,sliderR2Text,sliderI2Text],0,{fill:"black"});
  },
});


function pausePlayer(){
	slideTl.pause();
	slideAudio.pause();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

slideTl
.to(headingText,1,{autoAlpha:0, delay:1})
.to(diag1_hide, 1, {autoAlpha:1})
.to([diag1Wire1Trace,diag1s1Trace,path7122Trace,diag1r1Trace,diag1Wire4Trace], 0, {stroke:"orange"})
.staggerFromTo([diag1Wire1Trace,path6824Trace], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:7})
.staggerFromTo([diag1s1Trace,diag1s2Trace], .2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([path7122Trace,diag1Wire2Trace], 1.2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([diag1r1Trace,diag1r2Trace], .2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([diag1Wire4Trace,path6826Trace], 2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})

//Hide diag1
.to([diag1_hide,diag1Wire1Trace,path6824Trace,diag1s1Trace,diag1s2Trace,path7122Trace,diag1Wire2Trace,diag1r1Trace,diag1r2Trace,diag1Wire4Trace,path6826Trace], 1, {autoAlpha:0, delay:1})
.to(openingTextVoltage_hide, 0, {autoAlpha:1})
.to(openingTextH1_hide, 1, {autoAlpha:1, delay:.25})

//opening text bullets
.to(openingText1_hide, 1, {autoAlpha:1, delay:2.5})
.to(openingText2_hide, 1, {autoAlpha:1, delay:4})
.to(openingText3_hide, 1, {autoAlpha:1, delay:4.5})
.to(openingText4_hide, 1, {autoAlpha:1, delay:5})

//hide opening bullets and show diag1
.to(diag1_hide, 0, {x:-150, y:100, scaleX:1, scaleY:1, transformOrigin:"50 50"})
.to(openingTextVoltage_hide, 2, {x:400, y:-145, scaleX:.35, scaleY:.35, transformOrigin:"50 50", delay:3.5})
.to(firstTextBorder_hide, 0, {autoAlpha:1, delay:0})
.to(openingText2_hide, 0, {fill:"red"})
.from(diag1_hide, 3, {autoAlpha:0, delay:-1})

//Highlight branches
.to([diag1Wire1Trace,diag1s1Trace,path7122Trace,diag1r1Trace,diag1Wire4Trace,diag1Wire1Trace,path6824Trace,diag1s1Trace,diag1s2Trace,path7122Trace,diag1Wire2Trace,diag1r1Trace,diag1r2Trace,diag1Wire4Trace,path6826Trace], 1, {autoAlpha:1, delay:.5})
.to([diag1Wire1Trace,diag1s1Trace,path7122Trace,diag1r1Trace,diag1Wire4Trace,diag1Wire1Trace,path6824Trace,diag1s1Trace,diag1s2Trace,path7122Trace,diag1Wire2Trace,diag1r1Trace,diag1r2Trace,diag1Wire4Trace,path6826Trace], 1, {autoAlpha:0, delay:1})

//Show ohms law chart for current
.to([chartE_hide,chartR_hide,chartP_hide], 1, {autoAlpha:1, delay:0})
.to([ohmsLawChart_hide,IequalsEoverR_hide], 1, {autoAlpha:1, delay:-1})

//Show olt1
.to([diag1Wire1Trace,diag1s1Trace,path7122Trace,diag1r1Trace,diag1Wire4Trace], 1, {autoAlpha:.5, delay:3.25})
.to(olt1_hide, 1, {autoAlpha:1, delay:.5})
.from(batteryBorder, 1, {autoAlpha:0, delay:-1})
.staggerFromTo([oltline1], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:.25})
.to(olt2_hide, 1, {autoAlpha:1, delay:.5})
.from(r1Border, 1, {autoAlpha:0, delay:-1})
.to(olt3_hide, 1, {autoAlpha:1, delay:.5})
.to([diag1Wire1Trace,diag1s1Trace,path7122Trace,diag1r1Trace,diag1Wire4Trace, batteryBorder,r1Border], 1, {autoAlpha:0, delay:0})

.to([path6824Trace,diag1s2Trace,diag1r2Trace,diag1Wire2Trace,path6826Trace], 1, {autoAlpha:.5, delay:1})
.to(olt4_hide, 1, {autoAlpha:1, delay:.5})
.to(batteryBorder, 1, {autoAlpha:1, delay:-1})
.staggerFromTo([oltline2], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:.25})
.to(olt5_hide, 1, {autoAlpha:1, delay:.5})
.from(r2Border, 1, {autoAlpha:0, delay:-1})
.to(olt6_hide, 1, {autoAlpha:1, delay:.25})
.to([path6824Trace,diag1s2Trace,diag1r2Trace,diag1Wire2Trace,path6826Trace, batteryBorder, r2Border], 1, {autoAlpha:0, delay:0})

.to(olt7_hide, 1, {autoAlpha:1, delay:2.5})
.to(olt8_hide, 1, {autoAlpha:1, delay:0})
.to(olt9_hide, 1, {autoAlpha:1, delay:0})
.to(olt10_hide, 1, {autoAlpha:1, delay:3})

//Hide olt calculations
.to([olt1_hide,olt2_hide,olt3_hide,olt4_hide,olt5_hide,olt6_hide,olt7_hide,olt8_hide,olt9_hide,olt10_hide,oltline1,oltline2], 1, {autoAlpha:0, delay:2})

//Change resistor in branch 2 to 20
.to([path6824Trace,diag1s2Trace,diag1r2Trace,diag1Wire2Trace,path6826Trace], 1, {autoAlpha:.5, delay:6})
.to(diagram1R2Resistance, 1, {autoAlpha:0, delay:0})
.to(olt1R2R_hide, 1, {autoAlpha:1, delay:-1})

//Bring back r1 calculations
.to([path6824Trace,diag1s2Trace,diag1r2Trace,diag1Wire2Trace,path6826Trace], 1, {autoAlpha:0, delay:1})
.to([diag1Wire1Trace,diag1s1Trace,path7122Trace,diag1r1Trace,diag1Wire4Trace], 1, {autoAlpha:.5, delay:1})
.to([olt1_hide,olt2_hide,olt3_hide,oltline1], 1, {autoAlpha:1, delay:3})

//Recalculate r2
.to([path6824Trace,diag1s2Trace,diag1r2Trace,diag1Wire2Trace,path6826Trace], 1, {autoAlpha:.5, delay:10})
.to([diag1Wire1Trace,diag1s1Trace,path7122Trace,diag1r1Trace,diag1Wire4Trace], 1, {autoAlpha:0, delay:-1})
.to(olt2T1_hide, 1, {autoAlpha:1, delay:1})
.staggerFromTo([olt2line1], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:.25})
.to(olt2T2_hide, 1, {autoAlpha:1, delay:.5})
.to(olt2T3_hide, 1, {autoAlpha:1, delay:.5})

.to(olt2T4_hide, 1, {autoAlpha:1, delay:18})
.to(olt2T5_hide, 1, {autoAlpha:1, delay:0})
.to(olt2T6_hide, 1, {autoAlpha:1, delay:0})
.to(olt2T7_hide, 1, {autoAlpha:1, delay:1.5})

//Hide olt calculations
.to([olt1_hide,olt2_hide,olt3_hide,oltline1,olt2T1_hide,olt2T2_hide,olt2T3_hide,olt2T4_hide,olt2T5_hide,olt2T6_hide,olt2T7_hide,olt2line1,ohmsLawChart_hide,path6824Trace,diag1s2Trace,diag1r2Trace,diag1Wire2Trace,path6826Trace], 1, {autoAlpha:0, delay:2})
.to(openingText2_hide, 0, {fill:"black"})
.to(openingText3_hide, 0, {fill:"red", delay:-1})

//Hide ohms law and show meter
.to(diag1_hide, 2, {x:100, transformOrigin:"50 50", delay:0})
.to(multimeterGroup_hide, 1, {autoAlpha:1})

//Connect meter to r1
.to(meterKnob, .5, {rotation:12, transformOrigin:"29.5 29.5"})
.to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,fourDot_hide], 0, {autoAlpha:0})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray,threeDot_hide], 0, {autoAlpha:1})
.to(blackLead, 1, {morphSVG:"#blackLead1_hide", delay:1})
.to(redLead, 1, {morphSVG:"#redLead1_hide", delay:-1})
.to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,fourDot_hide], 0, {autoAlpha:0})
.to([thousOneArray,hunsThreeArray,tensSixArray,onesZeroArray,threeDot_hide], 0, {autoAlpha:1})

//Trace to negative battery
.to([path7122Trace], 0, {stroke:"black", autoAlpha:1, delay:3})
.staggerFromTo([path7122Trace], 2, {drawSVG:'100% 100%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.to([diag1s1Trace], 0, {stroke:"black", autoAlpha:1})
.staggerFromTo([diag1s1Trace], .2, {drawSVG:'100% 100%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.to([diag1Wire1Trace], 0, {stroke:"black", autoAlpha:1})
.staggerFromTo([diag1Wire1Trace], 1.75, {drawSVG:'100% 100%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})

//Trace r1 to positive battery
.to([diag1Wire4Trace], 0, {stroke:"red", autoAlpha:1, delay:.5})
.staggerFromTo([diag1Wire4Trace], 3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})

.to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,fourDot_hide], 0, {autoAlpha:0, delay:2})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray,threeDot_hide], 0, {autoAlpha:1})
.to(blackLead, 1, {morphSVG:"#blackLead2_hide", delay:0})
.to(redLead, 1, {morphSVG:"#redLead2_hide", delay:-1})
.to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,fourDot_hide], 0, {autoAlpha:0})
.to([thousOneArray,hunsThreeArray,tensSixArray,onesZeroArray,threeDot_hide], 0, {autoAlpha:1})

//Trace r2 to the negative side of battery
.to([diag1Wire2Trace], 0, {stroke:"black", autoAlpha:1, delay:2})
.staggerFromTo([diag1Wire2Trace], 2, {drawSVG:'100% 100%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.to([diag1s2Trace], 0, {stroke:"black", autoAlpha:1, delay:0})
.staggerFromTo([diag1s2Trace], .2, {drawSVG:'100% 100%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.to([path6824Trace], 0, {stroke:"black", autoAlpha:1, delay:0})
.staggerFromTo([path6824Trace], 2, {drawSVG:'100% 100%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})

//Trace r2 to positive side of the battery
.to([path6826Trace], 0, {stroke:"red", autoAlpha:1, delay:2})
.staggerFromTo([path6826Trace], 3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})

.to(blackLead, 1, {morphSVG:blackLead, delay:2})
.to(redLead, 1, {morphSVG:redLead,delay:-1})
.to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,fourDot_hide], 0, {autoAlpha:0, delay:-1})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray,threeDot_hide], 0, {autoAlpha:1,delay:-1})
.to([diag1Wire4Trace,diag1Wire1Trace,diag1s1Trace,path7122Trace,diag1Wire2Trace,diag1s2Trace,path6824Trace,path6826Trace,], 1, {autoAlpha:0, delay:-1})

.to(openingText3_hide, 0, {fill:"black",delay:12})
.to(openingText4_hide, 0, {fill:"red", delay:0})

//Show it1 Total Current
.to(parallelResistanceFormula_hide, 1, {autoAlpha:1, delay:6.5})
.to(text7105, 1, {fill:"red", delay:-.25})
.to(text7134, 1, {fill:"red", delay:1})
.to(path7136, 1, {stroke:"red", delay:1})

.to(text7113, 1, {fill:"red", delay:0})
.to(path7140, 1, {stroke:"red", delay:-.75})
.to(text7128, 1, {fill:"red", delay:0})

.to(text7176, 1, {fill:"red", delay:.75})

.to(text7113C1, 1, {fill:"red", delay:0})
.to(path7140C2, 1, {stroke:"red", delay:-.75})
.to(text7128C2, 1, {fill:"red", delay:0})

.to(text7176C3, 1, {fill:"red", delay:.75})

.to(text7113C3, 1, {fill:"red", delay:0})
.to(path7140C3, 1, {stroke:"red", delay:-.75})
.to(text7128C4, 1, {fill:"red", delay:0})

.to([text7105,text7134,text7113,text7128,text7176,text7113C1,text7128C2,text7176C3,text7113C3,text7128C4], 1, {fill:"black",delay:2})
.to([path7136,path7140,path7140C2,path7140C3], 1, {stroke:"black", delay:-1})

//Substitue real values
.to(text7128, 1, {autoAlpha:0, delay:5})
.to(twoOhms1_hide, 1, {autoAlpha:1, delay:-1})
.to([text7113,path7140,text7128,twoOhms1_hide], 1, {autoAlpha:0, delay:2})
.to(it2denominator2_hide, 1, {autoAlpha:1, delay:-1})
.to(text7128C2, 1, {autoAlpha:0, delay:3.5})
.to(twoOhms2_hide, 1, {autoAlpha:1, delay:-1})
.to([text7113C1,path7140C2,text7128C2,twoOhms2_hide], 1, {autoAlpha:0, delay:2})
.to(it2denominator3_hide, 1, {autoAlpha:1, delay:-1})
.to([text7176C3,text7113C3,path7140C3,text7128C4], 1, {autoAlpha:0, delay:-1})
.to([it2denominator2_hide,it2denominator3_hide,text7176C3,text7176], 1, {autoAlpha:0, delay:3})
.to(it2denominator5_hide, 1, {autoAlpha:1, delay:-1})
.to([text7134,path7136,it2denominator5_hide], 1, {autoAlpha:0, delay:5})
.to(it2denominator_hide, 1, {autoAlpha:1, delay:.5})

//Explain resistanc is half is resisitance is the same
.to([diagramr1Resistance,olt1R2R_hide], 1, {fill:"red", delay:14})
.to(it2denominator_hide, 1, {fill:"red", delay:3})
.to([it2denominator_hide,diagramr1Resistance,olt1R2R_hide], 1, {fill:"black", delay:3})

//Change r2 to 5 ohms
.to(olt1R2R_hide, 1, {autoAlpha:0, delay:10})
.to(olt15OhmResistor_hide, 1, {autoAlpha:1, delay:-1})

.to(it24Ohms_hide, 1, {autoAlpha:1, delay:4})
.to(it2denominator_hide, 1, {autoAlpha:0, delay:-1})

//Hide meter show slider
.to(multimeterGroup_hide, 1, {autoAlpha:0, delay:0})
.to(ohmsLawSliders_hide, 1, {autoAlpha:1, delay:0})
.add(function(){pausePlayer()},"+=8")

//Hide all and show summary
.to(blank_hide, 1, {autoAlpha:1})
.to(summaryText1_hide, 1, {autoAlpha:1, delay:3})
.to(summaryText2_hide, 1, {autoAlpha:1, delay:4})
.to(summaryText3_hide, 1, {autoAlpha:1, delay:4})
.to(summaryText4_hide, 1, {autoAlpha:1, delay:8})

var au = document.getElementById("slideAudio");
au.onloadedmetadata = function() {
    compensation = slideAudio.duration - slideTl.duration();
    slideTl.add(TweenMax.to(dummy, compensation, {autoAlpha: 1}));
    console.log(slideAudio.duration - slideTl.duration())
};