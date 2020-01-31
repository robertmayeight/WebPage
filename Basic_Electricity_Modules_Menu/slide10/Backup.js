slide = new XMLHttpRequest();
slide.open("GET","slide.svg",false);
slide.overrideMimeType("image/svg+xml");
slide.send("");
var slide= document.getElementById("main").appendChild(slide.responseXML.documentElement);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var slideTl = new TimelineMax({paused:true});

//Audio
slideAudio.onplay = function() {
	slideTl.play();
	slideTl.time(slideAudio.currentTime);
};

slideAudio.onpause = function() {
	slideTl.pause();
	slideTl.time(slideAudio.currentTime);
};

slideAudio.ontimeupdate = function() {
	slideTl.time(slideAudio.currentTime);
};

function pausePlayer(){
	slideAudio.pause();
	slideTl.time(slideAudio.currentTime);
}
//End Audio


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
	tArray[i].setAttribute('onclick','wireClicked(this.id);');
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

function wireClicked(element){
	console.log(element + "\r")
}
//End Hide Code

//Code for each diagram with current and highlights
var Diag1 = document.getElementById("Diag1_hide").getElementsByTagName("path");
var Diag1Length=Diag1.length;
var linesWithCurrentArray=[];

for(i=0; i<Diag1Length; i++){
	//Make all lines same size, stroke, line-cap
	Diag1[i].setAttribute('stroke','black');
	Diag1[i].setAttribute('fill','none');
	Diag1[i].style['stroke-width']=1;
	pathLastName = Diag1[i].id.split("_")
	//Start current copies.
	var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	path.setAttribute('onclick','wireClicked(this.id);');
	path.setAttribute('stroke','black');
	path.setAttribute('fill','none');
	path.setAttribute('id',Diag1[i].id + 'Current');
	path.style['stroke-width']=2.5;
	path.style['stroke-linecap']="round";
	path.setAttribute("d", Diag1[i].getAttribute("d"));
	TweenMax.to(path,0,{autoAlpha:0});
	Diag1_hide.appendChild(path);
	if(pathLastName[1] != "noCurrent"){
		linesWithCurrentArray.push(path)
	}
	//Start trace copies.
	var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	path.setAttribute('onclick','wireClicked(this.id);');
	path.setAttribute('stroke','red');
	path.setAttribute('fill','none');
	path.setAttribute('id',Diag1[i].id + 'Trace');
	path.style['stroke-width']=3;
	path.style['stroke-linecap']="round";
	path.setAttribute("d", Diag1[i].getAttribute("d"));
	Diag1_hide.appendChild(path);
	TweenMax.to(path, 0, {drawSVG:'0% 0%'});
}

Diag1_hide.appendChild(CurrentMeasure1_hide);
Diag1_hide.appendChild(CurrentMeasure2_hide);
Diag1_hide.appendChild(CurrentMeasure3_hide);
Diag1_hide.appendChild(Diag1R3MultiColor);
TweenMax.to(Diag1R3MultiColor, 0, {strokeWidth:4});

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
// Current Diagram 1 Main N Current
var Diag1MainCurrentNArray = [Diag1Nw1Current,Diag1S1Current,Diag1Nw2Current];
var Diag1MainCurrentNTl = new TimelineMax({repeat:-1})
Diag1MainCurrentNTl.timeScale(.5);
Diag1MainCurrentNTl
.to(Diag1MainCurrentNArray, 0, {strokeDasharray:"2,6", ease:Linear.easeNone})
.to(Diag1MainCurrentNArray, 0.1, {strokeDashoffset:"-=8", repeat:-1, ease:Linear.easeNone,yoyo:false})

// Current Diagram 1 Main P Current
var Diag1MainCurrentPArray = [Diag1Pw2Current,Diag1R3Current,Diag1Pw1Current];
var Diag1MainCurrentPTl = new TimelineMax({repeat:-1})
Diag1MainCurrentPTl.timeScale(.5);
Diag1MainCurrentPTl
.to(Diag1MainCurrentPArray, 0, {strokeDasharray:"2,6", ease:Linear.easeNone})
.to(Diag1MainCurrentPArray, 0.1, {strokeDashoffset:"-=8", repeat:-1, ease:Linear.easeNone,yoyo:false})

// Current Diagram 1 Branch 1
var Diag1Branch1CurrentArray = [Diag1Branch1Nw1Current,Diag1S3Current,Diag1Branch1Pw1Current,Diag1R1Current,Diag1Branch1Pw1Current,Diag1Branch1Nw2Current];
var Diag1Branch1CurrentTl = new TimelineMax({repeat:-1})
Diag1Branch1CurrentTl.timeScale(.5);
Diag1Branch1CurrentTl
.to(Diag1Branch1CurrentArray, 0, {strokeDasharray:"2,6", ease:Linear.easeNone})
.to(Diag1Branch1CurrentArray, 0.1, {strokeDashoffset:"-=8", repeat:-1, ease:Linear.easeNone,yoyo:false})

// Current Diagram 2 Branch 2
var Diag1Branch2CurrentArray = [Diag1Branch2Nw1Current,Diag1S2Current,Diag1Branch2Nw2Current,Diag1R2Current,Diag1Pw3Current];
var Diag1Branch2CurrentTl = new TimelineMax({repeat:-1})
Diag1Branch2CurrentTl.timeScale(.5);
Diag1Branch2CurrentTl
.to(Diag1Branch2CurrentArray, 0, {strokeDasharray:"2,6", ease:Linear.easeNone})
.to(Diag1Branch2CurrentArray, 0.1, {strokeDashoffset:"-=8", repeat:-1, ease:Linear.easeNone,yoyo:false})




TweenMax.to(mainBackground,0,{fill:"white"})
TweenMax.to([Diag1S1,Diag1S1Current,Diag1S1Trace], 0, {rotation:30, transformOrigin:"0 20"})
TweenMax.to([Diag1S2Current,Diag1S3Current,Diag1Branch1Nw2Current,Diag1Branch2Nw2Current,Diag1Branch1Nw1Current,Diag1Branch2Nw1Current,Diag1R1Current,Diag1R2Current,Diag1Pw3Current,Diag1Branch1Pw1Current], 0, {strokeWidth:2})



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

slideTl
.to(headingText,1,{autoAlpha:0, delay:1})
.to(Diag1_hide, 1, {autoAlpha:1})
.to([Diag1S1,Diag1S1Current,Diag1S1Trace], 1, {rotation:0, transformOrigin:"0 20", delay:2})
.to([Diag1Pw2,Diag1Pw3,Diag1Branch1Pw1], 0, {stroke:"purple"})
.to([Diag1Pw1], 0, {stroke:"red"})
.to([Diag1R1,Diag1R2,Diag1R3], 0, {stroke:"orange"})
.to([Diag1MainCurrentNArray,Diag1MainCurrentPArray,Diag1Branch1CurrentArray,Diag1Branch2CurrentArray], 0, {autoAlpha:1})

