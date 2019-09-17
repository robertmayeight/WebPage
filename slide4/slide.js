// slide = new XMLHttpRequest();
// slide.open("GET","slide.svg",false);
// slide.overrideMimeType("image/svg+xml");
// slide.send("");
// var slide= document.getElementById("main").appendChild(slide.responseXML.documentElement);

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

// Start Meter Numbers
var onesArray=[oneA,oneB,oneC,oneD,oneE,oneF,oneG];
var tensArray=[tenA,tenB,tenC,tenD,tenE,tenF,tenG];
var hunsArray=[hunA,hunB,hunC,hunD,hunE,hunF,hunG];
var thousArray=[thouA,thouB,thouC,thouD,thouE,thouF,thouG];

var onesZeroArray=[oneA,oneB,oneC,oneD,oneE,oneF];
var onesOneArray=[oneB,oneC];
var onesTwoArray=[oneA,oneB,oneD,oneE,oneG];
var onesThreeArray=[oneA,oneB,oneC,oneD,oneG];
var onesFourArray=[oneB,oneC,oneF,oneG];
var onesFiveArray=[oneA,oneC,oneD,oneF,oneG];
var onesSixArray=[oneA,oneC,oneD,oneE,oneF,oneG];
var onesSevenArray=[oneA,oneB,oneC];
var onesEightArray=[oneA,oneB,oneC,oneD,oneE,oneF,oneG];
var onesNineArray=[oneA,oneB,oneC,oneD,oneF,oneG];

var tensZeroArray=[tenA,tenB,tenC,tenD,tenE,tenF];
var tensOneArray=[tenB,tenC];
var tensTwoArray=[tenA,tenB,tenD,tenE,tenG];
var tensThreeArray=[tenA,tenB,tenC,tenD,tenG];
var tensFourArray=[tenB,tenC,tenF,tenG];
var tensFiveArray=[tenA,tenC,tenD,tenF,tenG];
var tensSixArray=[tenA,tenC,tenD,tenE,tenF,tenG];
var tensSevenArray=[tenA,tenB,tenC];
var tensEightArray=[tenA,tenB,tenC,tenD,tenE,tenF,tenG];
var tensNineArray=[tenA,tenB,tenC,tenD,tenF,tenG];

var hunsZeroArray=[hunA,hunB,hunC,hunD,hunE,hunF];
var hunsOneArray=[hunB,hunC];
var hunsTwoArray=[hunA,hunB,hunD,hunE,hunG];
var hunsThreeArray=[hunA,hunB,hunC,hunD,hunG];
var hunsFourArray=[hunB,hunC,hunF,hunG];
var hunsFiveArray=[hunA,hunC,hunD,hunF,hunG];
var hunsSixArray=[hunA,hunC,hunD,hunE,hunF,hunG];
var hunsSevenArray=[hunA,hunB,hunC];
var hunsEightArray=[hunA,hunB,hunC,hunD,hunE,hunF,hunG];
var hunsNineArray=[hunA,hunB,hunC,hunD,hunF,hunG];

var thousZeroArray=[thouA,thouB,thouC,thouD,thouE,thouF];
var thousOneArray=[thouB,thouC];
var thousTwoArray=[thouA,thouB,thouD,thouE,thouG];
var thousThreeArray=[thouA,thouB,thouC,thouD,thouG];
var thousFourArray=[thouB,thouC,thouF,thouG];
var thousFiveArray=[thouA,thouC,thouD,thouF,thouG];
var thousSixArray=[thouA,thouC,thouD,thouE,thouF,thouG];
var thousSevenArray=[thouA,thouB,thouC];
var thousEightArray=[thouA,thouB,thouC,thouD,thouE,thouF,thouG];
var thousNineArray=[thouA,thouB,thouC,thouD,thouF,thouG];
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
		TweenMax.to(objectArray[i], 0, {autoAlpha:0})
	}
}
//End Hide Code

// Start Meter Numbers
var onesArray=[oneA,oneB,oneC,oneD,oneE,oneF,oneG];
var tensArray=[tenA,tenB,tenC,tenD,tenE,tenF,tenG];
var hunsArray=[hunA,hunB,hunC,hunD,hunE,hunF,hunG];
var thousArray=[thouA,thouB,thouC,thouD,thouE,thouF,thouG];

