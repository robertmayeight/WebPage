slide = new XMLHttpRequest();
slide.open("GET","slide.svg",false);
slide.overrideMimeType("image/svg+xml");
slide.send("");
var slide= document.getElementById("main").appendChild(slide.responseXML.documentElement);
var slideTl = new TimelineMax({paused:true});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var audioplay = document.createElement('audio');
function playAudio(clip){
  audioplay.setAttribute('src', clip);
  audioplay.play()
}

music.onloadeddata = function() {
    TweenMax.to(topCover, 1, {autoAlpha:0})
};
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

var slideAudio = document.getElementById('music');
slideAudio.src="audio.mp3"


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


var diagram1 = document.getElementById("diagram1_hide").getElementsByTagName("path");
var diagram1Length=diagram1.length;
var linesWithCurrentArray=[];

for(i=0; i<diagram1Length; i++){
  //Make all lines same size, stroke, line-cap
  diagram1[i].setAttribute('stroke','black');
  diagram1[i].setAttribute('fill','none');
  diagram1[i].style['stroke-width']=1;
  pathLastName = diagram1[i].id.split("_")
  //Start current copies.
  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('stroke','black');
  path.setAttribute('fill','none');
  path.setAttribute('id',diagram1[i].id + 'Current');
  path.style['stroke-width']=1;
  path.style['stroke-linecap']="round";
  path.setAttribute("d", diagram1[i].getAttribute("d"));
  // TweenMax.to(path,0,{autoAlpha:0});
  diagram1_hide.appendChild(path);
  if(pathLastName[1] != "noCurrent"){
    linesWithCurrentArray.push(path)
  }
  
  //Start trace copies.
  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('stroke','red');
  path.setAttribute('fill','none');
  path.setAttribute('id',diagram1[i].id + 'Trace');
  path.style['stroke-width']=3;
  path.style['stroke-linecap']="round";
  path.setAttribute("d", diagram1[i].getAttribute("d"));
  diagram1_hide.appendChild(path);
  TweenMax.to(path, 0, {drawSVG:'0% 0%'});
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
TweenMax.to(diagram1_hide, 1, {x:-140, y:0})
TweenMax.to(resistanceSliderKnob,0,{y:-59})
resistanceText['innerText' in resistanceText ? "innerText" : "textContent"] = (Math.abs(resistanceSliderKnob._gsTransform.y) + 1).toFixed(2);

TweenMax.to(voltageKnob,0,{y:-59})
voltageText['innerText' in voltageText ? "innerText" : "textContent"] = (Math.abs(voltageKnob._gsTransform.y) + 1).toFixed(2);

currentText['innerText' in currentText ? "innerText" : "textContent"] = Math.abs(voltageText.textContent/resistanceText.textContent).toFixed(2);
console.log(currentText.textContent)
TweenMax.to(linesWithCurrentArray, 0, {strokeWidth:currentText.textContent})

var current1Tl = new TimelineMax({repeat:-1})
current1Tl.timeScale(.5);
current1Tl
.to(linesWithCurrentArray, 0, {strokeDasharray:"2,6", ease:Linear.easeNone, strokeWidth:2.5})
.to(linesWithCurrentArray, 0.1, {strokeDashoffset:"-=8", repeat:-1, ease:Linear.easeNone,yoyo:false})

// TweenMax.to(voltageKnob,0,{x:10})
var voltageSlider=Draggable.create(voltageKnob, {
  type: "y",
  bounds: "#sliderContainer",
  onClick: function() {
    

  },
  onDrag: function() {
    TweenMax.to([voltageText,text7285],0,{fill:"red"})
  voltageText['innerText' in voltageText ? "innerText" : "textContent"] = (Math.abs(voltageKnob._gsTransform.y) + 1) .toFixed(2);
  currentText['innerText' in currentText ? "innerText" : "textContent"] = (voltageText.textContent/resistanceText.textContent).toFixed(2);
  powerText['innerText' in powerText ? "innerText" : "textContent"] = (Math.abs(voltageText.textContent)*Math.abs(voltageText.textContent)/resistanceText.textContent).toFixed(2);
  },
  onDragEnd: function() {
    TweenMax.to([voltageText,text7285],0,{fill:"black"})
  },
});

var resistanceSlider=Draggable.create(resistanceSliderKnob, {
  type: "y",
  bounds: "#resistanceSliderContainer",  onDrag: function() {
    TweenMax.to([text7293,resistanceText],0,{fill:"red"});
  resistanceText['innerText' in resistanceText ? "innerText" : "textContent"] = (Math.abs(resistanceSliderKnob._gsTransform.y) + 1) .toFixed(2);
  currentText['innerText' in currentText ? "innerText" : "textContent"] = (voltageText.textContent/resistanceText.textContent).toFixed(2);
  powerText['innerText' in powerText ? "innerText" : "textContent"] = ((voltageText.textContent*voltageText.textContent)/(resistanceText.textContent)).toFixed(2);
  },
  onDragEnd: function() {
    TweenMax.to([text7293,resistanceText],0,{fill:"black"})
  },
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

slideTl
.to(headingText,1,{autoAlpha:0, delay:1})
.to(openingTextVoltage_hide,1,{autoAlpha:1, delay:0})
.to(openingTextCurrent_hide,1,{autoAlpha:1, delay:0})
.to(openingTextResistance_hide,1,{autoAlpha:1, delay:-.25})
.to(openingTextPower_hide,1,{autoAlpha:1, delay:-.25})

//Enlarge values
.to(openingTextVoltage_hide,1,{autoAlpha:1, scaleX:2, scaleY:2, transformOrigin:"0 0", delay:9})
.to(openingTextCurrent_hide,1,{autoAlpha:1, scaleX:2, scaleY:2, transformOrigin:"0 0",  delay:.5})
.to(openingTextPower_hide,1,{autoAlpha:1, scaleX:2, scaleY:2, transformOrigin:"0 0",  delay:-1})

//Values back to normal
.to(openingTextVoltage_hide,1,{autoAlpha:1, scaleX:1, scaleY:1, transformOrigin:"0 0", delay:1})
.to(openingTextCurrent_hide,1,{autoAlpha:1, scaleX:1, scaleY:1, transformOrigin:"0 0",  delay:-1})
.to(openingTextPower_hide,1,{autoAlpha:1, scaleX:1, scaleY:1, transformOrigin:"0 0",  delay:-1})

//Switch chart for values
.to([openingTextVoltage_hide,openingTextCurrent_hide,openingTextResistance_hide,openingTextPower_hide],1,{autoAlpha:0, delay:4})
.to(ohmsLawChart_hide, 1, {autoAlpha:1, delay:-1})
.to([chartR_hide,chartI_hide,chartP_hide], 1, {autoAlpha:1, delay:5.7})

//Highlight Resistance
.to([chartE_hide,chartR_hide,chartP_hide,chartI_hide], 1, {autoAlpha:1, delay:2.5})
.to([chartR_hide], 1, {autoAlpha:0, delay:-1})

//Highlight Power
.to([chartE_hide,chartR_hide,chartP_hide,chartI_hide], 1, {autoAlpha:1, delay:1})
.to([chartP_hide], 1, {autoAlpha:0, delay:-1})
//Highlight Current
.to([chartE_hide,chartR_hide,chartP_hide,chartI_hide], 1, {autoAlpha:1, delay:1})
.to([chartI_hide], 1, {autoAlpha:0, delay:-1})

//Clear all highights
.to([chartE_hide,chartR_hide,chartP_hide,chartI_hide], 1, {autoAlpha:0, delay:1.5})

//Shrink and move ohms law chart
.to(ohmsLawChart_hide, 1, {x:175, y:-75, scaleX:.5, scaleY:.5, transformOrigin:"50 50"})
.to(diagram1_hide, 1, {autoAlpha:1, delay:0})

//Higlight battery voltage
.to(calculations1vT_hide, 1, {autoAlpha:1, delay:1})
.to(diagram1B1V, 1, {fill:"red", delay:2})
.from(batteryBorder, 1, {autoAlpha:0, delay:-1})

.to(diagram1B1V, 1, {fill:"black", delay:2})
.to(batteryBorder, 1, {autoAlpha:0, delay:-1})

//Highlight total resistance
.to(calculations1rT_hide, 1, {autoAlpha:1, delay:0})
.to(diagram1r1Callout, 1, {fill:"red", delay:1.5})
.from(r1Border, 1, {autoAlpha:0, delay:-1})
.to(diagram1r2Callout, 1, {fill:"red", delay:.5})
.from(r2Border, 1, {autoAlpha:0, delay:-1})
.to(diagram1h1Callout, 1, {fill:"red", delay:.5})
.from(h1Border, 1, {autoAlpha:0, delay:-1})
.to(calculations1rTAnswer_hide, 1, {autoAlpha:1, delay:5})
.to([diagram1r1Callout,diagram1r2Callout,diagram1h1Callout], 1, {fill:"black", delay:1})
.to([r1Border,r2Border,h1Border], 1, {autoAlpha:0, delay:-1})

//Highlight total current
.to(calculations1iT_hide, 1, {autoAlpha:1, delay:0})
.to(calculations1questionMark1_hide, 1, {autoAlpha:1, delay:-1})

//Highlight total current
.to(calculations1pT_hide, 1, {autoAlpha:1, delay:1})
.to(calculations1questionMark2_hide, 1, {autoAlpha:1, delay:-1})

//Highlight current
.to([chartE_hide,chartR_hide,chartP_hide,chartI_hide], 1, {autoAlpha:1, delay:4.5})
.to([chartI_hide], 1, {autoAlpha:0, delay:-1})

//Highlight three current formulas
.to([IequalsEoverR_hide,IequalsPoverE_hide,IEqualssquareRootPoverR_hide], 1, {autoAlpha:1, delay:7})
.to([IequalsPoverE_hide,IEqualssquareRootPoverR_hide], 1, {autoAlpha:0, delay:8})

//Highlight volts
.to(calculations1vT_hide, 1, {fill:"red", delay:13})
.to([calculations1rT_hide,calculations1rTAnswer_hide], 1, {fill:"red", delay:2})
.to(calculations1point54Amps_hide, 1, {autoAlpha:1, fill:"red", delay:1})
.to(calculations1iT_hide, 1, {fill:"red", delay:-1})
.to(calculations1questionMark1_hide, 1, {autoAlpha:0, delay:-1})

//clear all reds back to black
.to([calculations1vT_hide,calculations1rT_hide,calculations1rTAnswer_hide,calculations1point54Amps_hide,calculations1iT_hide], 1, {fill:"black", delay:2})
.to(IequalsEoverR_hide, 1, {autoAlpha:0, delay:-1})

//Highlight Power
.to([chartE_hide,chartR_hide,chartP_hide,chartI_hide], 1, {autoAlpha:1, delay:3})
.to([chartP_hide], 1, {autoAlpha:0, delay:-1})
.to([PequalsEsquaredoverR_hide,PequalsIsqauredtimesR_hide,PequalsEtimesI_hide], 1, {autoAlpha:1, delay:4.5})
.to([PequalsEsquaredoverR_hide,PequalsIsqauredtimesR_hide], 1, {autoAlpha:0, delay:9})

//To red - volts
.to(calculations1vT_hide, 1, {fill:"red", delay:3})
.to([calculations1iT_hide,calculations1point54Amps_hide], 1, {fill:"red", delay:1})
.to(calculations1questionMark2_hide, 1, {autoAlpha:0, delay:0})
.to([calculations7point39Watts_hide,calculations1pT_hide], 1, {fill:"red"})
.to(calculations7point39Watts_hide, 1, {autoAlpha:1, delay:-1})

.to([calculations1vT_hide,calculations1iT_hide,calculations1point54Amps_hide,calculations7point39Watts_hide,calculations1pT_hide], 1, {fill:"black", delay:1.5})
.to(PequalsEtimesI_hide, 1, {autoAlpha:0})
.to(PequalsIsqauredtimesR_hide, 1, {autoAlpha:1, delay:-1})

//Second power formula
.to([calculations1iT_hide,calculations1point54Amps_hide,calculations1point54Amps2_hide], 1, {fill:"red"})
.to(calculations1point54Amps2_hide, 1, {autoAlpha:1, delay:4})
.to([calculations1rT_hide,calculations1rTAnswer_hide], 1, {fill:"red", delay:1})
.to([calculations1pT_hide,calculations7point39Watts_hide], 1, {fill:"red", delay:1})


//Third power formula
.to([calculations1iT_hide,calculations1point54Amps_hide,calculations1point54Amps2_hide,calculations1rT_hide,calculations1rTAnswer_hide,calculations1pT_hide,calculations7point39Watts_hide], 1, {fill:"black", delay:1.5})
.to([PequalsIsqauredtimesR_hide], 1, {autoAlpha:0, delay:0})
.to([PequalsEsquaredoverR_hide], 1, {autoAlpha:1, delay:-1})

.to([calculations1vT_hide], 1, {fill:"red", delay:1})
.to([calculationsVDC_hide], 1, {autoAlpha:1, delay:-1})

.to([calculations1rT_hide,calculations1rTAnswer_hide], 1, {fill:"red", delay:1})
.to([calculations1pT_hide,calculations7point39Watts_hide], 1, {fill:"red", delay:1.5})
.to([calculations1iT_hide,calculations1point54Amps_hide,calculations1point54Amps2_hide,calculations1rT_hide,calculations1rTAnswer_hide,calculations1pT_hide,calculations7point39Watts_hide,calculations1vT_hide], 1, {fill:"black", delay:1.5})
.to([calculationsVDC_hide,PequalsEsquaredoverR_hide,chartI_hide,chartE_hide,chartR_hide,chartP_hide,calculations1point54Amps2_hide], 1, {autoAlpha:0, delay:-1})

//change battery to 3o vdc
.to(diagram1B1V, 1, {autoAlpha:0, delay:8})
.to(diagram130VoltBattery_hide, 1, {autoAlpha:1, delay:-1})

//show current section of chart
.to([chartE_hide,chartR_hide,chartP_hide,chartI_hide], 1, {autoAlpha:1, delay:3.5})
.to([chartI_hide], 1, {autoAlpha:0, delay:-1})
.to([IequalsEoverR_hide], 1, {autoAlpha:1, delay:-1})

//show new voltage
.to(calculations2Vcc_hide, 1, {autoAlpha:1, delay:2})
.to(calculations2rT_hide, 1, {autoAlpha:1, delay:.5})
.to(calculations2iT_hide, 1, {autoAlpha:1, delay:.7})

//draw voltage line
.staggerFromTo([path7233], 2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:1})
.staggerFromTo([path72335], 2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:1})


//Slider excercise
.to([path7233,path72335,calculations2iT_hide,calculations2rT_hide,calculations2Vcc_hide,calculations1vT_hide,calculations1rT_hide,calculations1rTAnswer_hide,calculations1iT_hide,calculations1point54Amps_hide,calculations1pT_hide,calculations7point39Watts_hide,chartI_hide,chartE_hide,chartR_hide,chartP_hide, diagram1_hide,ohmsLawChart_hide], 1, {autoAlpha:0, delay:4})
.to(ohmsLawSliders_hide, 1, {autoAlpha:1})
.add(function(){music.pause()}, '+=7')

var au = document.getElementById("music");
au.onloadedmetadata = function() {
    compensation = music.duration - slideTl.duration();
    slideTl.add(TweenMax.to(dummy, compensation, {autoAlpha: 1}));
    console.log(music.duration - slideTl.duration())
};