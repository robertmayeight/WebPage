var planeEmitterGeo = new THREE.PlaneGeometry( 10, 9, 50, 50 );

var sprite = new THREE.TextureLoader().load( 'img/electron.png' );
planeEmitterMat = new THREE.PointsMaterial( { size: 10, sizeAttenuation: false, map: sprite, alphaTest: 0.5, transparent: false } );
planeEmitterMat.color.setHSL( 1.0, 0.3, 0.7 );

planeEmitter = new THREE.Points( planeEmitterGeo, planeEmitterMat );
scene.add(planeEmitter)
planeEmitter.sortParticles = true;
var planeEmitterVerts = planeEmitterGeo.vertices;
planeEmitterVerts.forEach(function (p){
  particle = new THREE.Vector3(p.x, p.y, p.z);
  particle.vx = .05 + Math.random() * .5;
  planeEmitter.geometry.vertices.push(particle);
});

planeEmitter.geometry.verticesNeedUpdate = true;
    vertices = planeEmitter.geometry.vertices;
    vertices.forEach(function(v, i){
        v.z = v.z + random
    }

planeEmitter.rotation.y = Math.PI / 2;
planeEmitter.position.x += 8.75;
planeEmitter.position.y -= 3;
carBattery.attach(planeEmitter);

batteryAnimate = false;
function animateEmitter1(){
  requestAnimationFrame(animateEmitter1);
  if(batteryAnimate === true){
    planeEmitter.geometry.verticesNeedUpdate = true;
    vertices = planeEmitter.geometry.vertices;
    vertices.forEach(function(v, i){
      if (v.z > -17) {
       v.z -= v.vx/5;
       }
       else{
        function randomXToY(minVal,maxVal){
        var randVal = minVal+(Math.random()*(maxVal-minVal));
        return Math.round(randVal);
      }
      var random = randomXToY(.1,15);
      v.z = v.z + random
      } 
    })
  }
  render();
}