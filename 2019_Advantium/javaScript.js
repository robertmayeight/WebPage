document.title = "2019 Advantium Oven"

menuIconSVG = new XMLHttpRequest();
menuIconSVG.open("GET","https://robertmayeight.github.io/WebPage/nav/menuIcon.svg",false);
menuIconSVG.overrideMimeType("image/svg+xml");
menuIconSVG.send("");
var menuIcon = document.getElementsByTagName("body")[0].appendChild(menuIconSVG.responseXML.documentElement)
menuIcon.style.position = "absolute"
menuIcon.style.zIndex = "1000";
menuIcon.style.top = "10px";
menuIcon.style.left = "0px";
menuIcon.setAttribute('onclick','this.style.cursor = "pointer"; handleMenu();');
menuIcon.setAttribute('onmouseover','this.style.cursor = "pointer"');
var menuHidden = 0;
function handleMenu(){
  console.log("fired")
  if(menuHidden == 1){
    TweenMax.to([uiSwitches], .5, {autoAlpha:1});
    TweenMax.to([zoomIcons], .5, {autoAlpha:0});
    TweenMax.to([colorPicker], .5, {autoAlpha:0});
    TweenMax.to([componentSelect], .5, {autoAlpha:0});
    menuHidden = 0;
  }else{
    TweenMax.to([uiSwitches], .5, {autoAlpha:0});
    TweenMax.to([zoomIcons], .5, {autoAlpha:1});
    TweenMax.to([colorPicker], .5, {autoAlpha:1});
    TweenMax.to([componentSelect], .5, {autoAlpha:1});
    menuHidden = 1;
  }
}


selectorSwitchesSVG = new XMLHttpRequest();
selectorSwitchesSVG.open("GET","https://robertmayeight.github.io/WebPage/nav/uiSwitch.svg",false);
selectorSwitchesSVG.overrideMimeType("image/svg+xml");
selectorSwitchesSVG.send("");
var uiSwitches = document.getElementsByTagName("body")[0].appendChild(selectorSwitchesSVG.responseXML.documentElement);
uiSwitches.style.position = "absolute";
uiSwitches.style.zIndex = "1000";
uiSwitches.style.top = "10px";
uiSwitches.style.left = "50px";
console.log(uiSwitches.style.left)

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

zoomIconsSVG = new XMLHttpRequest();
zoomIconsSVG.open("GET","https://robertmayeight.github.io/WebPage/nav/zoomIcon.svg",false);
zoomIconsSVG.overrideMimeType("image/svg+xml");
zoomIconsSVG.send("");
var zoomIcons = document.getElementsByTagName("body")[0].appendChild(zoomIconsSVG.responseXML.documentElement);
zoomIcons.style.position = "absolute"
zoomIcons.style.zIndex = "1000";
zoomIcons.style.top = "70px";
zoomIcons.style.left = "0px";

zoomOut_btn.setAttribute('onmouseover','this.style.cursor = "pointer"; overZoomOut();');
function overZoomOut(){
  TweenMax.to([zoomOutBackground], 0, {fill:"blue"});
  TweenMax.to([zoomOutBackground], .1, {opacity:.4});
}

zoomOut_btn.setAttribute('onmouseout','notOverZoomOut();');
function notOverZoomOut(){
  TweenMax.to([zoomOutBackground], 0, {fill:"rgb(179, 179, 179)"});
TweenMax.to([zoomOutBackground], .1, {opacity:.25});
}

zoomIn_btn.setAttribute('onmouseover','this.style.cursor = "pointer"; overZoomIn();');
function overZoomIn(){
  TweenMax.to([zoomInBackground], 0, {fill:"blue"});
  TweenMax.to([zoomInBackground], .1, {opacity:.4});
}

zoomIn_btn.setAttribute('onmouseout','notOverZoomIn();');
function notOverZoomIn(){
  TweenMax.to([zoomInBackground], 0, {fill:"rgb(179, 179, 179)"});
TweenMax.to([zoomInBackground], .1, {opacity:.25});
}

reset_btn.setAttribute('onmouseover','this.style.cursor = "pointer"; overReset();');
function overReset(){
  TweenMax.to([resetBackground], 0, {fill:"blue"});
  TweenMax.to([resetBackground], .1, {opacity:.4});
}

reset_btn.setAttribute('onmouseout','notOverReset();');
function notOverReset(){
  TweenMax.to([resetBackground], 0, {fill:"rgb(179, 179, 179)"});
TweenMax.to([resetBackground], .1, {opacity:.25});
}


// textnode2 = document.createElement("select");
// var mySelect = document.getElementsByTagName("body")[0].appendChild(textnode2);
// var op = new Option();
// op.value = 1;
// op.text = "First entry";
// textnode2.options.add(op);  
colorPicker.style.position = "absolute"
colorPicker.style.zIndex = "1000";
colorPicker.style.top = "10px";
colorPicker.style.left = "50px";

componentSelect.style.position = "absolute"
componentSelect.style.zIndex = "1000";
componentSelect.style.top = "10px";
componentSelect.style.left = "200px";





highlighterSelected = true;


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
  toolSelectors.style.display = "none";
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


  
handleMenu();
