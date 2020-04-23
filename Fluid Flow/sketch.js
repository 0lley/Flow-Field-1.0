let maxSlider, creationSlider, trailBox;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  noiseDetail(2);
  maxSlider = createSlider(10, 5000, 100);
  creationSlider = createSlider(1, 50, 5);
}

let particles = [];
let zNoiseAngle = 0;
let xAngle = 0;
let xAngleOffset = 0.0005;
let zNoiseMagnitude = 100;
let zOffMag = 0.1;
let zOffAng = 0.1;
let magniVal = 1;
let magShift = 1;
let noiseFix = 0;
let noiseFixOffset = 0.01;
// let magShift = 1;
// let zOffAng = 1;
// let magniVal = 1;


function draw() {
  background(0);
  if (particles.length < maxSlider.value()) {
    for (let i = 0; i < creationSlider.value(); i++) {
      particles.push(new Particle(random() * TWO_PI * 1.5, noise(noiseFix) * 15));
      xAngle += xAngleOffset;
      noiseFix += noiseFixOffset;
    }
  }
  for (let i = 0; i < particles.length; i++) {
    if (particles[i].posCheck()) {
      particles.splice(i, 1);
      zNoiseAngle += zOffAng;
      zNoiseMagnitude += zOffMag;
    }

    else {
      particles[i].accelerate(magniVal, zNoiseAngle, magShift, zNoiseMagnitude);
      particles[i].move();
      particles[i].show();
    }
  }
  console.log(frameRate())
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}