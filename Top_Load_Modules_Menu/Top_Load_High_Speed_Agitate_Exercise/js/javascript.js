// xhr = new XMLHttpRequest();
// xhr.open("GET","schematic.svg",false);
// xhr.overrideMimeType("image/svg+xml");
// xhr.send("");
// var schematic = document.getElementById("mainWindow").appendChild(xhr.responseXML.documentElement);

document.title = "Top Load Practice Circuits";

//Editor
var edit = false;
getSelectionArray_btn.style.display = 'none';
myText.style.display = 'none';
instructionText.style.display = 'none';
document.addEventListener ("keydown", function (zEvent) {
  edit = !edit;
  if (zEvent.ctrlKey  &&  zEvent.altKey  &&  zEvent.key === "e") { 
    if(edit === false){
      getSelectionArray_btn.style.display = 'none';
      myText.style.display = 'none';
      instructionText.style.display = 'none';
    }else{
      getSelectionArray_btn.style.display = 'block';
      myText.style.display = 'block';
      instructionText.style.display = 'block';
    }
  }
});
//Editor

var exercise1L1Array = [ "path1154", "hotValveSwitch_sw", "fillSwitch_sw", "path6136", "path6168", "pressureSensor_sw", "path6076", "path6116", "path11093", "path16120" ];
var exercise1NeutralArray = [ "path30883", "path6156", "path174147", "path30889" ];
var exercise1EnergizedLoadArray = [ "hotValve_load" ];
var exercise1RotatedArray = ["pressureSensor_sw"];

var exercise2L1Array = ["path1154","rinseFillSwitch_sw","fillSwitch_sw","coldValveSwitch_sw","path6196","path6216","path6168","pressureSensor_sw","path6076","path6116","path11095","path16120"];
var exercise2NeutralArray = [ "path30883", "path6156", "path171704", "path30889" ];
var exercise2EnergizedLoadArray = [ "coldValve" ];
var exercise2RotatedArray = ["pressureSensor_sw"];

var exercise3L1Array = ["path1154","fillSwitch_sw","path6168","pressureSensor_sw","path6076","path6116","path11093","slowColdValveSwitch_sw","path6096","path16120","path16299"];
var exercise3NeutralArray = [ "path30883", "path6156", "path30889", "path30925" ];
var exercise3EnergizedLoadArray = [ "slowColdValve" ];
var exercise3RotatedArray = ["pressureSensor_sw"];

var exercise4L1Array = ["path1154","speedSelectSwitch_sw","path5854","agitationControlSwitch_sw","path6168","pressureSensor_sw","path2546","path2623","path2625","path2627","path2629","path2632","path2634","path2636","lidSwitch_sw","path2648","path16120"];
var exercise4NeutralArray = [ "path6748", "path171708", "path30883", "path30889", "path4670", "path5046" ]
var exercise4EnergizedLoadArray = [];
var exercise4RotatedArray = ["speedSwitch_sw", "lidSwitch_sw"];

var exercise5L1Array = ["path1154","speedSelectSwitch_sw","path5552","agitationControlSwitch_sw","path6168","pressureSensor_sw","path2546","path2623","path2625","path2627","path2629","path2632","path2634","path2636","lidSwitch_sw","path2648","path16120"];
var exercise5NeutralArray = [ "path6748", "path171708", "path30883", "path30889", "path4670", "path5046" ]
var exercise5EnergizedLoadArray = [];
var exercise5RotatedArray = ["lidSwitch_sw"];

var originalLineSize = .5;
var highlightedWidth = 1.45;
var l1Color = 'rgb(0, 0, 0)';
var neutralColor = 'rgb(0, 0, 255)';
var energizedLoadColor = 'rgb(255, 165, 0)';
var originalLineColor = 'rgb(32, 32, 32)';
var componentList = [];
var l1TestArray = [];
var neutralTestArray = [];
var switchList = [];
var openArray = [];
var attempts = 0;

//Audio
slideAudio.onseeked = function() {
  slideTl.time(slideAudio.currentTime);
}

slideAudio.ontimeupdate = function() {
  slideTl.time(slideAudio.currentTime);
};
//End Audio

//Resize
var svgWindow = document.getElementById("mainWindow");
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
//Resize

var deviceType = "not mobile";
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  deviceType="mobile"
}

var diagram1Paths = document.getElementById("diagram1").getElementsByTagName("path");
var diagram1PathsLength = diagram1Paths.length;

