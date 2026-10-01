function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(220);
  for(let i = 0; i < 5 ; i++){
    for(let j = 0; j < 5 ; j++){
      ellipse(i * 50 + 25, j * 50 + 25, 40, 40);
    }
  }
}
