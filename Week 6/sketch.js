let honger = 100;
let slaap = 100;


let kirbyidle ;
let minecraftpainting1;

function preload(){
  kirbyidle = loadImage('kirby idle.jpg');
  minecraftpainting1 = loadImage('minecraft painting1.jpg');
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(20, 126, 186);
  if (honger > 0){
    honger = honger - 0.02;
  }
if (honger < 0){
  honger = 0
}
  if (slaap > 0) {
    slaap = slaap - 0.02;
  }
  if (slaap < 0) {
    slaap = 0
  }

  fill(148, 208, 242)
  rect(0,0,800,300)
  
  image(kirbyidle,200,200,150,150);

  image(minecraftpainting1,300,0,200,200); 


  // bed
fill('brown')
rect(400,400,100,50)
rect(400, 250, 100, 50)
fill('gray')
rect(405,280,90,120)
fill('red')
rect(405, 300, 90, 100)
//pillows
fill('white')
rect(405,270,40,25,25)
rect(450, 270, 40, 25, 25)

// honger bar
noStroke()
fill(0)
rect (20,20,200,25,25)
fill(70,190,90)
rect(20,20,honger * 2,25,25);
fill(0)
text("honger:" + floor(honger) + "%", 20,66);

// sleep bar
  noStroke()
  fill(0)
  rect(20, 80, 200, 25,25)
  fill(70, 190, 90)
  fill(8, 81, 199)
  rect(20, 80, slaap * 2, 25,25);
  fill(0)
  text('z   z   z   z   z   z   z   z   z   z   z ',40,95);
  text("slaap:" + floor(honger) + "%", 20, 126);
}
  