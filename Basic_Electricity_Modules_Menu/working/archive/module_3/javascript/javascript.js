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

//Make duplicate black copy
var diagram1AllPaths = [];
var groupPaths = document.getElementById("diagram1_hide").getElementsByTagName("path");
var groupPathsLength = groupPaths.length;
for(i=0; i<groupPathsLength; i++){
	pathLastName = groupPaths[i].id.split("_")
	if(groupPaths[i].parentNode.id == "diagram1_hide"){
		var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		path.setAttribute('stroke','black');
		path.setAttribute('fill','none');
		path.setAttribute('id',groupPaths[i].id + 'copy');
		path.style['stroke-width']=1;
		path.style['stroke-linecap']="round";
		path.setAttribute("d", groupPaths[i].getAttribute("d"));
		diagram1_hide.appendChild(path);
		if(pathLastName[1] == "current"){
			path.setAttribute('opacity','0');
		}
		if(pathLastName[1] == "noCurrent"){
			path.setAttribute('opacity','0');
		}
	}
	diagram1AllPaths.push(path)
}
//End make duplicate black copy

// var diagram1AllPaths = [];
var diagram3 = document.getElementById("diagram3_hide").getElementsByTagName("path");
var diagram3Length=diagram3.length;

for(i=0; i<diagram3Length; i++){
	pathLastName = diagram3[i].id.split("_")
	//Start current copies.
	var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	path.setAttribute('stroke','blue');
	path.setAttribute('fill','none');
	path.setAttribute('id',diagram3[i].id + 'Current');
	path.style['stroke-width']=1;
	path.style['stroke-linecap']="round";
	path.setAttribute("d", diagram3[i].getAttribute("d"));
	TweenMax.to(path,0,{autoAlpha:0});
	if(pathLastName[1] != "noCurrent"){
		TweenMax.to(path, 0, {strokeDasharray:"2,6", ease:Linear.easeNone, strokeWidth:2.5})
		TweenMax.to([path], 0.1, {strokeDashoffset:"-=8", repeat:-1, ease:Linear.easeNone,yoyo:false})
	}
	diagram3_hide.appendChild(path);
	//Start trace copies.
	var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	path.setAttribute('stroke','red');
	path.setAttribute('fill','none');
	path.setAttribute('id',diagram3[i].id + 'Trace');
	path.style['stroke-width']=3;
	path.style['stroke-linecap']="round";
	path.setAttribute("d", diagram3[i].getAttribute("d"));
	diagram3_hide.appendChild(path);
	TweenMax.to(path, 0, {drawSVG:'0% 0%'});		
}




var diagram2Array = [diagram2Wire1,diagram2R2,diagram2Wire2,diagram2R3,diagram2Wire3,diagram2Wire1copy,diagram2R2copy,diagram2Wire2copy,diagram2R3copy,diagram2Wire3copy];
TweenMax.to([diagram2Array], 0, {autoAlpha:0})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
TweenMax.to([s1,s1copy],0,{rotation:20, transformOrigin:"0 20"})
TweenMax.to([onesArray,tensArray,hunsArray,thousArray], 0, {autoAlpha:0})
slideTl
.add(function(){TweenMax.to([diagram1AllPaths], 0.1, {strokeDashoffset:1, repeat:-1, ease:Linear.easeNone,yoyo:false})})
.to(headingText,1,{autoAlpha:0, delay:1})
.to(diagram1_hide,1,{autoAlpha:1, delay:0})

//Trace entire diagram then hide
// .to()
.staggerFromTo([diagram1Trace1], 2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([diagram1Trace2], 4, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})



// Characteristics of series circuit
.to([diagram1_hide,diagram1Trace1,diagram1Trace2], 1 , {autoAlpha:0, delay:1.5})
.to([firstText], 1 , {autoAlpha:1, delay:0})
.to([firstText1_hide], 1 , {autoAlpha:1, delay:0})
.to(firstText2_hide, 1 , {autoAlpha:1, delay:2.5})
.to(firstText3_hide, 1 , {autoAlpha:1, delay:3.5})
.to(firstText4_hide, 1 , {autoAlpha:1, delay:3.15})
.to([gnd1copy,gnd2copy,gnd3copy,s1copy,r1copy,gnd3copy,pos1copy,pos2copy,break1copy], 0, {autoAlpha:0, stroke:"black",delay:0})

