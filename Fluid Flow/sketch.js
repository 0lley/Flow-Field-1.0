let aSlider, magniSlider, mSlider;

function setup() {
  createCanvas(250, 250);
  frameRate(60);
  magniSlider = createSlider(1, 10000);
  mSlider = createSlider(1, 10000);
  noiseDetail(2);
}

particles = [];
let zNoiseAngle = 0;
let xAngleOffset = 0.5;
let xAngle = 0;
let zNoiseMagnitude = 100;
let zOffMag = 0.001;
let zOffAng = 0.01;
let magniVal = 1;
let magShift = 1;
// let magShift = 1;
// let zOffAng = 1;
// let magniVal = 1;


function draw() {
  background(0);
  particles.push(new Particle(random() * PI));

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

  if (mouseIsPressed) {
    particles.push(new Particle());
  }
}

function windowResized() {
  resizeCanvas(250, 250);
}