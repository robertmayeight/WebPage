document.title = "Troubleshooting Exercise";

var allArrays = [
  ["n", "path10004", "path10008", "path5074", "path10734", "path10736", "path14656", "path14654", "path10528", "ovenLamp_sw", "path10586", "path11626", "path5362", "path17156", "path5366", "ovenLamp_load", "path5353", "path14247", "path_110", "path5370", "path1_9", "heaterTCO_sw", "path5374", "path5376", "path1_7", "ovenTCO_sw", "path1_5", "path5380", "path4821", "path1_4", "fuse_sw", "path1_2", "path10006", "l1"],

  ["n", "path10004", "path10008", "path5074", "path10734", "path10736", "path14656", "path18201", "path5914", "fanMotorRelay_sw", "path5828", "path5808", "path5127", "fanMotor_load", "path5131", "path10478", "path5157", "path11778", "path11780", "path10482", "path5105", "path10480", "path5085", "pis_sw", "path5237", "path6738", "path5065", "magTCO_sw", "path5071", "path10730", "path1_9", "heaterTCO_sw", "path5374", "path5376", "path1_7", "ovenTCO_sw", "path1_5", "path5380", "path4821", "path1_4", "fuse_sw", "path1_2", "path10006", "l1"],

  ["n", "path10004", "path10008", "path5074", "path10734", "path10736", "path14656", "path18201", "path18235", "path18235", "path18269", "path6268", "conFanMotor_sw", "path6266", "path11700", "path11702", "path5337", "conFanMotor_load", "path5341", "path5159", "path5147", "path5157", "path11778", "path11780", "path10482", "path10480", "path5085", "pis_sw", "path5237", "path6738", "path5065", "magTCO_sw", "path5071", "path10730", "path1_9", "heaterTCO_sw", "path5374", "path5376", "path1_7", "ovenTCO_sw", "path1_5", "path5380", "path4821", "path1_4", "fuse_sw", "path1_2", "path10006", "l1"],

  ["n", "path10004", "path10008", "path5074", "path10734", "path10736", "path14656", "path18201", "path18235", "path18269", "path5422", "turnTableMotor_sw", "path6458", "path11710", "path11712", "path5309", "turntableMotor_load", "path5313", "path5247", "path5241", "path5245", "path10748", "path5131", "path10478", "path5157", "path11778", "path11780", "path10482", "path5105", "path10480", "path5085", "pis_sw", "path5237", "path6738", "path5065", "magTCO_sw", "path5071", "path10730", "path1_9", "heaterTCO_sw", "path5374", "path5376", "path1_7", "ovenTCO_sw", "path1_5", "path5380", "path4821", "path1_4", "fuse_sw", "path1_2", "path10006", "l1"],

  ["n", "path10004", "path10008", "path5074", "path10734", "path10736", "path14656", "path18201", "path18235", "path6102", "damperMotor_sw", "path6100", "path10746", "path5101", "damperMotor_load", "path5105", "path10480", "path5085", "pis_sw", "path5237", "path6738", "path5065", "magTCO_sw", "path5071", "path10730", "path1_9", "heaterTCO_sw", "path5374", "path5376", "path1_7", "ovenTCO_sw", "path1_5", "path5380", "path4821", "path1_4", "fuse_sw", "path1_2", "path10006", "l1"],

  ["n", "path10004", "path10008", "path5074", "path10734", "path3900", "dlb_sw", "path3902", "path19994", "path10490", "path10488", "path18514", "path3478", "upperHeater1_sw", "path3476", "path18517", "path11754", "path11756", "path5215", "upperHeater1_load", "path5225", "path5203", "path5201", "path5197", "path5193", "path11718", "path5171", "path10466", "path7550", "path7622", "path4867", "path5087", "path5085", "pis_sw", "path5237", "path6738", "path5065", "magTCO_sw", "path5071", "path10730", "path1_9", "heaterTCO_sw", "path5374", "path5376", "path1_7", "ovenTCO_sw", "path1_5", "path5380", "path4821", "path1_4", "fuse_sw", "path1_2", "path10006", "l1"],

  ["n", "path10004", "path10008", "path5074", "path10734", "path3900", "dlb_sw", "path3902", "path19994", "path3664", "upperHeater2_sw", "path3662", "path11760", "path11762", "upperHeater2_load", "path5177", "path5175", "path5171", "path10466", "path7550", "path7622", "path4867", "path5087", "path5085", "pis_sw", "path5237", "path6738", "path5065", "magTCO_sw", "path5071", "path10730", "path1_9", "heaterTCO_sw", "path5374", "path5376", "path1_7", "ovenTCO_sw", "path1_5", "path5380", "path4821", "path1_4", "fuse_sw", "path1_2", "path10006", "l1"],

  ["n", "path10004", "path10008", "path5074", "path10734", "path3900", "dlb_sw", "path3902", "path19982", "path10492", "path3784", "ceramicHeater_sw", "path3782", "path11766", "path11768", "lowerHeaterCeramic_load", "path14875", "path5187", "path11730", "path5183", "path5181", "path5245", "path10748", "path5131", "path10478", "path5157", "path11778", "path11780", "path10482", "path5105", "path10480", "path5085", "pis_sw", "path5237", "path6738", "path5065", "magTCO_sw", "path5071", "path10730", "path1_9", "heaterTCO_sw", "path5374", "path5376", "path1_7", "ovenTCO_sw", "path1_5", "path5380", "path4821", "path1_4", "fuse_sw", "path1_2", "path10006", "l1"],

  ["n", "path10004", "path10008", "path5074", "path10734", "path3900", "dlb_sw", "path3902", "path19994", "path10490", "path3988", "conHeater_sw", "path3986", "path11772", "path11774", "convectionHeater_load", "path5062", "path5299", "conHeaterTCO_sw", "path5293", "path5167", "path5165", "path11780", "path10482", "path5105", "path10480", "path5085", "pis_sw", "path5237", "path6738", "path5065", "magTCO_sw", "path5071", "path10730", "path1_9", "heaterTCO_sw", "path5374", "path5376", "path1_7", "ovenTCO_sw", "path1_5", "path5380", "path4821", "path1_4", "fuse_sw", "path1_2", "path10006", "l1"],

  ["n", "path10004", "path10008", "path5074", "path10734", "path3900", "dlb_sw", "path3902", "path19982", "path18560", "path4272", "mag_sw", "path4270", "path18563", "path7630", "path12673", "hvTransformer_load", "path4867", "path5087", "path5085", "pis_sw", "path5237", "path6738", "path5065", "magTCO_sw", "path5071", "path10730", "path1_9", "heaterTCO_sw", "path5374", "path5376", "path1_7", "ovenTCO_sw", "path1_5", "path5380", "path4821", "path1_4", "fuse_sw", "path1_2", "path10006", "l1"],
  ["n", "path10004", "path10008", "path10008", "path10734", "path10736", "path14656", "path14654", "path10528", "ovenLamp_sw", "path10586", "path11626"]
]

