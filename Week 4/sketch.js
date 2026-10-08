let balls = [];
let draggedBall = null;

function setup() {
  createCanvas(800, 600);
}

fill(0);
function keyPressed() {
  if (keyCode === BACKSPACE) {
    if (balls.length === 0) {
      for (let i = 0; i < 10; i++) {
        balls.push({
          x: random(20, width - 20),
          y: random(20, height - 20),
          speedX: random(-3, 3),
          speedY: random(-3, 3),
          size: random(10, 30),
          color: [random(255), random(255), random(255)]
        });
      }
    } else {
      for (let i = 0; i < balls.length; i++) {
        balls[i].color = [random(255), random(255), random(255)];
      }
    }

    return false;
  }
}

function draw() {
  background(0);

  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];

    if (draggedBall !== b) {
      b.x += b.speedX;
      b.y += b.speedY;

      if (b.x > width - b.size / 2 || b.x < b.size / 2) {
        b.speedX *= -1;
      }

      if (b.y > height - b.size / 2 || b.y < b.size / 2) {
        b.speedY *= -1;
      }
    }

    fill(b.color[0], b.color[1], b.color[2]);
    circle(b.x, b.y, b.size);
  }
}

function mousePressed() {
  for (let i = balls.length - 1; i >= 0; i--) {
    let b = balls[i];
    let distance = dist(mouseX, mouseY, b.x, b.y);

    if (distance < b.size / 2) {
      draggedBall = b;
      return;
    }
  }
}

function mouseDragged() {
  if (draggedBall) {
    draggedBall.x = mouseX;
    draggedBall.y = mouseY;
  }
}

function mouseReleased() {
  draggedBall = null;






}

