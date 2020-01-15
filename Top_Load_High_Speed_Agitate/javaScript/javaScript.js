// slide = new XMLHttpRequest();
// slide.open("GET","schematic.svg",false);
// slide.overrideMimeType("image/svg+xml");
// slide.send("");
// var slide= document.getElementById("main").appendChild(slide.responseXML.documentElement);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Resize Window
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
slideAudio.src="topLoadHighSpeedAgitate.mp3"


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

var diagram1Paths = document.getElementById("diagram1").getElementsByTagName("path");
var diagram1PathsLength = diagram1Paths.length;

for(i=0; i<diagram1PathsLength; i++){
  diagram1Paths[i].style['stroke-linecap']="round";
  diagram1Paths[i].style.stroke = "Black";
  diagram1Paths[i].style.strokeWidth = originalLineSize;
  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('stroke','blue');
  path.setAttribute('fill','none');
  path.setAttribute('opacity',0);
  path.setAttribute('id',diagram1Paths[i].id + 'copy');

  if(deviceType == "mobile"){
    path.setAttribute('onclick','wireClicked(this);');
    path.setAttribute('ontouchstart','wireClicked(this);');
    path.setAttribute('ontouchend','wireClicked(this);');
    path.setAttribute('onmouseover','wireClicked(this);');
    }else{
      path.setAttribute('onclick','wireClicked(this);');
      path.setAttribute('onmouseover','this.style.cursor = "default"; overPath(this);');
      path.setAttribute('onmouseout','notOverPath(this);');
    }
    path.style['stroke-linecap']="round";
    path.setAttribute("d", diagram1Paths[i].getAttribute("d"));
    diagram1.appendChild(path);
    path.style["stroke-width"]= 2;
}

for(i=0; i<svgContent.childNodes.length; i++){
  var myLabel = $(svgContent.childNodes[i]).attr('inkscape:label');
  // console.log(svgContent.childNodes[i].childNodes)
  if(myLabel != undefined){
    svgContent.childNodes[i].style.display = "inline"
  }
}

function overPath(wire){
  if(highlighterSelected == true){
    wire.setAttribute("opacity", ".5"); 
  }
}

function notOverPath(wire){
  if(highlighterSelected == true){
    wire.setAttribute("opacity", "0");
  }
}

function wireClicked(wire){
	console.log(wire.id)
}

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
          console.log('.to(' + this._eventTarget.id + ', 0, {x:' + this._eventTarget._gsTransform.x + ', y:' + this._eventTarget._gsTransform.y + ', scaleX:' + this._eventTarget._gsTransform.scaleX + ', scaleY:' + this._eventTarget._gsTransform.scaleX + ', transformOrigin: "50% 50%", ease:Power0.easeNone})');

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


TweenMax.to([path6168copy,path1154copy,pressureSensor_swcopy,path6076copy,path4548copy,path6116copy,path11093copy,path11095copy,path4568copy,path4528copy,path1456copy,path6136copy,path6096copy,path6196copy,path4508copy,path6216copy], 0, {stroke:'black', autoAlpha:1});
TweenMax.to([path6156copy,path30883copy], 0, {stroke:'blue', autoAlpha:1});
TweenMax.to([hotValve,coldValve, slowColdValve], 0, {stroke:'orange', autoAlpha:1});
TweenMax.staggerFromTo([path6168copy,path1154copy,pressureSensor_swcopy,path6076copy,path4548copy,path6116copy,path11093copy,path11095copy,path4568copy,path4528copy,path1456copy,path6136copy,path6096copy,path6196copy,path4508copy,path6216copy,path6156copy,path30883copy], 0, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
TweenMax.to([pressureSensor_sw, pressureSensor_swcopy], 0, {rotation:42, transformOrigin: "0% 100%", ease:Power0.easeNone})
TweenMax.to(svgContent, 0, {x:46, y:-162, scaleX:2, scaleY:2, transformOrigin: "50% 50%", ease:Power0.easeNone});
TweenMax.to([lidSwitch_sw, lidSwitch_swcopy], 0, {rotation:-40, transformOrigin: "0% 0%", ease:Power0.easeNone})





var slideTl = new TimelineMax({paused:true});
slideTl
.to(fillWater, 5, {y:-200, delay:1})
.to([pressureSensor_sw, pressureSensor_swcopy], .5, {rotation:0, transformOrigin: "0% 100%", ease:Power0.easeNone})
.to([path6076copy,path4548copy,path6116copy,path11093copy,path11095copy,path4568copy,path4528copy,path1456copy,path6136copy,path6096copy,path6196copy,path4508copy,path6216copy,path6156copy,path30883copy,hotValve,coldValve,slowColdValve], 0, {stroke:'black', autoAlpha:0})
.to(waterInTub_drag, 1, {autoAlpha:0, delay:1})
.to(path2546copy, 0, {autoAlpha:1, stroke:l1Color})
.staggerFromTo([path2546copy], 2, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:-1})


//Speed Select Switch
.to(speedSelectSwitch_co, 0, {stroke:'red'})
.staggerFromTo([speedSelectSwitch_co], 1, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})

.to([path6448,speedSelectSwitch_sw,path6456,path6452], 1, {stroke:'red', autoAlpha:1, delay:-1})

