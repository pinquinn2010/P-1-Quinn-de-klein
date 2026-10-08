function tekenbuttons(x, y, width, height) {
  rect(x, y, width, height)
}

let image1;
let startbutton;
let buttona
let buttonb
let buttonc
let buttond

let started = false;

function preload () {
  image1 = loadImage('foto/spongebob-cool-spongebob.gif');
}
function buttons(x, y, width, height) {
  if (mouseX > x && mouseX < x + width && mouseY > y && mouseY < y + height) {
    fill('gray');
  } else {
    fill('white');
  }
  rect(x, y, width, height, 20);
}


function setup() {
  createCanvas(800, 600);
 startbutton = createButton('start!!!!');
 startbutton.style('cursor', 'pointer');
  startbutton.position(width / 2, height / 2 + 200);
  startbutton.mousePressed(() => {
    started = true;
    startbutton.hide();
  });
}

function draw() {
  background(image1);
  if (started) {
    return;
  }

  fill('white')
  textSize(20)
text ('spongebob quiz!!',10,20)
tekenbuttons (100,100,100,100)


}