var onesZeroArray=[oneA,oneB,oneC,oneD,oneE,oneF];
var onesOneArray=[oneB,oneC];
var onesTwoArray=[oneA,oneB,oneD,oneE,oneG];
var onesThreeArray=[oneA,oneB,oneC,oneD,oneG];
var onesFourArray=[oneB,oneC,oneF,oneG];
var onesFiveArray=[oneA,oneC,oneD,oneF,oneG];
var onesSixArray=[oneA,oneC,oneD,oneE,oneF,oneG];
var onesSevenArray=[oneA,oneB,oneC];
var onesEightArray=[oneA,oneB,oneC,oneD,oneE,oneF,oneG];
var onesNineArray=[oneA,oneB,oneC,oneD,oneF,oneG];

var tensZeroArray=[tenA,tenB,tenC,tenD,tenE,tenF];
var tensOneArray=[tenB,tenC];
var tensTwoArray=[tenA,tenB,tenD,tenE,tenG];
var tensThreeArray=[tenA,tenB,tenC,tenD,tenG];
var tensFourArray=[tenB,tenC,tenF,tenG];
var tensFiveArray=[tenA,tenC,tenD,tenF,tenG];
var tensSixArray=[tenA,tenC,tenD,tenE,tenF,tenG];
var tensSevenArray=[tenA,tenB,tenC];
var tensEightArray=[tenA,tenB,tenC,tenD,tenE,tenF,tenG];
var tensNineArray=[tenA,tenB,tenC,tenD,tenF,tenG];

var hunsZeroArray=[hunA,hunB,hunC,hunD,hunE,hunF];
var hunsOneArray=[hunB,hunC];
var hunsTwoArray=[hunA,hunB,hunD,hunE,hunG];
var hunsThreeArray=[hunA,hunB,hunC,hunD,hunG];
var hunsFourArray=[hunB,hunC,hunF,hunG];
var hunsFiveArray=[hunA,hunC,hunD,hunF,hunG];
var hunsSixArray=[hunA,hunC,hunD,hunE,hunF,hunG];
var hunsSevenArray=[hunA,hunB,hunC];
var hunsEightArray=[hunA,hunB,hunC,hunD,hunE,hunF,hunG];
var hunsNineArray=[hunA,hunB,hunC,hunD,hunF,hunG];

var thousZeroArray=[thouA,thouB,thouC,thouD,thouE,thouF];
var thousOneArray=[thouB,thouC];
var thousTwoArray=[thouA,thouB,thouD,thouE,thouG];
var thousThreeArray=[thouA,thouB,thouC,thouD,thouG];
var thousFourArray=[thouB,thouC,thouF,thouG];
var thousFiveArray=[thouA,thouC,thouD,thouF,thouG];
var thousSixArray=[thouA,thouC,thouD,thouE,thouF,thouG];
var thousSevenArray=[thouA,thouB,thouC];
var thousEightArray=[thouA,thouB,thouC,thouD,thouE,thouF,thouG];
var thousNineArray=[thouA,thouB,thouC,thouD,thouF,thouG];
//End Meter Numbers

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

TweenMax.to([electronPath2], 0, {strokeWidth:0});
TweenMax.to([pole_hide,pole1Copy_hide], 1, {rotation:30,transformOrigin:"0 20"});

slideTl
.to(headingText,1,{autoAlpha:0, delay:1})
.staggerFromTo([path8300], 3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:1})
.staggerFromTo([path5714,path5718], .1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.from([leftElectrons, leftHoles,rightHoles,batteryText_hide], 1, {autoAlpha:0})
.staggerFromTo([lightBulb], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:.5})
.staggerFromTo([path5728], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([path5734], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})

.staggerFromTo([wire1,wire2], 1.5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:3.5})
.staggerFromTo([path5465,path5467,path5469,path5471,path5473], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:1})
.to([electronPath2], 0.5, {strokeDasharray:"2,12", ease:Linear.easeNone, strokeWidth:8, delay:-.5})
.to([electronPath2], 0.5, {strokeDashoffset:"-=14", repeat:15, ease:Linear.easeNone,yoyo:false})
.to([leftElectrons, leftHoles,rightHoles,electronPath2,batteryText_hide], 1, {autoAlpha:0})