// Move and scale Characteristics to to left
.to(firstText, 2 ,{scaleX:.35, scaleY:.35, x:425, y:-80, transformOrigin:"50 50", delay:4})
.to(firstText2_hide, 0, {fill:"red"})
.to(firstTextBorder_hide, 1, {autoAlpha:1})
.to(diagram1_hide, 1 , {autoAlpha:1, delay:-1.5})

//Show meter
.to([onesArray,tensArray,hunsArray,thousArray], 0, {autoAlpha:-1})
.to(multimeterGroup_hide, 1, {autoAlpha:1, delay:-1})

//Change meter to dc amps
.to(meterKnob, 2, {rotation:180, transformOrigin:"29.5 29.5"})
.to([onesArray,tensArray,hunsArray,thousArray], 0, {autoAlpha:0})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray,dc_hide], 0, {autoAlpha:1})


//Move meter leads
.to(blackLead, 1, {morphSVG:blackLead1_hide,delay:1.5})
.to(redLead, 1, {morphSVG:redLead1_hide,delay:-1})
.to([break1,break1copy],1, {autoAlpha:0,delay:-.5})

//Current flow on
.to([s1,s1copy],1,{rotation:0, transformOrigin:"0 20", delay:4})
.to([diagram1AllPaths], 0, {strokeDasharray:"2,6", ease:Linear.easeNone, strokeWidth:3, stroke:"black", delay:-1})
.add(function(){TweenMax.to([diagram1AllPaths], 0.1, {strokeDashoffset:"-=8", repeat:-1, ease:Linear.easeNone,yoyo:false})})
.to([pos1copy,pos2copy], 0, {stroke:"red"})
.to([r1copy], 0, {stroke:"orange"})
.to([diagram1AllPaths], 0, {autoAlpha:1})
.to([break1,break1copy,batterySymbol_noCurrentcopy],0, {autoAlpha:0})


.to([onesArray,tensArray,hunsArray,thousArray], 0, {autoAlpha:0})
.to([thousOneArray,hunsZeroArray,tensZeroArray,onesZeroArray,dc_hide,twoDot_hide], 0, {autoAlpha:1})

//Show current formula
.to(currentFormula_hide, 1, {autoAlpha:1, delay:5})
.to(currentText1_hide, 1, {autoAlpha:1, delay:5})
.to(voltageText_hide, 1, {autoAlpha:1, delay:1.5})
.to(resistanceText_hide, 1, {autoAlpha:1, delay:1.5})
.from(votageCO1, 1, {autoAlpha:0, delay:1})
.from(rect12788, 1, {autoAlpha:0, delay:1.5})

//Hide current formula
.to([currentFormula_hide,currentText1_hide,voltageText_hide,resistanceText_hide,rect12788, votageCO1], 1, {autoAlpha:0, delay:2})

//Draw R1 callout
.staggerFromTo([r1Callout], 2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:10})
//Hide R1 callout
.to(r1Callout, 1, {autoAlpha:0, delay:2})

//Open Switch, change to diagram 2


.to([s1,s1copy],1,{rotation:20, transformOrigin:"0 20", delay:0})
.to(diagram1AllPaths, .5, {autoAlpha:0, delay:-.5})
.to([gnd3,gnd3copy,r1,r1copy,pos2,pos2copy,thirteenPointSixOhms1,r1Designator], 1, {autoAlpha:0, delay:0})
.to([diagram2Array,diagram2Resistors_hide], 2, {autoAlpha:1, delay:0})
.to([onesArray,tensArray,hunsArray,thousArray], 0, {autoAlpha:0})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray,dc_hide], 0, {autoAlpha:1})
.to(firstText2_hide, 1, {fill:"black", delay:-1})
.to(firstText3_hide, 1, {fill:"red", delay:-1})



.to([s1,s1copy],1,{rotation:0, transformOrigin:"0 20", delay:2})
.to([onesArray,tensArray,hunsArray,thousArray], 0, {autoAlpha:0})
.to([thousZeroArray,hunsFiveArray,tensZeroArray,onesZeroArray,dc_hide], 0, {autoAlpha:1})
.to([gnd1copy,s1copy,gnd2copy,diagram2Wire1copy,diagram2Wire1copy,diagram2Wire1copy], 0, {strokeDasharray:"2,6", ease:Linear.easeNone, strokeWidth:3, stroke:"black", autoAlpha:1, delay:-.5})
.add(function(){TweenMax.to([gnd1copy,s1copy,gnd2copy,diagram2Wire1copy,diagram2Wire1copy,diagram2Wire1copy], 0.1, {strokeDashoffset:"-=8", repeat:-1, ease:Linear.easeNone,yoyo:false})})