for(i=0; i<diagram1PathsLength; i++){
  loadsToPush = diagram1Paths[i].id.split('_')[1];
  if(loadsToPush === 'load'){
    componentList.push(diagram1Paths[i].id);
  }
  diagram1Paths[i].style['stroke-linecap']="round";
  diagram1Paths[i].style.stroke = originalLineColor;
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
    path.style["stroke-width"]= 3;
}

var switches = document.getElementsByTagName("g");
for(i=0; i<switches.length; i++){
  switchSplit = switches[i].id.split('_')
  if(switchSplit[1] === 'btn'){
    switchList.push(switchSplit[0] + '_sw')
    thisSwitch = document.getElementById(switchSplit[0] + '_sw')
    TweenMax.to(thisSwitch, .1, {rotation:0})
  }
}

function overPath(wire){
    wire.setAttribute("opacity", ".5"); 
}

function notOverPath(wire){
    wire.setAttribute("opacity", "0");
}

function colorPickerChange(e){
  var highlightColor = document.getElementById("colorPicker").value;
}

function wireClicked(wire){
    nameSplit = wire.id.split("copy");
    wire2 = document.getElementById(nameSplit[0]);
    selectedPart = wire2.id;

    if(colorPicker.value === 'neutralColor'){
      wire2.style["stroke"]= neutralColor;
    }

    if(colorPicker.value === 'l1Color'){
      wire2.style["stroke"]= l1Color;
    }

    if(colorPicker.value === 'energizedLoadColor'){
      wire2.style["stroke"]= energizedLoadColor;
    }

    if(wire2.style["stroke-width"] === originalLineSize +'px'){
      wire2.style["stroke-width"] = highlightedWidth;
    }else{
      wire2.style["stroke-width"] = originalLineSize;
      wire2.style["stroke"] = originalLineColor;
    }
}


function skipInstructions(){
  skipInstructions_btn.style.display = 'none';
  slideAudio.currentTime = 32;
  slideAudio.play();
}

function updateTestArrays(array1, array2){
  l1TestArray = array1;
  neutralTestArray = array2;
}

