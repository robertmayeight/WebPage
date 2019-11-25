document.title = "2019 Advantium Oven"

selectorSwitches = new XMLHttpRequest();
selectorSwitches.open("GET","uiSwitch.svg",false);
selectorSwitches.overrideMimeType("image/svg+xml");
selectorSwitches.send("");
var uiSwitches = document.getElementById("checkBoxes").appendChild(selectorSwitches.responseXML.documentElement);

selector1.setAttribute('onclick','this.style.cursor = "pointer"; toggleSelector1();');
selector1.setAttribute('onmouseover','this.style.cursor = "pointer"');
function toggleSelector1(){
  if(selector1Background.style.fill == "rgb(179, 179, 179)"){
    TweenMax.to([selector1Background], .5, {fill:"green"});
    TweenMax.to([selector1SliderKnob], .5, {x:6});
    colorPicker.style.display = "inline";
    highlighterSelected = true;
  }else{
    TweenMax.to([selector1Background], .5, {fill:"rgb(179, 179, 179)"});
    TweenMax.to([selector1SliderKnob], .5, {x:0});
    colorPicker.style.display = "none";
    highlighterSelected = false;
  }
}
toggleSelector1();

selector2.setAttribute('onclick','this.style.cursor = "pointer"; toggleSelector2();');
selector2.setAttribute('onmouseover','this.style.cursor = "pointer"');
function toggleSelector2(){
  if(selector2Background.style.fill == "rgb(179, 179, 179)"){
    TweenMax.to([selector2Background], .5, {fill:"green"});
    TweenMax.to([selector2SliderKnob], .5, {x:6});
    componentSelect.style.display = "inline";
  }else{
    TweenMax.to([selector2Background], .5, {fill:"rgb(179, 179, 179)"});
    TweenMax.to([selector2SliderKnob], .5, {x:0});
    componentSelect.style.display = "none";
  }
}
toggleSelector2();

selector3.setAttribute('onclick','this.style.cursor = "pointer"; toggleSelector3();');
selector3.setAttribute('onmouseover','this.style.cursor = "pointer"');
function toggleSelector3(){
  if(selector3Background.style.fill == "rgb(179, 179, 179)"){
    TweenMax.to([selector3Background], .5, {fill:"green"});
    TweenMax.to([selector3SliderKnob], .5, {x:6});
    zoomIconsGroup.style.display = "inline";
  }else{
    TweenMax.to([selector3Background], .5, {fill:"rgb(179, 179, 179)"});
    TweenMax.to([selector3SliderKnob], .5, {x:0});
    zoomIconsGroup.style.display = "none";
  }
}
toggleSelector3();


menuBox.setAttribute('onclick','this.style.cursor = "pointer"; handleMenu();');
menuBox.setAttribute('onmouseover','this.style.cursor = "pointer"');

// TweenMax.to([selectorSliderKnob], .5, {fill:"red"});

var menuHidden = 0;
function handleMenu(){
  if(menuHidden == 1){
    checkBoxes.style.display = "block";
    menuHidden = 0;
  }else{
    checkBoxes.style.display = "none";
    menuHidden = 1;
  }
}

highlighterSelected = true;
// var highlighterIconVisibility = true;
// function toggleHighlighter(){
//   console.log(highlighterIconVisibility)
//   highlighterIconVisibility=!highlighterIconVisibility;
//   if(highlighterIconVisibility == true){
//     highlighterSelected = true;
//   }else{
//     highlighter.checked = false;
//   }
// }

// var zoomIconVisibility = true;
// function toggleZoomIcons(){
//   zoomIconVisibility=!zoomIconVisibility;
//   if(zoomIconVisibility == true){
//     zoomIconsGroup.style.display = "inline";
//     zoomTool.checked = true;
//   }else{
//     zoomIconsGroup.style.display = "none";
//     zoomTool.checked = false;
//   }
// }

// colorPickerTool.checked = true;
// var colorPickerToolIconVisibility = true;
// function toggleColorPicker(){
//   colorPickerToolIconVisibility=!colorPickerToolIconVisibility;
//   if(colorPickerToolIconVisibility == true){
//     colorPicker.style.display = "inline";
//     colorPickerTool.checked = true;
//   }else{
//     colorPicker.style.display = "none";
//     colorPickerTool.checked = false;
//   }
// }