//Resistors on
.to([diagram2R2copy,diagram2R3copy], 0, {strokeDasharray:"2,6", ease:Linear.easeNone, strokeWidth:3, stroke:"orange", autoAlpha:1, delay:0})
.add(function(){TweenMax.to([diagram2R2copy,diagram2R3copy], 0.1, {strokeDashoffset:"-=8", repeat:-1, ease:Linear.easeNone,yoyo:false})})

//Middle wire on
.to([diagram2Wire2copy], 0, {strokeDasharray:"2,6", ease:Linear.easeNone, strokeWidth:3, stroke:"#800000", autoAlpha:1, delay:-0.1})
.add(function(){TweenMax.to([diagram2Wire2copy], 0.1, {strokeDashoffset:"-=8", repeat:-1, ease:Linear.easeNone,yoyo:false})})

//Remaining wires on
.to([diagram2Wire3copy,pos1copy], 0, {strokeDasharray:"2,6", ease:Linear.easeNone, strokeWidth:3, stroke:"red", autoAlpha:1, delay:-0.1})
.add(function(){TweenMax.to([diagram2Wire3copy,pos1copy], 0.1, {strokeDashoffset:"-=8", repeat:-1, ease:Linear.easeNone,yoyo:false})})
.to(currentFormula_hide, 1, {autoAlpha:1, delay:8})
.to([volts1_hide,voltsCallout_hide], 1, {autoAlpha:1, delay:2})
.to([resistance1_hide,r1Callout_hide], 1, {autoAlpha:1, delay:5})
.to(plus1_hide, 1, {autoAlpha:1, delay:0})
.to([resistance2_hide,r2Callout_hide], 1, {autoAlpha:1, delay:0})
.to([resistance1_hide,resistance2_hide,plus1_hide], 1, {autoAlpha:0, delay:1})
.to(totalResistance2_hide, 1, {autoAlpha:1, delay:0})
.staggerFromTo([path7126], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:4})
.to([equals_hide,answer_hide], 1, {autoAlpha:1, delay:1})

//Go to Sum of voltages.
.to([r1Callout_hide,r2Callout_hide,voltsCallout_hide,currentFormula_hide,volts1_hide,path7126,totalResistance2_hide,equals_hide,answer_hide], 1, {autoAlpha:0, delay:2})
.to(firstText3_hide, 1, {fill:"black", delay:0})
.to(firstText4_hide, 1, {fill:"red", delay:-1})

//Move meter leads
.to(blackLead, 1, {morphSVG:blackLead})
.to(redLead, 1, {morphSVG:redLead,delay:-1})

//Meter to 0.
.to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,fourDot_hide], 0, {autoAlpha:0})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray,threeDot_hide], 0, {autoAlpha:1})
.to([break1,break1copy],1, {autoAlpha:1})

//Change diagrams.
.to([diagram2R2,diagram2R2copy,diagram2R3,diagram2R3copy,diagram2Wire1,diagram2Wire1copy,diagram2Wire2,diagram2Wire2copy,diagram2Wire3,diagram2Wire3copy,diagram2Resistors_hide],1, {autoAlpha:0})
.to([gnd3,gnd3copy,pos2,pos2copy,r1,r1copy,r1Designator],1, {autoAlpha:1,delay:-1})

//Trace negative potential highlight. HERE
.staggerFromTo([negPotTrace], 3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:12})
.to(r1Neg_hide,1,{autoAlpha:1,delay:0})

