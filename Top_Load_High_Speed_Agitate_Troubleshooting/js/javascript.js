var edit = true;
function toggleEditor(){
  edit = !edit;
  console.log(edit)
  if(edit === false){
    colorPicker.style.display = 'none';;
    getSelectionArray_btn.style.display = 'none';
    myText.style.display = 'none';
  }else{
    colorPicker.style.display = 'block';
    getSelectionArray_btn.style.display = 'block';
    myText.style.display = 'block';
  }
}
toggleEditor();

document.title = "Troubleshooting Exercise";

var pressureSensorNeutralArray = ["path2216","sudsLockSwitch_sw","speedSwitch_sw","rinseFillSwitch_sw","hotValveSwitch_sw","fillSwitch_sw","coldValveSwitch_sw","path4594","path4754","path5074","path5552","path6136","path6196","path6216","path6444","path6492","path6748","path171708","path171667","path6116","path11093","path11095","path30883","path6156","path171704","path30889","slowColdValveSwitch_sw","path6096","path30925","timerMotorSwitch_sw","path2546","path2638","path2640","path4670","path5046","path16073","path16096","path16100","path16108","path16118","slowColdValve","hotValve_load","coldValve","path16299",]

 var pressureSensorL1Array = ["path1154","agitationControlSwitch_sw","path6168","path2623","path2625","path2627","path2629","path2632","path2634","path2636","lidSwitch_sw","path2648","path16120","pressureSensor_sw",]

 var lowSpeedAgitateL1Array = ["sudsLockSwitch_sw","rinseFillSwitch_sw","hotValveSwitch_sw","fillSwitch_sw","coldValveSwitch_sw","path4754","path5074","path6136","path6196","path6216","path6444","path6748","path171708","path171667","path6076","path6116","path11093","path11095","path30883","path6156","path171704","path30889","slowColdValveSwitch_sw","path6096","path30925","timerMotorSwitch_sw","path2638","path2640","path4670","path5046","path16100","path16108","path16118","slowColdValve","hotValve_load","coldValve","path174147","path16299","sudsLockSwitch_sw","rinseFillSwitch_sw","hotValveSwitch_sw","fillSwitch_sw","coldValveSwitch_sw","path4594","path4754","path5074","path6136","path6196","path6216","path6444","path6492","path6748","path171708","path171667","path6076","path6116","path11093","path11095","path30883","path6156","path171704","path30889","slowColdValveSwitch_sw","path6096","path30925","timerMotorSwitch_sw","path2638","path2640","path4670","path5046","path16073","path16096","path16100","path16108","path16118","hotValve_load","coldValve","path174147","path16299",]

 var lowSpeedAgitateNeutralArray = ["path1154","speedSwitch_sw","path4594","path4832","extraRinseSwitch_sw","agitationControlSwitch_sw","path6168","path2546","path2623","path2625","path2627","path2629","path2632","path2634","path2636","lidSwitch_sw","path2648","path16073","path16096","path16120","timerMotorL1Switch_sw","pressureSensor_sw","path1154","path4832","extraRinseSwitch_sw","agitationControlSwitch_sw","path6168","path2546","path2623","path2625","path2627","path2629","path2632","path2634","path2636","lidSwitch_sw","path2648","path16120","timerMotorL1Switch_sw","pressureSensor_sw",]

 var noDrainL1Array = ["sudsLockSwitch_sw","rinseFillSwitch_sw","hotValveSwitch_sw","fillSwitch_sw","coldValveSwitch_sw","path4754","path5074","path6136","path6196","path6216","path6444","path6748","path171708","path171667","path6076","path6116","path11093","path11095","path30883","path6156","path171704","path30889","slowColdValveSwitch_sw","path6096","path30925","timerMotorSwitch_sw","path2638","path2640","path4670","path5046","path16100","path16108","path16118","slowColdValve","hotValve_load","coldValve","path174147","path16299","sudsLockSwitch_sw","rinseFillSwitch_sw","hotValveSwitch_sw","fillSwitch_sw","coldValveSwitch_sw","path4594","path4754","path5074","path6136","path6196","path6216","path6444","path6748","path171708","path171667","path6076","path6116","path11093","path11095","path30883","path6156","path171704","path30889","slowColdValveSwitch_sw","path6096","path30925","timerMotorSwitch_sw","path2638","path2640","path4670","path5046","path16100","path16108","path16118","slowColdValve","hotValve_load","coldValve","path174147","path16299",]

 var noDrainNeutralArray = ["path1154","speedSwitch_sw","path4594","path4832","extraRinseSwitch_sw","path5854","agitationControlSwitch_sw","path6168","path2546","path2623","path2625","path2627","path2629","path2632","path2634","path2636","lidSwitch_sw","path2648","path16073","path16096","path16120","timerMotorL1Switch_sw","pressureSensor_sw","path1154","speedSwitch_sw","path4832","extraRinseSwitch_sw","path5552","agitationControlSwitch_sw","path6168","path2546","path2623","path2625","path2629","path2632","path2634","path2636","lidSwitch_sw","path2648","path16073","path16096","path16120","timerMotorL1Switch_sw","pressureSensor_sw",]

 var fuseL1Array = ["path1154","speedSwitch_sw","path4594","path5552","agitationControlSwitch_sw","path6168","path2546","path2623","path2625","path2627","path2629","path2632","path2634","path2636","lidSwitch_sw","path2648","path16073","path16096","path16120","timerMotorL1Switch_sw","pressureSensor_sw",]

 var fuseNeutralArray = ["sudsLockSwitch_sw","rinseFillSwitch_sw","hotValveSwitch_sw","fillSwitch_sw","coldValveSwitch_sw","path4754","path5074","path6136","path6196","path6216","path6444","path171708","path171667","path6076","path6116","path11093","path11095","path30883","path6156","path171704","path30889","slowColdValveSwitch_sw","path6096","timerMotorSwitch_sw","path2638","path2640","path4670","path16100","path16108","path16118","slowColdValve","hotValve_load","coldValve","path16299",]


 var filterNeutralArray = ["path30889","filterBorder"]

  var filterL1Array = ["path1154","sudsLockSwitch_sw","speedSwitch_sw","rinseFillSwitch_sw","hotValveSwitch_sw","fillSwitch_sw","coldValveSwitch_sw","path4594","path4754","path5074","path5552","agitationControlSwitch_sw","path6136","path6196","path6216","path6444","path6748","path171708","path6168","path171667","path6076","path6116","path11093","path11095","path30883","path6156","path171704","slowColdValveSwitch_sw","path6096","path30925","timerMotorSwitch_sw","path2546","path2623","path2625","path2627","path2629","path2632","path2634","path2636","path2638","path2640","path4670","path5046","lidSwitch_sw","path2648","path16073","path16096","path16100","path16108","path16118","path16120","slowColdValve","hotValve_load","coldValve","path174147","path16299","timerMotorL1Switch_sw","pressureSensor_sw",]

