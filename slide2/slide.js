slide = new XMLHttpRequest();
slide.open("GET","slide.svg",false);
slide.overrideMimeType("image/svg+xml");
slide.send("");
var slide= document.getElementById("main").appendChild(slide.responseXML.documentElement);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var svgWindow = document.getElementById("main");
var svg = d3.select(svgContent);
function redraw(){
	var width = svgWindow.clientWidth;
	var height = svgWindow.clientHeight;
	svg
	.attr("width", width)
	 .attr("height", height);
}
redraw();
window.addEventListener("resize", redraw);

//Browser Adjustments
var slideAudio = document.getElementById('music');
slideAudio.src="slide.mp3"


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

var slideTl = new TimelineMax({paused:true});

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
		case "drag":
		TweenMax.to(objectArray[i], .01, {autoAlpha:0})
	}
}
//End Hide Code

//TimeLines////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var orbitPath1 = MorphSVGPlugin.pathDataToBezier("#orbitPath1", {align:electron1_drag});
// TweenLite.set(electron1_drag, {xPercent:-50, yPercent:-50});
var orbitPath2 = MorphSVGPlugin.pathDataToBezier("#orbitPath2", {align:electron2_drag});
// TweenLite.set(electron2_drag, {xPercent:-50, yPercent:-50});
var orbitPath3 = MorphSVGPlugin.pathDataToBezier("#orbitPath3", {align:electron3_drag});
// TweenLite.set(electron3_drag, {xPercent:-50, yPercent:-50});
var orbitPath4 = MorphSVGPlugin.pathDataToBezier("#orbitPath4", {align:electron4_drag});
// TweenLite.set(electron4_drag, {xPercent:-50, yPercent:-50});
var orbitPath5 = MorphSVGPlugin.pathDataToBezier("#orbitPath5", {align:electron5_drag});
// TweenLite.set(electron5_drag, {xPercent:-50, yPercent:-50});
var orbitPath6 = MorphSVGPlugin.pathDataToBezier("#orbitPath6", {align:electron6_drag});
// TweenLite.set(electron6_drag, {xPercent:-50, yPercent:-50});
var orbitPath7 = MorphSVGPlugin.pathDataToBezier("#orbitPath7", {align:electron7_drag});
// TweenLite.set(electron7_drag, {xPercent:-50, yPercent:-50});
var orbitPath8 = MorphSVGPlugin.pathDataToBezier("#orbitPath8", {align:electron8_drag});
// TweenLite.set(electron8_drag, {xPercent:-50, yPercent:-50});

var electronOrbitTl = new TimelineMax({paused:false, repeat:-1});
electronOrbitTl.to(electron1_drag, 4.2, {bezier:{values:orbitPath1, type:"cubic"}, ease:Linear.easeNone})
var electronOrbitTl2 = new TimelineMax({paused:false, repeat:-1});
electronOrbitTl2.to(electron2_drag, 3.8, {bezier:{values:orbitPath2, type:"cubic"}, ease:Linear.easeNone})
var electronOrbitTl3 = new TimelineMax({paused:false, repeat:-1});
electronOrbitTl3.to(electron3_drag, 4, {bezier:{values:orbitPath3, type:"cubic"}, ease:Linear.easeNone})
var electronOrbitTl4 = new TimelineMax({paused:false, repeat:-1});
electronOrbitTl4.to(electron4_drag, 4, {bezier:{values:orbitPath4, type:"cubic"}, ease:Linear.easeNone});
var electronOrbitTl5 = new TimelineMax({paused:false, repeat:-1});
electronOrbitTl5.to(electron5_drag, 4.2, {bezier:{values:orbitPath5, type:"cubic"}, ease:Linear.easeNone});
var electronOrbitTl6 = new TimelineMax({paused:false, repeat:-1});
electronOrbitTl6.to(electron6_drag, 3.8, {bezier:{values:orbitPath6, type:"cubic"}, ease:Linear.easeNone});
var electronOrbitTl7 = new TimelineMax({paused:false, repeat:-1});
electronOrbitTl7.to(electron7_drag, 4, {bezier:{values:orbitPath7, type:"cubic"}, ease:Linear.easeNone});
var electronOrbitTl8 = new TimelineMax({paused:false, repeat:-1});
electronOrbitTl8.to(electron8_drag, 4, {bezier:{values:orbitPath8, type:"cubic"}, ease:Linear.easeNone});
var orbitsArray = [orbitPath1,orbitPath2,orbitPath3,orbitPath4,orbitPath5,orbitPath7];
var orbit1Array = [orbitPath1,orbitPath2,orbitPath3,orbitPath4,orbitPath5,orbitPath7];