var exercise = 'exercise1';
function checkAnswer(exercise){
  console.log(exercise)
  attempts++;  
  rotatedSwitchArray = [];
  l1Array = [];
  neutralArray = [];
  energizedLoadArray = [];
  line = true;
  neutral = true;
  energizedLoad = true;
  rotated = true;

  for(s = 0; s<switchList.length; s++){
    testSwitch = document.getElementById(switchList[s]);
    if(testSwitch._gsTransform.rotation != 0){
      rotatedSwitchArray.push(switchList[s])
    }
  }

  for(i=0; i<diagram1Paths.length; i++){
      var rob = document.getElementById(diagram1Paths[i].id)
      if(diagram1Paths[i].style.stroke === 'rgb(0, 0, 0)'){
        l1Array.push(diagram1Paths[i].id)
      }
    if(diagram1Paths[i].style.stroke === 'rgb(0, 0, 255)'){
        neutralArray.push(diagram1Paths[i].id)
      }
      if(diagram1Paths[i].style.stroke === 'rgb(255, 165, 0)'){
        energizedLoadArray.push(diagram1Paths[i].id)
      }
  }

  var arrayA = window[exercise + 'L1Array']
  try{
    foundInL1Array = arrayA.some(r=> l1Array.includes(r))
    if(foundInL1Array != true | arrayA.length != l1Array.length){
    line = false;
  }
  }catch(e){alert("Selection Array in HTML is wrong.")}
  
  var arrayB = window[exercise + 'NeutralArray']
  foundInNeutralArray = arrayB.some(r=> neutralArray.includes(r))
  if(foundInNeutralArray != true || arrayB.length != neutralArray.length){
    neutral = false;
  }

  var arrayC = window[exercise + 'EnergizedLoadArray']

  foundInEnergizedLoadArray = arrayC.some(r=> energizedLoadArray.includes(r));
  if((foundInEnergizedLoadArray != true || arrayC.length != energizedLoadArray.length)){
    energizedLoad = false;
  }
  if(energizedLoadArray.length === 0 && arrayC.length === 0){
    energizedLoad = true;
  }

  var arrayD = window[exercise + 'RotatedArray']
  foundInRotatedArray = arrayD.some(r=> rotatedSwitchArray.includes(r));
  if(foundInRotatedArray != true || arrayD.length != rotatedSwitchArray.length){
    rotated = false;
  }
  if(line === true && neutral === true && energizedLoad === true && rotated === true){
    slideAudio.play();
  }
  if(line === true && neutral === true && energizedLoad === true && rotated === false){
    alert('Switches Are Incorrect')
  }
  if(line === true && neutral === true && energizedLoad === false && rotated === true){
    alert('Energized Load Incorrect')
  }
  if(line === true && neutral === true && energizedLoad === false && rotated === false){
    alert('Energized Load and Switches are Incorrect')
  }
  if(line === true && neutral === false && energizedLoad === true && rotated === true){
    alert('Neutral is Incorrect')
  }
  if(line === true && neutral === false && energizedLoad === true && rotated === false){
    alert('Neutral and Switches are Incorrect')
  }
  if(line === true && neutral === false && energizedLoad === false && rotated === true){
    alert('Neutral and Energized Load are Incorrect')
  }
  if(line === true && neutral === false && energizedLoad === false && rotated === false){
    alert('Neutral, Energized Load and Switches are Incorrect')
  }
  if(line === false && neutral === true && energizedLoad === true && rotated === true){
    alert('L1 is Incorrect')
  }
  if(line === false && neutral === true && energizedLoad === true && rotated === false){
    alert('L1 and Switches are Incorrect')
  }
  if(line === false && neutral === true && energizedLoad === false && rotated === true){
    alert('L1 and Energized Load are Incorrect')
  }
  if(line === false && neutral === true && energizedLoad === false && rotated === false){
    alert('L1, Energized Load and Switches are Incorrect')
  }
  if(line === false && neutral === false && energizedLoad === true && rotated === true){
    alert('L1 and Neutral are Incorrect')
  }
  if(line === false && neutral === false && energizedLoad === true && rotated === false){
    alert('L1, Neutral and Switches are Incorrect')
  }
  if(line === false && neutral === false && energizedLoad === false && rotated === true){
    alert('L1, Neutral and Energized Load are Incorrect')
  }
  if(line === false && neutral === false && energizedLoad === false && rotated === false){
    alert('L1, Neutral, Energized Load and Switches are Incorrect')
  }

  if(attempts === 3){
    if(exercise === 'hotValve'){
      alert('Recommend watching the fill video again.')
    }
    if(exercise === 'coldValve'){
      alert('Recommend watching the fill video again.')
    }
    if(exercise === 'slowColdValve'){
      alert('Recommend watching the fill video again.')
    }
    if(exercise === 'lowSpeedAgitate'){
      alert('Recommend watching the low speed agitate video again.')
    }
    if(exercise === 'highSpeedAgitate'){
      alert('Recommend watching the high speed agitate video again.')
    }
  }
}

function demoOpacity(op){
  path30883copy.setAttribute("opacity", op)
}
function demoColorPicker(color){
  colorPicker.value = color;
}

var slideTl = new TimelineMax({paused:true});
slideTl
.to(skipInstructions_btn, .1, {autoAlpha:0, delay:0})
.to(path30883copy, .5, {x:0, delay:3, onComplete:demoOpacity, onCompleteParams:[1]})
.to(path30883copy, .5, {x:0, delay:3, onComplete:demoOpacity, onCompleteParams:[0]})

.to(colorPicker, .5, {css:{background:'red'}, delay:2})
.to(path30883copy, .5, {x:0, onComplete:demoColorPicker, onCompleteParams:['l1Color'], delay:1})
.to(path30883copy, .5, {x:0, onComplete:demoColorPicker, onCompleteParams:['neutralColor'], delay:3})
.to(path30883copy, .5, {x:0, onComplete:demoColorPicker, onCompleteParams:['energizedLoadColor'], delay:4})
.to(colorPicker, .5, {css:{background:'red'}, delay:2})
.to(path30883copy, .5, {x:0, onComplete:demoColorPicker, onCompleteParams:['l1Color'], delay:2})
.to(colorPicker, .5, {css:{background:'white'}, delay:-.5})

.to(question1, .5, {autoAlpha:1, display:'block', onStart:clearDiagram, delay:8.5})
.to(skipInstructions_btn, .1, {autoAlpha:0, onComplete:function(){slideAudio.pause(), exercise = 'exercise2'}, delay:4})

.to(question1, .5, {autoAlpha:0, display:'none',delay:1})
.to(question2, .5, {autoAlpha:1, display:'block', onStart:clearDiagram, delay:1})
.to(skipInstructions_btn, .1, {autoAlpha:0, onComplete:function(){slideAudio.pause(), exercise = 'exercise3'}, delay:3})