//Current from negative side of battery
.to([Diag1Nw1Trace,Diag1S1Trace,Diag1Nw2Trace], 0, {stroke:"black"})
.staggerFromTo([Diag1Nw1Trace], 2.5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:1})
.staggerFromTo([Diag1S1Trace], .2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([Diag1Nw2Trace], 1.5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.to(Slide1PointA_hide, 1, {autoAlpha:1})

// Current splits at parallel
.to([Diag1Nw1Trace,Diag1S1Trace,Diag1Nw2Trace,Diag1S2Trace,Diag1S3Trace,Diag1Branch1Nw2Trace,Diag1Branch2Nw2Trace,Diag1Branch1Nw1Trace,Diag1Branch2Nw1Trace], 0, {stroke:"black"})
.to([Diag1Branch1Nw1Trace,Diag1S2Trace,Diag1Branch1Nw2Trace,Diag1R1Trace,Diag1Branch1Pw1Trace,Diag1Branch2Nw1Trace,Diag1S3Trace,Diag1Branch2Nw2Trace,Diag1R2Trace,Diag1Pw3Trace], 0, {strokeWidth:2.5})
.staggerFromTo([Diag1Branch1Nw1Trace,Diag1Branch2Nw1Trace], 1.3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:6.5})

.staggerFromTo([Diag1S2Trace,Diag1S3Trace], .2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([Diag1Branch1Nw2Trace,Diag1Branch2Nw2Trace], 1.5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})

//Trace resistors
.to([Diag1R1Trace,Diag1R2Trace,Diag1R3Trace], 0, {stroke:"orange"})
.staggerFromTo([Diag1R1Trace,Diag1R2Trace], .6, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})

//Trace last part of parallel
.to([Diag1Branch1Pw1Trace,Diag1Pw3Trace,Diag1Pw2Trace], 0, {stroke:"purple"})
.staggerFromTo([Diag1Branch1Pw1Trace,Diag1Pw3Trace], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.to(Slide1PointB_hide, 1, {autoAlpha:1, delay:0})

//Trace to positive side obattery
.staggerFromTo([Diag1Pw2Trace], .75, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:2})
.staggerFromTo([Diag1R3Trace], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([Diag1Pw1Trace], 1.5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})

.to([Slide1Between_hide,Diag1Nw1Trace,Diag1S1Trace,Diag1Nw2Trace,Diag1S2Trace,Diag1S3Trace,Diag1Branch1Nw2Trace,Diag1Branch2Nw2Trace,Diag1Branch1Nw1Trace,Diag1Branch2Nw1Trace,Diag1R1Trace,Diag1R2Trace,Diag1Pw3Trace,Diag1Branch1Pw1Trace,Diag1Pw2Trace,Diag1R3Trace,Diag1Pw1Trace,Slide1PointA_hide,Slide1PointB_hide], 1, {autoAlpha:0, delay:0})

//Move diagram1 left and show meter
.to(Diag1_hide, 1, {x:100, ease: Power0.easeNone})
.to([onesArray,tensArray,hunsArray,thousArray], 0, {autoAlpha:-.5})
.to(multimeterGroup_hide, 1, {autoAlpha:1, delay:0})

//Turn off S1
.to([Diag1S1,Diag1S1Current,Diag1S1Trace], 0, {rotation:30, transformOrigin:"0 20"})
.to([Diag1MainCurrentNTl,Diag1MainCurrentPTl,Diag1Branch1CurrentTl,Diag1Branch2CurrentTl], 0, {timeScale:0})


//Change meter to dc amps
.to(meterKnob, 1.5, {rotation:180, transformOrigin:"29.5 29.5", ease: Power0.easeNone})
.to([onesArray,tensArray,hunsArray,thousArray], 0, {autoAlpha:0, delay:-1})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray,dc_hide], 0, {autoAlpha:1, delay:-1})
.to(CurrentMeasure1_hide, 1, {autoAlpha:1, delay:-1})

//MOVE METER LEADS
//For current reading 1
.to(blackLead, 1, {morphSVG:"M492.6214904785156 229.4900360107422 C 200 800 293.8432369232178 280.16650009155273 95.06498336791992 280.16650009155273", ease: Power0.easeNone, delay:0})
.to(redLead, 1, {morphSVG:"M579.4627456665039 230.07286834716797 C 200 800 361.6500053405762 280.502197265625 143.83726501464844 280.502197265625", ease: Power0.easeNone, delay:-1})
.to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,fourDot_hide], 0, {autoAlpha:0, delay:-1})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray,twoDot_hide], 0, {autoAlpha:1, delay:-1})

//Turn on s1 and read meter for current 1
.to([Diag1S1,Diag1S1Current,Diag1S1Trace], 0, {rotation:0, transformOrigin:"0 20"})
.to([Diag1MainCurrentNTl,Diag1MainCurrentPTl,Diag1Branch1CurrentTl,Diag1Branch2CurrentTl], 0, {timeScale:.5})
.to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,fourDot_hide], 0, {autoAlpha:0})
.to([thousZeroArray,hunsEightArray,tensZeroArray,onesZeroArray,twoDot_hide], 0, {autoAlpha:1})

//Turn off S1
.to([Diag1S1,Diag1S1Current,Diag1S1Trace], 0, {rotation:30, transformOrigin:"0 20", delay:4})
.to([Diag1MainCurrentNTl,Diag1MainCurrentPTl,Diag1Branch1CurrentTl,Diag1Branch2CurrentTl], 0, {timeScale:0})
.to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,fourDot_hide], 0, {autoAlpha:0})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray,twoDot_hide], 0, {autoAlpha:1})

//Move meter leads for current two measure.
.to(CurrentMeasure2_hide, 1, {autoAlpha:1, delay:0})
.to(CurrentMeasure1_hide, 1, {autoAlpha:0, delay:-1})
.to(blackLead, 1, {morphSVG:"M491.6214904785156 118.49003601074219 C 200 800 293.3432369232178 280.16650009155273 95.06498336791992 280.16650009155273", ease: Power0.easeNone, delay:0})
.to(redLead, 1, {morphSVG:"M580.8938293457031 118.48617553710938 C 200 800 362.3655471801758 280.502197265625 143.83726501464844 280.502197265625", ease: Power0.easeNone, delay:-1})
.to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,fourDot_hide], 0, {autoAlpha:0, delay:-1})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray,twoDot_hide], 0, {autoAlpha:1, delay:-1})
.to([thousZeroArray,hunsEightArray,tensZeroArray,onesZeroArray,twoDot_hide], 0, {autoAlpha:1})