TweenMax.from([electron1_drag,electron2_drag,electron3_drag,electron4_drag,electron5_drag,electron6_drag,electron7_drag,electron8_drag], 1, {autoAlpha:0})
TweenMax.to(orbitPath1,0,{x:"-=8", y:"-=10"})
TweenMax.to(orbitPath2,0,{x:"-=8", y:"-=10"})
TweenMax.to(orbitPath3,0,{x:"-=8", y:"-=10"})
TweenMax.to(orbitPath4,0,{x:"-=8", y:"-=10"})
TweenMax.to(orbitPath5,0,{x:"-=8", y:"-=10"})
TweenMax.to(orbitPath6,0,{x:"-=8", y:"-=10"})
TweenMax.to(orbitPath7,0,{x:"-=8", y:"-=10"})
TweenMax.to(orbitPath8,0,{x:"-=8", y:"-=10"})
//Main Timeline//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
//     TweenMax.to(pressPlayIcon_drag, .001, {autoAlpha:1});
   
// } 

slideTl
.to(lightningPic, 1, {autoAlpha:0},"+=2.5")
.to([fan_drag, lightBulb_drag], 1, {autoAlpha:1})
.to(fanBlade, 1, {rotation:360, transformOrigin: '50% 50%', repeat:7, ease: Power0.easeNone},"-=.5")
.to([lightRays_drag], 1, {autoAlpha:1},"-=6")
.to([fan_drag, lightBulb_drag,lightRays_drag], 1, {autoAlpha:0})

.from([svgAtom_drag,text3115_drag], 1, {autoAlpha:0})

.to([svgAtom_drag,text3115_drag], 1, {autoAlpha:0},"+=13")

//copper wire division
.to(piece1_drag, 1, {autoAlpha:1})
.to(piece3, 1, {autoAlpha:0},"+=1.5")
.to(piece2, 1, {x:"+=50"})

.to(piece4, 1, {autoAlpha:0},"+=.5")
.to(piece5, 1, {x:"+=25"})

.to(piece6, 1, {autoAlpha:0},"+=.5")
.to(piece7, 1, {x:"+=12"})

.to(piece1_drag, 1, {autoAlpha:0},"+=2")



.to([svgAtom_drag], 2, {autoAlpha:1},"+=1")


.to([electronOrbitTl], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},'+=10')
.to([electronOrbitTl2], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl3], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl4], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl5], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl6], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl7], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl8], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},"-=1")
.to([text3115_drag], 1, {autoAlpha:0})


//Call out nucleus
.from([text2412_drag], 1, {autoAlpha:0},"+=1")
.from(path4459, .75, {drawSVG:"0%", autoAlpha:0, immediateRender:true, ease: Power0.easeNone},'-=1')


// hide nucleus call out
.to([text2412_drag], 1, {autoAlpha:0},"+=1")
.to(path4459, 1, {autoAlpha:0, ease: Power0.easeNone},'-=1')

//Show nuecleus protons and neutons.
.to([nucleus_drag], 1, {scaleX:0.3567945767525061, scaleY:0.350428666064864, autoAlpha:1, transformOrigin: '50% 50%', ease: Power0.easeNone})

