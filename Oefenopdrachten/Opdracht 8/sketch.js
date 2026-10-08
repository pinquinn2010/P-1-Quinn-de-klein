function tekenhuis(x, y, width, height) {
  rect(x, y, width, height);
  //dak'
  triangle(x, y, x + width, y, x + width / 2, y - height / 2);
  //deur
  fill('brown')
  rect(x + width / 2 - 20, y + height - 50, 40, 50);
  //raam
  fill('lightblue')
  rect(x + 20, y + 20, 40, 40);
  line(x + 20, y + 40, x + 60, y + 40);
  line(x + 40, y + 20, x + 40, y + 60);
  //deurknop
  fill('yellow')
  circle(x + width / 2, y + height - 25, 10);
}


function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  fill('gray')
  tekenhuis(0, 250, 200, 150);
  fill('lightgray')
  tekenhuis(200, 250, 200, 150);
  fill('black')
  tekenhuis(400, 250, 200, 150);
  fill('lightgray')
  tekenhuis(600, 250, 200, 150);
}