.to([path6448,speedSelectSwitch_sw,path6456,path6452], 1, {stroke:l1Color, delay:1})
.to(speedSelectSwitch_co, 1, {autoAlpha:0, delay:-1})


//Speed Select Switch to Motor
.to([speedSelectSwitch_swcopy,path5854copy], 0, {stroke:l1Color, autoAlpha:1})
.to([speedSelectSwitch_sw, speedSelectSwitch_swcopy], .5, {rotation:33, transformOrigin: "0% 100%", ease:Power0.easeNone})
.staggerFromTo([speedSelectSwitch_swcopy], .75, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:.5})

.staggerFromTo([path5854copy], 5, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:1})


//High Speed Selected
.to([speedSelectSwitch_sw, speedSelectSwitch_swcopy], .5, {rotation:0, transformOrigin: "0% 100%", ease:Power0.easeNone, delay:5.5})
.to([path5854copy], 0, {autoAlpha:0, delay:-.4})
.to([path5552copy], 0, {stroke:l1Color, autoAlpha:1})
.staggerFromTo([path5552copy], 5, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:1})

//Agitation Control Switch

.to(agitationControlSwitch_co, 0, {stroke:'red', delay:4})
.staggerFromTo([agitationControlSwitch_co], 1, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.to([path6484,agitationControlSwitch_sw,path6488,path6504], 1, {stroke:'red', autoAlpha:1, delay:-1})



.to([path2625copy,path2623copy], 0, {stroke:l1Color, autoAlpha:1, delay:1})
.staggerFromTo([path2625copy], 1.5, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.staggerFromTo([path2623copy], 1, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})

.to([path6484,agitationControlSwitch_sw,path6488,path6504], 1, {stroke:l1Color, delay:3.5})
.to([agitationControlSwitch_co], 1, {autoAlpha:0, delay:-1})


//Close Agitation Control Switch
.to([agitationControlSwitch_swcopy,path2627copy], 0, {stroke:l1Color, autoAlpha:1, delay:3})
.staggerFromTo([agitationControlSwitch_swcopy], 1, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.staggerFromTo([path2627copy], 3, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:2})
.to(modeShiftercopy, 1, {stroke:'red', autoAlpha:1, delay:3})
.from(driveSystem_drag, 1, {autoAlpha:0, delay:-1})
.staggerFromTo([modeShifterTrace], 3, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.to([driveSystem_drag,modeShiftercopy,modeShifterTrace], 1, {autoAlpha:0,delay:2})



//L1 Supply to Motor
.to([path2629copy, path2634copy,path2636copy], 0, {stroke:l1Color, autoAlpha:1, delay:0})
.staggerFromTo([path2629copy], 1, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.staggerFromTo([path2634copy], 3, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.staggerFromTo([path2636copy], 3, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})

//Neutral to Motor
.to([path30889copy,path30883copy,path4670copy,path171708copy,path6748copy,path5046copy], 0, {stroke:neutralColor, autoAlpha:1, delay:1.5})
.staggerFromTo([path30889copy,path30883copy], 0, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.staggerFromTo([path4670copy], 3, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
.staggerFromTo([path171708copy], .3, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
.staggerFromTo([path6748copy], .1, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
.staggerFromTo([path5046copy], 1, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:2})


//Move Fuse Away
.to([fuseBlank, fuseBlankcopy], 1, {autoAlpha:1, delay:-1})
.to([path6748, path6748copy], 2, {x:-70, y: 35, delay:2})

.to([path6748, path6748copy], 2, {x:0, y: 0, delay:2})
.to([fuseBlank, fuseBlankcopy], 1, {autoAlpha:0, delay:0})


//Lid Switch to Motor
.to([path2632copy,lidSwitch_swcopy,path2648copy,path5504copy,path5484copy], 0, {stroke:l1Color, autoAlpha:1, delay:2.5})
.staggerFromTo([path2632copy], 1, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.staggerFromTo([lidSwitch_swcopy], .3, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.staggerFromTo([path2648copy], 2, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:2})

//Belt
.to(driveSystem_drag, 1, {autoAlpha:1, delay:11})

.staggerFromTo([belt], 1, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.to(driveSystem_drag, 1, {autoAlpha:0, delay:10})
.staggerFromTo([path5504copy], 1, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:2.5})
.staggerFromTo([path5484copy], 1, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.to(modeShiftercopy, 1, {stroke:'red', autoAlpha:1, delay:0})
.from(text2859, 1, {autoAlpha:0, delay:-1})



//Show Mode Shifter Teeth
.from(teethEngaged, 1, {autoAlpha:0})
.fromTo(coilGlow, 1, {autoAlpha:0}, {autoAlpha:.4, delay:3})
.from(teethNotEngaged, 0, {autoAlpha:0, delay:2})

.to([teethEngaged, teethNotEngaged, coilGlow], 1, {autoAlpha:0, delay:2})


.to(text2859, 1, {autoAlpha:0, delay:19})
.from(text2876, 1, {autoAlpha:0, delay:-1})
.to([modeShiftercopy], 1, {strokeWidth:.5, delay:-1})









var au = document.getElementById("music");
au.onloadedmetadata = function() {
    compensation = music.duration - slideTl.duration();
    slideTl.add(TweenMax.to(path6168copy, compensation, {autoAlpha: 0}));
    console.log(music.duration - slideTl.duration())
};


















//Timer Bus wiring










