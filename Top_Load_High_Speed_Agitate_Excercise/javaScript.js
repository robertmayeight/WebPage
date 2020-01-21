var hotValveL1Array = [ "path1154", "hotValveSwitch_sw", "fillSwitch_sw", "path6136", "path6168", "pressureSensor_sw", "path6076", "path6116", "path11093", "path16120" ];
var hotValveNeutralArray = [ "path30883", "path6156", "path174147", "path30889" ];
var hotValveEnergizedLoadArray = [ "hotValve" ];

var coldValveL1Array = ["path1154","rinseFillSwitch_sw","fillSwitch_sw","coldValveSwitch_sw","path6196","path6216","path6168","pressureSensor_sw","path6076","path6116","path11095","path16120"];
var coldValveNeutralArray = [ "path30883", "path6156", "path171704", "path30889" ];
var coldValveEnergizedLoadArray = [ "coldValve" ];

var slowColdValveL1Array = ["path1154","fillSwitch_sw","path6168","pressureSensor_sw","path6076","path6116","path11093","slowColdValveSwitch_sw","path6096","path16120","path16299"];
var slowColdValveNeutralArray = [ "path30883", "path6156", "path30889", "path30925" ];
var slowColdValveEnergizedLoadArray = [ "slowColdValve" ];

var lowSpeedAgitateL1Array = ["path1154","speedSelectSwitch_sw","path5854","agitationControlSwitch_sw","path6168","pressureSensor_sw","path2546","path2623","path2625","path2627","path2629","path2632","path2634","path2636","lidSwitch_sw","path2648","path16120"];
var lowSpeedAgitateNeutralArray = [ "path6748", "path171708", "path30883", "path30889", "path4670", "path5046" ]
var lowSpeedAgitateEnergizedLoadArray = [];

var highSpeedAgitateL1Array = ["path1154","speedSwitch_sw","path5552","path6168","pressureSensor_sw","path2546","path2625","path2629","path2632","path2634","path2636","lidSwitch_sw","path2648","path16120"];
var highSpeedAgitateNeutralArray = [ "path6748", "path171708", "path30883", "path30889", "path4670", "path5046" ]
var highSpeedAgitateEnergizedLoadArray = [];



document.title = "Top Load Practice Circuits";

var componentList = [];
var switchList = [];
var openArray = [];
var attempts = 0;


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

xhr = new XMLHttpRequest();
xhr.open("GET","schematic.svg",false);
xhr.overrideMimeType("image/svg+xml");
xhr.send("");

var schematic = document.getElementById("mainWindow").appendChild(xhr.responseXML.documentElement);

//Resize Window
var svgWindow = document.getElementById("mainWindow");
var svg = d3.select(schematic);
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

  if(loadsToPush === 'sw'){
    switchList.push(diagram1Paths[i].id);
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
    // console.log(wire2.id)

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

var exercise = 'hotValve';
function checkAnswer(exercise){
  attempts++;
  console.log(attempts)
  // for(s = 0; s<switchList.length)
  //  console.log(document.getElementById(switchList[2])._gsTransform.rotation)
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

  if((foundInEnergizedLoadArray != true || arrayC.length != energizedLoadArray.length)){
    energizedLoad = false;
  }
  if(energizedLoadArray.length === 0 && arrayC.length === 0){
    energizedLoad = true;
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
  // console.log(exercise + 'L1Array = ')
  // console.log(l1Array)
  // console.log('')

  // console.log(exercise + 'NeutralArray = ')
  // console.log(neutralArray)
  // console.log('')

  // console.log(exercise + 'EnergizedLoadArray = ')
  // console.log(energizedLoadArray)
  // console.log('')
}
var exercise1 = document.getElementById('exercise1')
exercise1.style.borderColor = 'blue'
function clearDiagram(clickedButton){
  attempts = 0;
  var buttonArray = document.getElementsByTagName('button')
  for(a=0; a<buttonArray.length; a++){
    buttonArray[a].style.borderColor = 'grey'
  }
   clickedButton.style.borderColor = 'blue'
  for(i=0; i<diagram1PathsLength; i++){
  diagram1Paths[i].style.stroke = originalLineColor;
  diagram1Paths[i].style.strokeWidth = originalLineSize;}
}

function moveSwitch(target, type, tValue, tOrigin){
  // console.log(target)
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


//Image Code
// for(i=1; i<250; i++){
//   var numberDigits = i.toString().length;
//   console.log(numberDigits)
//   if(numberDigits === 1){
//     document.getElementById('text1').append('<img class="animtation1" src="./images/000' + i + '.png">')
//   }
//   if(numberDigits === 2){
//     document.getElementById('text1').append('<img class="animtation1" src="./images/00' + i + '.png">')
//   }
//   if(numberDigits === 3){
//     document.getElementById('text1').append('<img class="animtation1" src="./images/0' + i + '.png">')
//   }
// }

//Show Image Code
// for(i=0; i<250; i++){
//     document.getElementById('text1').append('.from(myImages[' + i + '], .1, {autoAlpha:0, immediateRender:true})')
// }






var myImages = document.getElementsByTagName('img')
// console.log(myImages)
var slideTl = new TimelineMax({paused:true});
slideTl
// TweenMax.to([image], 0, {autoAlpha:0}, delay:50)
.from(myImages[0], .1, {autoAlpha:0, immediateRender:true})
.from(myImages[1], .1, {autoAlpha:0, immediateRender:true})
.from(myImages[2], .1, {autoAlpha:0, immediateRender:true})
.from(myImages[3], .1, {autoAlpha:0, immediateRender:true})
.from(myImages[4], .1, {autoAlpha:0, immediateRender:true})
.from(myImages[5], .1, {autoAlpha:0, immediateRender:true})
.from(myImages[6], .1, {autoAlpha:0, immediateRender:true})
.from(myImages[7], .1, {autoAlpha:0, immediateRender:true})
.from(myImages[8], .1, {autoAlpha:0, immediateRender:true})
.from(myImages[9], .1, {autoAlpha:0, immediateRender:true})

// .from(myImages[0], .1, {autoAlpha:0, immediateRender:true})
// .from(myImages[1], .1, {autoAlpha:0, immediateRender:true})
// .from(myImages[2], .1, {autoAlpha:0, immediateRender:true})
// .from(myImages[3], .1, {autoAlpha:0, immediateRender:true})
// .from(myImages[4], .1, {autoAlpha:0, immediateRender:true})

// .from(myImages[5], .1, {autoAlpha:0, immediateRender:true})
// .from(myImages[6], .1, {autoAlpha:0, immediateRender:true})
// .from(myImages[7], .1, {autoAlpha:0, immediateRender:true})
// .from(myImages[4], .1, {autoAlpha:0, immediateRender:true})