//Turn on s1 and read meter for current 2
.to([Diag1S1,Diag1S1Current,Diag1S1Trace], 0, {rotation:0, transformOrigin:"0 20"})
.to([Diag1MainCurrentNTl,Diag1MainCurrentPTl,Diag1Branch1CurrentTl,Diag1Branch2CurrentTl], 0, {timeScale:.5})
.to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,fourDot_hide], 0, {autoAlpha:0})
.to([thousZeroArray,hunsEightArray,tensZeroArray,onesZeroArray,twoDot_hide], 0, {autoAlpha:1})

//Turn off S1
.to([Diag1S1,Diag1S1Current,Diag1S1Trace], 0, {rotation:30, transformOrigin:"0 20", delay:4})
.to([Diag1MainCurrentNTl,Diag1MainCurrentPTl,Diag1Branch1CurrentTl,Diag1Branch2CurrentTl], 0, {timeScale:0})
.to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,fourDot_hide], 0, {autoAlpha:0})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray,twoDot_hide], 0, {autoAlpha:1})

//MOve meter leads for current three measure.
.to(CurrentMeasure3_hide, 1, {autoAlpha:1, delay:2})
// .to(CurrentMeasure2_hide, 1, {autoAlpha:0, delay:-1})
//MOVE METER LEADS
.to(blackLead, 1, {morphSVG:"M554.6214904785156 660.4900360107422 C 200 800 324.8432369232178 280.16650009155273 95.06498336791992 280.16650009155273", ease: Power0.easeNone, delay:0})
.to(redLead, 1, {morphSVG:"M641.8938293457031 663.4861755371094 C 200 800 392.8655471801758 280.502197265625 143.83726501464844 280.502197265625", ease: Power0.easeNone, delay:-1})
.to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,fourDot_hide], 0, {autoAlpha:0, delay:-1})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray,twoDot_hide], 0, {autoAlpha:1, delay:-1})
.to(CurrentMeasure2_hide, 1, {autoAlpha:0, delay:-1})

//Turn on s1 and read meter for current 2
.to([Diag1S1,Diag1S1Current], 0, {rotation:0, transformOrigin:"0 20"})
.to([Diag1MainCurrentNTl,Diag1MainCurrentPTl,Diag1Branch1CurrentTl,Diag1Branch2CurrentTl], 0, {timeScale:.5})
.to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,fourDot_hide], 0, {autoAlpha:0})
.to([thousOneArray,hunsSixArray,tensZeroArray,onesZeroArray,twoDot_hide], 0, {autoAlpha:1})

//Change to volt meter - end leads home
.to(blackLead, 1, {morphSVG:blackLead, delay:6})
.to(redLead, 1, {morphSVG:redLead,delay:-1})
.to([onesArray,tensArray,hunsArray,thousArray], 0, {autoAlpha:0, delay:-1})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray,dc_hide], 0, {autoAlpha:1, delay:-1})
.to(CurrentMeasure3_hide, 1, {autoAlpha:0, delay:-1})

//Meter to voltage
.to(meterKnob, .5, {rotation:-10, transformOrigin:"29.5 29.5", delay:10})
//MOVE METER LEADS
.to(blackLead, 1, {morphSVG:"M462.4486083984375 449.525146484375 C 200 800 278.7567958831787 280.16650009155273 95.06498336791992 280.16650009155273", ease: Power0.easeNone, delay:0})
.to(redLead, 1, {morphSVG:"M464.8036575317383 413.0762405395508 C 200 800 304.32046127319336 280.502197265625 143.83726501464844 280.502197265625", ease: Power0.easeNone, delay:-1})
.to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,fourDot_hide], 0, {autoAlpha:0, delay:-1})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray,twoDot_hide], 0, {autoAlpha:1, delay:-1})

//Meter to Zero
.to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,,fourDot_hide], 0, {autoAlpha:0})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray,twoDot_hide], 0, {autoAlpha:1})

//Turn off S1
.to([Diag1S1,Diag1S1Current,Diag1S1Trace], 0, {rotation:30, transformOrigin:"0 20", delay:10})
.to([Diag1MainCurrentNTl,Diag1MainCurrentPTl,Diag1Branch1CurrentTl,Diag1Branch2CurrentTl], 0, {timeScale:0})

//Meter to 24
.to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,,fourDot_hide], 0, {autoAlpha:0, delay:0})
.to([thousTwoArray,hunsFourArray,tensZeroArray,onesZeroArray,threeDot_hide], 0, {autoAlpha:1})


.to([Diag1Nw2Trace,Diag1Branch1Nw1Trace,Diag1S2Trace,Diag1Branch1Nw2Trace,Diag1R1Trace,Diag1Branch1Pw1Trace,Diag1S3Trace,Diag1Branch2Nw2Trace,Diag1R2Trace,Diag1Pw3Trace,Diag1Branch2Nw1Trace,Diag1Pw2Trace,Diag1R3Trace,Diag1Pw1Trace,Diag1Nw1Trace], 0, {drawSVG: '0% 0%', ease: Power0.easeNone, delay:0})
.to([Diag1Nw2Trace,Diag1Branch1Nw1Trace,Diag1S2Trace,Diag1Branch1Nw2Trace,Diag1R1Trace,Diag1Branch1Pw1Trace,Diag1S3Trace,Diag1Branch2Nw2Trace,Diag1R2Trace,Diag1Pw3Trace,Diag1Branch2Nw1Trace,Diag1Nw1Trace], 0, {autoAlpha:1, delay:1})

