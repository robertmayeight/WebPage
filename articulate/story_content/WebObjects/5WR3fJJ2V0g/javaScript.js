var hotValveL1Array = [ "path1154", "path4528", "path4548", "path6136", "path6168", "pressureSensor_sw", "path6076", "path6116", "path11093", "path16120" ];
var hotValveNeutralArray = [ "path30883", "path6156", "path174147", "path30889" ];
var hotValveEnergizedLoadArray = [ "hotValve" ];

var coldValveL1Array = ["path1154","path4508","path4548","path4568","path6196","path6216","path6168","pressureSensor_sw","path6076","path6116","path11095","path16120"];
var coldValveNeutralArray = [ "path30883", "path6156", "path171704", "path30889" ];
var coldValveEnergizedLoadArray = [ "coldValve" ];

var slowColdValveL1Array = ["path1154","path4548","path6168","pressureSensor_sw","path6076","path6116","path11093","path1456","path6096","path16120","path16299"];
var slowColdValveNeutralArray = [ "path30883", "path6156", "path30889", "path30925" ];
var slowColdValveEnergizedLoadArray = [ "slowColdValve" ];

var lowSpeedAgitateL1Array = ["path1154","speedSelectSwitch_sw","path5854","agitationControlSwitch_sw","path6168","pressureSensor_sw","path2546","path2623","path2625","path2627","path2629","path2632","path2634","path2636","lidSwitch_sw","path2648","path16120"];
var lowSpeedAgitateNeutralArray = [ "path6748", "path171708", "path30883", "path30889", "path4670", "path5046" ]
var lowSpeedAgitateEnergizedLoadArray = [];



document.title = "Top Load Practice Circuits";

var componentList = [];
var openArray = [];


highlighterSelected = true;
var originalLineSize = .5;
var highlightedWidth = 1.45;

var l1Color = 'rgb(0, 0, 0)';
var neutralColor = 'rgb(0,0,255)';
var energizedLoadColor = 'rgb(255,165,0)';
var originalLineColor = 'rgb(32,32,32)';
var purpleArray = [];
var selectionArray = [];

var deviceType = "not mobile";
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  deviceType="mobile"
}

// xhr = new XMLHttpRequest();
// xhr.open("GET","schematic.svg",false);
// xhr.overrideMimeType("image/svg+xml");
// xhr.send("");

// var schematic = document.getElementById("mainWindow").appendChild(xhr.responseXML.documentElement);

//Resize Window
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

//Audio
var slideAudio = document.getElementById('music');
slideAudio.src="audio.mp3"

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

var audioplay = document.createElement('audio');
function playAudio(clip){
  audioplay.setAttribute('src', clip);
  audioplay.play()
}
//End Audio

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
  path.setAttribute('stroke','#00b0ff');
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

function colorPickerChange(e){
  var highlightColor = document.getElementById("colorPicker").value;
}

function modeChange(e){
  var modeSelectValue = document.getElementById("modeSelect").value;
  
  if(modeSelectValue === 'Simulation'){
    componentSelect.style.display = 'none';
    colorPicker.style.display = 'none';
  }
}

var l1Array = [];
var neutralArray = [];
var energizedLoadArray = [];

function wireClicked(wire){
    nameSplit = wire.id.split("copy");
    wire2 = document.getElementById(nameSplit[0]);
    // wire2.style["stroke-width"]= highlightedWidth;
    selectedPart = wire2.id;
    console.log(wire2.id)

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
      console.log('fired')
      wire2.style["stroke-width"] = highlightedWidth;
    }else{
      wire2.style["stroke-width"] = originalLineSize;
      wire2.style["stroke"] = originalLineColor;
    }
}

var exercise = '';
function checkAnswer(exercise){
  l1Array = [];
  neutralArray = [];
  energizedLoadArray = [];
  line = true;
  neutral = true;
  energizedLoad = true;
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
  }catch(e){alert("Select A Component")}
  
  

  var arrayB = window[exercise + 'NeutralArray']
  foundInNeutralArray = arrayB.some(r=> neutralArray.includes(r))
  if(foundInNeutralArray != true || arrayB.length != neutralArray.length){
    neutral = false;
  }

  var arrayC = window[exercise + 'EnergizedLoadArray']

  foundInEnergizedLoadArray = arrayC.some(r=> energizedLoadArray.includes(r));

  if((foundInEnergizedLoadArray != true || arrayC.length != energizedLoadArray.length) && energizedLoadArray.length != 0){
    energizedLoad = false;
  }

  if(line === true && neutral === true && energizedLoad === true){
    alert('Correct')
  }

  if(line === true && neutral === true && energizedLoad === false){
    alert('Energized Load is Incorrect')
  }

  if(line === true && neutral === false && energizedLoad === true){
    alert('Neutral is Incorrect')
  }

  if(line === true && neutral === false && energizedLoad === false){
    alert('Neutral and Energized Load are Incorrect')
  }

  if(line === false && neutral === true && energizedLoad === true){
    alert('L1 is Incorrect')
  }

  if(line === false && neutral === true && energizedLoad === false){
    alert('L1 and Energized Load are Incorrect')
  }

  if(line === false && neutral === false && energizedLoad === true){
    alert('L1 and Neutral are Incorrect')
  }

  if(line === false && neutral === false && energizedLoad === false){
    alert('L1, Neutral and Energized Load are Incorrect')
  }
  console.log(exercise + 'L1Array = ')
  console.log(l1Array)
  console.log('')

  console.log(exercise + 'NeutralArray = ')
  console.log(neutralArray)
  console.log('')

  console.log(exercise + 'EnergizedLoadArray = ')
  console.log(energizedLoadArray)
  console.log('')
}

function clearDiagram(){
  for(i=0; i<diagram1PathsLength; i++){
  diagram1Paths[i].style.stroke = originalLineColor;
  diagram1Paths[i].style.strokeWidth = originalLineSize;}
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


var partsList = [];

for(i=0; i<componentList.length; i++){
  myPart = document.getElementById(componentList[i]);
  var myLabel = $(myPart).attr('inkscape:label');
  partsList.push(myLabel);
  var option = document.createElement("option");
  option.value = myPart.id;
  option.text = myLabel;
  componentSelect.add(option);
}

function sortSelect(selElem) {
    var tmpAry = new Array();
    for (var i=0;i<selElem.options.length;i++) {
        tmpAry[i] = new Array();
        tmpAry[i][0] = selElem.options[i].text;
        tmpAry[i][1] = selElem.options[i].value;
    }
    tmpAry.sort();
    while (selElem.options.length > 0) {
        selElem.options[0] = null;
    }
    for (var i=0;i<tmpAry.length;i++) {
        var op = new Option(tmpAry[i][0], tmpAry[i][1]);
        selElem.options[i] = op;
    }
    return;
}



function getWireColors(){
  console.log(l1Array)
  console.log(neutralArray);
  console.log(energizedLoadArray)
}

var slideTl = new TimelineMax({paused:true});
slideTl
// .to(fillWater, 5, {y:-200, delay:1})


 