xhr = new XMLHttpRequest();
xhr.open("GET","schematic.svg",false);
xhr.overrideMimeType("image/svg+xml");
xhr.send("");
var schematic = document.getElementById("showWindow").appendChild(xhr.responseXML.documentElement);
schematic.classList.add("center");
zoomSlider.value=0;

var noPaths = document.getElementById("diagram1").getElementsByTagName("path");
var noPathsLength = noPaths.length;
for(i=0; i<noPathsLength; i++){
	var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	path.setAttribute('stroke','blue');
	path.setAttribute('fill','none');
	path.setAttribute('opacity',0);
	path.setAttribute('id',noPaths[i].id + 'copy');
	path.setAttribute('onclick','wireClicked(this);');
	path.setAttribute('onmouseover','this.style.cursor = "default"; overWire(this);');
	path.setAttribute('onmouseout','outWire(this);');
	path.style['stroke-width']=1;
	path.style['stroke-linecap']="round";
	noPaths[i].style['stroke-linecap']="round";
	path.setAttribute("d", noPaths[i].getAttribute("d"));
	diagram1.appendChild(path);
	path.style["stroke-width"]= 3;
	path.setAttribute('touchmove','wireClicked(this);');	
}

var schematicDrag = Draggable.create(schematic, {zIndexBoost:false});
schematic.addEventListener("DOMMouseScroll", function(e){zoomSchematic(e)}, false);

var scaleUp = 1;
function zoomSchematic(e){
	e.preventDefault();
	switch(e.detail>0) {
		case true:
		if(scaleUp > .5 ){
			scaleUp = scaleUp - .25;
			TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
		}
		break;
		case false:
		scaleUp = scaleUp + .25;
    	TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
        break;
    }
}

zoomSlider.addEventListener("input", update);
function update(){
	TweenMax.set(schematic, {scaleX:zoomSlider.value, scaleY:zoomSlider.value, transformOrigin: "50% 50%", ease: Power0.easeNone});
}

function wireClicked(wire){
	nameSplit = wire.id.split("copy");
	wire2 = document.getElementById(nameSplit[0]);
	TweenMax.to(wire2,.1,{stroke:highlightColor});
}

function overWire(wire){
	nameSplit = wire.id.split("copy");
	wire.setAttribute("opacity", ".5"); 
}

function outWire(wire){
nameSplit = wire.id.split("copy");
	wire.setAttribute("opacity", "0");
}

var highlightColor=black;
function changeColors(myColor){
	redBox.style.border = "none";
	blueBox.style.border = "none";
	orangeBox.style.border = "none";
	yellowBox.style.border = "none";
	purpleBox.style.border = "none";
	greenBox.style.border = "none";
	greyBox.style.border = "none";
	blackBox.style.border = "none";
	brownBox.style.border = "none";
	highlightColor=myColor;
	switch(myColor) {
    case "red":
    redBox.style.border = "medium solid #000000";
    break;
    case "blue":
    blueBox.style.border = "medium solid #000000";
    break;
    case "orange":
    orangeBox.style.border = "medium solid #000000";
    break;
    case "yellow":
    yellowBox.style.border = "medium solid #000000";
    break;
    case "purple":
    purpleBox.style.border = "medium solid #000000";
    break;
    case "green":
    greenBox.style.border = "medium solid #000000";
    break;
    case "grey":
    greyBox.style.border = "medium solid #000000";
    highlightColor="#f2f4f4";
    break;
    case "brown":
    brownBox.style.border = "medium solid #000000";
    highlightColor=brown;
    break;
    case "black":
    blackBox.style.border = "medium solid #000000";
    break;
	}
}

TweenMax.set(schematic, {y:-300});

// -----------------------------------------------------------------------------------------------------------------------------

