slide = new XMLHttpRequest();
slide.open("GET","slide.svg",false);
slide.overrideMimeType("image/svg+xml");
slide.send("");
var slide= document.getElementById("main").appendChild(slide.responseXML.documentElement);
var slideTl = new TimelineMax({paused:true});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var body = document.getElementsByTagName('body')[0];

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
slideAudio.src="topLoadModule1.mp3";

music.onloadeddata = function() {
    TweenMax.to(topCover, 1, {autoAlpha:0})
};


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



var schematicDrag = Draggable.create(svgContent, {zIndexBoost:false});

var dragItems = document.getElementById("svgContent").getElementsByTagName("g");

var overDrag = false;

for(i=0; i<dragItems.length; i++){
  if(dragItems[i].id.split('_')[1] === 'drag'){
      dragItems[i].setAttribute('onmouseover','schematicDrag[0].disable(); this.style.cursor = "default"; overDrag = true;');
      dragItems[i].setAttribute('onmouseout','schematicDrag[0].enable();  overDrag = false;');
      dragItems[i].addEventListener("DOMMouseScroll", function(e){zoomComponents(e, this)}, false);
      Draggable.create(dragItems[i], {
        zIndexBoost:false,
        onDragEnd:function(){
          console.log(this._eventTarget.id)
          alert('.to(' + this._eventTarget.id + ', 0, {x:' + this._eventTarget._gsTransform.x + ', y:' + this._eventTarget._gsTransform.y + ', scaleX:' + this._eventTarget._gsTransform.scaleX + ', scaleY:' + this._eventTarget._gsTransform.scaleX + ', transformOrigin: "50% 50%", ease:Power0.easeNone})');

        }
      });
    
  }
  
}

svgContent.addEventListener("DOMMouseScroll", function(e){zoomSchematic(e)}, false);