var componentList = [];
var openArray = [];
var meterBlack = [];
var meterRed = [];
var purpleArray = [];
var highlighterSelected = true;
var originalLineSize = .5;
var highlightedWidth = 1.45;

var l1Color = 'rgb(0, 0, 0)';
var neutralColor = 'rgb(0,0,255)';
var energizedLoad = 'rgb(255,165,0)';


var deviceType = "not mobile";
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  deviceType="mobile"
}

xhr = new XMLHttpRequest();
xhr.open("GET","schematic2.svg",false);
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

function modeChange(e){
  var modeSelectValue = document.getElementById("modeSelect").value;
  
  if(modeSelectValue === 'Simulation'){
    componentSelect.style.display = 'none';
    colorPicker.style.display = 'none';
  }
}

var selectionArray = [];
function wireClicked(wire){
  if(highlighterSelected == true){
    nameSplit = wire.id.split("copy");
    wire2 = document.getElementById(nameSplit[0]);
    wire2.style["stroke-width"]= highlightedWidth;
    wire2.style["stroke"]= document.getElementById("colorPicker").value;
    selectedPart = wire2.id;
    console.log('"' + wire2.id + '"')
    selectionArray.push(wire2.id)


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
    
    const redLeadFoundInRedArray = redArray.some(r=> meterRed.includes(r))
    const redLeadFoundInBlueArray = blueArray.some(r=> meterRed.includes(r))
    const blackLeadFoundInRedArray = redArray.some(r=> meterBlack.includes(r))
    const blackLeadFoundInBlueArray = blueArray.some(r=> meterBlack.includes(r))
    if((redLeadFoundInRedArray === true && blackLeadFoundInBlueArray === true) || (redLeadFoundInBlueArray === true && blackLeadFoundInRedArray === true)){
      myText.innerHTML = '120 VAC'
      console.log('120 VAC')
    }else{
      myText.innerHTML = '0 VAC'
      console.log('0 VAC')
    }
    
  }
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
  updateDrawing();
}


