
slide = new XMLHttpRequest();
slide.open("GET","schematic.svg",false);
slide.overrideMimeType("image/svg+xml");
slide.send("");
// var slide= document.getElementById("main").appendChild(slide.responseXML.documentElement);
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //Resize Window
// var svgWindow = document.getElementById("main");
// var svg = d3.select(svgContent);
// function resizeSVG(){
//   var width = svgWindow.clientWidth;
//   var height = svgWindow.clientHeight;
//   svg
//   .attr("width", width)
//   .attr("height", height);
// }
// resizeSVG();
// window.addEventListener("resize", resizeSVG)

// //Browser Adjustments
// var slideAudio = document.getElementById('music');
// slideAudio.src="topLoadModule1.mp3"


// //Audio
// slideAudio.onplay = function() {
// 	slideTl.play();
// };

// slideAudio.onpause = function() {
// 	slideTl.pause();
// };

// slideAudio.onseeked = function() {
// 	slideTl.time(slideAudio.currentTime);
// }

// slideAudio.ontimeupdate = function() {
// 	slideTl.time(slideAudio.currentTime);
// };

// function playAudio(){
// 	slideAudio.play();
// }

// function pausePlayer(){
// 	slideAudio.pause();
// }
// //End Audio

// highlighterSelected = true;
// var originalLineSize = .5;
// var highlightedWidth = 1.45;
// var l1Color = 'rgb(0, 0, 0)';
// var neutralColor = 'rgb(0,0,255)';
// var energizedLoad = 'rgb(255,165,0)';
// var deviceType = "not mobile";

// var diagram1Paths = document.getElementById("diagram1").getElementsByTagName("path");
// var diagram1PathsLength = diagram1Paths.length;

// for(i=0; i<diagram1PathsLength; i++){
//   diagram1Paths[i].style['stroke-linecap']="round";
//   diagram1Paths[i].style.stroke = "Black";
//   diagram1Paths[i].style.strokeWidth = originalLineSize;
//   var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//   path.setAttribute('stroke','blue');
//   path.setAttribute('fill','none');
//   path.setAttribute('opacity',0);
//   path.setAttribute('id',diagram1Paths[i].id + 'copy');

//   if(deviceType == "mobile"){
//     path.setAttribute('onclick','wireClicked(this);');
//     path.setAttribute('ontouchstart','wireClicked(this);');
//     path.setAttribute('ontouchend','wireClicked(this);');
//     path.setAttribute('onmouseover','wireClicked(this);');
//     }else{
//       path.setAttribute('onclick','wireClicked(this);');
//       path.setAttribute('onmouseover','this.style.cursor = "default"; overPath(this);');
//       path.setAttribute('onmouseout','notOverPath(this);');
//     }
//     path.style['stroke-linecap']="round";
//     path.setAttribute("d", diagram1Paths[i].getAttribute("d"));
//     diagram1.appendChild(path);
//     path.style["stroke-width"]= 2;
// }

// for(i=0; i<svgContent.childNodes.length; i++){
//   var myLabel = $(svgContent.childNodes[i]).attr('inkscape:label');
//   if(myLabel != undefined){
//     svgContent.childNodes[i].style.display = "inline"
//   }
// }

// function overPath(wire){
//   if(highlighterSelected == true){
//     wire.setAttribute("opacity", ".5"); 
//   }
// }

// function notOverPath(wire){
//   if(highlighterSelected == true){
//     wire.setAttribute("opacity", "0");
//   }
// }

// function wireClicked(wire){
// 	console.log(wire.id)
// }

// var schematicDrag = Draggable.create(svgContent, {zIndexBoost:false});
// svgContent.addEventListener("DOMMouseScroll", function(e){zoomSchematic(e)}, false);

// var scaleUp = 1;
// function zoomSchematic(e){
// 	e.preventDefault();
// 	switch(e.detail>0) {
// 		case true:
// 		if(scaleUp > .5 ){
// 			scaleUp = scaleUp - .25;
// 			TweenMax.to(svgContent, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
// 		}
// 		break;
// 		case false:
// 		scaleUp = scaleUp + .25;
//     	TweenMax.to(svgContent, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
//         break;
//     }
// }



// function getSchematicPos(){
// 	console.log('.to(svgContent, 1, {x:' + svgContent._gsTransform.x + ', y:' + svgContent._gsTransform.y + ', scaleX:' + svgContent._gsTransform.scaleX + ', scaleY:' + svgContent._gsTransform.scaleX + ', transformOrigin: "50% 50%", ease:Power0.easeNone})');
// }


