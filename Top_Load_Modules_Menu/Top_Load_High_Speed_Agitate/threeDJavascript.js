var slideTl = new TimelineMax({paused:true});

//Audio
var slideAudio = document.getElementById('music');
slideAudio.src="topLoadHighSpeedAgitate.mp3"

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
//End Audio

var au = document.getElementById("music");
au.onloadedmetadata = function() {
    compensation = music.duration - slideTl.duration();
    slideTl.add(TweenMax.to(path6168copy, compensation, {autoAlpha: 0}));
    console.log(music.duration - slideTl.duration())
};

var renderer,
  scene,
  camera,
  myCanvas = document.getElementById('myCanvas');
  scene = new THREE.Scene();

//RENDERER
renderer = new THREE.WebGLRenderer({
  canvas: myCanvas, 
  antialias: true,
  alpha: true
});
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor( 0x000000, 0 );

//CAMERA
camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 50;
camera.position.x = 0;
camera.position.y = 1;

//LIGHTS
let hemiLight = new THREE.HemisphereLight(0xff0000, 0x0000ff, 0.61);
hemiLight.position.set(0, 50, 0);
var light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);
var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);



//Loader
var loader = new THREE.GLTFLoader();
loader.load('highSpeedAgitateAni1.glb', handle_load);
var mesh;
function handle_load(gltf) {
  mesh = gltf.scene;
  scene.add( mesh );
  mesh.position.z = -20;
  init();
}


//RENDER LOOP
render();

function render() {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}




function init() {
  //Controls
controls = new THREE.OrbitControls(camera, renderer.domElement)
  var gearTeeth = scene.getObjectByName("gearTeeth");
  gearTeeth.material.transparent = true;
  // gearTeeth.material.depthWrite = false;

  var shifterTeeth = scene.getObjectByName("shifterTeeth");
  shifterTeeth.material.transparent = true;
  // shifterTeeth.material.depthWrite = false;

  var beltPulley = scene.getObjectByName("beltPulley");
  var modeShifterMagnet = scene.getObjectByName("modeShifterMagnet");
  var shifterTeeth = scene.getObjectByName("shifterTeeth");
  var magnet = scene.getObjectByName("magnet");
  var innerTube = scene.getObjectByName("innerTube");
  var outerTube = scene.getObjectByName("outerTube");
  var Camera = scene.getObjectByName("Camera");
  var agitator = scene.getObjectByName("agitator");
  var basket = scene.getObjectByName("basket");
  function showObject(object){
    object.traverse ( function (child) {
    if (child instanceof THREE.Mesh) {
      setTimeout(function() {child.visible = true;}, 300);
        
    }
  });
  }

  function hideObject(object){
    object.traverse ( function (child) {
    if (child instanceof THREE.Mesh) {
        setTimeout(function() {child.visible = false;}, 300);
    }
  });
  }
  hideObject(agitator);
  hideObject(basket);

//Timeline
  
slideTl
.to([pressureSensor_sw], .5, {rotation:0, transformOrigin: "0% 100%", ease:Power0.easeNone})
.to(fillWater, 0, {scaleY:0, transformOrigin: "0% 100%",immediateRender:true, delay:0})
.to(fillWater, 5, {scaleY:1, transformOrigin: "0% 100%", delay:1})
.to([pressureSensor_sw, pressureSensor_swcopy], .5, {rotation:0, transformOrigin: "0% 100%", ease:Power0.easeNone})
.to([path6076copy,path4548copy,path6116copy,path11093copy,path11095copy,path4568copy,path4528copy,path1456copy,path6136copy,path6096copy,path6196copy,path4508copy,path6216copy,path6156copy,path30883copy,hotValve,coldValve,slowColdValve], 0, {stroke:'black', autoAlpha:0})
.to(waterInTub_drag, 1, {autoAlpha:0, delay:1})
.to(path2546copy, 0, {autoAlpha:1, stroke:l1Color})
.staggerFromTo([path2546copy], 2, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:-1})


//Speed Select Switch
.to(speedSelectSwitch_co, 0, {stroke:'red'})
.staggerFromTo([speedSelectSwitch_co], 1, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})

.to([path6448,speedSelectSwitch_sw,path6456,path6452], 1, {stroke:'red', autoAlpha:1, delay:-1})

.to([path6448,speedSelectSwitch_sw,path6456,path6452], 1, {stroke:l1Color, delay:1})
.to(speedSelectSwitch_co, 1, {autoAlpha:0, delay:-1})


//Speed Select Switch to Motor
.to([speedSelectSwitch_swcopy,path5854copy], 0, {stroke:l1Color, autoAlpha:1})
.to([speedSelectSwitch_sw, speedSelectSwitch_swcopy], .5, {rotation:33, transformOrigin: "0% 100%", ease:Power0.easeNone})
.staggerFromTo([speedSelectSwitch_swcopy], .75, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:.5})

.staggerFromTo([path5854copy], 5, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:1})


