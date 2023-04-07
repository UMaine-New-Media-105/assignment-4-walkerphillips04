
//here is the array for the colors used
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

function setup() {
  createCanvas(630, 400);
  angleMode(DEGREES);
  noStroke();
  noLoop();

}

function draw() {
  background("black") // I changed the background color from the previous assigment so the purple stands out more.
  points = random(6, 10)
  S = random(0.1, 0.3)
  //this code calls for the stars to still have a randomized factor to them, the ize changes and the amount of points change too. 

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let x = 60 + j * 85;
      let y = 60 + i * 80;
      drawStar2(x, y, S, i % 7);
    }
  }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let x = 30 + j * 80;
      let y = 30 + i * 80;
      drawStar(x, y, 0.4, j % 7);
    }
  }
}

function drawStar(x, y, size, colorIndex) {
  const centerX = width / 2;
  const centerY = height / 2;

  const numPoints = points;
  const angleStep = 360 / numPoints;

  push();
  fill(colors[colorIndex]);
  translate(x, y);
  scale(size);
  for (let i = 0; i < numPoints; i++) {
    const angle = i * angleStep;
    rotate(angle);
    ellipse(0, 0, 120, 19);
  }
  pop();
}

function drawStar2(x, y, size, colorIndex) {
  const centerX = width / 2;
  const centerY = height / 2;

  const numPoints = points;
  const angleStep = 360 / numPoints;

  push();
  fill(colors[colorIndex]);
  translate(x, y);
  scale(size);
  for (let i = 0; i < numPoints; i++) {
    const angle = i * angleStep;
    rotate(angle);
    ellipse(0, 0, 120, 19);
  }
  pop();
}