//Show Inside the nucleus are...
.from([text2755_drag], .5, {autoAlpha:0},'+=1')
.from(protonArrow_drag, .75, {drawSVG:"0%", autoAlpha:0, immediateRender:true, ease: Power0.easeNone},'-=1')

// //Show Neutrally charged...
.from([text3603_drag], .5, {autoAlpha:0},'+=2')
.from(neutronArrow_drag, .75, {drawSVG:"0%", autoAlpha:0, immediateRender:true, ease: Power0.easeNone},'-=1')

// Hide protons and neutrons
.to([text2755_drag,text3603_drag], .5, {autoAlpha:0},'+=3')
.to([protonArrow_drag,neutronArrow_drag], .25, {drawSVG:"0%", autoAlpha:0, immediateRender:false, ease: Power0.easeNone},"-=.5")

// //Atom connecting lines
.fromTo(path4790, .1, {drawSVG:"0%"}, {drawSVG:"13%",immediateRender:true, ease: Power0.easeNone},"+=2")
.to([electron5_drag], .1, {stroke:"red", scaleX:2, scaleY:2, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeIn},'+=0')
.to([electron5_drag], .1, {stroke:"brown", scaleX:1, scaleY:1, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeOut},'+=0')

.fromTo(path4790, .1, {drawSVG:"12%"}, {drawSVG:"26%",immediateRender:false, ease: Power0.easeNone},'-=.0')
.to([electron6_drag], .1, {stroke:"red", scaleX:2, scaleY:2, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeIn},'+=0')
.to([electron6_drag], .1, {stroke:"brown", scaleX:1, scaleY:1, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeOut},'+=0')

.fromTo(path4790, .1, {drawSVG:"26%"}, {drawSVG:"39%",immediateRender:false, ease: Power0.easeNone},'-=.0')
.to([electron7_drag], .1, {stroke:"red", scaleX:2, scaleY:2, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeIn},'+=0')
.to([electron7_drag], .1, {stroke:"brown", scaleX:1, scaleY:1, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeOut},'+=0')

.fromTo(path4790, .1, {drawSVG:"39%"}, {drawSVG:"50%",immediateRender:false, ease: Power0.easeNone},'-=.0')
.to([electron4_drag], .1, {stroke:"red", scaleX:2, scaleY:2, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeIn},'+=0')
.to([electron4_drag], .1, {stroke:"brown", scaleX:1, scaleY:1, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeOut},'+=0')

.fromTo(path4790, .1, {drawSVG:"50%"}, {drawSVG:"64%",immediateRender:false, ease: Power0.easeNone},'-=.0')
.to([electron1_drag], .1, {stroke:"red", scaleX:2, scaleY:2, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeIn},'+=0')
.to([electron1_drag], .1, {stroke:"brown", scaleX:1, scaleY:1, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeOut},'+=0')

.fromTo(path4790, .1, {drawSVG:"64%"}, {drawSVG:"75%",immediateRender:false, ease: Power0.easeNone},'-=.0')
.to([electron2_drag], .1, {stroke:"red", scaleX:2, scaleY:2, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeIn},'+=0')
.to([electron2_drag], .1, {stroke:"brown", scaleX:1, scaleY:1, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeOut},'+=0')

.fromTo(path4790, .1, {drawSVG:"75%"}, {drawSVG:"87%",immediateRender:false, ease: Power0.easeNone},'-=.0')
.to([electron3_drag], .1, {stroke:"red", scaleX:2, scaleY:2, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeIn},'+=0')
.to([electron3_drag], .1, {stroke:"brown", scaleX:1, scaleY:1, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeOut},'+=0')

.fromTo(path4790, .1, {drawSVG:"87%"}, {drawSVG:"100%",immediateRender:false, ease: Power0.easeNone},'-=.0')
.to([electron8_drag], .1, {stroke:"red", scaleX:2, scaleY:2, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeIn},'+=0')
.to([electron8_drag], .1, {stroke:"brown", scaleX:1, scaleY:1, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeOut},'+=0')