//Trace black meter lead to battery
.to([Diag1Nw2Trace,Diag1Branch1Nw1Trace,Diag1S2Trace,Diag1Branch1Nw2Trace,Diag1R1Trace,Diag1Branch1Pw1Trace,Diag1S3Trace,Diag1Branch2Nw2Trace,Diag1R2Trace,Diag1Pw3Trace,Diag1Branch2Nw1Trace,Diag1Nw1Trace,Diag1Pw3Trace,Diag1Branch1Pw1Trace,Diag1Pw2Trace,Diag1R3Trace,Diag1Pw1Trace], 0, {stroke:"red", delay:0})
.staggerFromTo([Diag1Nw2Trace], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:12})
.staggerFromTo([Diag1Branch2Nw1Trace,Diag1Branch1Nw1Trace], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([Diag1S3Trace,Diag1S2Trace], .2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([Diag1Branch1Nw2Trace,Diag1Branch2Nw2Trace], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([Diag1R1Trace,Diag1R2Trace], .4, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([Diag1Pw3Trace,Diag1Branch1Pw1Trace], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.to([Diag1Pw2Trace,Diag1R3Trace,Diag1Pw1Trace], 0, {autoAlpha:1})
.staggerFromTo([Diag1Pw2Trace], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([Diag1R3Trace], .4, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([Diag1Pw1Trace], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})

//Trace red meter lead to battery
.to([Diag1Nw1Trace], 0, {stroke:"black"})
.staggerFromTo([Diag1Nw1Trace], 2.5, {drawSVG:'100% 100%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:1})

//Callout resistors
.to([Slide2ParallelR2CO_hide,Slide2ParallelR1CO_hide,Slide2ParallelR3CO_hide], 1, {autoAlpha:1, delay:3})


//Morph resistors
.to([r1Short_hide,r2Short_hide,r3Short_hide], 0, {strokeWidth:2.5, delay:3})
.to(Diag1R1, 1, {morphSVG:"#r1Short_hide"})
.to(Diag1R1Trace, 1, {morphSVG:"#r1Short_hide", delay:-1})
.to(Diag1R1Current, 1, {morphSVG:"#r1Short_hide", delay:-1})

.to(Diag1R2, 1, {morphSVG:"#r2Short_hide", delay:-1})
.to(Diag1R2Trace, 1, {morphSVG:"#r2Short_hide", delay:-1})
.to(Diag1R2Current, 1, {morphSVG:"#r2Short_hide", delay:-1})

.to(Diag1R3, 1, {morphSVG:"#r3Short_hide", delay:-1})
.to(Diag1R3Trace, 1, {morphSVG:"#r3Short_hide", delay:-1})
.to(Diag1R3Current, 1, {morphSVG:"#r3Short_hide", delay:-1})

//Bring back to normal
.to([Slide2ParallelR2CO_hide,Slide2ParallelR1CO_hide,Slide2ParallelR3CO_hide], 1, {autoAlpha:0, delay:10})
.to(Diag1R1, 1, {morphSVG:"#Diag1R1"})
.to(Diag1R1Trace, 1, {morphSVG:"#Diag1R1Trace", delay:-1})
.to(Diag1R1Current, 1, {morphSVG:"#Diag1R1Current", delay:-1})

.to(Diag1R2, 1, {morphSVG:"#Diag1R2", delay:-1})
.to(Diag1R2Trace, 1, {morphSVG:"#Diag1R2Trace", delay:-1})
.to(Diag1R2Current, 1, {morphSVG:"#Diag1R2Current", delay:-1})

.to(Diag1R3, 1, {morphSVG:"#Diag1R3", delay:-1})
.to(Diag1R3Trace, 1, {morphSVG:"#Diag1R3Trace", delay:-1})
.to(Diag1R3Current, 1, {morphSVG:"#Diag1R3Current", delay:-1})

.to([Diag1Nw2Trace,Diag1Branch1Nw1Trace,Diag1S2Trace,Diag1Branch1Nw2Trace,Diag1R1Trace,Diag1Branch1Pw1Trace,Diag1S3Trace,Diag1Branch2Nw2Trace,Diag1R2Trace,Diag1Pw3Trace,Diag1Branch2Nw1Trace,Diag1Pw2Trace,Diag1R3Trace,Diag1Pw1Trace,Diag1Nw1Trace], 1, {drawSVG: '0% 0%', ease: Power0.easeNone, delay:-1})

//Turn off S1
.to([Diag1S1,Diag1S1Current,Diag1S1Trace], 0, {rotation:30, transformOrigin:"0 20", delay:-1})
.to([Diag1MainCurrentNTl,Diag1MainCurrentPTl,Diag1Branch1CurrentTl,Diag1Branch2CurrentTl], 0, {timeScale:0})
//Meter to Zero
.to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,,fourDot_hide], 0, {autoAlpha:0})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray,twoDot_hide], 0, {autoAlpha:1})
//MOVE METER LEADS
.to(blackLead, 1, {morphSVG:"M603.4486083984375 117.525146484375 C 200 800 349.2567958831787 280.16650009155273 95.06498336791992 280.16650009155273", ease: Power0.easeNone, delay:0})
.to(redLead, 1, {morphSVG:"M639.8036575317383 116.07624053955078 C 200 800 391.82046127319336 280.502197265625 143.83726501464844 280.502197265625", ease: Power0.easeNone, delay:-1})
.to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,fourDot_hide], 0, {autoAlpha:0, delay:-1})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray,twoDot_hide], 0, {autoAlpha:1, delay:-1})
//Morph leads to s2
.to([Diag1S1,Diag1S1Current,Diag1S1Trace], 0, {rotation:0, transformOrigin:"0 20", delay:0})
.to([Diag1MainCurrentNTl,Diag1MainCurrentPTl,Diag1Branch1CurrentTl,Diag1Branch2CurrentTl], 0, {timeScale:.5})


// .to(redLead, 1, {morphSVG:"#redLeadS2_hide", delay:2})
// .to(blackLead, 1, {morphSVG:"#blackLeadS2_hide", delay:-1})

//Meter to 12.5
.to([Diag1S2,Diag1S2Current,Diag1S2Trace], 0, {rotation:-30, transformOrigin:"0 0", delay:10})
.to([Diag1Branch2CurrentTl], 0, {timeScale:0})
.to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,fourDot_hide], 0, {autoAlpha:0, delay:0})
.to([thousOneArray,hunsTwoArray,tensFiveArray,onesZeroArray,threeDot_hide], 0, {autoAlpha:1})

//Trace red lead from s2 to battery
	//Reset traces
.to([Diag1Pw3Trace,Diag1Pw2Trace,Diag1Branch1Pw1Trace,Diag1Branch2Nw2Trace,Diag1Pw2Trace], 0, {stroke:"purple"})
.to([Diag1Branch2Nw1Trace,Diag1Nw2Trace,Diag1S1Trace,Diag1Nw1Trace,Diag1S1Trace,Diag1Nw1Trace,Diag1R2Trace,Diag1Branch1Pw1Trace,Diag1S2Trace], 1, {drawSVG: '0% 0%', ease: Power0.easeNone, autoAlpha:1, stroke:"black", delay:15})
.staggerFromTo([Diag1Branch2Nw1Trace], 1, {drawSVG:'100% 100%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([Diag1Nw2Trace], 1, {drawSVG:'100% 100%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([Diag1S1Trace], .25, {drawSVG:'100% 100%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([Diag1Nw1Trace], 1.5, {drawSVG:'100% 100%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})

//Trace s2 to r2
.staggerFromTo([Diag1Branch2Nw2Trace], 1.5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:1.5})
.to([r2Short_hide], 1, {autoAlpha:1, stroke:"purple", delay:4.5})
.to([Diag1R2,Diag1R2Current,Diag1R2Trace], 1, {autoAlpha:0, stroke:"purple", delay:-1})


.staggerFromTo([Diag1R2Trace], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:1.5})

//Trace r 2 to r3
.staggerFromTo([Diag1Pw3Trace], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([Diag1Pw2Trace,Diag1Pw2Trace], .75, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})

