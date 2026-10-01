function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  fill ('black')
  text("1.", 20, 15);
  text("2.", 20, 105);
  text("3.", 80, 105);
  text("4.", 80, 205);
  text("5.", 540, 20);
  text("6.", 350, 105);
  text("7.", 625, 105);



  for (let index = 0; index < 10 ; index++) {
    if (index == 7){
      fill ('blue')
    }
    else{
      fill ('white')
    }
    rect(0 + index*50,25,50,50)
  }

  for (let index = 0; index < 5 ; index++){
    rect (10,125+index*50,50,50)
    if (index==)
  }
}
 