// componentSelectTool.checked = true;
// var componentSelectToolIconVisibility = true;
// function toggleComponentSelect(){
//   componentSelectToolIconVisibility=!componentSelectToolIconVisibility;
//   if(componentSelectToolIconVisibility == true){
//     componentSelect.style.display = "inline";
//     componentSelectTool.checked = true;
//   }else{
//     componentSelect.style.display = "none";
//     componentSelectTool.checked = false;
//   }
// }

var originalLineSize = .5;
var highlightedWidth = 1.45;

//Toggle Edit Functions
window.addEventListener("keydown", toggleEditor);
function toggleEditor(){
  if(event.keyCode == 16 && event.ctrlKey){
    getColors();
  }
}

var deviceType = "not mobile";
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  deviceType="mobile"
}

xhr = new XMLHttpRequest();
xhr.open("GET","schematic.svg",false);
xhr.overrideMimeType("image/svg+xml");
xhr.send("");

var schematic = document.getElementById("mainWindow").appendChild(xhr.responseXML.documentElement);

schematic.setAttribute("width", screen.width);
schematic.setAttribute("height", screen.height); 
schematic.addEventListener("click", hideMenu);

function hideMenu(){
  console.log("yes")
  checkBoxes.style.display = "none";
  menuHidden = 1;
}
//Resize Window
var svgWindow = document.getElementById("mainWindow");
var svg = d3.select(schematic);
function myredraw(){
  var width = svgWindow.clientWidth;
  var height = svgWindow.clientHeight;
  svg
  .attr("width", width)
  .attr("height", height);
}
myredraw();
window.addEventListener("resize", myredraw)

//Set Path Codes
var diagram1Paths = document.getElementById("diagram1").getElementsByTagName("path");
var diagram1PathsLength = diagram1Paths.length;