// var audioplay = document.createElement('audio');
// function playAudio(clip){
// 	audioplay.setAttribute('src', clip);
// 	audioplay.play()
// }



// TweenMax.to(path252copy, 1, {stroke:'red'});
// TweenMax.to([pressureSensor_sw, pressureSensor_swcopy], .5, {rotation:40, transformOrigin: "0% 100%", ease:Power0.easeNone})

// var slideTl = new TimelineMax({paused:true});
// slideTl
// .to([washerLineArt, text2904], 1, {autoAlpha:0, delay:13})

// .from(completeDiagram1, 1, {autoAlpha:0})
// .to(svgContent, 2, {x:12, y:269, scaleX:2.25, scaleY:2.25, transformOrigin: "50% 50%", ease:Power0.easeNone})
// .to(path6168copy, 0, {opacity:1, stroke:l1Color})

// //Filter 
// .staggerFromTo([path6168copy], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .from([controlPanel_img], 1, {autoAlpha:0, immediateRender:true, delay:2})
// .to(filterBorder, 1, {stroke:'red', delay:-1})
// .from([lineFilter_co], 1, {autoAlpha:0, immediateRender:true})
// .from([emiIn], 1, {autoAlpha:0, immediateRender:true, delay:1})
// .to(emiIn, 1, {y:10, autoAlpha:0, repeat:3})

// .from([emiOut], 1, {autoAlpha:0, immediateRender:true, delay:0})
// .to(emiOut, 1, {y:-10, autoAlpha:0, repeat:3})

// .to(filterBorder, 1, {stroke:l1Color})
// .to([controlPanel_img, lineFilter_co], 1, {autoAlpha:0, delay: -1})

// //Pressure Sensor
// .to(path1154copy, 0, {opacity:1, stroke:l1Color})
// .staggerFromTo([path1154copy], 3, {drawSVG:'0% 0%'}, {drawSVG: '0% 93%', ease: Power0.easeNone})
// // .to(svgContent, 3, {x:116, y:34, scaleX:2.25, scaleY:2.25, transformOrigin: "50% 50%", ease:Power0.easeNone})
//  .to(svgContent, 3, {x:86, y:7, scaleX:2, scaleY:2, transformOrigin: "50% 50%", ease:Power0.easeNone, delay:-3})

// .staggerFromTo([path1154copy], 1, {drawSVG:'0% 93%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:2})

// .from([pressureSwitch_img], 1, {autoAlpha:0, immediateRender:true, delay:1.5})
// .to([pressureSwitch_img], 1, {autoAlpha:0, immediateRender:false, delay:3})

// .to([controlPanel_img], 1, {autoAlpha:1, immediateRender:true, delay:0})
// .from([pressureSwitch_co], 1, {autoAlpha:0, immediateRender:true, delay:-1})
// .to([controlPanel_img, pressureSwitch_co], 1, {autoAlpha:0, immediateRender:false, delay:3})

// .to(pressureSensor_swcopy, 0, {opacity:1, stroke:l1Color, delay:2})
// .staggerFromTo([pressureSensor_swcopy], .75, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})

// //Explain Timer Terminals
// .to(path6076copy, 0, {opacity:1, stroke:l1Color})
// .staggerFromTo([path6076copy], 2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:2.5})

// .from(chart1, 1, {opacity:0, delay:2, immediateRender:true, delay:7})
// .staggerFromTo([rect8257], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:3})

// .to([chart1,rect8257], 1, {opacity:0, delay:2, immediateRender:false, delay:3})

// //Temp Select Switch
// .to(path4548copy, 0, {opacity:1, stroke:l1Color})
// .staggerFromTo([path4548copy], 1, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone, delay:1})

// .to(path6116copy, 0, {opacity:1, stroke:l1Color})
// .staggerFromTo([path6116copy], 1.5, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone, delay:2})

// .to(path11093copy, 0, {opacity:1, stroke:l1Color})
// .staggerFromTo([path11093copy], .75, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})

// .to(path11095copy, 0, {opacity:1, stroke:l1Color})
// .staggerFromTo([path11095copy], 1.55, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})

// .to(controlPanel_img, 0, {x:50, y:120})
// .to([controlPanel_img, tempSelectSwitch_co], 1, {autoAlpha:1, immediateRender:true, delay:2})
// .from([pressureSwitch_co], 1, {autoAlpha:0, immediateRender:true, delay:-1})

// .to([controlPanel_img, tempSelectSwitch_co], 1, {autoAlpha:0, immediateRender:false, delay:3})


// //Show Temp Select Switch Chart
// .to(chart1, 0, {y:125})
// .to(chart1, 1, {autoAlpha:1})

