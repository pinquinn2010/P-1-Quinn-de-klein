//tic tac toe

let nummer1 = 0
let nummer2 = 0
let nummer4 = 0
let nummer5 = 0
let nummer6 = 0
let nummer7 = 0
let nummer8 = 0
let nummer9 = 0



function setup() {
  createCanvas(600, 600);
}

function draw() {


  background(220);
  fill('red')
  rect(0, 0, 300, 600)
  fill('blue')
  rect(300, 0, 600, 600)
  fill('GRAY')
  square(50, 50, 475)
  fill('white')
  rect(75, 75, 125, 125, 10)
  rect(225, 75, 125, 125, 10)
  rect(375, 75, 125, 125, 10)
  rect(75, 225, 125, 125, 10)
  rect(225, 225, 125, 125, 10)
  rect(375, 225, 125, 125, 10)
  rect(75, 375, 125, 125, 10)
  rect(225, 375, 125, 125, 10)
  rect(375, 375, 125, 125, 10)

  if (mouseX > 75 && mouseX < 200) {

  }

  if (nummer1 == 1) {
    fill('red')
    rect (75,75,125,125,10)
    if (mouseX > 225 && mouseX < 400) {

    }
    
  }

  if (nummer2 == 1) {
    fill('red')
    textSize(155)
    text('X', 236, 193)

  }
 if (nummer1 ==1){
  fill('blue');
 } else {
  fill ('white');
 }
  rect(75, 75, 125, 125, 10);
}

function mousePressed() {

if (mouseX > 75 && mouseX < 200 &&
    mouseY > 75 && mouseY < 200) {
  nummer1 = 1;
}




  if (nummer1 == 0) {
    if (mouseX > 75 && mouseX < 200 &&
      mouseY > 75 && mouseY
    ) {
      nummer1 = 1
    }
  }
  if (mouseX > 75 && mouseX < 200 &&
    mouseY > 75 && mouseY
  ) {
    nummer1 = 1
  }

  if (nummer2 == 0) {
    if (mouseX > 225 && mouseX < 200 &&
      mouseY > 225 && mouseY < 300
    ) {
      nummer2 = 1
    }
   
  }


}