for(i=0; i<diagram1PathsLength; i++){
  diagram1Paths[i].style['stroke-linecap']="round";
  diagram1Paths[i].style.stroke = "Black";
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

//Set Button Codes
var buttons = document.getElementById("partNameGroup").getElementsByTagName("rect");
var partNameGroupLength = buttons.length;
for(i=0; i<partNameGroupLength; i++){
  buttons[i].setAttribute('onmouseover','this.style.cursor = "pointer"');
  buttons[i].setAttribute('onclick','changeDropDown(this.id);'); 
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

function wireClicked(wire){
  if(highlighterSelected == true){
    nameSplit = wire.id.split("copy");
    wire2 = document.getElementById(nameSplit[0]);
    wire2.style["stroke-width"]= highlightedWidth;
    wire2.style["stroke"]= document.getElementById("colorPicker").value;
    selectedPart = wire2.id;
  }
}



var partsList = [];
var partNameGroupList = partNameGroup.getElementsByTagName("rect");

for(i=0; i<partNameGroupList.length; i++){
  myPart = document.getElementById(partNameGroupList[i].id);
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

sortSelect(componentSelect)

// partsList.sort();

// for(i=0; i<partsList.length; i++){
//   myPart = document.getElementById(partNameGroupList[i].id);
//   var myLabel = $(myPart).attr('inkscape:label');
//   var option = document.createElement("option");
//   option.value = myPart.id;
//   option.text = myLabel;
//   componentSelect.add(option);
// }

//Change DropDown when component is clicked on diagram.
function changeDropDown(e){
  console.log("fired" + e)
  newDropDownValue = e.split("_")[0];
  for(i=0; i<componentSelect.length; i++){
    if(newDropDownValue == componentSelect[i].value){
      componentSelect.value = newDropDownValue;
      componentChange();
    } 
  }
}

//Do when Dropdown is changed.
function componentChange(){

  //Edit Here/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  TweenMax.to([MISBlade,MISBladecopy], .5, {rotation:-40, transformOrigin: "100% 0%", ease: Power0.easeNone});
  TweenMax.to([ry2Blade,ry2Bladecopy], .5, {rotation:20, transformOrigin: "0% 100%", ease: Power0.easeNone});
  TweenMax.to([PISBlade,PISBladecopy], .5, {rotation:-40, transformOrigin: "100% 0%", ease: Power0.easeNone});
  TweenMax.to([ry3Blade,ry3Bladecopy], .5, {rotation:-20, transformOrigin: "100% 0%", ease: Power0.easeNone});
  TweenMax.to([ry5Blade,ry5Bladecopy], .5, {rotation:-20, transformOrigin: "100% 0%", ease: Power0.easeNone});
  TweenMax.to([ry7Blade,ry7Bladecopy], .5, {rotation:-20, transformOrigin: "100% 0%", ease: Power0.easeNone});
  TweenMax.to([ry4Blade,ry4Bladecopy], .5, {rotation:-20, transformOrigin: "100% 0%", ease: Power0.easeNone});
  TweenMax.to([ry15Blade,ry15Bladecopy], .5, {rotation:-20, transformOrigin: "100% 0%", ease: Power0.easeNone});
  TweenMax.to([dlbRelaySwitch,dlbRelaySwitchcopy], .5, {rotation:-20, transformOrigin: "100% 0%", ease: Power0.easeNone});
  TweenMax.to([ry16Blade,ry16Bladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  TweenMax.to([ry13Blade,ry13Bladecopy], .5, {rotation:-20, transformOrigin: "100% 0%", ease: Power0.easeNone});
  TweenMax.to([ry11Blade,ry11Bladecopy], .5, {rotation:-20, transformOrigin: "100% 0%", ease: Power0.easeNone});
  TweenMax.to([doorSwitchBlade,doorSwitchBladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  TweenMax.to([damperSwitch,damperSwitchcopy], .5, {rotation:0, transformOrigin: "0% 100%", ease: Power0.easeNone});
  TweenMax.to([path5615,path5613,path5615copy,path5613copy], 0, {autoAlpha:0});
  TweenMax.to([path5619,path5617,path5619copy,path5617copy], 0, {autoAlpha:0});
  TweenMax.to([ry8Blade,ry8Bladecopy], .5, {rotation:40, transformOrigin: "0% 100%", ease: Power0.easeNone});
  
  
  
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
  
  try {
    TweenMax.to(eval("obj =" + blackArray), .1, {stroke:"rgb(0, 0, 0)", strokeWidth:highlightedWidth});
    TweenMax.to(eval("obj =" + darkGrayArray), .1, {stroke:"rgb(169, 169, 169)", strokeWidth:highlightedWidth});
    TweenMax.to(eval("obj =" + lightGrayArray), .1, {stroke:"rgb(211, 211, 211)", strokeWidth:highlightedWidth});
    TweenMax.to(eval("obj =" + aquamarineArray), .1, {stroke:"rgb(127, 255, 212)", strokeWidth:highlightedWidth});
    TweenMax.to(eval("obj =" + blueArray), .1, {stroke:"rgb(0, 0, 255)", strokeWidth:highlightedWidth});
    TweenMax.to(eval("obj =" + purpleArray), .1, {stroke:"rgb(128, 0, 128)", strokeWidth:highlightedWidth});
    TweenMax.to(eval("obj =" + violetArray), .1, {stroke:"rgb(238, 130, 238)", strokeWidth:highlightedWidth});
    TweenMax.to(eval("obj =" + pinkArray), .1, {stroke:"rgb(255, 192, 203)", strokeWidth:highlightedWidth});
    TweenMax.to(eval("obj =" + yellowGreenArray), .1, {stroke:"rgb(154, 205, 50)", strokeWidth:highlightedWidth});
    TweenMax.to(eval("obj =" + yellowArray), .1, {stroke:"rgb(255, 255, 0)", strokeWidth:highlightedWidth});
    TweenMax.to(eval("obj =" + orangeArray), .1, {stroke:"rgb(255, 165, 0)", strokeWidth:highlightedWidth});
    TweenMax.to(eval("obj =" + redArray), .1, {stroke:"rgb(255, 0, 0)", strokeWidth:highlightedWidth});
    TweenMax.to(eval("obj =" + brownArray), .1, {stroke:"rgb(165, 42, 42)", strokeWidth:highlightedWidth});
    partDataWindow.innerHTML = eval("obj =" + textArray);
  }catch(e){};
  switch(componentSelect.value) {
    //Edit Here/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    case "lampOven":
    TweenMax.to([ry2Blade,ry2Bladecopy], .5, {rotation:0, transformOrigin: "0% 100%", ease: Power0.easeNone});
    break;

    case "motorFan":
    TweenMax.to([PISBlade,PISBladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
    TweenMax.to([ry3Blade,ry3Bladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
    break;

    case "conFanMotor":
    TweenMax.to([PISBlade,PISBladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
    TweenMax.to([ry5Blade,ry5Bladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
    break;

    case "motorTurntable":
    TweenMax.to([PISBlade,PISBladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
    TweenMax.to([ry7Blade,ry7Bladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
    break;

    case "motorDamper":
    TweenMax.to([PISBlade,PISBladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
    TweenMax.to([ry4Blade,ry4Bladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
    break;

    case "heaterUpper1":
    TweenMax.to([PISBlade,PISBladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
    TweenMax.to([ry15Blade,ry15Bladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
    TweenMax.to([dlbRelaySwitch,dlbRelaySwitchcopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
    break;

    case "heaterUpper2":
    TweenMax.to([PISBlade,PISBladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
    TweenMax.to([ry16Blade,ry16Bladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
    TweenMax.to([dlbRelaySwitch,dlbRelaySwitchcopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
    break;

    case "heaterLower":
    TweenMax.to([PISBlade,PISBladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
    TweenMax.to([ry13Blade,ry13Bladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
    TweenMax.to([dlbRelaySwitch,dlbRelaySwitchcopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
    break;

    case "heaterConvection":
    TweenMax.to([PISBlade,PISBladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
    TweenMax.to([ry11Blade,ry11Bladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
    TweenMax.to([dlbRelaySwitch,dlbRelaySwitchcopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
    break;

    case "switchPrimaryOpen":
    TweenMax.to([PISBlade,PISBladecopy], .5, {rotation:-40, transformOrigin: "100% 0%", ease: Power0.easeNone});
    break;

    case "switchPrimaryClose":
    TweenMax.to([PISBlade,PISBladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
    break;

    case "switchDoorOpen":
    TweenMax.to([doorSwitchBlade,doorSwitchBladecopy], .5, {rotation:40, transformOrigin: "100% 0%", ease: Power0.easeNone});
    break;

    case "switchDamperOpen":
    TweenMax.to([damperSwitch,damperSwitchcopy], .5, {rotation:-40, transformOrigin: "0% 100%", ease: Power0.easeNone});
    break;

    case "boardRelayDCPower":
    TweenMax.to([path5615,path5613], .5, {autoAlpha:1});
    break;

    case "boardSBCDCSupply":
    TweenMax.to([path5619,path5617], 0, {autoAlpha:1});
    break;

    case "mag":
    TweenMax.to([ry8Blade,ry8Bladecopy], .5, {rotation:0, transformOrigin: "0% 100%", ease: Power0.easeNone});
    TweenMax.to([PISBlade,PISBladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
    TweenMax.to([dlbRelaySwitch,dlbRelaySwitchcopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
    break;

    
  }
  for(i=0; i<partNameGroupList.length; i++){
    partNameGroupList[i].setAttribute('fill','green');
    partNameGroupList[i].style.fill = "blue";
  }
  try{document.getElementById(componentSelect.value).style.fill = "red";}
  catch(e){};
  
}

componentChange()

function clearHighlights(){
  for(i=0; i<diagram1Paths.length; i++){
    part = diagram1Paths[i].id;
    part = part.split("copy")

    if(part.length === 1){
    diagram1Paths[i].style['stroke-linecap']="round";
    diagram1Paths[i].style.stroke = "#000000";
    diagram1Paths[i].style["stroke-width"]= originalLineSize; 
    } 
  }
}

clearHighlights();

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
      if(diagram1Paths[i].style["stroke-width"] != originalLineSize + "px") {
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


  