//Trace battery r3 to battery plus
.to([Diag1Pw1Trace], 0, {stroke:"red"})
.to([Diag1Pw1Trace], 1, {drawSVG: '0% 0%', ease: Power0.easeNone, autoAlpha:1, delay:6})
.staggerFromTo([Diag1R3MultiColor], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([Diag1Pw1Trace], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})

//Trace to s3
.to([Diag1Branch1Nw1Trace,Diag1S3Trace,Diag1Branch1Nw2Trace], 0, {stroke:"black", delay:25.5})
.staggerFromTo([Diag1Branch1Nw1Trace], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([Diag1S3Trace], .3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([Diag1Branch1Nw2Trace], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})

//Trace to r2
.to([Diag1Branch1Pw1Trace], 0, {stroke:"purple", delay:2})
.to(Diag1S2Trace, 1, {autoAlpha:1})
.staggerFromTo([Diag1S2Trace], 1, {drawSVG:'100% 100%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([Diag1Branch1Pw1Trace], .7, {drawSVG:'100% 100%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:2})

//Move meter to r1

//MOVE METER LEADS
//MOVE METER LEADS
.to(blackLead, 1, {morphSVG:"M824.4486083984375 228.525146484375 C 200 800 459.7567958831787 280.16650009155273 95.06498336791992 280.16650009155273", ease: Power0.easeNone, delay:6})
.to(redLead, 1, {morphSVG:"M921.8036575317383 230.07624053955078 C 200 800 532.8204612731934 280.502197265625 143.83726501464844 280.502197265625", ease: Power0.easeNone, delay:-1})
.to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,fourDot_hide], 0, {autoAlpha:0, delay:-1})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray,twoDot_hide], 0, {autoAlpha:1, delay:-1})
.to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,fourDot_hide], 0, {autoAlpha:0, delay:-1})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray,twoDot_hide], 0, {autoAlpha:1, delay:-1})
//Meter to 12.5
.to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,fourDot_hide], 0, {autoAlpha:0})
.to([thousOneArray,hunsTwoArray,tensFiveArray,onesZeroArray,threeDot_hide], 0, {autoAlpha:1})

//METER LEADS To Home
.to(redLead, 1, {morphSVG:"#redLead", delay:4})
.to(blackLead, 1, {morphSVG:"#blackLead", delay:-1})
.to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,fourDot_hide], 0, {autoAlpha:0, delay:-1})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray,twoDot_hide], 0, {autoAlpha:1, delay:-1})

//Morph r 2 back to original
.to([Diag1R2,Diag1R2Trace,Diag1R2Current], 1, {autoAlpha:1, stroke:"purple", delay:1})
.to([r2Short_hide], 1, {autoAlpha:0, stroke:"purple", delay:-1})

//Pulse black lines
.to([Diag1Branch2Nw1Trace,Diag1Nw2Trace,Diag1S1Trace,Diag1Nw1Trace,Diag1S1Trace,Diag1Nw1Trace,Diag1Branch1Nw2Trace,Diag1S3Trace,Diag1Branch1Nw1Trace,Diag1S2Trace], .5, {strokeWidth:6, delay:5})
.to([Diag1Branch2Nw1Trace,Diag1Nw2Trace,Diag1S1Trace,Diag1Nw1Trace,Diag1S1Trace,Diag1Nw1Trace,Diag1Branch1Nw2Trace,Diag1S3Trace,Diag1Branch1Nw1Trace,Diag1S2Trace], .5, {strokeWidth:2.5, delay:4})

//Pulse red lines
.to([Diag1Pw1Trace], .5, {strokeWidth:6, delay:0})
.to([Diag1Pw1Trace], .5, {strokeWidth:2.5, delay:2})

//Pulse purple lines
.to([Diag1R2Trace,Diag1Pw2Trace,Diag1Branch1Pw1Trace,Diag1Pw3Trace,Diag1Branch2Nw2Trace], .5, {strokeWidth:6, delay:1})
.to([Diag1R2Trace,Diag1Pw2Trace,Diag1Branch1Pw1Trace,Diag1Pw3Trace,Diag1Branch2Nw2Trace], .5, {strokeWidth:2.5, delay:4})

//MOVE METER LEADS
//MOVE METER LEADS
.to(blackLead, 1, {morphSVG:"M820.4486083984375 116.525146484375 C 200 800 457.7567958831787 280.16650009155273 95.06498336791992 280.16650009155273", ease: Power0.easeNone, delay:0})
.to(redLead, 1, {morphSVG:"M927.8036575317383 116.07624053955078 C 200 800 535.8204612731934 280.502197265625 143.83726501464844 280.502197265625", ease: Power0.easeNone, delay:-1})
.to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,fourDot_hide], 0, {autoAlpha:0, delay:-1})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray,twoDot_hide], 0, {autoAlpha:1, delay:-1})
.to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,fourDot_hide], 0, {autoAlpha:0, delay:-1})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray,twoDot_hide], 0, {autoAlpha:1, delay:-1})


//Draggable Red Lead
var redDotBox = redDot.getBBox();
var redDot2Box = redDot2.getBBox();
var redDotDrag2=Draggable.create(redDot2, {});
var redDotDrag=Draggable.create(redDot, {
	type: "x,y",
	bounds: "#svgContent",
	onDrag: function() {
		redDot.style.cursor = "none"; 
		updateRedLead();		
	},
	onDragEnd: function() {
    console.log("Red," +redDot._gsTransform.x + "," + redDot._gsTransform.y + ",")
    // console.log(redDot._gsTransform.y)
  },
});

updateRedLead();

function updateRedLead() {
  var x1 = redDot._gsTransform.x+redDotBox.x+(redDotBox.width/2);
  var y1 = redDot._gsTransform.y+redDotBox.y+(redDotBox.width/2);
  var x4 = redDot2._gsTransform.x+redDot2Box.x+redDot2Box.width/2;
  var y4 = redDot2._gsTransform.y+redDot2Box.y+redDot2Box.width/2;;
  var dx = Math.abs(x4 - x1) /2;
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  var data = `M${x1} ${y1} C ${200} ${800} ${x3} ${y4} ${x4} ${y4}`;
  redLead.setAttribute("d", data);
  console.log("Red Lead Data: " + data);
}

//Draggable Black Lead
var blackDotDrag2=Draggable.create(blackDot2, {});
var blackDotDrag=Draggable.create(blackDot, {
	type: "x,y",
	bounds: "#svgContent",
	onDrag: function() {
		blackDot.style.cursor = "none"; 
		updateBlackLead();
	},
	onDragEnd: function() {
    console.log(blackDot._gsTransform.x)
    console.log(blackDot._gsTransform.y)
  },
});

var blackDotBox = blackDot.getBBox();
var blackDot2Box = blackDot2.getBBox();
updateBlackLead();