var componentList = [];
var meterBlack = [];
var meterRed = [];
var l1TestArray = [];
var neutralTestArray = [];
var highlighterSelected = true;
var originalLineSize = .5;
var highlightedWidth = 1.45;
var selection = '';

var l1Color = 'rgb(0, 0, 0)';
var neutralColor = 'rgb(0, 0, 255)';
var energizedLoad = 'rgb(255,165,0)';
var originalLineColor = 'rgb(32,32,32)';


var deviceType = "not mobile";
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  deviceType="mobile"
}

//Audio
slideAudio.onseeked = function() {
  slideTl.time(slideAudio.currentTime);
}

slideAudio.ontimeupdate = function() {
  slideTl.time(slideAudio.currentTime);
};
//End Audio

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

//Set Button Codes
// var buttons = document.getElementById("partNameGroup").getElementsByTagName("rect");
// var partNameGroupLength = buttons.length;
// for(i=0; i<partNameGroupLength; i++){
//   buttons[i].setAttribute('onmouseover','this.style.cursor = "pointer"');
//   buttons[i].setAttribute('onclick','changeDropDown(this.id);'); 
// }

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
  nameSplit = wire.id.split("copy");
    wire2 = document.getElementById(nameSplit[0]);
    selectedPart = wire2.id;
    selection = wire2.id;
  if(edit === true){
    console.log('true fired')
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
  if(edit === false){
    console.log('false fired')
     for(i=0; i<diagram1PathsLength; i++){
      diagram1Paths[i].style.stroke = "Black";
      diagram1Paths[i].style.strokeWidth = originalLineSize;
    }
    if (document.getElementById('redLead').checked) {
      meterRed = [];
      meterRed.push(wire2.id)
      
    }
    if (document.getElementById('blackLead').checked) {
      meterBlack = [];
      meterBlack.push(wire2.id)
    } 
    meterRed.forEach(function(element){
      var redPart = document.getElementById(element)
      redPart.style.stroke = "red";
      redPart.style.strokeWidth = highlightedWidth;
    })
    meterBlack.forEach(function(element){
      var blackPart = document.getElementById(element)
      blackPart.style.stroke = "black";
      blackPart.style.strokeWidth = highlightedWidth;
    })
    const redLeadFoundInRedArray = l1TestArray.some(r=> meterRed.includes(r))
    const redLeadFoundInBlueArray = neutralTestArray.some(r=> meterRed.includes(r))
    const blackLeadFoundInRedArray = l1TestArray.some(r=> meterBlack.includes(r))
    const blackLeadFoundInBlueArray = neutralTestArray.some(r=> meterBlack.includes(r))
    if((redLeadFoundInRedArray === true && blackLeadFoundInBlueArray === true) || (redLeadFoundInBlueArray === true && blackLeadFoundInRedArray === true)){
      meterText.innerHTML = '120 VAC';
    }else{
      meterText.innerHTML = '0 VAC';
    }
  }
  }

function changeChecked(button){
  button.checked = true;
}

function changeText(text){
  meterText.innerHTML = text;
}
redLead.checked = true;

