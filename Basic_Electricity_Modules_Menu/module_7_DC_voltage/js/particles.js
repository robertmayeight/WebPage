var camera, scene, renderer, cubeMesh, clock, deltaTime, particleSystem;
var loader = new THREE.GLTFLoader();

init();

function init() {
	loader.load('battery.glb', handle_load);
	function handle_load(gltf) {
  		blenderMesh = gltf.scene;
  		scene.add( blenderMesh );
  		blenderMesh.position.z = -20;
  		createGlobals(gltf.scene.children)
  		initPresentation();
	}
	//Clock for animation.
	clock = new THREE.Clock(true);
	
	//Create scene.
    scene = new THREE.Scene();

    //Create and set up camera.
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.z = 400;
	camera.position.x = 0;
	camera.position.y = 1;
    
    //LIGHTS
	let hemiLight = new THREE.HemisphereLight(0xff0000, 0x0000ff, 0.61);
	hemiLight.position.set(0, 50, 0);
	var light = new THREE.AmbientLight(0xffffff, 0.5);
	scene.add(light);
	var light2 = new THREE.PointLight(0xffffff, 0.5);
	scene.add(light2);

    //Add cube1
    var cube1Geo = new THREE.CubeGeometry( 10, 10, 10);  
    var cube1Mat = new THREE.MeshPhongMaterial( { color: 0x0033ff, specular: 0x555555, shininess: 30 } );
    cubeMesh = new THREE.Mesh(cube1Geo, cube1Mat);
    cubeMesh.position.z = -30;
    // scene.add( cubeMesh );


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Add sphere1.
    var geometry = new THREE.SphereGeometry(100, 8, 20)
    // mesh = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());

    // vertex colors
	var colors = [];
	for( var i = 0; i < geometry.vertices.length; i++ ) {
		colors[i] = new THREE.Color();
	    colors[i].setHSL( Math.random(), 1.0, 0.5 );
	}
	geometry.colors = colors;
	material = new THREE.PointsMaterial( {
	    size: 10,
	    transparent: true,
	    opacity: 0.7,
	    vertexColors: THREE.VertexColors
	} );

	// point cloud
	mesh = new THREE.Points( geometry, material );

    scene.add(mesh)

  var geometry2 = new THREE.Geometry();
  geometry2.colors = colors;
  var vertices = mesh.geometry.vertices;
  vertices.forEach(function (p){
  	var particle = new THREE.Vector3(p.x, p.y, p.z);
  	particle.vy = .05 + Math.random * .5;
  	geometry2.vertices.push(particle);

  });

  mesh2 = new THREE.Points( geometry2, material );
  mesh2.sortParticles = true;
  scene.add(mesh2)


    //RENDERER
	renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
	renderer.setClearColor(0x000000);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor( 0x000000, 0 );
	document.body.appendChild( renderer.domElement );
    window.addEventListener( 'resize', onWindowResize, false );
        
    render();
}


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    render();
}



function initPresentation(){
	function animate() {
		requestAnimationFrame( animate );
		// mesh.rotation.x += .0015;
		mesh.rotation.y += .005
		deltaTime = clock.getDelta();
	
		vertices = mesh2.geometry.vertices;
		vertices.forEach(function(v){
			v.y -= v.vy;
		})
	
    	// cubeMesh.rotation.x += 1 * deltaTime;
    	// cubeMesh.rotation.y += 2 * deltaTime;
  	
    	// animateParticles();
    	
    	render();
    
	}

	animate();
	
	mainTL = gsap.timeline({paused:false});
	mainTL
	.to(batteryBodyFront.position, {duration: .5, x: -5, ease: "none"})
	.to(batteryBodyFront.material, 2, {opacity:0,delay:0})
}

controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', render);
    controls.enableZoom = true;

function render() {
    renderer.render( scene, camera );
}


//Assigns variable names to all 3d meshes.
function createGlobals(array){
      array.forEach(function(child){
        if (window[child.name] !== undefined){
          console.error("A global variable with the name " + child.name + " already exists.")
        }
      window[child.name] = scene.getObjectByName(child.name)
      if (child.children){
      	createGlobals(child.children);
      	if ( child instanceof THREE.Mesh ){
      		child.material.alphaTest = .01;
      		child.transparent = true;
      	}
      }
  });
}




















































function animateParticles() {
	var verts = particleSystem.geometry.vertices;
	for(var i = 0; i < verts.length; i++) {
		var vert = verts[i];
		if (vert.y < -200) {
			vert.y = Math.random() * 400 - 200;
		}
		vert.x = vert.x - (10 * deltaTime);
	}
	particleSystem.geometry.verticesNeedUpdate = true;
	
	// particleSystem.rotation.y -= .1 * deltaTime;
}


















//Create particle system.
//     particleSystem = createParticleSystem();
//     scene.add(particleSystem);

// function createParticleSystem() {
//     var particleCount = 20000;
//     var particles = new THREE.Geometry();
// 	for (var p = 0; p < particleCount; p++) {
// 		var x = Math.random() * 400 - 200;
// 		var y = Math.random() * 400 - 200;
// 		var z = Math.random() * 400 - 200
// 		var particle = new THREE.Vector3(x, y, z);
// 		particles.vertices.push(particle);
// 	}

// 	// Create the material that will be used to render each vertex of the geometry

// 	const m1 = new THREE.MeshBasicMaterial({color: 0xFF0000});
// 	var particleMaterial = new THREE.PointsMaterial(
// 			{color: 0xffffff, 
// 			 size: 4,
// 			 map: THREE.ImageUtils.loadTexture("particle.png"),
// 			 blending: THREE.AdditiveBlending,
// 			 transparent: true,
// 			});
	 
// 	// Create the particle system
// 	particleSystem = new THREE.Points(particles, particleMaterial);

// 	return particleSystem;	
// }
