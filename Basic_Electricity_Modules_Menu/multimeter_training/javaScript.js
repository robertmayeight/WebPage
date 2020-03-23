xhr = new XMLHttpRequest();
xhr.open("GET","lowEndRef.svg",false);
xhr.overrideMimeType("image/svg+xml");
xhr.send("");
document.getElementById("showWindow").appendChild(xhr.responseXML.documentElement);
var bezierWeight = 0.675;


for(i=0; i<5000; i++){
	var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
path.setAttribute('stroke','red');
path.setAttribute('fill','none');
path.setAttribute('id','path'+i);
path.setAttribute('onclick','console.log(this.id); callOutPath = this.id; traceLines(this)');
path.setAttribute('onmouseover','this.style.pointer = "default"; this.setAttribute("opacity", ".1"); ');
path.setAttribute('onmouseout','this.setAttribute("opacity", "1");');
path.style['stroke-width']=3;
path.style["z-index"] = 100000
g2088.appendChild(path);
}

var stripCircuit1Elements = document.getElementById("stripCircuit1").childNodes;
var noPathsLength = document.getElementById("stripCircuit1").getElementsByTagName("path").length
var noPaths = document.getElementById("stripCircuit1").getElementsByTagName("path")
console.log(noPathsLength)
for(i=0; i<noPathsLength; i++){
	var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		path.setAttribute('stroke','red');
		path.setAttribute('fill','none');
		path.setAttribute('id',noPaths[i].id + 'copy');
		path.setAttribute('onclick','console.log(this.id); this.style.stroke=violet; drawSVGArray.push("" + this.id); codeText.innerHTML=drawSVGArray');
		path.setAttribute('onmouseover','this.style.pointer = "default";this.setAttribute("opacity", ".1"); ');
		path.setAttribute('onmouseout','this.setAttribute("opacity", "1");');
		path.style['stroke-width']=1;
		path.style['stroke-linecap']="round";
		noPaths[i].style['stroke-linecap']="round";
		path.setAttribute("d", noPaths[i].getAttribute("d"))
		stripCircuit1.appendChild(path);		
	
}

var off1=0;
var Vdc=18;
var Vac=35;
var ohms=55;
var diode=67;
var cap=90;
var degreesF=115;
var degreesC=138;
var hz=162;
var microAmps=185;
var milliAmps=200;
var amps=215;
var off2=235;
TweenMax.set(text1, {text:"Basic Electricity", className:"h1", x:363, y:-315});
// TweenMax.set([multimeter], {x:-213, y:-535, scaleX:1.9030399999999998, scaleY:1.9030399999999998});

Draggable.create(stripCircuit1, {zIndexBoost:false});
stripCircuit1.addEventListener("DOMMouseScroll", function(e){zoomHandler2(e.detail, this)}, false)
stripCircuit1.onmouseover = function(){
	this.style.cursor="grab";
	showWindow.removeEventListener ("DOMMouseScroll", zoomHandler, false)
	scaleUp = this._gsTransform.scaleX;
};
stripCircuit1.onmousedown = function(){myDraggable[0].disable();};
stripCircuit1.onmouseup = function(){
	myDraggable[0].enable();
	codeText.innerHTML = this.id;
};
stripCircuit1.onmouseout = function(){showWindow.addEventListener ("DOMMouseScroll", zoomHandler, false);};

TweenMax.to(stripCircuit1,.001,{x:204, y:75, scaleX:3.444666439002155, scaleY:3.444666439002155, transformOrigin: "50% 50%",ease:Power0.easeNone})
TweenMax.to(['#multimeterGroup',path4047copy,path4351copy], .001, {autoAlpha:0})
var introTl = new TimelineMax({repeat:-1});
introTl