var uk908otated=false;
uk908.setAttribute('onclick','changeuk908();');
uk908.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeuk908(){
	if(uk908otated === false){
		TweenMax.to(path2617,1,{rotation:43, transformOrigin: "0% 100%"});
		TweenMax.to(path2617copy,1,{rotation:43, transformOrigin: "0% 100%"});
		uk908otated=true;
	}else{
		TweenMax.to(path2617,1,{rotation:0})
		TweenMax.to(path2617copy,1,{rotation:0})
		uk908otated=false;
	}
}

var uk901rotated=false;
uk901.setAttribute('onclick','changeuk901();');
uk901.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeuk901(){
	if(uk901rotated === false){
		TweenMax.to(path2433,1,{rotation:-20, transformOrigin: "0% 100%"});
		TweenMax.to(path2433copy,1,{rotation:-20, transformOrigin: "0% 100%"});
		uk901rotated=true;
	}else{
		TweenMax.to(path2433,1,{rotation:0})
		TweenMax.to(path2433copy,1,{rotation:0})
		uk901rotated=false;
	}
}

var uk909rotated=false;
uk909.setAttribute('onclick','changeuk909();');
uk909.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeuk909(){
	if(uk909rotated === false){
		TweenMax.to(path2619,1,{rotation:43, transformOrigin: "0% 100%"});
		TweenMax.to(path2619copy,1,{rotation:43, transformOrigin: "0% 100%"});
		uk909rotated=true;
	}else{
		TweenMax.to(path2619,1,{rotation:0})
		TweenMax.to(path2619copy,1,{rotation:0})
		uk909rotated=false;
	}
}

var uk910rotated=false;
uk910.setAttribute('onclick','changeuk910();');
uk910.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeuk910(){
	if(uk910rotated === false){
		TweenMax.to(path2621,1,{rotation:43, transformOrigin: "0% 100%"});
		TweenMax.to(path2621copy,1,{rotation:43, transformOrigin: "0% 100%"});
		uk910rotated=true;
	}else{
		TweenMax.to(path2621,1,{rotation:0})
		TweenMax.to(path2621copy,1,{rotation:0})
		uk910rotated=false;
	}
}

var uk915rotated=false;
uk915.setAttribute('onclick','changeuk915();');
uk915.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeuk915(){
	if(uk915rotated === false){
		TweenMax.to(path2395,1,{rotation:-43, transformOrigin: "0% 0%"});
		TweenMax.to(path2395copy,1,{rotation:-43, transformOrigin: "0% 0%"});
		uk915rotated=true;
	}else{
		TweenMax.to(path2395,1,{rotation:0})
		TweenMax.to(path2395copy,1,{rotation:0})
		uk915rotated=false;
	}
}

var uHighLimitrotated=false;
uHighLimit.setAttribute('onclick','changeuHighLimit();');
uHighLimit.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeuHighLimit(){
	if(uHighLimitrotated === false){
		TweenMax.to(path3411,1,{rotation:35, transformOrigin: "0% 0%"});
		TweenMax.to(path3411copy,1,{rotation:35, transformOrigin: "0% 0%"});
		uHighLimitrotated=true;
	}else{
		TweenMax.to(path3411,1,{rotation:0})
		TweenMax.to(path3411copy,1,{rotation:0})
		uHighLimitrotated=false;
	}
}

var lHighLimitrotated=false;
lHighLimit.setAttribute('onclick','changelHighLimit();');
lHighLimit.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changelHighLimit(){
	if(lHighLimitrotated === false){
		TweenMax.to(path3413,1,{rotation:35, transformOrigin: "0% 0%"});
		TweenMax.to(path3413copy,1,{rotation:35, transformOrigin: "0% 0%"});
		lHighLimitrotated=true;
	}else{
		TweenMax.to(path3413,1,{rotation:0})
		TweenMax.to(path3413copy,1,{rotation:0})
		lHighLimitrotated=false;
	}
}

var uHighLimit2rotated=false;
uHighLimit2.setAttribute('onclick','changeuHighLimit2();');
uHighLimit2.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeuHighLimit2(){
	if(uHighLimit2rotated === false){
		TweenMax.to(path31263,1,{rotation:-20, transformOrigin: "0% 0%"});
		TweenMax.to(path31263copy,1,{rotation:-20, transformOrigin: "0% 0%"});
		uHighLimit2rotated=true;
	}else{
		TweenMax.to(path31263,1,{rotation:0})
		TweenMax.to(path31263copy,1,{rotation:0})
		uHighLimit2rotated=false;
	}
}