//Morph to diagram style

.to(path8300, 1, {morphSVG:"#batterySymbol_hide"})
.to(path5714, 1, {morphSVG:"#path5712_hide", delay:-1})
.to(path5718, 1, {morphSVG:"#path9233-0-2_hide", delay:-1})
.to([twelveV_hide], 1, {autoAlpha:1, delay:-1})

.to(lightBulb, 1, {morphSVG:"#lightBulbFilament_hide", delay:-1})
.to([path5728, path5734,path5465,path5467,path5469,path5471,path5473], 1 ,{autoAlpha:0, delay:-1})

.to(wire1, 1, {morphSVG:"#path5745_hide", delay:-1})
.to(wire2, 1, {morphSVG:"#path5747_hide", delay:-1})

.to([dots_hide], 0, {autoAlpha:1, delay:0})
.to(pole_hide, 1, {autoAlpha:1, delay:0})
.to([path5882_hide], 0, {strokeDasharray:"2,8", ease:Linear.easeNone, strokeWidth:5, delay:6})
.to([path5882_hide], 0, {strokeDashoffset:"-=10", ease:Linear.easeNone,yoyo:false})
.to([lightBulbFilament2_hide], 0, {strokeDasharray:"2,8", ease:Linear.easeNone, strokeWidth:5, delay:0})
.to([lightBulbFilament2_hide], 0, {strokeDashoffset:"-=10", ease:Linear.easeNone,yoyo:false})
.to([path5899_hide], 0, {strokeDasharray:"2,8", ease:Linear.easeNone, strokeWidth:5, delay:0})
.to([path5899_hide], 0, {strokeDashoffset:"-=10", ease:Linear.easeNone,yoyo:false})
.to([path5882_hide,lightBulbFilament2_hide,path5899_hide], 0, {stroke:"red", delay:0})
.to([feExtendingFromBattery_hide,pole1Copy_hide], 0, {strokeDasharray:"2,8", ease:Linear.easeNone, strokeWidth:5, delay:0})
.to([feExtendingFromBattery_hide,pole1Copy_hide], 0, {strokeDashoffset:"-=10", ease:Linear.easeNone,yoyo:false})

.to([feExtendingFromBattery_hide,pole1Copy_hide], 1, {autoAlpha:1, delay:11})

.to([path5882_hide,lightBulbFilament2_hide,path5899_hide], 1, {autoAlpha:1, delay:19})
.to([path5882_hide,lightBulbFilament2_hide,path5899_hide], .75, {strokeWidth:8, delay:11})
.to([path5882_hide,lightBulbFilament2_hide,path5899_hide], .75, {strokeWidth:5})

.to([onesArray,tensArray,hunsArray,thousArray], 0, {fill:"#b3b3b3", delay:0})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray], 0, {fill:"black"})

.to(multimeterGroup_hide, 1, {autoAlpha:1, delay:10})
.to(blackLead, 1.5, {morphSVG:"#blackLeadPos1_hide",delay:1})
.to(redLead, 1.5, {morphSVG:"#redLeadPos1_hide"})
.to([onesArray,tensArray,hunsArray,thousArray], 0, {fill:"#b3b3b3", delay:0})
.to([thousOneArray,hunsTwoArray,tensZeroArray,onesZeroArray], .5, {fill:"black"})


.to([onesArray,tensArray,hunsArray,thousArray], 0, {fill:"#b3b3b3", delay:5})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray], .5, {fill:"black"})
.to(redLead, 1.5, {morphSVG:"#redLeadPos2_hide",delay:-.5})
.to([onesArray,tensArray,hunsArray,thousArray], 0, {fill:"#b3b3b3", delay:0})
.to([thousOneArray,hunsTwoArray,tensZeroArray,onesZeroArray], .5, {fill:"black"})

