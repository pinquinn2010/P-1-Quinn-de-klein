let auto = 0
auto+=-150
let auto2 = 0
auto2+=100

//sun

let sun = 0
sun+=-150

let cloud1 = 0
cloud1+=-150

let cloud2 = 0
cloud2+=150

let light = 2

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background('skyblue');
  fill("green");
  rect(0, 400, 800, 200);


  //mountains
  fill("gray");
  triangle(0, 400, 200, 100, 400, 400);
  triangle(200, 400, 400, 150, 600, 400);
  fill("darkgray");
  triangle(400, 400, 600, 100, 800, 400);


  //road
  fill("gray");
  rect(0, 400, 800, 200);
  fill("white");
  rect(50, 495, 100, 30);
  rect(200, 495, 100, 30);
  rect(350, 495, 100, 30);
  rect(500, 495, 100, 30);
  rect(650, 495, 100, 30);


  //tree
  fill("brown");
  rect(700, 300, 20, 100);
  fill("green");
  circle(710, 300, 100);
    fill("brown");
  rect(540, 300, 20, 100);
  fill("green");
  circle(550, 300, 100);
    fill("brown");
  rect(290, 300, 20, 100);
  fill("green");
  circle(300, 300, 100);


  //traffic light
  fill("gray");
  rect(710, 200, 30, 200);
  rect(700, 200, 50, 100);
  if (light===0) {
    fill("red");
    stroke(255, 0, 0);
  } else{
  fill("darkred");
  noStroke();
  }
  circle(725, 220, 30);
  if (light===1) {
    fill("yellow");
    stroke(255, 255, 0);
  } else{
  fill(92, 70, 19);
  noStroke();
  }
  circle(725, 250, 30);
  if (light===2) {
    fill(0, 255, 0);
    stroke(0, 255, 0);
  } else{
    fill("darkgreen");
    noStroke();
  }
  circle(725, 280, 30);

  noStroke();
  //sun
  fill("yellow");
  circle(sun, 50, 75);
  fill("orange");
  circle(sun, 50, 50);



//car
  fill("blue");
  rect(auto + 50, 350, 100, 50);
  rect(auto, 400, 200, 50);
  fill("black");
  circle(auto + 25, 450, 50);
  circle(auto + 175, 450, 50);
  fill("skyblue");
  fill("gray");
  circle("auto" + 25, 550, 30);
  circle("auto" + 175, 500, 30);
  //glass
  fill(165, 222, 242, 1000);
  rect(auto + 120, 350, 30, 50);

  //car2
  fill("red");
  rect(auto2 +50, 450, 100, 50);
  rect(auto2, 500, 200, 50);
  fill("black");
  circle(auto2 + 25, 550, 50);
  circle(auto2 + 175, 550, 50);
 fill(165, 222, 242, 1000);
  rect(auto2 + 135, 450, 30, 50);
  
  //clouds
  noStroke();
  fill("white");
  circle(cloud1, 100, 50);
  circle(cloud1 + 50, 100, 50);
  circle(cloud1 + 25, 75, 50);
  circle(cloud1 + 25, 125, 50);

  //cloud2
  noStroke();
  fill("white");
  circle(cloud2 + 180, 100, 50);
  circle(cloud2 + 230, 100, 50);
  circle(cloud2 + 205, 75, 50);
  circle(cloud2 + 205, 125, 50);

    fill("brown");
  rect(290, 500, 20, 100);
  fill("green");
  circle(300, 500, 100);

 
  


if (auto > 800) {
  auto = -200;
}
if (auto2 > 800) {
  auto2 = -200;

  if (cloud1 > 0) {
  cloud1 = 800;
}


  if (sun > 800) {
  }
    sun = -100;
}
if(light===0) {
  auto+=0;
  auto2+=0;
}
else if (light===1) {
  auto+=1.5;
  auto2+=2;
}
else {
auto+=3
auto2+=4
}
sun+=4
cloud1+=-1
cloud2+=-1


}

function keyPressed() {
  if(key === 'Enter') {
    if(light===0) {
      light=2;
    }
    else {
      light = light - 1;
    }
  }
}