function updateBlackLead() {
  var x1 = blackDot._gsTransform.x+blackDotBox.x+(blackDotBox.width/2);
  var y1 = blackDot._gsTransform.y+blackDotBox.y+(blackDotBox.width/2);
  var x4 = blackDot2._gsTransform.x+blackDot2Box.x+blackDot2Box.width/2;
  var y4 = blackDot2._gsTransform.y+blackDot2Box.y+blackDot2Box.width/2;;
  var dx = Math.abs(x4 - x1) /2;
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  var data = `M${x1} ${y1} C ${200} ${800} ${x3} ${y4} ${x4} ${y4}`;
  blackLead.setAttribute("d", data);
  console.log("Black Lead Data: " + data);
}







//Slide 1 electrically the same
// .to(Slide1ElectricallyTheSame_hide, 2, {autoAlpha:1, delay:4})
// .to(Slide1ElectricallyTheSame_hide, 1, {autoAlpha:0, delay:6})
// .to(Slide1ElectricallyTheSame2_hide, 2, {autoAlpha:1, delay:2})
// .to(Slide1ElectricallyTheSame2_hide, 1, {autoAlpha:0, delay:5})

// .to(Slide1Between_hide, 2, {autoAlpha:1, delay:2})
// .to([Slide1Between_hide,Diag1Nw1Trace,Diag1S1Trace,Diag1Nw2Trace,Diag1S2Trace,Diag1S3Trace,Diag1Branch1Nw2Trace,Diag1Branch2Nw2Trace,Diag1Branch1Nw1Trace,Diag1Branch2Nw1Trace,Diag1R1Trace,Diag1R2Trace,Diag1Pw3Trace,Diag1Branch1Pw1Trace,Diag1Pw2Trace,Diag1R3Trace,Diag1Pw1Trace,Slide1PointA_hide,Slide1PointB_hide], 1, {autoAlpha:0, delay:3})

// //Move diagram

// .to(Diag1_hide, 1, {x:-150})
// .to(Slide2TotalResistanceFormula_hide, 1, {autoAlpha:1,delay:3})
// .to(Slide2TotalResistanceFormula2_hide, 1, {autoAlpha:1, delay:2})
// .to([Slide2ParallelHigh_hide,,Slide2ParallelR1CO_hide,Slide2ParallelR2CO_hide], 1, {autoAlpha:1, delay:0})
// .to([Slide1SeriesHigh_hide,Slide2ParallelR3CO_hide], 1, {autoAlpha:1, delay:1})
// .to([Slide1SeriesHigh_hide,Slide2ParallelHigh_hide,Slide2ParallelR1CO_hide,Slide2ParallelR2CO_hide,Slide2ParallelR3CO_hide], 1, {autoAlpha:0, delay:2})
// .to(Slide2ParallelHigh9_hide, 1, {autoAlpha:1})
// .to(Slide2ParallelHigh9_hide, 1, {autoAlpha:0, delay:3})
// .to([Slide2TotalResistanceFormula3_hide], 1, {autoAlpha:1, delay:0})
// .to(Slide2ParallelHigh10_hide, 1, {autoAlpha:1, delay:1})
// .to(Slide2ParallelHigh10_hide, 1, {autoAlpha:0, delay:2})

// .to(Slide2TotalResistanceFormula4_hide, 1, {autoAlpha:1, delay:0})
// .to(Slide2ParallelHigh11_hide, 1, {autoAlpha:1, delay:-1})
// .to(Slide2ParallelHigh21_hide, 1, {autoAlpha:1, delay:6})
// .to([Slide2ParallelHigh21_hide,Slide2ParallelHigh11_hide], 1, {autoAlpha:0, delay:0})

// .to(Slide2TotalResistanceFormula5_hide, 1, {autoAlpha:1})

// .to([Slide2TotalResistanceFormula_hide,Slide2TotalResistanceFormula2_hide,Slide2TotalResistanceFormula3_hide,Slide2TotalResistanceFormula4_hide,Slide2TotalResistanceFormula5_hide], 1, {autoAlpha:0, delay:2})
// .to(Slide2TotalResistanceFormula5_hide, 0, {x:-200, y:-215, delay:0})
// .to([chartE_hide,chartR_hide,chartP_hide,IequalsEoverR_hide], 0, {autoAlpha:.95})
// .to([Slide2TotalResistanceFormula5_hide], 1, {autoAlpha:1})
// .to([ohmsLawChart_hide], 1, {autoAlpha:1, delay:3})







































// .to([Diag1MainCurrentNTl], 0, {time:0, timeScale:0})
// .staggerFromTo([diag1Wire1Trace,path6824Trace], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:5})
// .staggerFromTo([diag1s1Trace,diag1s2Trace], .2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
// .staggerFromTo([path7122Trace,diag1Wire2Trace], 1.2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
// .staggerFromTo([diag1r1Trace,diag1r2Trace], .2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
// .staggerFromTo([diag1Wire4Trace,path6826Trace], 2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})

// //Hide diag1
// .to([diag1_hide,diag1Wire1Trace,path6824Trace,diag1s1Trace,diag1s2Trace,path7122Trace,diag1Wire2Trace,diag1r1Trace,diag1r2Trace,diag1Wire4Trace,path6826Trace], 1, {autoAlpha:0, delay:1})
// .to(openingTextVoltage_hide, 0, {autoAlpha:1})
// .to(openingTextH1_hide, 1, {autoAlpha:1, delay:.25})

// //opening text bullets
// .to(openingText1_hide, 1, {autoAlpha:1, delay:1.5})
// .to(openingText2_hide, 1, {autoAlpha:1, delay:2})
// .to(openingText3_hide, 1, {autoAlpha:1, delay:2.5})
// .to(openingText4_hide, 1, {autoAlpha:1, delay:3})

// //hide opening bullets and show diag1
// .to(diag1_hide, 0, {x:-150, y:100, scaleX:1, scaleY:1, transformOrigin:"50 50"})
// .to(openingTextVoltage_hide, 2, {x:400, y:-145, scaleX:.35, scaleY:.35, transformOrigin:"50 50", delay:3.5})
// .to(firstTextBorder_hide, 0, {autoAlpha:1, delay:0})
// .to(openingText2_hide, 0, {fill:"red"})
// .from(diag1_hide, 3, {autoAlpha:0, delay:-1})

// //Highlight branches
// .to([diag1Wire1Trace,diag1s1Trace,path7122Trace,diag1r1Trace,diag1Wire4Trace,diag1Wire1Trace,path6824Trace,diag1s1Trace,diag1s2Trace,path7122Trace,diag1Wire2Trace,diag1r1Trace,diag1r2Trace,diag1Wire4Trace,path6826Trace], 1, {autoAlpha:1, delay:.5})
// .to([diag1Wire1Trace,diag1s1Trace,path7122Trace,diag1r1Trace,diag1Wire4Trace,diag1Wire1Trace,path6824Trace,diag1s1Trace,diag1s2Trace,path7122Trace,diag1Wire2Trace,diag1r1Trace,diag1r2Trace,diag1Wire4Trace,path6826Trace], 1, {autoAlpha:0, delay:1})