//Trace resistor.
.staggerFromTo([r1Sec1], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:1})
.staggerFromTo([r1Sec2], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([r1Sec3], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([r1Sec4], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([r1Sec5], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.to(r1Pos_hide,1,{autoAlpha:1,delay:0})
//Trace positive potential highlight.
.staggerFromTo([posPotHighlight], 3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:4})
.to(r1VoltageDrop_hide,1,{autoAlpha:1,delay:5.5})
.from([resistorPolarity, batteryPolarity], 1, {autoAlpha:0, delay:4})
.to([resistorPolarity, batteryPolarity], 1, {autoAlpha:0, delay:4})


.to(kirchoffsVoltageLaw_hide,1,{autoAlpha:1,delay:2})
.to(kirchoffsVoltageLaw_hide,1,{autoAlpha:0,delay:20})
.to(batteryVoltageText,1,{x:-87,y:-87,delay:1})
.to(plusSymbol_hide,1,{autoAlpha:1,delay:1})
.to([r1VoltageDrop_hide],1,{x:-10,y:172,delay:0})
.to([negSymbol1_hide],1,{autoAlpha:1,delay:0})
.to([equalsEquals_hide,equalsZero_hide],1,{autoAlpha:1,delay:1})




//Show diagram3
.to([diagram3_hide], 1, {autoAlpha:1, delay:3})

//Turn current flow on.
.to([diagram3Wire2Current,diagram3Wire1Current,diagram3S1Current],0,{autoAlpha:1,stroke:"black",})
.to([diagram3R1Current,diagram3R2Current,diagram3R3Current],0,{autoAlpha:1,stroke:"orange"})
.to([diagram3Wire3Current,diagram3Wire4Current,],0,{autoAlpha:1,stroke:"#800000"})
.to([diagram3Wire5Current,diagram3Wire5],0,{autoAlpha:1,stroke:"red"})

//Trace r1 to neg terminal of battery.
.to([diagram3Wire2Trace,diagram3Wire1Trace,diagram3S1Trace],0,{stroke:"black", strokeWidth:4})
.staggerFromTo([diagram3Wire2Trace], 1, {drawSVG:'100% 100%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:7.5})
.staggerFromTo([diagram3S1Trace], .1, {drawSVG:'100% 100%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([diagram3Wire1Trace], 1, {drawSVG:'100% 100%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})


//Trace r3 to battery
.to([diagram3Wire5Trace],0,{stroke:"red", strokeWidth:4})
.staggerFromTo([diagram3Wire5Trace], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:7.5})
.staggerFromTo([diagram3Wire5Trace], 1, {drawSVG:'0% 100%',immediateRender:false}, {drawSVG: '0% 0%', ease: Power0.easeNone, delay:7})

//Trace r1 to r2
.to([diagram3Wire3Trace,diagram3R1Trace],0,{stroke:"#800000", strokeWidth:4})
.staggerFromTo([diagram3R1Trace], 2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:1})
.staggerFromTo([diagram3Wire3Trace], 4, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})

//Trace r2 to r3
.to([diagram3Wire4Trace,diagram3R2Trace],0,{stroke:"#aa0000", strokeWidth:4})
.staggerFromTo([diagram3R2Trace], 2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:9})
.staggerFromTo([diagram3Wire4Trace], 2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})

//Trace r3
.to([diagram3R3Trace],0,{stroke:"#d10303", strokeWidth:4})
.staggerFromTo([diagram3R3Trace], 2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})

//Trace r3 to battery
.to([diagram3Wire5Trace],0,{stroke:"red"})
.staggerFromTo([diagram3Wire5Trace], 2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:3})

//Show kirchoff calculation

.to(v1_hide, 1, {autoAlpha:1, delay:11})
.to(diagram3Plus_hide, 1, {autoAlpha:1, delay:.5})
.from([r1Volts_hide,diag3R1Border], 1, {autoAlpha:0, delay:0})
.to(diagram3Plus2_hide, 1, {autoAlpha:1, delay:.5})
.from([r2Volts_hide,diag3R2Border], 1, {autoAlpha:0, delay:1})
.to(diagram3Plus4_hide, 1, {autoAlpha:1, delay:.2})
.from([r3Volts_hide,diag3R3Border], 1, {autoAlpha:0, delay:0})
.to(diagram3Equals_hide, 1, {autoAlpha:1, delay:0})
.to([finalAnswer_hide], 1, {autoAlpha:1, delay:0})



var au = document.getElementById("slideAudio");
au.onloadedmetadata = function() {
    compensation = slideAudio.duration - slideTl.duration();
    slideTl.add(TweenMax.to(dummy, compensation, {autoAlpha: 1}));
    console.log(slideAudio.duration - slideTl.duration())
};

// .staggerFromTo([strikeThru], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:2})
// .to(negSymbol1_hide,1,{autoAlpha:1,delay:0})
// .to([equalsZero_hide,equalsEquals_hide],1,{autoAlpha:1,delay:.9})






// var movieLength=slideTl.totalDuration();
// function convert(movieLength) {
//     console.log(Math.floor(movieLength / 60) + ":" + (movieLength % 60 ? movieLength % 60 : '00'))
// }
// convert(movieLength)