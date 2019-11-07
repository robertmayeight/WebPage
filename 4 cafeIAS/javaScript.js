document.title = "HVAC Parts"

TweenMax.to(mainWindow, 0, {x:1000, y:400, scaleX:2, scaleY:2});
var diagram1Paths = document.getElementById("diagram1").getElementsByTagName("path");
var diagram1PathsLength = diagram1Paths.length;
// for(i=0; i<diagram1PathsLength; i++){
//   diagram1Paths[i].style['stroke-linecap']="round";
//   diagram1Paths[i].style.stroke = "Black"; 
//   var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//   path.setAttribute('stroke','blue');
//   path.setAttribute('fill','none');
//   path.setAttribute('opacity',0);
//   path.setAttribute('id',diagram1Paths[i].id + 'copy');
//   path.setAttribute('onclick','wireClicked(this);');
//   path.setAttribute('onmouseover','this.style.cursor = "default"; overPath(this);');
//   path.setAttribute('onmouseout','notOverPath(this);');
//   path.style['stroke-linecap']="round";
//   path.setAttribute("d", diagram1Paths[i].getAttribute("d"));
//   diagram1.appendChild(path);
//   path.style["stroke-width"]= 3;  
// }

function overPath(wire){
  wire.setAttribute("opacity", ".5"); 
}

function notOverPath(wire){
  wire.setAttribute("opacity", "0");
}

var highlightedWidth = 1.5;
function colorPickerChange(e){
  var highlightColor = document.getElementById("colorPicker").value;
}

function wireClicked(wire){
  nameSplit = wire.id.split("copy");
  wire2 = document.getElementById(nameSplit[0]);
  wire2.style["stroke-width"]= 1.5;
  wire2.style["stroke"]= document.getElementById("colorPicker").value;
  selectedPart = wire2.id;
}

var partsList = [];
// var partNameGroupList = partNameGroup.getElementsByTagName("path");
var partNameGroupList = ["mainBoardAcPower","fzDoorSwitch","inverterAcPower","singleSpeedCompressorAcPower","inverterDcPower","deliPanDcVoltage","humiditySensor","mainBoardEnclosureHeater","isolationWaterValve","mainBoardLeftDoorSwitchInput","doorBoardInterlockedAc","doorBoardAcPower","ffDoorLeftSwitch","ffDoorRightSwitch","defrostHeaterFf","defrostHeaterFz","heaterEqDuct","heaterIcePort","switchIceAndWaterCup","waterValveFzIcemaker","heaterFzIcemakerFillTube","fzIcemakerMoldHeater","fzIcemakerDCPower","fzIcemakerMoldThermistor","fzIcemakerRakePositionSensor","fzIcemakerFeelerArmSensor","fzIcemaker","featureBoard","featureBoardDcSupply","featureBoardAcSupply","waterValveSingleServe","heaterHotWater","switchBrewModule","switchNozzlePosition","featureBoardGEA2Communications","nozzleMotor","airPump","podValve","ventValve1","ventValve2","speaker","dispenserBoard","dispenserBoardDcSupply","dispenserBoardGeaCommunications","dispenserPaddleSwitchNotPressed","dispenserPaddleSwitchPressed","doorBoardGeaCommunications","doorBoard","doorBoardDCPowerSupply","flowMeter","motorDuctDoor","heaterRecess","heaterDoorIcemaker","heaterMullion","heaterIceBox","hotWaterThermistors","fzLights","iceBoxThermistor","augerMotor","coldWaterValve","dispenserWaterValve"];
for(i=0; i<partNameGroupList.length; i++){
  partName = partNameGroupList[i].split("_")
  partsList.push(partName[0]);
}

partsList.sort();

for(i=0; i<partsList.length; i++){
  partName = partsList[i].split("_")
var result = partName[0].replace( /([A-Z])/g, " $1" );
  var finalResult = result.charAt(0).toUpperCase() + result.slice(1);

  var option = document.createElement("option");
  option.value = partName[0];
  option.text = finalResult;
  componentSelect.add(option);
}

var schematicDrag = Draggable.create(schematic, {zIndexBoost:false});