// .staggerFromTo([tempSelectChart_co], 2, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
// .staggerFromTo([legendClosed_co], .7, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone, delay:2})
// .to(chart1, 1, {autoAlpha:0, delay:2})


// //Energize cold valve
// .to([path4568copy], 0, {opacity:1, stroke:l1Color})
// .staggerFromTo([path4568copy], .75, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone, delay:7})

// .to(path6196copy, 0, {opacity:1, stroke:l1Color})
// .staggerFromTo([path6196copy], 1.2, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone, delay:1})

// .to(path4508copy, 0, {opacity:1, stroke:l1Color})
// .staggerFromTo([path4508copy], .75, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})

// .to(path6216copy, 0, {opacity:1, stroke:l1Color})
// .staggerFromTo([path6216copy], 1.2, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:1})

// .to(svgContent, 1, {x:28, y:193, scaleX:2, scaleY:2, transformOrigin: "50% 50%", ease:Power0.easeNone})

// .to(path30889copy, 0, {opacity:1, stroke:neutralColor})
// .staggerFromTo([path30889copy], .2, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})

// .to(path30883copy, 0, {opacity:1, stroke:neutralColor})
// .staggerFromTo([path30883copy], 2, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})

// .to(path6156copy, 0, {opacity:1, stroke:neutralColor})
// .staggerFromTo([path6156copy], .75, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})

// .to(path171704copy, 0, {opacity:1, stroke:neutralColor})
// .staggerFromTo([path171704copy], .75, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
// .to([coldValve], 0, {opacity:1, stroke:'orange'})

// .to(path174147copy, 0, {opacity:1, stroke:neutralColor})
// .staggerFromTo([path174147copy], .5, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})

// .to(path30925copy, 0, {opacity:1, stroke:neutralColor})
// .staggerFromTo([path30925copy], 1, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})


// //Energize Hot Valves

// .to(path4528copy, 0, {opacity:1, stroke:l1Color})
// .staggerFromTo([path4528copy], .75, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:6})

// .to(path6136copy, 0, {opacity:1, stroke:l1Color})
// .staggerFromTo([path6136copy], 1.25, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})

// .to(path1456copy, 0, {opacity:1, stroke:l1Color})
// .staggerFromTo([path1456copy], .75, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})

// .to(path6096copy, 0, {opacity:1, stroke:l1Color})
// .staggerFromTo([path6096copy], 1.25, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})

// .to([hotValve], 0, {opacity:1, stroke:'orange'})

// .to([slowColdValve], 0, {opacity:1, stroke:'orange'})

// //Fill Termination
// .to([path4568copy,path4528copy,path1456copy], 0, {opacity:1, stroke:'red', delay:6})
// .to([path4568copy,path4528copy,path1456copy], 0, {opacity:1, stroke:l1Color, delay:1.5})

// .to([path4548copy,path4508copy], 0, {opacity:1, stroke:'red', delay:.5})
// .to([path4548copy,path4508copy], 0, {opacity:1, stroke:l1Color, delay:1.5})

// .to([pressureSensor_swcopy], 0, {opacity:1, stroke:'red', delay:.5})
// .to([pressureSensor_swcopy], 0, {opacity:1, stroke:l1Color, delay:1.5})


// .to([path4568copy,path4528copy,path1456copy], 0, {opacity:1, stroke:'red', delay:3})
// .to([path4568copy,path4528copy,path1456copy], 0, {opacity:1, stroke:l1Color, delay:13})

// .to([path4548copy,path4508copy], 0, {opacity:1, stroke:'red', delay:4})
// .to([path4548copy,path4508copy], 0, {opacity:1, stroke:l1Color, delay:10})

// //Pressure Switch Terminates Fill Cycle
// .to(svgContent, 1, {x:61, y:-28, scaleX:2, scaleY:2, transformOrigin: "50% 50%", ease:Power0.easeNone})
// .from(waterInTub, 1, {autoAlpha:0, delay:3})

// .to(fillWater, 5, {y:-250, delay:0})
// .to([pressureSensor_sw, pressureSensor_swcopy], .5, {rotation:0, transformOrigin: "0% 100%", ease:Power0.easeNone})
// .to([path6076copy,path4548copy,path6116copy,path11093copy,path3764copy,path11095copy,path6096copy,path6136copy,path6196copy,path4568copy,path4528copy,path1456copy,path4508copy,path6216copy], 0, {autoAlpha:0, immediateRender:false})

// .to(fillWater, 6.1, {})


// var time = slideTl.duration();
// var minutes = Math.floor(time / 60);
// var seconds = time - minutes * 60;
// console.log(minutes + ':' + seconds)

















// //Timer Bus wiring










