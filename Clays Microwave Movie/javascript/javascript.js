slide = new XMLHttpRequest();
slide.open("GET","schematic.svg",false);
slide.overrideMimeType("image/svg+xml");
slide.send("");
var slide= document.getElementById("main").appendChild(slide.responseXML.documentElement);
var myBody = document.getElementsByTagName("body")[0]


//Audio
var slideAudio = document.getElementById('music');
slideAudio.src="microwaveAudio.mp3"

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


var originalLineSize = .5;
var highlightedWidth = 1.45;
var l1Color = 'rgb(0, 0, 0)';
var neutralColor = 'rgb(0,0,255)';
var energizedLoad = 'rgb(255,165,0)';


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
  path.setAttribute('onclick','wireClicked(this);');
  path.setAttribute('onmouseover','this.style.cursor = "default"; overPath(this);');
  path.setAttribute('onmouseout','notOverPath(this);');
  path.style['stroke-linecap']="round";
  path.setAttribute("d", diagram1Paths[i].getAttribute("d"));
  diagram1.appendChild(path);
  path.style["stroke-width"]= 2;
}

for(i=0; i<svgContent.childNodes.length; i++){
  var myLabel = $(svgContent.childNodes[i]).attr('inkscape:label');
  if(myLabel != undefined){
    svgContent.childNodes[i].style.display = "inline"
  }
}

function overPath(wire){
    wire.setAttribute("opacity", ".5"); 
}

function notOverPath(wire){
    wire.setAttribute("opacity", "0");
}

function wireClicked(wire){
	console.log(wire.id)
  getSchematicPos();
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

//Timeline
TweenMax.set(svgContent, {x:-22, y:-130, scaleX:1, scaleY:1, transformOrigin: "50% 50%", ease:Power0.easeNone});
var slideTl = new TimelineMax({paused:true});
slideTl
// .to(timeComp, .5, {autoAlpha:0})

// .to(svgContent, 2, {x:88, y:-119, scaleX:2, scaleY:2, transformOrigin: "50% 50%", ease:Power0.easeNone})
// .from(coldRelay, 1, {autoAlpha:0, delay:-.5})
// .set(path2058, {autoAlpha:1, strokeWidth:2})
.to(["#line4042-3"], 1, {strokeWidth:3, delay:1})
.to(path7678, 1, ({strokeWidth:3, stroke:'orange', delay:1}))
.to(["#polyline3884-3"], 1, {strokeWidth:3, delay:1})
.from(noiseFilterBorder, 1, {autoAlpha:0, immediateRender:true})

.to(path7670, 1, ({strokeWidth:3, stroke:'orange', delay:1}))
.to([path10335, path10335, path10333,path10331,path10325,path10323], 1, {strokeWidth:3, delay:1})
.to(noiseFilterBorder, 1, {autoAlpha:0, immediateRender:true})

.to(path2380, 1, ({strokeWidth:3, stroke:'orange', delay:1}))
.to(["#line3868-3"], 1, {strokeWidth:3, delay:1})
.to(path348, 1, ({strokeWidth:3, stroke:'orange', delay:1}))
.to(["#line4652-6"], 1, {strokeWidth:3, delay:1})
.to([path6467], 1, {strokeWidth:3, delay:1})
.to([path6510], 1, {strokeWidth:3, delay:1})
.to([path6226], 1, {strokeWidth:3, delay:1})
.to([path6430], 1, {strokeWidth:3, delay:1})
.to([path6405], 1, {strokeWidth:3, delay:1})







.to([path5533], 1, {strokeWidth:3, delay:1})
.to([path5517], 1, {strokeWidth:3, delay:1})
.to([path5523], 1, {strokeWidth:3, delay:1})




.to([line3792], 1, {strokeWidth:3, delay:1})
.to([path5926,path5924], 1, {strokeWidth:3, delay:1})
.to([path12041], 1, {strokeWidth:3, delay:1})
.to(["#line5266-2"], 1, {strokeWidth:3, delay:1})
.to([path16], 1, {strokeWidth:3, delay:1})
.to([path12859], 1, {strokeWidth:3, delay:1})


//Neutral
.to(line4024, 1, ({strokeWidth:3, stroke:'blue', delay:1}))
.to(line3354, 1, ({strokeWidth:3, stroke:'blue', delay:1}))
.to(path6664, 1, ({strokeWidth:3, stroke:'blue', delay:1}))
.to([path6127, path6327,path6315,path6317], 1, ({strokeWidth:3, stroke:'blue', delay:1}))
.to(path6301, 1, ({strokeWidth:3, stroke:'blue', delay:1}))
.to(path6303, 1, ({strokeWidth:3, stroke:'blue', delay:1}))
.to(["#line3824-7"], 1, ({strokeWidth:3, stroke:'blue', delay:1}))
.to(path6333, 1, ({strokeWidth:3, stroke:'blue', delay:1}))
.to(path6261, 1, ({strokeWidth:3, stroke:'blue', delay:1}))
.to(path6384, 1, ({strokeWidth:3, stroke:'blue', delay:1}))
.to(["#line3312-6"], 1, ({strokeWidth:3, stroke:'blue', delay:1}))
.to(line3862, 1, ({strokeWidth:3, stroke:'blue', delay:1}))
.to(neutralSupplyBus, 1, ({strokeWidth:3, stroke:'blue', delay:1}))




.to(["#line3346-3"], 1, ({strokeWidth:3, stroke:'blue', delay:1}))

























// .to([path7814], .5, {rotation:0, transformOrigin: "100% 0%", ease:Power0.easeNone, delay:1})

// .set(path2060, {autoAlpha:1, strokeWidth:2})
// .fromTo([path2060], 4, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
// .to(svgContent, 2, {x:-213, y:-184, scaleX:2, scaleY:2, transformOrigin: "50% 50%", ease:Power0.easeNone, delay:-2})




function playVideo(){
  myVideo.play();
  var elem = document.getElementById("myVideo");
}


var au = document.getElementById("music");
au.onloadedmetadata = function() {
    compensation = music.duration - slideTl.duration();
    slideTl.add(TweenMax.to(timeComp, compensation, {autoAlpha: 0}));
    console.log(music.duration - slideTl.duration())
};