var partsList = [];

for(i=0; i<componentList.length; i++){
  myPart = document.getElementById(componentList[i]);
  var myLabel = $(myPart).attr('inkscape:label');
  partsList.push(myLabel);
  var option = document.createElement("option");
  option.value = myPart.id;
  option.text = myLabel;
}




function updateDrawing(){
  // debugger
  purpleArray = [];
  blueArray = [];
  redArray = [];
  allArrays.forEach(function(element){
    // console.log(element)
    element.forEach(function(element2, r){
      var myElement = document.getElementById(element2);
      
      openArray.sort(function(a, b) {
        return element.indexOf(a) - element.indexOf(b);
      });

      tempArray = []
      for(var i=0; i<element.length; i++){
        newElement = element[i].split('_')[1];
        if(newElement == 'load'){
          loadPosition = element.indexOf(element[i]);
        }
        
        if(element.indexOf(openArray[i]) != -1){
          tempArray.push(element.indexOf(openArray[i]));
        }
      }
      
      if(tempArray.length === 0){
        firstBreak = loadPosition
        
      }else{
        firstBreak = tempArray[0];
      }
      lastBreak = tempArray[tempArray.length-1];
      if(lastBreak != undefined){
        tom = element[lastBreak]
      }

      if(r === loadPosition){
        TweenMax.to(myElement, .1, {stroke:'orange', strokeWidth:highlightedWidth});
      }
      if(r < firstBreak ){
        TweenMax.to(myElement, .1, {stroke:neutralColor, strokeWidth:highlightedWidth});
        blueArray.push(element2);
      }
      if(r > firstBreak ){
        TweenMax.to(myElement, .1, {stroke:'red', strokeWidth:highlightedWidth});
        redArray.push(element2);
      }
      if(r > firstBreak && r < lastBreak && openArray.length > 0){
        // if(r > firstBreak && openArray.indexOf(element2) === -1 && r < lastBreak && openArray.length > 0){
        TweenMax.to(myElement, .1, {stroke:'purple', strokeWidth:highlightedWidth});
        purpleArray.push(element2)
      }
      firstBreak = loadPosition;
    });
  });
  for(i=0; i<allArrays.length; i++){
    for(e=0; e<allArrays[i].length; e++){
      var thisOne = document.getElementById(allArrays[i][e]);
      
      if(purpleArray.indexOf(allArrays[i][e]) > -1 && blueArray.some(r=> purpleArray.includes(r)) === true){
        if(openArray.indexOf(allArrays[i][e]) > 0){
        }
         TweenMax.to(thisOne, .1, {stroke:'blue', strokeWidth:highlightedWidth});
      }
    }
  }
  setTimeout(function(){pis_sw.style.stroke = path5237.style.stroke }, 100);

}


updateDrawing()

function setDefaultState(){
  inBlue = false;
  for(i=0; i<allArrays.length; i++){
    for(e=0; e<allArrays[i].length; e++){
      if(blueArray.indexOf(allArrays[i][e]) != -1){
        inBlue = true;
      }
    }
    for(e=0; e<allArrays[i].length; e++){
       pamela = document.getElementById(allArrays[i][e])
      if(inBlue === true && purpleArray.indexOf(allArrays[i][e]) != -1){
        if(openArray.indexOf(allArrays[i][e]) != -1 && purpleArray.indexOf(allArrays[i][e]) != -1){
          break;
        }else{
          console.log(allArrays[i][e])
        console.log(purpleArray.indexOf(allArrays[i][e]))
        console.log(purpleArray)
        TweenMax.to(pamela, .1, {stroke:'blue', strokeWidth:highlightedWidth});
        }
        
      }
      
    }
  }
}

function getArrays(){
  myText.append('var redArray = [')
  for(r=0; r<redArray.length; r++){
    myText.append('"' + redArray[r] +'",')
  }
  myText.append('];')
  

  myText.append('var blueArray = [')
  for(b=0; b<blueArray.length; b++){
    myText.append('"' + blueArray[b] +'",')
  }
  myText.append('];')

  myText.append('var purpleArray = [')
  for(p=0; p<purpleArray.length; p++){
    myText.append('"' + purpleArray[p] +'",')
  }
  myText.append('];')
}