//Chrome Zoom
mainWindow.addEventListener('mousewheel', chromeMouseWheelEvent);
function chromeMouseWheelEvent(e){
  e.preventDefault();
  switch(e.wheelDelta<0 && scaleUp>1) {
    case true:
    if(scaleUp > .5 ){
      scaleUp = scaleUp - .1;
      TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
    }
    break;
    case false:
    scaleUp = scaleUp + .1;
      TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
        break;
    }
}


//Firfox Zoom
mainWindow.addEventListener("DOMMouseScroll", function(e){zoomSchematic(e)}, false);
var scaleUp = 1;
function zoomSchematic(e){
  e.preventDefault();
  switch(e.detail>0 && scaleUp>1) {
    case true:
    if(scaleUp > .5 ){
      scaleUp = scaleUp - .1;
      TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
    }
    break;
    case false:
    scaleUp = scaleUp + .1;
      TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
        break;
    }
}

//Iphone Zoom
schematic.addEventListener('gesturechange', function(e) {
  e.preventDefault();
    if (e.scale < 1.0 && scaleUp > 1) {
        scaleUp = scaleUp - .01;
      TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
    } else if (e.scale > 1.0) {
        scaleUp = scaleUp + .01;
      TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
    }
}, false); 

function componentChange(){
  TweenMax.to(path67358, .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  highlightedWidth = 1.5;
  clearHighlights();
  blackArray = componentSelect.value + "BlackArray";
  darkGrayArray = componentSelect.value + "DarkGrayArray";
  lightGrayArray = componentSelect.value + "LightGrayArray";
  aquamarineArray = componentSelect.value + "AquamarineArray";
  blueArray = componentSelect.value + "BlueArray";
  purpleArray = componentSelect.value + "PurpleArray";
  violetArray = componentSelect.value + "VioletArray";
  pinkArray = componentSelect.value + "PinkArray";
  yellowGreenArray = componentSelect.value + "YellowGreenArray";
  yellowArray = componentSelect.value + "YellowArray";
  orangeArray = componentSelect.value + "OrangeArray";
  redArray = componentSelect.value + "RedArray";
  brownArray = componentSelect.value + "BrownArray";
  textArray = componentSelect.value + "Text";
  
  TweenMax.to(eval("obj =" + blackArray), .1, {stroke:"rgb(0, 0, 0)", strokeWidth:highlightedWidth});
  TweenMax.to(eval("obj =" + darkGrayArray), .1, {stroke:"rgb(169, 169, 169)", strokeWidth:highlightedWidth});
  TweenMax.to(eval("obj =" + lightGrayArray), .1, {stroke:"rgb(211, 211, 211)", strokeWidth:highlightedWidth});
  TweenMax.to(eval("obj =" + aquamarineArray), .1, {stroke:"rgb(127, 255, 212)", strokeWidth:highlightedWidth});
  TweenMax.to(eval("obj =" + blueArray), .1, {stroke:"rgb(0, 0, 255)", strokeWidth:highlightedWidth});
  TweenMax.to(eval("obj =" + violetArray), .1, {stroke:"rgb(238, 130, 238)", strokeWidth:highlightedWidth});
  TweenMax.to(eval("obj =" + pinkArray), .1, {stroke:"rgb(255, 192, 203)", strokeWidth:highlightedWidth});
  TweenMax.to(eval("obj =" + yellowGreenArray), .1, {stroke:"rgb(154, 205, 50)", strokeWidth:highlightedWidth});
  TweenMax.to(eval("obj =" + yellowArray), .1, {stroke:"rgb(255, 255, 0)", strokeWidth:highlightedWidth});
  TweenMax.to(eval("obj =" + orangeArray), .1, {stroke:"rgb(255, 165, 0)", strokeWidth:highlightedWidth});
  TweenMax.to(eval("obj =" + redArray), .1, {stroke:"rgb(255, 0, 0)", strokeWidth:highlightedWidth});
  TweenMax.to(eval("obj =" + brownArray), .1, {stroke:"rgb(165, 42, 42)", strokeWidth:highlightedWidth});
  try {
   partDataWindow.innerHTML = eval("obj =" + textArray);
 }catch(e){};

  switch(componentSelect.value) {
    case "dispenserPaddleSwitchPressed":
      
    TweenMax.to(path67358, .5, {rotation:80, transformOrigin: "100% 0%", ease: Power0.easeNone});
    break;
    case false:
    scaleUp = scaleUp + .1;
      TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
        break;
    }
}


function clearHighlights(){
  // partDataWindow.innerHTML = "Select a component from the list."
  for(i=0; i<diagram1Paths.length; i++){
    part = diagram1Paths[i].id;
    part = part.split("copy")

    if(part.length === 1){
    diagram1Paths[i].style['stroke-linecap']="round";
    diagram1Paths[i].style.stroke = "#000000";
    diagram1Paths[i].style["stroke-width"]= 1; 
    } 
  }
}
clearHighlights();

///////////////////////////////////////////////////////////////ColorPicker Colors
var blackArray = [];
var grayArray = [];
var lightGrayArray = [];
var darkGrayArray = [];
var aquamarineArray = [];
var blueArray = [];
var purpleArray = [];
var violetArray = [];
var pinkArray = [];
var yellowGreenArray = [];
var yellowArray = [];
var orangeArray = [];
var redArray = [];
var brownArray = [];

function getColors(){
blackArray = [];
grayArray = [];
lightGrayArray = [];
darkGrayArray = [];
aquamarineArray = [];
blueArray = [];
purpleArray = [];
violetArray = [];
pinkArray = [];
yellowGreenArray = [];
yellowArray = [];
orangeArray = [];
redArray = [];
brownArray = [];
  for(i=0; i<diagram1PathsLength; i++){
    if(diagram1Paths[i].style["stroke-width"] != "1px") {
      switch(diagram1Paths[i].style.stroke) {
      case "rgb(0, 0, 0)":
        blackArray.push(diagram1Paths[i].id);
      break;
      case "rgb(169, 169, 169)":
        darkGrayArray.push(diagram1Paths[i].id);
          break;
      case "rgb(211, 211, 211)":
        lightGrayArray.push(diagram1Paths[i].id);
          break;
      case "rgb(127, 255, 212)":
        aquamarineArray.push(diagram1Paths[i].id);
          break;
      case "rgb(0, 0, 255)":
        blueArray.push(diagram1Paths[i].id);
          break;
      case "rgb(128, 0, 128)":
        purpleArray.push(diagram1Paths[i].id);
          break;
      case "rgb(238, 130, 238)":
        violetArray.push(diagram1Paths[i].id);
          break;
      case "rgb(255, 192, 203)":
        pinkArray.push(diagram1Paths[i].id);
          break;
      case "rgb(154, 205, 50)":
        yellowGreenArray.push(diagram1Paths[i].id);
          break;
      case "rgb(255, 255, 0)":
        yellowArray.push(diagram1Paths[i].id);
          break;
      case "rgb(255, 165, 0)":
        orangeArray.push(diagram1Paths[i].id);
        console.log("fired")
          break;
      case "rgb(255, 0, 0)":
        redArray.push(diagram1Paths[i].id);
          break;
      case "rgb(165, 42, 42)":
        brownArray.push(diagram1Paths[i].id);
          break;
        }
      }
  }
  console.log("var " + componentSelect.value + "BlackArray = [" + blackArray + "];" + "\n" + "var " + componentSelect.value + "DarkGrayArray = [" + darkGrayArray + "];" + "\n" + "var " + componentSelect.value + "LightGrayArray = [" + lightGrayArray + "];" + "\n" + "var " + componentSelect.value + "AquamarineArray = [" + aquamarineArray + "];" + "\n" + "var " + componentSelect.value + "BlueArray = [" + blueArray + "];" + "\n" + "var " + componentSelect.value + "PurpleArray = [" + purpleArray + "];" + "\n" + "var " + componentSelect.value + "VioletArray = [" + violetArray + "];" + "\n" + "var " + componentSelect.value + "PinkArray = [" + pinkArray + "];" + "\n" + "var " + componentSelect.value + "YellowGreenArray = [" + yellowGreenArray + "];" + "\n" + "var " + componentSelect.value + "YellowArray = [" + yellowArray + "];" + "\n" + "var " + componentSelect.value + "OrangeArray = [" + orangeArray + "];" + "\n" + "var " + componentSelect.value + "RedArray = [" + redArray + "];" + "\n" + "var " + componentSelect.value + "BrownArray = [" + brownArray + "];");
}


  

