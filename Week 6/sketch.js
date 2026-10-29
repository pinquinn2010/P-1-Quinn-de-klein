let honger = 0;
let slaap = 100;
let plezier = 100
let blij = 100


let kirbyeat;
let kirbyidle;
let kirbysleep;
let minecraftpainting1;

function preload() {
  kirbyidle = loadImage('kirby idle.jpg');
  minecraftpainting1 = loadImage('minecraft painting1.jpg');
  kirbysleep = loadImage('kirby sleepy.png')
  kirbyeat = loadimge('kirby hungry.png')
}





function setup() {
  createCanvas(800, 600);
  //feed button
  let button = createButton('feed');
  button.mousePressed(feed);
  button.position(250,30)
  //sleep button
  let sleepButton = createButton('sleep');
  sleepButton.position(250,90)
  sleepButton.mousePressed(sleep);
}

function sleep(){
  slaap = slaap + 0,5;
  if (slaap > 0) {
    slaap = 100
  }
}

function feed(){

honger = honger - 20
if (honger < 0){
  honger = 0 
  
    image(kirbyeat, 200, 200, 150, 150)
  }

  else {
    image(kirbyidle, 200, 200, 150, 150)

  }
  image(minecraftpainting1, 300, 0, 200, 200);

}





function draw() {
  background(20, 126, 186);



  fill(148, 208, 242)
  rect(0, 0, 800, 300)

    honger = honger + 0.12;
  
  if (honger > 100) {
    honger = 100
  }
  if (slaap > 0) {
    slaap = slaap - 0.01;
  }
  if (slaap < 0) {
    slaap = 0
  }

  plezier = plezier - 0.12;

  if (plezier > 100) {
    plezier = 100
  }

  // bed
  fill('brown')
  rect(400, 400, 100, 50)
  rect(400, 250, 100, 50)
  fill('gray')
  rect(405, 280, 90, 120)
  fill('red')
  rect(405, 300, 90, 100)
  //pillows
  fill('white')
  rect(405, 270, 40, 25, 25)
  rect(450, 270, 40, 25, 25)

  
  
  if (slaap < 20) {
    image(kirbysleep, 400, 250, 100, 100)
  }
  else {
    image(kirbyidle, 200, 200, 150, 150)
  }
  // honger bar
  noStroke()
  fill(0)
  rect(20, 20, 200, 25, 25)
  fill(70, 190, 90)
  rect(20, 20, honger * 2, 25, 25);
  fill(0)
  text("honger:" + floor(honger) + "%", 20, 66);

  // sleep bar
  noStroke()
  fill(0)
  rect(20, 80, 200, 25, 25)
  fill(70, 190, 90)
  fill(8, 81, 199)
  rect(20, 80, slaap * 2, 25, 25);
  fill(0)
  text('z   z   z   z   z   z   z   z   z   z   z ', 40, 95);
  text("slaap:" + floor(slaap) + "%", 20, 126);

  //plezierbar
  noStroke()
  fill(0)
  rect(20, 140, 200, 25, 25)
  fill(70, 190, 90)
  fill(240, 206, 17)
  rect(20, 140, plezier * 2, 25, 25);
  fill(0)
  text("plezier:" + floor(plezier) + "%", 20, 180);

  noStroke()
  fill(0)
  rect(20, 140, 200, 25, 25)
  fill(70, 190, 90)
  fill(240, 73, 17)
  rect(20, 140, blij * 2, 25, 25);
  fill(0)
  text("blij:" + floor(blij) + "%", 20, 240);


  if (honger <= 0 || slaap <= 0) {
    text('you died', 350, 300);
  }
}
