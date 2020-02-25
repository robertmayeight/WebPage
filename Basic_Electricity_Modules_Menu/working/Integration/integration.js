

function createGlobals(array){
      array.forEach(function(child){
        if (window[child.name] !== undefined){
          console.error("A global variable with the name " + child.name + " already exists.")
        }
      window[child.name] = scene.getObjectByName(child.name)
      if (child.children){
        createGlobals(child.children); 
      }
    });
}

var slideTl = gsap.timeline({paused:true});

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
    // slideTl.add(TweenMax.to(path6168copy, compensation, {autoAlpha: 0}));
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
  createGlobals(gltf.scene.children)
  init();
}


//RENDER LOOP
render();

function render() {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function init() {
  var completeBatteryMaterial = [batteryTop.material,dividerPlate.material, positiveCells.material, negativeCells.material, positiveTerminal.material, negativeTerminal.material,batteryBody.material]
  //Timeline
  slideTl
  // .to(headingText, 1, {autoAlpha:0})
  //Show rotate and scale battery.
//   .from(completeBatteryMaterial, 1, {opacity:0,delay:0})
//   .to(carBattery.rotation, {duration: 5, y: Math.PI * 2, ease: "none"})
//   .to(carBattery.scale, {duration: 2, x: 2, y: 2, z: 2, ease: "none"})

// //Hide battery body and show electron
//   .to(batteryBody.material, 1, {opacity:.5,delay:0})
//   .to(electron.position, {duration: 20, x: -200, ease: "none"})







  // .to(batteryTop.material.color, .5, { r: 1, g: 1, b: 0, delay:7.5})

  // .to(carBattery, 1, {rotationY: Math.PI * 2, ease: "none"});
  // .to(carBattery.rotation, {duration: 10, y: Math.PI * 2, repeat: -1, ease: "none"});
  
  // .to([carBattery], 8, {three:{rotationY:360, ease: " none", repeat:-1},delay:1})
  // .to(batteryBody.material, 1, {opacity:0,delay:1})
  // .to([carBattery], 2, {three:{rotationX:360}})
  // .to([carBattery], 2, {three:{rotationY:360}})
  // .to([carBattery], 2, {three:{rotationZ:360}})
  // .from(batteryTop.material.color, .5, { r: 1, g: 1, b: 1, delay:0})
  

}