.to([onesArray,tensArray,hunsArray,thousArray], 0, {fill:"#b3b3b3", delay:10})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray], .5, {fill:"black"})
.to(redLead, 1.5, {morphSVG:"#redLeadPos3_hide",delay:-.5})
.to([onesArray,tensArray,hunsArray,thousArray], 0, {fill:"#b3b3b3", delay:0})
.to([thousOneArray,hunsTwoArray,tensZeroArray,onesZeroArray], .5, {fill:"black"})

.to([onesArray,tensArray,hunsArray,thousArray], 0, {fill:"#b3b3b3", delay:3})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray], .5, {fill:"black"})
.to(redLead, 1.5, {morphSVG:"#redLeadPos4_hide",delay:-.5})
.to([onesArray,tensArray,hunsArray,thousArray], 0, {fill:"#b3b3b3", delay:0})
.to([thousOneArray,hunsTwoArray,tensZeroArray,onesZeroArray], .5, {fill:"black"})

.to([onesArray,tensArray,hunsArray,thousArray], 0, {fill:"#b3b3b3", delay:2})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray], .5, {fill:"black"})
.to(blackLead, 1.5, {morphSVG:"#blackLeadPos2_hide",delay:-.5})
.to([onesArray,tensArray,hunsArray,thousArray], 0, {fill:"#b3b3b3", delay:0})
.to([thousOneArray,hunsTwoArray,tensZeroArray,onesZeroArray], .5, {fill:"black"})


.to([onesArray,tensArray,hunsArray,thousArray], 0, {fill:"#b3b3b3", delay:7})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray], .5, {fill:"black"})
.to(blackLead, 1.5, {morphSVG:"#blackLeadPos1_hide",delay:0})
.to(redLead, 1.5, {morphSVG:"#redLeadPos1_hide"})
.to([onesArray,tensArray,hunsArray,thousArray], 0, {fill:"#b3b3b3", delay:0})
.to([thousOneArray,hunsTwoArray,tensZeroArray,onesZeroArray], .5, {fill:"black"})



.to([onesArray,tensArray,hunsArray,thousArray], 0, {fill:"#b3b3b3", delay:13})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray], .5, {fill:"black"})
.to(blackLead, 1.5, {morphSVG:"#blackLeadPos3_hide",delay:0})
.to(redLead, 1.5, {morphSVG:"#redLeadPos4_hide",delay:-1.5})


.to(blackLead, 1.5, {morphSVG:"#blackLeadPos1_hide",delay:2})
.to(redLead, 1.5, {morphSVG:"#redLeadPos1_hide",delay:-1.5})
.to([onesArray,tensArray,hunsArray,thousArray], 0, {fill:"#b3b3b3", delay:0})
.to([thousOneArray,hunsTwoArray,tensZeroArray,onesZeroArray], .5, {fill:"black"})

//wire1 current flow
.to([pole_hide,pole1Copy_hide], 1, {rotation:0,transformOrigin:"0 20",delay:1})
.add(function(){TweenMax.to([feExtendingFromBattery_hide,pole1Copy_hide,path5882_hide,lightBulbFilament2_hide,path5899_hide], 0.5, {strokeDashoffset:"-=20", repeat:0, ease:Linear.easeNone,yoyo:false})})
.add(function(){TweenMax.to([feExtendingFromBattery_hide,pole1Copy_hide,path5882_hide,lightBulbFilament2_hide,path5899_hide], 0.5, {strokeDashoffset:"-=20", repeat:-1, ease:Linear.easeNone,yoyo:false})})


.to([onesArray,tensArray,hunsArray,thousArray], 0, {fill:"#b3b3b3", delay:0})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray], .5, {fill:"black"})

.to(path5882_hide, 1, {stroke:"black", delay:-.7})
.to(lightBulbFilament2_hide, 1, {stroke:"orange", delay:-1})


.to(blackLead, 1.5, {morphSVG:"#blackLeadPos3_hide",delay:14.5})
.to(redLead, 1.5, {morphSVG:"#redLeadPos4_hide",delay:-1})
.to([onesArray,tensArray,hunsArray,thousArray], 0, {fill:"#b3b3b3", delay:0})
.to([thousOneArray,hunsTwoArray,tensZeroArray,onesZeroArray], .5, {fill:"black"})
