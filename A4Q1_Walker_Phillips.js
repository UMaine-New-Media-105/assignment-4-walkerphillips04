 let starPoints

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  noStroke();

  //starPoints = (3, 5)

}

function draw() {
  background("cyan");

  drawStar(300, 300, 1);
  drawStar(50, 100, 1.5);
  drawStar(330, 70, .9);
  drawStar(100, 250, 1.3);
  drawStar(253, 200, 1);
}

function drawStar(x, y, size) {
  const centerX = width / 2;
  const centerY = height / 2;

  const numPoints = (8);
  const angleStep = 360 / numPoints;
  for (let i = 0; i < numPoints; i++) {
    const angle = i * angleStep;

    push();
    fill("orange");
    translate(x, y);
    scale(size);
    rotate(angle);
    ellipse(0, 0, 120, 19);
    pop();
  }
}
