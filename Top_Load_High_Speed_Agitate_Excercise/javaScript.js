document.title = "2019 Advantium Oven";

var componentList = [];
var openArray = [];

highlighterSelected = true;
var originalLineSize = .5;
var highlightedWidth = 1.45;

var l1Color = 'rgb(0, 0, 0)';
var neutralColor = 'rgb(0,0,255)';
var energizedLoad = 'rgb(255,165,0)';
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

var diagram1Paths = document.getElementById("diagram1").getElementsByTagName("path");
var diagram1PathsLength = diagram1Paths.length;

for(i=0; i<diagram1PathsLength; i++){
  loadsToPush = diagram1Paths[i].id.split('_')[1];
  if(loadsToPush === 'load'){
    componentList.push(diagram1Paths[i].id);
  }
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

var selectionArray = [];
function wireClicked(wire){
    nameSplit = wire.id.split("copy");
    wire2 = document.getElementById(nameSplit[0]);
    wire2.style["stroke-width"]= highlightedWidth;
    wire2.style["stroke"]= document.getElementById("colorPicker").value;
    selectedPart = wire2.id;
    console.log('"' + wire2.id + '"')
    selectionArray.push(wire2.id)
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



function getColors(){
  console.log(selectionArray)
}