var scaleUp = 1;
function zoomSchematic(e){
  if(overDrag === false){
	e.preventDefault();
	switch(e.detail>0) {
		case true:
		if(scaleUp > .5 ){
			scaleUp = scaleUp - .25;
			TweenMax.to(svgContent, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
		}
		break;
		case false:
		scaleUp = scaleUp + .25;
    	TweenMax.to(svgContent, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
        break;
    }
}
}


var scaleUp2 = 1;
function zoomComponents(e, param){
  e.preventDefault();
  switch(e.detail>0) {
    case true:
    if(scaleUp2 > .5 ){
      scaleUp2 = scaleUp2 - .1;
      TweenMax.to(param, .5, {scaleX:scaleUp2, scaleY:scaleUp2, ease: Power0.easeNone});
    }
    break;
    case false:
    scaleUp2 = scaleUp2 + .1;
      TweenMax.to(param, .5, {scaleX:scaleUp2, scaleY:scaleUp2, ease: Power0.easeNone});
        break;
    }
}


function getSchematicPos(){
	console.log('.to(svgContent, 1, {x:' + svgContent._gsTransform.x + ', y:' + svgContent._gsTransform.y + ', scaleX:' + svgContent._gsTransform.scaleX + ', scaleY:' + svgContent._gsTransform.scaleX + ', transformOrigin: "50% 50%", ease:Power0.easeNone})');
}


var audioplay = document.createElement('audio');
function playAudio(clip){
	audioplay.setAttribute('src', clip);
	audioplay.play()
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

var coulombArray=[];
noPaths = document.getElementById("coulomb_hide").getElementsByTagName("path");
noPathsLength = noPaths.length;
for(i=0; i<noPathsLength; i++){
  noPaths[i].style['stroke-linecap']="round";
  coulombArray.push(noPaths[i])
}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
TweenMax.to([s1,s1copy],0,{rotation:20, transformOrigin:"0 20"})
TweenMax.to([onesArray,tensArray,hunsArray,thousArray], 0, {autoAlpha:0})
slideTl
.to(headingText,1,{autoAlpha:0, delay:3.5})
.from([voltageText],1,{autoAlpha:0, delay:1.5})

.from([currentText],1,{autoAlpha:0, delay:0})
.from([resistanceText],1,{autoAlpha:0, delay:0})
.to(voltageText, .25, {skewX:-30, scaleX:.9, scaleY:.9, delay:1})
.to(voltageText, .25, {x:50, ease: Linear.easeNone, delay:2})
.to(voltageText, .25, {skewX:0, scaleX:.7, scaleY:.7, delay:0})

.to(currentText, .25, {skewX:-20, x:150, ease:Linear.easeNone, delay:-.25})
.to(currentText, 4, {skewX:-10, x:440, ease:Linear.easeNone, delay:0})
.to(currentText, .4, {skewX:-10, x:800, ease:Linear.easeNone, delay:0})

.to([voltageText,currentText,resistanceText], 1, {autoAlpha:0})

.from(text13179, 1, {autoAlpha:0})
.to(diagram1_hide,1,{autoAlpha:1, delay:-1})



//Show meter
.to([onesArray,tensArray,hunsArray,thousArray], 0, {autoAlpha:-1, delay:-2})
.to(multimeterGroup_hide, 1, {autoAlpha:1, delay:-1})

//Show meter
.to([onesArray,tensArray,hunsArray,thousArray], 0, {autoAlpha:-1})
.to(multimeterGroup_hide, 2, {autoAlpha:1, delay:-1})

//Change meter to dc amps
.to(meterKnob, .5, {rotation:15, transformOrigin:"29.5 29.5"})
.to([onesArray,tensArray,hunsArray,thousArray], 0, {autoAlpha:0})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray,dc_hide], 0, {autoAlpha:1})


//Move meter leads and read 13.6 VDC
.to(blackLead, 1, {morphSVG:blackLead1_hide,delay:1})
.to(redLead, 1, {morphSVG:redLead1_hide,delay:-1})

.to([onesArray,tensArray,hunsArray,thousArray], 0, {autoAlpha:0})
.to([thousOneArray,hunsThreeArray,tensSixArray,onesZeroArray,dc_hide,threeDot_hide], 0, {autoAlpha:1})

//Hide Meter and diagram
.to([multimeterGroup_hide, diagram1_hide, text13179], 2, {autoAlpha:0, delay:2})

//Show Water Tank
.from([waterTank, pressureGauge], 2, {autoAlpha:0, delay:-1})


.to(waterValve, 1, {rotation:90,transformOrigin: "0 30"})

.from(waterInTank2, 6, {scaleY:0, transformOrigin: "100 0", delay:0})

.to(pressureNeedle, 6, {rotation: -290, transformOrigin: "0 0", delay:-6})
.from(waterPool, 6, {x: -105, scaleX:0, scaleY:0, transformOrigin: "100 0", delay:-6})

.to(waterPool, .5, {x: -105, scaleX:0, scaleY:0, transformOrigin: "100 0", delay:0})


//Hide Water Tank
.to([waterTank, pressureGauge], 2, {autoAlpha:0, delay:-1})
.to(diagram1_hide,1,{autoAlpha:1, delay:0})

//Current flow on
.to([s1,s1copy],1,{rotation:0, transformOrigin:"0 20", delay:0})
.to([diagram1AllPaths], 0, {strokeDasharray:"2,6", ease:Linear.easeNone, strokeWidth:3, stroke:"black", delay:0})

.add(function(){TweenMax.to([diagram1AllPaths], 0.1, {strokeDashoffset:"-=8", repeat:-1, ease:Linear.easeNone,yoyo:false})})
.to([pos1copy,pos2copy], 0, {stroke:"red"})
.to([r1copy], 0, {stroke:"orange"})
.to([diagram1AllPaths], 0, {autoAlpha:1})
.to(diagram1_hide,1,{autoAlpha:0, delay:4})

//Show 1.5 volt battery
.from(smallBattery, 1, {autoAlpha:0, delay:1})
.from(sixVoltBattery, 1, {autoAlpha:0, delay:2.5})
.from(twelveVoltBattery, 1, {autoAlpha:0, delay:3})
.to([smallBattery,sixVoltBattery,twelveVoltBattery], 1, {autoAlpha:0, delay:2.75})

//Show Appliances
.from([oneTwentyOutlet,washer], 1, {autoAlpha:0, delay:0})
.to([oneTwentyOutlet,washer], 1, {autoAlpha:0, delay:4})

.from([twoFortyOutlet,stove], 1, {autoAlpha:0, delay:0})
.to([twoFortyOutlet,stove], 1, {autoAlpha:0, delay:5})

//Current
.to(diagram1_hide,1,{autoAlpha:1, delay:0})
.from(currentDefinition, 1, {autoAlpha:0, delay:1})

.to([diagram1_hide, currentDefinition],1,{autoAlpha:0, delay:4})
//Show river
.from([river], 1, {autoAlpha:0, delay:0})
.to(boat, 3, {x:'-=50', y:'-=50', ease: Power0.easeNone,delay:-1})
.to(boat, 3, {x:'-=20', y:'-=50', ease: Power0.easeNone,delay:0})
.from(waterMolecules, 1, {autoAlpha:0, delay:0})
.to([waterMolecules, river], 1, {autoAlpha:0,delay:4})

.to(diagram1_hide,1,{autoAlpha:1, delay:0})

.to([coulombArray], 0, {strokeDasharray:"1,4", ease:Linear.easeNone, strokeWidth:1.5, stroke:"black", delay:0})
.add(function(){TweenMax.to([coulombArray], 0.1, {strokeDashoffset:"-=5", repeat:-1, ease:Linear.easeNone,yoyo:false})})
.to(coulomb_hide,1,{autoAlpha:1, delay:17})
.to(coulomb_hide, 2, {scaleX:1, scaleY:1,transformOrigin:"50 25"})
.to(sixPointTwoFour_hide,1,{autoAlpha:1})

.to(diagram1_hide,1,{autoAlpha:0, delay:8})

//Sample Current Draws
.from(defrostHeaterText, 1, {autoAlpha:0, delay:2})
.from(lightBulbText, 1, {autoAlpha:0, delay:2.5})
.from(electricDryerText, 1, {autoAlpha:0, delay:3})

.to([defrostHeaterText,lightBulbText,electricDryerText], 1, {autoAlpha:0, delay:3})

//Resistance
.from(resistanceDefinition, 1, {autoAlpha:0, delay:2})
.to(resistanceDefinition, 1, {autoAlpha:0, delay:7})
.to(waterInTank2, .1, {autoAlpha:0})
.from(fourInchPipe_txt,.1, {autoAlpha:0})
.from(fourInchPipe, .1, {autoAlpha:0})
.to(waterPool, .1, {x:-200, y:-50, transformOrigin: "100 0", delay:0})
.from(fourInchWaterPool, .1, {autoAlpha:0})
.to([waterTank], 2, {autoAlpha:1, delay:0})


//Highlight 4" Pipe
.to(fourInchPipe, 1, {autoAlpha:0, delay:10})
.to(fourInchWaterPool, 1, {x:'-=45', y:'-=8', scaleX:.3, scaleY:.3,transformOrigin:"50 25", delay:-1})
.to(fourInchPipe_txt, 1, {autoAlpha:0})
.from(twoInchPipe_txt, 1, {autoAlpha:0, delay:-1})

//Ohms Symbol
.to(waterTank, 1, {autoAlpha:0, delay:0})
.from(ohmsSymbol, 1, {autoAlpha:0})

var au = document.getElementById("music");
au.onloadedmetadata = function() {
    compensation = music.duration - slideTl.duration();
    slideTl.add(TweenMax.to(dummy, compensation, {autoAlpha: 1}));
    console.log(music.duration - slideTl.duration())
};