//High Speed Selected
.to([speedSelectSwitch_sw, speedSelectSwitch_swcopy], .5, {rotation:0, transformOrigin: "0% 100%", ease:Power0.easeNone, delay:5.5})
.to([path5854copy], 0, {autoAlpha:0, delay:-.4})
.to([path5552copy], 0, {stroke:l1Color, autoAlpha:1})
.staggerFromTo([path5552copy], 5, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:1})

//Agitation Control Switch

.to(agitationControlSwitch_co, 0, {stroke:'red', delay:4})
.staggerFromTo([agitationControlSwitch_co], 1, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.to([path6484,agitationControlSwitch_sw,path6488,path6504], 1, {stroke:'red', autoAlpha:1, delay:-1})



.to([path2625copy,path2623copy], 0, {stroke:l1Color, autoAlpha:1, delay:1})
.staggerFromTo([path2625copy], 1.5, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.staggerFromTo([path2623copy], 1, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})

.to([path6484,agitationControlSwitch_sw,path6488,path6504], 1, {stroke:l1Color, delay:3.5})
.to([agitationControlSwitch_co], 1, {autoAlpha:0, delay:-1})


//Close Agitation Control Switch
.to([agitationControlSwitch_swcopy,path2627copy], 0, {stroke:l1Color, autoAlpha:1, delay:3})
.staggerFromTo([agitationControlSwitch_swcopy], 1, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.staggerFromTo([path2627copy], 3, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:2})
.to(modeShiftercopy, 1, {stroke:'red', autoAlpha:1, delay:3})
.from(driveSystem_drag, 1, {autoAlpha:0, delay:-1})
.staggerFromTo([modeShifterTrace], 3, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.to([driveSystem_drag,modeShiftercopy,modeShifterTrace], 1, {autoAlpha:0,delay:2})



//L1 Supply to Motor
.to([path2629copy, path2634copy,path2636copy], 0, {stroke:l1Color, autoAlpha:1, delay:0})
.staggerFromTo([path2629copy], 1, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.staggerFromTo([path2634copy], 3, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.staggerFromTo([path2636copy], 3, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})

//Neutral to Motor
.to([path30889copy,path30883copy,path4670copy,path171708copy,path6748copy,path5046copy], 0, {stroke:neutralColor, autoAlpha:1, delay:1.5})
.staggerFromTo([path30889copy,path30883copy], 0, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.staggerFromTo([path4670copy], 3, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
.staggerFromTo([path171708copy], .3, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
.staggerFromTo([path6748copy], .1, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
.staggerFromTo([path5046copy], 1, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:2})


//Move Fuse Away
.to([fuseBlank, fuseBlankcopy], 1, {autoAlpha:1, delay:-1})
.to([path6748, path6748copy], 2, {x:-70, y: 35, delay:2})

.to([path6748, path6748copy], 2, {x:0, y: 0, delay:2})
.to([fuseBlank, fuseBlankcopy], 1, {autoAlpha:0, delay:0})


//Lid Switch to Motor
.to([path2632copy,lidSwitch_swcopy,path2648copy,path5504copy,path5484copy], 0, {stroke:l1Color, autoAlpha:1, delay:2.5})
.staggerFromTo([path2632copy], 1, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.staggerFromTo([lidSwitch_swcopy], .3, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.staggerFromTo([path2648copy], 2, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:2})

//Belt
.to(driveSystem_drag, 1, {autoAlpha:1, delay:11})

.staggerFromTo([belt], 1, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.to(driveSystem_drag, 1, {autoAlpha:0, delay:2})

.from(myCanvas, 1, {autoAlpha:0})
.to(svgContent, 1, {autoAlpha:0, delay:-1})

.to(innerTube.material.color, .5, { r: 1, g: 0, b: 0, delay:7.5})
.to(innerTube.material.color, .5, { r: .504, g: .504, b: .504, delay:1})

.to(outerTube.material.color, .5, { r: 1, g: 0, b: 0, delay:0})
.to(outerTube.material.color, .5, { r: .504, g: .504, b: .504, delay:1})

//Show Agitator
.to(innerTube.material.color, .5, { r: 1, g: 0, b: 0, delay:.5})
.to(innerTube.material.color, .1, { r: 1, g: 0, b: 0, onComplete:hideObject, onCompleteParams:[agitator]})
.to(innerTube.material.color, .1, { r: 1, g: 0, b: 0, onComplete:showObject, onCompleteParams:[agitator]})
.from([agitator.material], 1, {opacity:0,delay:0})



.from([gearTeeth.material, beltPulley.material], 1, {opacity:0,delay:0})
.from([gearTeeth.position, beltPulley.position], 1, {y:-50,delay:0})
.to(innerTube.material.color, .5, { r: .504, g: .504, b: .504, delay:0})
.to([agitator.material], 1, {opacity:0, onStart:hideObject, onStartParams:[agitator],delay:2})

//Show Basket
.to(innerTube.material.color, .1, { r: 1, g: 0, b: 0, onComplete:hideObject, onCompleteParams:[basket]})
.to(innerTube.material.color, .1, { r: 1, g: 0, b: 0, onComplete:showObject, onCompleteParams:[basket]})
.from([basket.material], 1, {opacity:0,delay:0})

//Hide Basket
.to(innerTube.material.color, .1, { r: 1, g: 0, b: 0, onComplete:hideObject, onCompleteParams:[basket], delay:2})


.to(camera.position, 2, {z:-2, y:-10, delay:.5})
.to(magnet.material.color, .5, { r: 1, g: 0, b: 0, delay:0})


// .to([magnet.material], 1, {opacity:0,delay:0})
.to([magnet.material], 1, {opacity:0,delay:3})
// .to([magnet], .1, {three:{opacity:0}})
// .to(magnet.position, 1, {y:'+=1'})
.to(shifterTeeth.material.color, .5, { r: 1, g: 0, b: 0, delay:1})
.to([shifterTeeth.position], .5, {y:'+=.5',delay:1})
.to(shifterTeeth.material.color, .5, { r: .504, g: .504, b: .504,delay:1})
.to(gearTeeth.material.color, .5, { r: 1, g: 0, b: 0})

//Change Views
.to(myCanvas, 1, {autoAlpha:0, delay:2})
.to(svgContent, 1, {autoAlpha:1, delay:-1})

.staggerFromTo([path5504copy], 1, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:.5})
.staggerFromTo([path5484copy], 1, {drawSVG:'0% 0%'}, {drawSVG: '100% 0%', ease: Power0.easeNone,delay:0})
.to(modeShiftercopy, 1, {stroke:'red', autoAlpha:1, delay:0})
.to(gearTeeth.material.color, .1, {r: .504, g: .504, b: .504})
.to(shifterTeeth.material.color, .1, { r: 1, g: 0, b: 0, delay:0})
.to(myCanvas, 1, {autoAlpha:1, delay:1.5})
.to(svgContent, 1, {autoAlpha:0, delay:-1})


//Rotate Motor
.to([beltPulley,gearTeeth], .5, {three:{rotationY:10},ease: " power3. inOut", y: -500, delay:0})
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:10},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:10},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:10},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })

//Rotate Motor
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500, delay:0})
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })

.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500, delay:0})
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })

.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500, delay:0})
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })

.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500, delay:0})
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })

.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500, delay:0})
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })

.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500, delay:0})
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })

.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500, delay:0})
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })

.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500, delay:0})
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })

.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500, delay:0})
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })

.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500, delay:0})
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })

.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500, delay:0})
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })

.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500, delay:0})
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:400},ease: " power3. inOut", y: -500 })
.to([beltPulley,gearTeeth], .5, {three:{rotationY:0},ease: " power3. inOut", y: -500 })







 // .to([beltPulley,gearTeeth], 3, {three:{rotationY:360},ease: " power3. inOut", y: -500 })
}


 // .to(camera.rotation, 3, {y:Math.PI, delay:0})
 // .to(magnet, 1, {three:{scaleX:2, scaleY:2}})
 // .to(gearTeeth.material.color, 2, { r: 0, g: 0, b: 0})

// .to([shifterTeeth], .1, {three:{rotationY:3}})
  // .to([beltPulley.rotation, gearTeeth.rotation, shifterTeeth.rotation], 1, {y:-Math.PI/4, delay:0, repeat:0, ease:Power0.easeNone})
  // .to([beltPulley.rotation, gearTeeth.rotation, shifterTeeth.rotation], 1, {y:Math.PI/4, delay:0, repeat:0, ease:Power0.easeNone})
  // .to([beltPulley.rotation, gearTeeth.rotation, shifterTeeth.rotation], 1, {y:-Math.PI/4, delay:0, repeat:0, ease:Power0.easeNone})
  // .to([beltPulley.rotation, gearTeeth.rotation, shifterTeeth.rotation], 1, {y:Math.PI/4, delay:0, repeat:0, ease:Power0.easeNone})
  // .to([beltPulley.rotation, gearTeeth.rotation, shifterTeeth.rotation], 1, {y:-Math.PI/4, delay:0, repeat:0, ease:Power0.easeNone})
  // .to([beltPulley.rotation, gearTeeth.rotation, shifterTeeth.rotation], 1, {y:Math.PI/4, delay:0, repeat:0, ease:Power0.easeNone})
  // .to([beltPulley.rotation, gearTeeth.rotation, shifterTeeth.rotation], 1, {y:-Math.PI/4, delay:0, repeat:0, ease:Power0.easeNone})
  // .to(shifterTeeth.rotation, 1, {y:Math.PI/4, delay:0, repeat:0, ease:Power0.easeNone, delay:-1})
  // .to(gearTeeth.material, 1, {opacity:0,delay:2})
  // .to(gearTeeth.position, 1, {x:200,delay:0})

  // .to(camera.position, 3, {z:15,delay:2})
  // .to(camera.rotation, 3, {z:.15, delay:-3})
  // .to(gearTeeth.material, 1, {opacity:0})
  // .to(gearTeeth.position, .1, {x:3, delay:0})