function skipInstructions(){
  skipInstructions_btn.style.display = 'none';
  slideAudio.currentTime = 16;
  slideAudio.play();
}

function updateTestArrays(array1, array2){
  l1TestArray = array1;
  neutralTestArray = array2;
}

function checkAnswer(answer){
  console.log(selection)
  console.log(answer)
  if(answer === selection){
    slideAudio.play();
  }else{
    alert('INCORRECT');
  }
}

function updateParams(){
  if(question1.style.display === 'block'){
    l1TestArray = pressureSensorL1Array;
    neutralTestArray = pressureSensorNeutralArray;
  }
  if(question2.style.display === 'block'){
    l1TestArray = lowSpeedAgitateL1Array;
    neutralTestArray = lowSpeedAgitateNeutralArray;
  }
  if(question3.style.display === 'block'){
    l1TestArray = noDrainL1Array;
    neutralTestArray = noDrainNeutralArray;
  }
  if(question4.style.display === 'block'){
    l1TestArray = fuseL1Array;
    neutralTestArray = fuseNeutralArray;
  }
  if(question5.style.display === 'block'){
    l1TestArray = filterL1Array;
    neutralTestArray = filterNeutralArray;
  }
}

var slideTl = new TimelineMax({onUpdate:updateParams, paused:true});
slideTl
.to(skipInstructions_btn, .1, {autoAlpha:0})
.to(question1, 1, {autoAlpha:0, onComplete:changeChecked, onCompleteParams:[blackLead],delay:2})
.to(question1, 1, {autoAlpha:0, onComplete:changeChecked, onCompleteParams:[redLead]})
.to(question1, 1, {autoAlpha:0, onComplete:changeChecked, onCompleteParams:[blackLead]})
.to(question1, 1, {autoAlpha:0, onComplete:changeChecked, onCompleteParams:[redLead]})

.to(path30883, .5, {stroke:"red", strokeWidth:highlightedWidth, delay:2})
.to(question1, 1, {autoAlpha:0, onComplete:changeChecked, onCompleteParams:[blackLead],delay:1.5})
.to(path1154, .5, {stroke:"black", strokeWidth:highlightedWidth, delay:1.5})
.call(changeText, ["0 VAC"])
.call(changeText, ["120 VAC"], "+=2")
.to(meterText, 1, {backgroundColor:'red', delay:.5})
.to(meterText, 1, {backgroundColor:'white', delay:.5})
.to([path30883,path1154], .5, {stroke:originalLineColor, strokeWidth:originalLineSize})
.call(changeText, ["120 VAC"])
.call(changeText, ["0 VAC"])


.to(question1, .5, {autoAlpha:1, display:'block', delay:0})
.to(skipInstructions_btn, .1, {autoAlpha:0, onComplete:function(){slideAudio.pause()}, delay:10})

.to(question1, .5, {autoAlpha:0, display:'none',delay:1})
.to(question2, .5, {autoAlpha:1, display:'block', delay:1})
.to(skipInstructions_btn, .1, {autoAlpha:0, onComplete:function(){slideAudio.pause()}, delay:4})

.to(question2, .5, {autoAlpha:0, display:'none',delay:1})
.to(question3, .5, {autoAlpha:1, display:'block', delay:1})
.to(skipInstructions_btn, .1, {autoAlpha:0, onComplete:function(){slideAudio.pause()}, delay:4})

.to(question3, .5, {autoAlpha:0, display:'none',delay:1})
.to(question4, .5, {autoAlpha:1, display:'block', delay:1})
.to(skipInstructions_btn, .1, {autoAlpha:0, onComplete:function(){slideAudio.pause()}, delay:4})

.to(question4, .5, {autoAlpha:0, display:'none',delay:1})
.to(question5, .5, {autoAlpha:1, display:'block', delay:1})
.to(skipInstructions_btn, .1, {autoAlpha:0, onComplete:function(){slideAudio.pause()}, delay:1})



/////////////////////////////Comment Out After Edit
function highlightDiagram(){
  var l1Array = [];
  var neutralArray = [];
  for(i=0; i<diagram1PathsLength; i++){
    console.log(diagram1Paths[i].style.stroke)
    if(diagram1Paths[i].style.stroke === l1Color){
      l1Array.push(diagram1Paths[i].id)
    }

    if(diagram1Paths[i].style.stroke === neutralColor){
      neutralArray.push(diagram1Paths[i].id)
    }
  }

  myText.append('[')

  neutralArray.forEach(function(element){
    myText.append('"' + element + '",')
  })

  myText.append(']')
  myText.append('[')

  l1Array.forEach(function(element){
    myText.append('"' + element + '",')
  })
  
  myText.append(']')
}

// filterL1Array.forEach(function(element){
//   wire = document.getElementById(element)
//   wire.style.stroke = l1Color;
//   wire.style.strokeWidth = highlightedWidth;
// })

// filterNeutralArray.forEach(function(element){
//   wire = document.getElementById(element)
//   wire.style.stroke = neutralColor;
//   wire.style.strokeWidth = highlightedWidth;
// })