// //Show ohms law chart for current
// .to([chartE_hide,chartR_hide,chartP_hide], 1, {autoAlpha:1, delay:0})
// .to([ohmsLawChart_hide,IequalsEoverR_hide], 1, {autoAlpha:1, delay:-1})

// //Show olt1
// .to([diag1Wire1Trace,diag1s1Trace,path7122Trace,diag1r1Trace,diag1Wire4Trace], 1, {autoAlpha:.5, delay:3.25})
// .to(olt1_hide, 1, {autoAlpha:1, delay:.5})
// .staggerFromTo([oltline1], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:.25})
// .to(olt2_hide, 1, {autoAlpha:1, delay:.5})
// .to(olt3_hide, 1, {autoAlpha:1, delay:.5})
// .to([diag1Wire1Trace,diag1s1Trace,path7122Trace,diag1r1Trace,diag1Wire4Trace], 1, {autoAlpha:0, delay:0})

// .to([path6824Trace,diag1s2Trace,diag1r2Trace,diag1Wire2Trace,path6826Trace], 1, {autoAlpha:.5, delay:1})
// .to(olt4_hide, 1, {autoAlpha:1, delay:.5})
// .staggerFromTo([oltline2], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:.25})
// .to(olt5_hide, 1, {autoAlpha:1, delay:.5})
// .to(olt6_hide, 1, {autoAlpha:1, delay:.25})
// .to([path6824Trace,diag1s2Trace,diag1r2Trace,diag1Wire2Trace,path6826Trace], 1, {autoAlpha:0, delay:0})

// .to(olt7_hide, 1, {autoAlpha:1, delay:2.5})
// .to(olt8_hide, 1, {autoAlpha:1, delay:0})
// .to(olt9_hide, 1, {autoAlpha:1, delay:0})
// .to(olt10_hide, 1, {autoAlpha:1, delay:3})

// //Hide olt calculations
// .to([olt1_hide,olt2_hide,olt3_hide,olt4_hide,olt5_hide,olt6_hide,olt7_hide,olt8_hide,olt9_hide,olt10_hide,oltline1,oltline2], 1, {autoAlpha:0, delay:2})

// //Change resistor in branch 2 to 20
// .to([path6824Trace,diag1s2Trace,diag1r2Trace,diag1Wire2Trace,path6826Trace], 1, {autoAlpha:.5, delay:6})
// .to(diagram1R2Resistance, 1, {autoAlpha:0, delay:0})
// .to(olt1R2R_hide, 1, {autoAlpha:1, delay:-1})

// //Bring back r1 calculations
// .to([path6824Trace,diag1s2Trace,diag1r2Trace,diag1Wire2Trace,path6826Trace], 1, {autoAlpha:0, delay:1})
// .to([diag1Wire1Trace,diag1s1Trace,path7122Trace,diag1r1Trace,diag1Wire4Trace], 1, {autoAlpha:.5, delay:1})
// .to([olt1_hide,olt2_hide,olt3_hide,oltline1], 1, {autoAlpha:1, delay:3})

// //Recalculate r2
// .to([path6824Trace,diag1s2Trace,diag1r2Trace,diag1Wire2Trace,path6826Trace], 1, {autoAlpha:.5, delay:10})
// .to([diag1Wire1Trace,diag1s1Trace,path7122Trace,diag1r1Trace,diag1Wire4Trace], 1, {autoAlpha:0, delay:-1})
// .to(olt2T1_hide, 1, {autoAlpha:1, delay:1})
// .staggerFromTo([olt2line1], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:.25})
// .to(olt2T2_hide, 1, {autoAlpha:1, delay:.5})
// .to(olt2T3_hide, 1, {autoAlpha:1, delay:.5})

// .to(olt2T4_hide, 1, {autoAlpha:1, delay:18})
// .to(olt2T5_hide, 1, {autoAlpha:1, delay:0})
// .to(olt2T6_hide, 1, {autoAlpha:1, delay:0})
// .to(olt2T7_hide, 1, {autoAlpha:1, delay:1.5})

// //Hide olt calculations
// .to([olt1_hide,olt2_hide,olt3_hide,oltline1,olt2T1_hide,olt2T2_hide,olt2T3_hide,olt2T4_hide,olt2T5_hide,olt2T6_hide,olt2T7_hide,olt2line1,ohmsLawChart_hide,path6824Trace,diag1s2Trace,diag1r2Trace,diag1Wire2Trace,path6826Trace], 1, {autoAlpha:0, delay:2})
// .to(openingText2_hide, 0, {fill:"black"})
// .to(openingText3_hide, 0, {fill:"red", delay:-1})

// //Hide ohms law and show meter
// .to(diag1_hide, 2, {x:100, transformOrigin:"50 50", delay:0})
// .to(multimeterGroup_hide, 1, {autoAlpha:1})

// //Connect meter to r1
// .to(meterKnob, .5, {rotation:12, transformOrigin:"29.5 29.5"})
// .to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,fourDot_hide], 0, {autoAlpha:0})
// .to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray,threeDot_hide], 0, {autoAlpha:1})
// .to(blackLead, 1, {morphSVG:"#blackLead1_hide", delay:1})
// .to(redLead, 1, {morphSVG:"#redLead1_hide", delay:-1})
// .to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,fourDot_hide], 0, {autoAlpha:0})
// .to([thousOneArray,hunsThreeArray,tensSixArray,onesZeroArray,threeDot_hide], 0, {autoAlpha:1})

// //Trace to negative battery
// .to([path7122Trace], 0, {stroke:"black", autoAlpha:1, delay:3})
// .staggerFromTo([path7122Trace], 2, {drawSVG:'100% 100%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
// .to([diag1s1Trace], 0, {stroke:"black", autoAlpha:1})
// .staggerFromTo([diag1s1Trace], .2, {drawSVG:'100% 100%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
// .to([diag1Wire1Trace], 0, {stroke:"black", autoAlpha:1})
// .staggerFromTo([diag1Wire1Trace], 1.75, {drawSVG:'100% 100%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})

// //Trace r1 to positive battery
// .to([diag1Wire4Trace], 0, {stroke:"red", autoAlpha:1, delay:.5})
// .staggerFromTo([diag1Wire4Trace], 3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})

