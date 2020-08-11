let maxSlider, creationSlider, accelerationSlider, particleSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(60);
  noiseDetail(2);
  maxSlider = createSlider(10, 2500, 1500);
  accelerationSlider = createSlider(10, 200, 80);
  particleSize = createSlider(1, 10, 4);
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
let noiseFixOffset = 0.00025;

function draw() {
  background(0, 75);
  if (mouseIsPressed) {
    if (particles.length < maxSlider.value()) {
      for (let i = 0; i < 3; i++) {
        particles.push(new Particle());
      }
    }
  }

  for (let i = 0; i < particles.length; i++) {
    if (particles[i].posCheck()) {
      particles.splice(i, 1);
    }

    else {
      particles[i].accelerate(magniVal, zNoiseAngle, zNoiseMagnitude);
      particles[i].show();
      particles[i].move();
    }
  }
  xAngle += xAngleOffset;
  noiseFix += noiseFixOffset;
  zNoiseAngle += zOffAng;
  zNoiseMagnitude += zOffMag;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}