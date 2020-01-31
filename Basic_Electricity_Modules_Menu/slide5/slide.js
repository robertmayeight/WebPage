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
		TweenMax.to(objectArray[i], .01, {autoAlpha:0})
		break;
		case "current":
		TweenMax.to(objectArray[i], .01, {autoAlpha:0})
		break;
	}
}
//End Hide Code

var groupPaths = document.getElementById("diagram1_hide").getElementsByTagName("path");
var groupPathsLength = groupPaths.length;
for(i=0; i<groupPathsLength; i++){
	pathLastName = groupPaths[i].id.split("_")
	console.log(pathLastName[1])
	if(groupPaths[i].parentNode.id == "diagram1_hide"){
		var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		path.setAttribute('stroke','black');
		path.setAttribute('fill','none');
		path.setAttribute('id',groupPaths[i].id + 'copy');
		path.style['stroke-width']=1;
		path.style['stroke-linecap']="round";
		path.style['stroke-linecap']="round";
		path.setAttribute("d", groupPaths[i].getAttribute("d"));
		diagram1_hide.appendChild(path);
		if(pathLastName[1] == "current"){
		path.setAttribute('opacity','0');
		// Tweenmax.to([groupPaths[i]], 0, {autoAlpha:0});
	}
	}
	
}

diagram1_hide.appendChild(coulomb_hide);


var coulombArray=[];
noPaths = document.getElementById("coulomb_hide").getElementsByTagName("path");
noPathsLength = noPaths.length;
for(i=0; i<noPathsLength; i++){
	noPaths[i].style['stroke-linecap']="round";
	coulombArray.push(noPaths[i])
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var normalCurrent = 4;
var doubleCurrent = 6;
var halfCurrent = 2.5;

var circuitComponents = [gnd1copy,s1copy,switched1copy,switched11copy,lightBulbFilamentcopy,switched2copy,switched3copy,lightBulb2a,lightBulb2b_currentcopy,switched3copy,parallel1_currentcopy,parallel2_currentcopy,lightBulb3b_currentcopy,switched22copy];

TweenMax.to([lightBulbFilamentcopy,lightBulb2b_currentcopy,lightBulb3b_currentcopy],0,{stroke:"orange"})
TweenMax.to([switched2copy,lightBulb2a,switched3copy,parallel2_currentcopy,switched22copy],0,{stroke:"red"})
TweenMax.to([s1,s1copy],0,{rotation:20, transformOrigin:"0 20"})

slideTl

.to(headingText,1,{autoAlpha:0})
.to(diagram1_hide,1,{autoAlpha:1})
.to([s1,s1copy], 1, {rotation:0,transformOrigin:"0 20",delay:1})
.to([circuitComponents], 1, {strokeDasharray:"2,8", ease:Linear.easeNone, strokeWidth:normalCurrent, delay:-1})
.add(function(){TweenMax.to([circuitComponents], 0.5, {strokeDashoffset:"-=20", repeat:-1, ease:Linear.easeNone,yoyo:false})})


.to([coulombArray], 0, {strokeDasharray:"1,4", ease:Linear.easeNone, strokeWidth:1.5, stroke:"black", delay:0})
.add(function(){TweenMax.to([coulombArray], 0.1, {strokeDashoffset:"-=5", repeat:-1, ease:Linear.easeNone,yoyo:false})})
.to(coulomb_hide,1,{autoAlpha:1, delay:4})
.to(coulomb_hide, 2, {scaleX:1, scaleY:1,transformOrigin:"50 25"})
.to(sixPointTwoFour_hide,1,{autoAlpha:1})
.to(coulomb_hide, 2, {scaleX:0, scaleY:0,transformOrigin:"50 25", delay:6})
.to([sixPointTwoFour_hide],1,{autoAlpha:0, delay:-2})


//24 volts large current
.to(twelveV, 1 ,{autoAlpha:0, delay:10})
.to(twentyFourV_hide, 1 ,{autoAlpha:1, delay:-1})
.to([circuitComponents], .1, {strokeWidth:doubleCurrent, delay:0})

//revert back to 12 volts and normal current
.to(twelveV, 1 ,{autoAlpha:1, delay:7})
.to(twentyFourV_hide, 1 ,{autoAlpha:0, delay:-1})
.to([circuitComponents], .1, {strokeWidth:normalCurrent, delay:0})

//6 volts small current
.to(twelveV, 1 ,{autoAlpha:0, delay:2})
.to(sixV_hide, 1 ,{autoAlpha:1, delay:-1})
.to([circuitComponents], .1, {strokeWidth:halfCurrent, delay:0})

//6 volts revert
.to(twelveV, 1 ,{autoAlpha:1, delay:6})
.to(sixV_hide, 1 ,{autoAlpha:0, delay:-1})
.to([circuitComponents], .1, {strokeWidth:normalCurrent, delay:0})

//add 2nd light bulb
.to([lightBulb2b_current,lightBulb2b_currentcopy,lightBulb2Shell_current], 1 ,{autoAlpha:1, delay:7})
.to([lightBulb2a,lightBulb2acopy], 1, {autoAlpha:0,delay:-1})
.to([switched2copy,switched22copy], 1, {stroke:"purple", delay:-1})

//Added resistance small current
.to([circuitComponents], .1, {strokeWidth:2, delay:0})
.to([switched2copy,switched22copy], .1, {strokeWidth:4, delay:8})
.to([switched2copy,switched22copy], .1, {strokeWidth:2, delay:14})

//Remove 2nd light bulb
.to([lightBulb2b_current,lightBulb2b_currentcopy,lightBulb2Shell_current], 1 ,{autoAlpha:0, delay:4})
.to([lightBulb2a,lightBulb2acopy], 1, {autoAlpha:1,delay:-1})
.to([switched2copy,switched22copy], 1, {stroke:"red", delay:-1})
.to([circuitComponents], .1, {strokeWidth:normalCurrent, delay:0})

//Move light to parallel with other light
.to(switched22copy,0,{stroke:"red"})
.to([switched11copy,lightBulbFilamentcopy,switched2copy,parallel1_currentcopy,lightBulb3b_currentcopy,parallel2_currentcopy], 0, {strokeWidth:halfCurrent, delay:0})
.to([lightBulb3b_current,lightBulb3b_currentcopy,lightBulb3Shell_current,lightBulb3Shell_currentcopy,parallel1_current,parallel1_currentcopy,parallel2_current,parallel2_currentcopy,parallel1_currentcopy,lightBulb3b_currentcopy,parallel2_currentcopy], 2, {autoAlpha:1, delay:0})

.from(path16175_hide, 1, {autoAlpha:0, delay:12})
.from(comeTogetherHere_hide, 1, {autoAlpha:0, delay:7.5})