.to(question2, .5, {autoAlpha:0, display:'none',delay:1})
.to(question3, .5, {autoAlpha:1, display:'block', onStart:clearDiagram, delay:1})
.to(skipInstructions_btn, .1, {autoAlpha:0, onComplete:function(){slideAudio.pause(), exercise = 'exercise4'}, delay:4})

.to(question3, .5, {autoAlpha:0, display:'none',delay:1})
.to(question4, .5, {autoAlpha:1, display:'block', onStart:clearDiagram, delay:1})
.to(skipInstructions_btn, .1, {autoAlpha:0, onComplete:function(){slideAudio.pause(), exercise = 'exercise5'}, delay:3})

.to(question4, .5, {autoAlpha:0, display:'none',delay:1})
.to(question5, .5, {autoAlpha:1, display:'block', onStart:clearDiagram, delay:1})
.to(skipInstructions_btn, .1, {autoAlpha:0, onComplete:function(){slideAudio.pause()}, delay:3})



/////////////////////////////Comment Out After Edit
function highlightDiagram(){
  var l1Array = [];
  var neutralArray = [];
  var energizedLoadArray = [];
  var rotatedSwitchArray =[];
  myText.innerHTML = '';
  for(i=0; i<diagram1PathsLength; i++){
    if(diagram1Paths[i].style.stroke === l1Color){
      l1Array.push(diagram1Paths[i].id)
    }

    if(diagram1Paths[i].style.stroke === neutralColor){
      neutralArray.push(diagram1Paths[i].id)
    }
    if(diagram1Paths[i].style.stroke === energizedLoadColor){
      energizedLoadArray.push(diagram1Paths[i].id)
    }
  }

  for(s = 0; s<switchList.length; s++){
    testSwitch = document.getElementById(switchList[s]);
    if(testSwitch._gsTransform.rotation != 0){
      rotatedSwitchArray.push(switchList[s])
    }
  }
  
  var br1 = document.createElement("br");
  var br2 = document.createElement("br");
  var br3 = document.createElement("br");

  myText.append('var ' + exercise + 'L1Array = [')
  neutralArray.forEach(function(element){
    myText.append('"' + element + '",')
  })
  myText.append('];')

  myText.appendChild(br1);

  myText.append('var ' + exercise + 'NeutralArray = [')
  l1Array.forEach(function(element){
    myText.append('"' + element + '",')
  })
  myText.append('];')

  myText.appendChild(br2);

  myText.append('var ' + exercise + 'EnergizedLoadArray = [')
  energizedLoadArray.forEach(function(element){
    myText.append('"' + element + '",')
  })
  myText.append('];')

  myText.appendChild(br3);

  myText.append('var ' + exercise + 'RotatedArray = [')

  rotatedSwitchArray.forEach(function(element){
    myText.append('"' + element + '",')
  })
  
  myText.append('];')
}




function moveSwitch(target, type, tValue, tOrigin){
  componentHighlight = document.getElementById(target.id.split('_')[0] + '_swcopy');
  componentID = target.id.split('_')[0] + '_sw';
  component = document.getElementById(componentID);
  if(openArray.indexOf(componentID) === -1){
    openArray.push(componentID)
    if(type === 'rot'){
      TweenMax.to([component, componentHighlight], 0, {rotation:tValue, transformOrigin: tOrigin});
    }
    if(type === 'x'){
      TweenMax.to([component, componentHighlight], 0, {x:tValue, transformOrigin: tOrigin});
    }
    if(type === 'y'){
      TweenMax.to([component, componentHighlight], 0, {y:tValue, transformOrigin: tOrigin});
    }
  }else{
    if(type === 'rot'){
      TweenMax.to([component, componentHighlight], 0, {rotation:0, transformOrigin: tOrigin});
    }
    if(type === 'x'){
      TweenMax.to([component, componentHighlight], 0, {x:0, transformOrigin: tOrigin});
    }
    if(type === 'y'){
      TweenMax.to([component, componentHighlight], 0, {y:0, transformOrigin: tOrigin});
    }
    openArray.splice(openArray.indexOf(componentID), 1);
  }
}

function clearDiagram(){
  attempts = 0;
  for(i=0; i<diagram1PathsLength; i++){
  diagram1Paths[i].style.stroke = originalLineColor;
  diagram1Paths[i].style.strokeWidth = originalLineSize;}
}