var mainTl = new TimelineMax({paused:true, onUpdate:adjustUI, repeat:-1});
mainTl
.set(text2, {text:"Press Play to Start", className:"h3 blackBg", x:369, y:-8})
.from(stripCircuit1,1,{autoAlpha:0})
.set([path2641copy,path2649copy,path7589copy,s2copy,path2645copy,s1copy,path7233copy,path2651copy,s3copy,path7250copy,path2653copy,s4copy,path7559copy,heatercopy,path7089copy,s6copy], {stroke:red})
.staggerFromTo([path2641copy,path2649copy,path7589copy,s2copy,path2645copy,s1copy,path7233copy,path2651copy,s3copy,path7250copy,path2653copy,s4copy,path7559copy,heatercopy,path7089copy,s6copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)

.set(text2, {text:"L1 potential on left side of switches.", className:"h3 blackBg", x:378, y:33})
.from(['#text2'],1, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.to(['#text2'],1, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'+=2')

.set([path2643copy,path2673copy,coil1copy,path2647copy], {stroke:blue})
.staggerFromTo([path2643copy,path2673copy,coil1copy,path2647copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
.set([path7246copy,path7259copy,path2671copy,r2copy,path7178copy,r1copy,path2657copy,path7265copy,path2669copy,path3396copy,r3copy,path7593copy,path2663copy,path7591copy,r4copy,path2661copy,path7272copy,path7124copy], {stroke:blue})
.staggerFromTo([path7246copy,path7259copy,path2671copy,r2copy,path7178copy,r1copy,path2657copy,path7265copy,path2669copy,path3396copy,r3copy,path7593copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
.set([path2663copy], {stroke:blue})
.staggerFromTo([path2663copy], .7, {drawSVG:'100% 100%'}, {drawSVG: '0% 100%'},.7)
.staggerFromTo([path7591copy,r4copy,path2661copy,path7272copy,path7124copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)

.set(text2, {text:"Neutral potential on right side of switches.", className:"h3 blackBg", x:378, y:33})
.to(['#text2'],1, {autoAlpha:1, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.to(['#text2'],1, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'+=2')

.to(stripCircuit1,1,{x:308, y:73, scaleX:3.4332394501419956, scaleY:3.4332394501419956, transformOrigin: "50% 50%",ease:Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[new Error().lineNumber]},"+=0")

.from(['#multimeterGroup'],1, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.to(blackLead, 1 ,{morphSVG:"M 93.480472,282.09292 C 50,600 800,500 399.21126556396484, 225.4323272705078"})
.to(redLead, 1 ,{morphSVG:"M 144.211,283.432 C 50,600 800,500 439.21126556396484, 225.4323272705078"})
.add(function (){changeMeterReading("120.0")})
.to([display], .5, {scaleX:1.8, scaleY:1.8, transformOrigin: '50% 50%'})
.to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:1.5})

.set(text2, {text:"120 volts dropped across all switches.", className:"h3 blackBg", x:373, y:-157})
.to(['#text2'],1, {autoAlpha:1, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')


.to(blackLead, 1 ,{morphSVG:"M 93.480472,282.09292 C 50,600 800,500 397.21126556396484, 284.4323272705078"})
.add(function (){changeMeterReading("000.0")})
.to(redLead, 1 ,{morphSVG:"M 144.211,283.432 C 50,600 800,500 438.21126556396484, 284.4323272705078"})
.add(function (){changeMeterReading("120.0")})
.to([display], .5, {scaleX:1.8, scaleY:1.8, transformOrigin: '50% 50%'})
.to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:1.5})

.to(blackLead, 1 ,{morphSVG:"M 93.480472,282.09292 C 50,600 800,500 397.21126556396484, 362.4323272705078"})
.add(function (){changeMeterReading("000.0")})
.to(redLead, 1 ,{morphSVG:"M 144.211,283.432 C 50,600 800,500 438.21126556396484, 360.4323272705078"})
.add(function (){changeMeterReading("120.0")})
.to([display], .5, {scaleX:1.8, scaleY:1.8, transformOrigin: '50% 50%'})
.to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:1.5})

.to(blackLead, 1 ,{morphSVG:"M 93.480472,282.09292 C 50,600 800,500 399.21126556396484, 445.4323272705078"})
.add(function (){changeMeterReading("000.0")})
.to(redLead, 1 ,{morphSVG:"M 144.211,283.432 C 50,600 800,500 440.21126556396484, 445.4323272705078"})
.add(function (){changeMeterReading("120.0")})
.to([display], .5, {scaleX:1.8, scaleY:1.8, transformOrigin: '50% 50%'})
.to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:1.5})

.to(blackLead, 1 ,{morphSVG:"M 93.480472,282.09292 C 50,600 800,0 670.2112655639648, 535.4323272705078"})
.add(function (){changeMeterReading("000.0")})
.to(redLead, 1 ,{morphSVG:"M 144.211,283.432 C 50,600 800,0 712.2112655639648, 535.4323272705078"})
.add(function (){changeMeterReading("120.0")})
.to([display], .5, {scaleX:1.8, scaleY:1.8, transformOrigin: '50% 50%'})
.to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:1.5})
.to(['#text2'],1, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'+=2')
.to(['#s6copy',s6],1, {rotation:30, transformOrigin: '0% 100%'},'-=0')
.to([path7089copy],.001, {stroke:blue},'-=0')
.to([heatercopy],.001, {stroke:orange},'-=0')

.set(text2, {text:"Switch closes - voltage drop moves.", className:"h3 blackBg", x:342, y:271})
.to(['#text2'],1, {autoAlpha:1, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')

.add(function (){changeMeterReading("000.0")})
.to([display], .5, {scaleX:1.8, scaleY:1.8, transformOrigin: '50% 50%'})
.to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:1.5})

.to(blackLead, 1 ,{morphSVG:"M 93.480472,282.09292 C 50,600 800,0 431.21126556396484, 536.4323272705078"})
.add(function (){changeMeterReading("000.0")})
.to(redLead, 1 ,{morphSVG:"M 144.211,283.432 C 50,600 800,0 548.2112655639648, 536.4323272705078"})
.add(function (){changeMeterReading("120.0")})
.to([display], .5, {scaleX:1.8, scaleY:1.8, transformOrigin: '50% 50%'})
.to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:1.5})
.to([stripCircuit1,multimeterGroup,text2],1,{autoAlpha:0})
.set(text2, {text:"Press Play to Start", className:"h1 blackBg", x:330, y:-44})
.to(['#text2'],1, {autoAlpha:1, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.to([text2],1,{autoAlpha:0}, "=+2")