// .to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray,threeDot_hide], 0, {autoAlpha:1})
// .to(blackLead, 1, {morphSVG:"#blackLead2_hide", delay:1})
// .to(redLead, 1, {morphSVG:"#redLead2_hide", delay:-1})
// .to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,fourDot_hide], 0, {autoAlpha:0})
// .to([thousOneArray,hunsThreeArray,tensSixArray,onesZeroArray,threeDot_hide], 0, {autoAlpha:1})

// //Trace r2 to the negative side of battery
// .to([diag1Wire2Trace], 0, {stroke:"black", autoAlpha:1, delay:2})
// .staggerFromTo([diag1Wire2Trace], 2, {drawSVG:'100% 100%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
// .to([diag1s2Trace], 0, {stroke:"black", autoAlpha:1, delay:0})
// .staggerFromTo([diag1s2Trace], .2, {drawSVG:'100% 100%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
// .to([path6824Trace], 0, {stroke:"black", autoAlpha:1, delay:0})
// .staggerFromTo([path6824Trace], 2, {drawSVG:'100% 100%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})

// //Trace r2 to positive side of the battery
// .to([path6826Trace], 0, {stroke:"red", autoAlpha:1, delay:2})
// .staggerFromTo([path6826Trace], 3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})

// .to(blackLead, 1, {morphSVG:blackLead, delay:2})
// .to(redLead, 1, {morphSVG:redLead,delay:-1})
// .to([thousArray,hunsArray,tensArray,onesArray,oneDot_hide,twoDot_hide,threeDot_hide,fourDot_hide], 0, {autoAlpha:0, delay:-1})
// .to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray,threeDot_hide], 0, {autoAlpha:1,delay:-1})
// .to([diag1Wire4Trace,diag1Wire1Trace,diag1s1Trace,path7122Trace,diag1Wire2Trace,diag1s2Trace,path6824Trace,path6826Trace,], 1, {autoAlpha:0, delay:-1})

// .to(openingText3_hide, 0, {fill:"black",delay:12})
// .to(openingText4_hide, 0, {fill:"red", delay:0})

// //Show it1 Total Current
// .to(parallelResistanceFormula_hide, 1, {autoAlpha:1, delay:8})
// .to(text7105, 1, {fill:"red", delay:-.25})
// .to(text7134, 1, {fill:"red", delay:1})
// .to(path7136, 1, {stroke:"red", delay:1})

// .to(text7113, 1, {fill:"red", delay:0})
// .to(path7140, 1, {stroke:"red", delay:-.75})
// .to(text7128, 1, {fill:"red", delay:0})

// .to(text7176, 1, {fill:"red", delay:.75})

// .to(text7113C1, 1, {fill:"red", delay:0})
// .to(path7140C2, 1, {stroke:"red", delay:-.75})
// .to(text7128C2, 1, {fill:"red", delay:0})

// .to(text7176C3, 1, {fill:"red", delay:.75})

// .to(text7113C3, 1, {fill:"red", delay:0})
// .to(path7140C3, 1, {stroke:"red", delay:-.75})
// .to(text7128C4, 1, {fill:"red", delay:0})

// .to([text7105,text7134,text7113,text7128,text7176,text7113C1,text7128C2,text7176C3,text7113C3,text7128C4], 1, {fill:"black",delay:2})
// .to([path7136,path7140,path7140C2,path7140C3], 1, {stroke:"black", delay:-1})

// //Substitue real values
// .to(text7128, 1, {autoAlpha:0, delay:5})
// .to(twoOhms1_hide, 1, {autoAlpha:1, delay:-1})
// .to([text7113,path7140,text7128,twoOhms1_hide], 1, {autoAlpha:0, delay:2})
// .to(it2denominator2_hide, 1, {autoAlpha:1, delay:-1})
// .to(text7128C2, 1, {autoAlpha:0, delay:3.5})
// .to(twoOhms2_hide, 1, {autoAlpha:1, delay:-1})
// .to([text7113C1,path7140C2,text7128C2,twoOhms2_hide], 1, {autoAlpha:0, delay:2})
// .to(it2denominator3_hide, 1, {autoAlpha:1, delay:-1})
// .to([text7176C3,text7113C3,path7140C3,text7128C4], 1, {autoAlpha:0, delay:-1})
// .to([it2denominator2_hide,it2denominator3_hide,text7176C3,text7176], 1, {autoAlpha:0, delay:3})
// .to(it2denominator5_hide, 1, {autoAlpha:1, delay:-1})
// .to([text7134,path7136,it2denominator5_hide], 1, {autoAlpha:0, delay:5})
// .to(it2denominator_hide, 1, {autoAlpha:1, delay:.5})

// //Explain resistanc is half is resisitance is the same
// .to([diagramr1Resistance,olt1R2R_hide], 1, {fill:"red", delay:14})
// .to(it2denominator_hide, 1, {fill:"red", delay:3})
// .to([it2denominator_hide,diagramr1Resistance,olt1R2R_hide], 1, {fill:"black", delay:3})

// //Change r2 to 5 ohms
// .to(olt1R2R_hide, 1, {autoAlpha:0, delay:10})
// .to(olt15OhmResistor_hide, 1, {autoAlpha:1, delay:-1})

// .to(it24Ohms_hide, 1, {autoAlpha:1, delay:4})
// .to(it2denominator_hide, 1, {autoAlpha:0, delay:-1})

// //Hide meter show slider
// .to(multimeterGroup_hide, 1, {autoAlpha:0, delay:0})
// .to(ohmsLawSliders_hide, 1, {autoAlpha:1, delay:0})
// .add(function(){pausePlayer()},"+=8")

// //Hide all and show summary
// .to(blank_hide, 1, {autoAlpha:1})
// .to(summaryText1_hide, 1, {autoAlpha:1, delay:3})
// .to(summaryText2_hide, 1, {autoAlpha:1, delay:4})
// .to(summaryText3_hide, 1, {autoAlpha:1, delay:4})
// .to(summaryText4_hide, 1, {autoAlpha:1, delay:8})




//Draggable Red Lead
var redDotBox = redDot.getBBox();
var redDot2Box = redDot2.getBBox();
var redDotDrag2=Draggable.create(redDot2, {});
var redDotDrag=Draggable.create(redDot, {
	type: "x,y",
	bounds: "#svgContent",
	onDrag: function() {
		redDot.style.cursor = "none"; 
		updateRedLead();		
	},
	onDragEnd: function() {
    
    
  },
  onDragEnd: function(e) {
    var redDotPointX = redDot.getBoundingClientRect().x+redDot.getBoundingClientRect().width/2;
    var redDotPointY = redDot.getBoundingClientRect().y+redDot.getBoundingClientRect().height/2
    if(redDotPointX > myRect.x && redDotPointX < myRect.x + myRect.width && redDotPointY > myRect.y && redDotPointY < myRect.y + myRect.height){
    	console.log("true")
    }else{
		console.log("false")
	}
  },
});

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