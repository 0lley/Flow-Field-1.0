let slider;

function setup() {
  createCanvas(windowHeight * 0.75, windowHeight * 0.75);
  frameRate(60);
  // noiseDetail(4, 0.3);
}

let zNoiseAngle = 0;
let zNoiseMagnitude = 100;
let cellWidth = cellHeight = 25; // Total amount of cells horizontally and vertically

function draw() {
  background(255);
  let zOff = 0.0001;
  for (x = 0; x < cellWidth; x++) {
    for (y = 0; y < cellHeight; y++) {
      stroke((1 - noise(x * 0.5, y * 0.5, zNoiseMagnitude)) * 255, 0, noise(x * 0.5, y * 0.5, zNoiseMagnitude) * 255);
      strokeWeight(1);
      noFill();
      let theta = noise(x * 0.1, y * 0.1, zNoiseAngle) * TWO_PI;
      line(x * (width / cellWidth) + (width / cellWidth) / 2, y * (height / cellHeight) + (height / cellHeight) / 2, x * (width / cellWidth) + (width / cellWidth) / 2 + (width * cos(theta)) / (2 * cellWidth), y * (height / cellHeight) + (height / cellHeight) / 2 + (height * sin(theta)) / (2 * cellHeight));
      // square(width * map(i, 0, cellWidth, 0, 1), height * map(j, 0, cellHeight, 0, 1), height / cellHeight);
    }
    zNoiseAngle += zOff;
    zNoiseMagnitude == zOff;
  }
  // console.log(frameRate())
  // noLoop();
}

// function windowResized() {
//   resizeCanvas(windowHeight * 0.75, windowHeight * 0.75);
// }