// //Hide Nucleus and Text and Lines
.to([path4790], .5, {autoAlpha:0, transformOrigin: '50% 50%', ease: Power0.easeNone})
.to([nucleus_drag], 1, {scaleX:.01, scaleY:.01, autoAlpha:0, transformOrigin: '50% 50%', ease: Power0.easeNone})


// //Arrow showing attraction
.from([path2538,"#path2538-0","#path2538-4",path5082,path5080,path5084,path5084,path5088,path5086], .75, {drawSVG:"0%",immediateRender:true, ease: Power0.easeNone},'-=.0')
.to([path2538,"#path2538-0","#path2538-4",path5082,path5080,path5084,path5084,path5088,path5086], .5, {autoAlpha:0},'+=5')

.from([solarSystem_drag], 2, {autoAlpha:0},'-=1')


//Draw electron highlights.
.from(picOrbit1, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
.from([text3573_drag], 1, {autoAlpha:0})

.from(path3490, .25, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
.from(path3490a, .25, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
.from(path3490b, .25, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
.from(path3490c, .25, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
.from(path3490d, .25, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
.from(path3490e, .25, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
.from(path3490f, .25, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
.from(path3490g, .25, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
.from([text3595_drag], 1, {autoAlpha:0})
.to([solarSystem_drag,svgAtom_drag], 1, {autoAlpha:0},"+=.2")
.to([solarSystem_drag], 1, {x:254, y:-37, scaleX:0.5000000000000001, scaleY:0.5000000000000001, transformOrigin: '50% 50%', ease: Power0.easeNone},'-=0')
.to([svgAtom_drag], 1, {x:1160, y:-218, transformOrigin: '50% 50%', ease: Power0.easeNone},'-=1')

.to([copperAtom_drag], 1, {autoAlpha:1})
.to(band1_drag, 1, {autoAlpha:1},"+=1")
.to(band2_drag, 1, {autoAlpha:1})
.to(band3_drag, 1, {autoAlpha:1})
.to(band4_drag, 1, {autoAlpha:1})

.to([band1_drag,band2_drag,band3_drag,band4_drag], 1, {autoAlpha:0},"+=1")

.to(conductionBand_drag, 1, {autoAlpha:1})

.to(conductionBand_drag, 1, {autoAlpha:0},"+=3")

.to(copperAtom_drag, 2, {x:"+=155"})
.to(copperAtom2_drag, 1, {autoAlpha:1})

.to (freeElectron, 2, {x:"+=-255", y:50},"+=3")
.to(band4Electron1_drag, 1, {autoAlpha:1},"-=1")

.from([morePositive_drag], 1, {autoAlpha:0},"+=5")
.from([moreNegative_drag], 1, {autoAlpha:0},"+=4.5")

.to([moreNegative_drag,morePositive_drag,copperAtom_drag, copperAtom2_drag], 1, {autoAlpha:0},"+=1")



.to([circuit_drag], 1, {autoAlpha:1})
.to([noCharge_drag], 1, {autoAlpha:1},"+=10")
.from([path4014,path4016], .75, {drawSVG:"0%", autoAlpha:0, immediateRender:true, ease: Power0.easeNone})



// .to([path4014,path4016], .75, {drawSVG:"0%", autoAlpha:0, immediateRender:true, ease: Power0.easeNone},"+=2")
.to([noCharge_drag,path4014,path4016], 1, {autoAlpha:0},"+=3")
.to([current_drag], 1, {autoAlpha:1},"+=1")
.to([l1_drag,neutral_drag], 1, {autoAlpha:1})



.to([line1_copy,r1_copy,line2_copy], 0.5, {strokeDashoffset:"-=12", repeat:-1, ease:Linear.easeNone,yoyo:false})

TweenMax.to([line1_copy,r1_copy,line2_copy], 0.5, {strokeDasharray:"2,4", ease:Linear.easeNone})