var uk905rotated=false;
uk905.setAttribute('onclick','changeuk905();');
uk905.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeuk905(){
	if(uk905rotated === false){
		TweenMax.to(path2397,1,{rotation:-20, transformOrigin: "0% 100%"});
		TweenMax.to(path2397copy,1,{rotation:-20, transformOrigin: "0% 100%"});
		uk905rotated=true;
	}else{
		TweenMax.to(path2397,1,{rotation:0})
		TweenMax.to(path2397copy,1,{rotation:0})
		uk905rotated=false;
	}
}

var uk904rotated=false;
uk904.setAttribute('onclick','changeuk904();');
uk904.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeuk904(){
	if(uk904rotated === false){
		TweenMax.to(path31261,1,{rotation:-18, transformOrigin: "0% 0%"});
		TweenMax.to(path31261copy,1,{rotation:-18, transformOrigin: "0% 0%"});
		uk904rotated=true;
	}else{
		TweenMax.to(path31261,1,{rotation:0})
		TweenMax.to(path31261copy,1,{rotation:0})
		uk904rotated=false;
	}
}

var uk916rotated=false;
uk916.setAttribute('onclick','changeuk916();');
uk916.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeuk916(){
	if(uk916rotated === false){
		TweenMax.to(path30755,1,{rotation:43, transformOrigin: "0% 100%"});
		TweenMax.to(path30755copy,1,{rotation:43, transformOrigin: "0% 100%"});
		uk916rotated=true;
	}else{
		TweenMax.to(path30755,1,{rotation:0})
		TweenMax.to(path30755copy,1,{rotation:0})
		uk916rotated=false;
	}
}

var uk903rotated=false;
uk903.setAttribute('onclick','changeuk903();');
uk903.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeuk903(){
	if(uk903rotated === false){
		TweenMax.to(path30789,1,{rotation:43, transformOrigin: "0% 100%"});
		TweenMax.to(path30789copy,1,{rotation:43, transformOrigin: "0% 100%"});
		uk903rotated=true;
	}else{
		TweenMax.to(path30789,1,{rotation:0})
		TweenMax.to(path30789copy,1,{rotation:0})
		uk903rotated=false;
	}
}

var lk908rotated=false;
lk908.setAttribute('onclick','changelk908();');
lk908.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changelk908(){
	if(lk908rotated === false){
		TweenMax.to(path31235,1,{rotation:43, transformOrigin: "0% 100%"});
		TweenMax.to(path31235copy,1,{rotation:43, transformOrigin: "0% 100%"});
		lk908rotated=true;
	}else{
		TweenMax.to(path31235,1,{rotation:0})
		TweenMax.to(path31235copy,1,{rotation:0})
		lk908rotated=false;
	}
}

var lk909rotated=false;
lk909.setAttribute('onclick','changelk909();');
lk909.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changelk909(){
	if(lk909rotated === false){
		TweenMax.to(path31237,1,{rotation:43, transformOrigin: "0% 100%"});
		TweenMax.to(path31237copy,1,{rotation:43, transformOrigin: "0% 100%"});
		lk909rotated=true;
	}else{
		TweenMax.to(path31237,1,{rotation:0})
		TweenMax.to(path31237copy,1,{rotation:0})
		lk909rotated=false;
	}
}

var lk910rotated=false;
lk910.setAttribute('onclick','changelk910();');
lk910.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changelk910(){
	if(lk910rotated === false){
		TweenMax.to(path31249,1,{rotation:43, transformOrigin: "0% 100%"});
		TweenMax.to(path31249copy,1,{rotation:43, transformOrigin: "0% 100%"});
		lk910rotated=true;
	}else{
		TweenMax.to(path31249,1,{rotation:0})
		TweenMax.to(path31249copy,1,{rotation:0})
		lk910rotated=false;
	}
}

