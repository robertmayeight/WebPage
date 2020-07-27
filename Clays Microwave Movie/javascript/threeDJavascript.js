var slideTl = new TimelineMax({paused:true});

//Audio
var slideAudio = document.getElementById('music');
slideAudio.src="topLoadHighSpeedAgitate.mp3"

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

var au = document.getElementById("music");
au.onloadedmetadata = function() {
    compensation = music.duration - slideTl.duration();
    slideTl.add(TweenMax.to(path6168copy, compensation, {autoAlpha: 0}));
    console.log(music.duration - slideTl.duration())
};





function init() {

  

//Timeline
TweenMax.to(svgContent, 0, {x:46, y:-162, scaleX:2, scaleY:2, transformOrigin: "50% 50%", ease:Power0.easeNone});
TweenMax.to([path6168copy,path1154copy,pressureSensor_swcopy,path6076copy,path4548copy,path6290copy,path6293copy,path2629copy,path171736copy,path5552copy,agitationControlSwitch_co, speedSelectSwitch_swcopy,path5854copy,path2634copy,path2632copy,lidSwitch_swcopy,path2648copy,path2636copy], 0, {stroke:'black', autoAlpha:1});
slideTl
.to([path2625copy,path2623copy,path2623,path2623copy,agitationControlSwitch_sw,agitationControlSwitch_swcopy,path5074copy,path4754copy,path6515copy], 0, {stroke:l1Color, autoAlpha:1, delay:1})
.staggerFromTo([path2625copy], 1.5, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.staggerFromTo([path2623copy], 1, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})

//Trace agitate switch
.set([agitationControlSwitch_co, timerMotorSwitch_co, speedSelectSwitch_co], {stroke:'red', delay:0})
.from(agitationControlSwitch_co, 1, {autoAlpha:0, delay:0})
.to([agitationControlSwitch_sw, agitationControlSwitch_swcopy], .5, {rotation:-55, transformOrigin: "0% 0%", ease:Power0.easeNone, delay:1})
.to(agitationControlSwitch_co, 1, {autoAlpha:0, delay:0})



//Trace Drain pump circuit
.staggerFromTo([agitationControlSwitch_swcopy], .25, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.staggerFromTo([path5074copy], 2.5, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
//Highlight pump
.to(path6444copy, 1, {stroke:'orange', autoAlpha:1})

//Trace neutral
.set([path4670copy], {stroke:neutralColor, autoAlpha:1})
.fromTo(path4670copy, 1, {drawSVG:"0% 0%"}, {drawSVG:"100% 0%", ease: Power0.easeNone, delay:1.5})
.set([path2638copy], {stroke:neutralColor, autoAlpha:1})
.fromTo(path2638copy, .5, {drawSVG:"0% 0%"}, {drawSVG:"100% 0%", ease: Power0.easeNone})
.set([path4754copy], {stroke:neutralColor, autoAlpha:1})
.fromTo(path4754copy, 1, {drawSVG:"0% 0%"}, {drawSVG:"0% 100%", ease: Power0.easeNone})

//Show water in tub and animate
.from(waterInTub_drag, .5, {autoAlpha:0,delay:.5})
.to(fillWater, 5, {scaleY:0, transformOrigin: "0% 100%",immediateRender:false, ease: Power0.easeNone, delay:.5})
.from([pressureSwitch_co], 1, {autoAlpha:0,delay:0})
.to([pressureSensor_sw, pressureSensor_swcopy], .5, {rotation:48, transformOrigin: "0% 100%", ease:Power0.easeNone, delay:0})
.to([waterInTub_drag, pressureSwitch_co], 1, {autoAlpha:0,delay:4})


//Open agitate switch
.to([agitationControlSwitch_co], 1, {autoAlpha:1,delay:2})
.to([agitationControlSwitch_sw, agitationControlSwitch_swcopy], .5, {rotation:-25, transformOrigin: "0% 0%", ease:Power0.easeNone, delay:0})


////////////////////////////////////////////////////////////////
//Hide previous callout
.to(agitationControlSwitch_co, 1, {autoAlpha:0, delay:2})
.staggerFromTo([agitationControlSwitch_co], .1, {drawSVG:'100% 0%'}, {drawSVG: '0% 0%', ease: Power0.easeNone,delay:0})
.set(agitationControlSwitch_co, {autoAlpha:1})

//Move diagram down.
.to(svgContent, 1, {y:-100, ease:Power0.easeNone})

//trace l1 from pressure switch to spin switch
// .to(fillWater, 5, {scaleY:0, transformOrigin: "0% 100%",immediateRender:false, ease: Power0.easeNone, delay:.5})
.fromTo(path6076copy, 3, {drawSVG:"0% 0%"}, {drawSVG:"100% 0%", ease: Power0.easeNone, delay:4})

//Show spin swich call out
.from([spinSwitch_co], 1, {autoAlpha:0,delay:0})
.to([path4548, path4548copy], .5, {rotation:-70, transformOrigin: "0% 0%", ease:Power0.easeNone, delay:7})
.to([spinSwitch_co], 1, {autoAlpha:0,delay:1})
.fromTo([path4548copy], .75, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.fromTo([path6290copy], 3, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.fromTo([path6293copy], 1.5, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.from(spinMode, 1, {autoAlpha:0})
.to(spinMode, 1, {autoAlpha:0, delay:2})

//High Speed
.to(svgContent, 2, {x:46, y:-300, scaleX:2, scaleY:2, transformOrigin: "50% 50%", ease:Power0.easeNone, delay:2})
.fromTo([path2629copy], 1, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:2})
.from(timerMotorSwitch_co, 1, {autoAlpha:0})
.fromTo([path171736copy], .75, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:3})
.to(timerMotorSwitch_co, 1, {autoAlpha:0, delay:-2})
.fromTo([path6515copy], 1.75, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.from(speedSelectSwitch_co, 1, {autoAlpha:0})
.fromTo([speedSelectSwitch_swcopy], 1, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:3})
.fromTo([path5552copy], 3, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.from([highSpeed, path5552copy], 1, {autoAlpha:0, delay:-1})


// Low Speed
.to([speedSelectSwitch_sw, speedSelectSwitch_swcopy], .5, {rotation:37, transformOrigin: "0% 100%", ease:Power0.easeNone, delay:3.5})
.to([highSpeed, path5552copy], 1, {autoAlpha:0, delay:-1})
.fromTo([path5854copy], 3, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.from(lowSpeed, 1, {autoAlpha:0, delay:-2})
.to(lowSpeed, 1, {autoAlpha:0, delay:1.5})


//Lid Switch
.fromTo([path2634copy], 3, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.fromTo([path2632copy], .75, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.to([lidSwitch_sw, lidSwitch_swcopy], .5, {rotation:-45, transformOrigin: "0% 0%", ease:Power0.easeNone, delay:-1})
.fromTo([lidSwitch_swcopy], .25, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.fromTo([path2648copy], 2, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})

//Power Supply
.fromTo([path2636copy], 2, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:2})
.set([path171708copy], {stroke:neutralColor, autoAlpha:1})
.fromTo([path171708copy], .22, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.set([fuseBlankcopy], {stroke:neutralColor, autoAlpha:1})
.fromTo([fuseBlankcopy], .1, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.set([path5046copy], {stroke:neutralColor, autoAlpha:1})
.fromTo([path5046copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})




.from(myVideo, 1, {autoAlpha:0, delay:3})
.to(svgContent, 1, {autoAlpha:0, delay:-1})


}
