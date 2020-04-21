let slider;

function setup() {
  createCanvas(windowWidth * 0.95, windowHeight * 0.95);
  frameRate(60);
}

let zNoiseAngle = 0;
let zNoiseMagnitude = 100;
let cellWidth = 25; // Total amount of cells horizontally and vertically
let cellHeight = Math.floor(cellWidth * (screen.height / screen.width));
let magShift = 0.35;
let angShift = 0.2;

function draw() {
  background(255);
  let zOffAng = 0.00015;
  let zOffMag = 0.00025;
  for (x = 0; x < cellWidth; x++) {
    for (y = 0; y < cellHeight; y++) {
      stroke((1 - noise(x * magShift, y * magShift, zNoiseMagnitude)) * 255, 0, noise(x * magShift, y * magShift, zNoiseMagnitude) * 255);
      strokeWeight(1);
      noFill();
      let theta = noise(x * angShift, y * angShift, zNoiseAngle) * TWO_PI;
      line(x * (width / cellWidth) + (width / cellWidth) / 2, y * (height / cellHeight) + (height / cellHeight) / 2, x * (width / cellWidth) + (width / cellWidth) / 2 + (width * cos(theta)) / (2 * cellWidth), y * (height / cellHeight) + (height / cellHeight) / 2 + (height * sin(theta)) / (2 * cellHeight));
    }
    zNoiseAngle += zOffAng;
    zNoiseMagnitude += zOffMag;
  }
  // console.log(frameRate())
  // noLoop();
}