movieAudio.onplay = function() {

  mainTl.play();

};

movieAudio.onpause = function() {

  mainTl.pause();

};

movieAudio.onseeked = function() {

  mainTl.time(movieAudio.currentTime);

}

movieAudio.ontimeupdate = function() {

  mainTl.time(movieAudio.currentTime);

};

function playAudio(){

  movieAudio.play();

}

 

function pausePlayer(){

  movieAudio.pause();

}

//End Audio

highlighterSelected = true;
var originalLineSize = .5;
var highlightedWidth = 1.45;
var l1Color = 'rgb(0, 0, 0)';
var neutralColor = 'rgb(0,0,255)';
var energizedLoad = 'rgb(255,165,0)';
var compensation = 0;
var au = document.getElementById("movieAudio");

// au.onloadedmetadata = function() {

//     compensation = movieAudio.duration - mainTl.duration();

//     mainTl.add(TweenMax.to(dummy, compensation, {autoAlpha: 1}));

//     console.log(movieAudio.duration - mainTl.duration())

// };

	
