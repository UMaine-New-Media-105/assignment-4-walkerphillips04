let starPoints;
//let randomColor = color(random(255), random(255), random(255));
function setup() {
  createCanvas(630, 400);
  angleMode(DEGREES);
  noStroke();
  noLoop();
  //starPoints = (3, 5)
}

function draw() {
  background("indigo")

  // let randomColor = color(random(255), random(255), random(255))
  // fill(randomColor);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let x = 60 + j * 85;
      let y = 60 + i * 80;
      drawStar2(x, y, 0.2);
    }
  }
  // this array is for the smaller set of stars
 let randomColor = color(random(255), random(255), random(255));
  fill(randomColor);
  // I did random(255) for all three to get the highest possible range of color

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let x = 30 + j * 80;
      let y = 30 + i * 80;
      drawStar(x, y, 0.4);
     let randomColor = color(random(255), random(255), random(255));
      fill(randomColor);
   // this array is for the larger set of stars
    }
  }
}


function drawStar(x, y, size) {
  const centerX = width / 2;
  const centerY = height / 2;

  const numPoints = 10;
  const angleStep = 360 / numPoints;
  for (let i = 0; i < numPoints; i++) {
    const angle = i * angleStep;

    push();
    //fill(randomColor);
    translate(x, y);
    scale(size);
    rotate(angle);
    ellipse(0, 0, 120, 19);
    pop();
  }
}

function drawStar2(x, y, size) {
  const centerX = width / 2;
  const centerY = height / 2;

  const numPoints = (6)
  const angleStep = 360 / numPoints;
  for (let i = 0; i < numPoints; i++) {
    const angle = i * angleStep;

   let randomColor = color(random(255), random(255), random(255));
      fill(randomColor);
    push();
    translate(x, y);
    scale(size);
    rotate(angle);
    ellipse(0, 0, 120, 19);
    pop();
  }
}