var lhighLimitrotated=false;
lhighLimit.setAttribute('onclick','changelhighLimit();');
lhighLimit.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changelhighLimit(){
	if(lhighLimitrotated === false){
		TweenMax.to(path30775,1,{rotation:35, transformOrigin: "0% 0%"});
		TweenMax.to(path30775copy,1,{rotation:35, transformOrigin: "0% 0%"});
		lhighLimitrotated=true;
	}else{
		TweenMax.to(path30775,1,{rotation:0})
		TweenMax.to(path30775copy,1,{rotation:0})
		lhighLimitrotated=false;
	}
}

var lk915rotated=false;
lk915.setAttribute('onclick','changelk915();');
lk915.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changelk915(){
	if(lk915rotated === false){
		TweenMax.to(path30723,1,{rotation:-43, transformOrigin: "0% 0%"});
		TweenMax.to(path30723copy,1,{rotation:-43, transformOrigin: "0% 0%"});
		lk915rotated=true;
	}else{
		TweenMax.to(path30723,1,{rotation:0})
		TweenMax.to(path30723copy,1,{rotation:0})
		lk915rotated=false;
	}
}

var lk901rotated=false;
lk901.setAttribute('onclick','changelk901();');
lk901.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changelk901(){
	if(lk901rotated === false){
		TweenMax.to(path30725,1,{rotation:-20, transformOrigin: "0% 100%"});
		TweenMax.to(path30725copy,1,{rotation:-20, transformOrigin: "0% 100%"});
		lk901rotated=true;
	}else{
		TweenMax.to(path30725,1,{rotation:0})
		TweenMax.to(path30725copy,1,{rotation:0})
		lk901rotated=false;
	}
}

var lk905rotated=false;
lk905.setAttribute('onclick','changelk905();');
lk905.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changelk905(){
	if(lk905rotated === false){
		TweenMax.to(path30677,1,{rotation:-20, transformOrigin: "0% 100%"});
		TweenMax.to(path30677copy,1,{rotation:-20, transformOrigin: "0% 100%"});
		lk905rotated=true;
	}else{
		TweenMax.to(path30677,1,{rotation:0})
		TweenMax.to(path30677copy,1,{rotation:0})
		lk905rotated=false;
	}
}

var lk904rotated=false;
lk904.setAttribute('onclick','changelk904();');
lk904.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changelk904(){
	if(lk904rotated === false){
		TweenMax.to(path2633,1,{rotation:-20, transformOrigin: "0% 100%"});
		TweenMax.to(path2633copy,1,{rotation:-20, transformOrigin: "0% 100%"});
		lk904rotated=true;
	}else{
		TweenMax.to(path2633,1,{rotation:0})
		TweenMax.to(path2633copy,1,{rotation:0})
		lk904rotated=false;
	}
}

var lk916rotated=false;
lk916.setAttribute('onclick','changelk916();');
lk916.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changelk916(){
	if(lk916rotated === false){
		TweenMax.to(path2411,1,{rotation:43, transformOrigin: "0% 100%"});
		TweenMax.to(path2411copy,1,{rotation:43, transformOrigin: "0% 100%"});
		lk916rotated=true;
	}else{
		TweenMax.to(path2411,1,{rotation:0})
		TweenMax.to(path2411copy,1,{rotation:0})
		lk916rotated=false;
	}
}

var lk903rotated=false;
lk903.setAttribute('onclick','changelk903();');
lk903.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changelk903(){
	if(lk903rotated === false){
		TweenMax.to(path2443,1,{rotation:43, transformOrigin: "0% 100%"});
		TweenMax.to(path2443copy,1,{rotation:43, transformOrigin: "0% 100%"});
		lk903rotated=true;
	}else{
		TweenMax.to(path2443,1,{rotation:0})
		TweenMax.to(path2443copy,1,{rotation:0})
		lk903rotated=false;
	}
}