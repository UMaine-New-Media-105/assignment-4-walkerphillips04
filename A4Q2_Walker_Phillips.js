let starPoints;
function setup() {
  createCanvas(800, 400);
  angleMode(DEGREES);
  noStroke();

  //starPoints = (3, 5)
}

function draw() {
  background("cyan");

  // drawStar(300, 300, 1,"red");
  // drawStar(50, 100, 1.5,"yellow");
  // drawStar(330, 70, 0.9,"green");
  // drawStar(100, 250, 1.3,"blue");
  // drawStar(253, 200, 1,"orange");
  // lines 15 through 19 were from the previous challenge but they were not in a Nested Lopp to make this 30x30 grid. But I did not want to trash the code so I just commented it out for now
  for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
      let x = 1 + j * 30.6;
      let y = 1 + i * 30.6;
      drawStar(x, y, 0.2);
    }
  }
}

function drawStar(x, y, size) {
  const centerX = width / 2;
  const centerY = height / 2;

  const numPoints = 8;
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
