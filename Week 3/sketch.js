// tic tac toe

let beurt = 0;
let nummer1 = 'white';
let nummer2 = 'white';
let nummer3 = 'white';
let nummer4 = 'white';
let nummer5 = 'white';
let nummer6 = 'white';
let nummer7 = 'white';
let nummer8 = 'white';
let nummer9 = 'white';
let winnendeLijn = null;

function resetGame() {
  nummer1 = 'white';
  nummer2 = 'white';
  nummer3 = 'white';
  nummer4 = 'white';
  nummer5 = 'white';
  nummer6 = 'white';
  nummer7 = 'white';
  nummer8 = 'white';
  nummer9 = 'white';
  beurt = 0;
  winnendeLijn = null;
}

function vindWinnendeLijn() {
  const vakjes = [nummer1, nummer2, nummer3, nummer4, nummer5, nummer6, nummer7, nummer8, nummer9];
  const lijnen = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (let lijn of lijnen) {
    const kleur = vakjes[lijn[0]];
    if (kleur === vakjes[lijn[1]] && kleur === vakjes[lijn[2]] && (kleur === 'red' || kleur === 'blue')) {
      return lijn;
    }
  }

  return null;
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

  fill('red');
  rect(0, 0, 300, 600);
  fill('blue');
  rect(300, 0, 600, 600);

  fill('gray');
  square(50, 50, 475);

  fill(nummer1);
  rect(75, 75, 125, 125, 10);
  fill(nummer2);
  rect(225, 75, 125, 125, 10);
  fill(nummer3);
  rect(375, 75, 125, 125, 10);

  fill(nummer4);
  rect(75, 225, 125, 125, 10);
  fill(nummer5);
  rect(225, 225, 125, 125, 10);
  fill(nummer6);
  rect(375, 225, 125, 125, 10);

  fill(nummer7);
  rect(75, 375, 125, 125, 10);
  fill(nummer8);
  rect(225, 375, 125, 125, 10);
  fill(nummer9);
  rect(375, 375, 125, 125, 10);

  if (winnendeLijn !== null) {
    const startX = 137.5 + (winnendeLijn[0] % 3) * 150;
    const startY = 137.5 + Math.floor(winnendeLijn[0] / 3) * 150;
    const eindX = 137.5 + (winnendeLijn[2] % 3) * 150;
    const eindY = 137.5 + Math.floor(winnendeLijn[2] / 3) * 150;
    stroke('black');
    strokeWeight(12);
    line(startX, startY, eindX, eindY);
    noStroke();
  }

  fill('lightgray');
  rect(20, 20, 90, 35, 8);
  fill(0);
  textSize(16);
  text('Reset', 46, 43);

  if (winnendeLijn !== null) {
    const vakjes = [nummer1, nummer2, nummer3, nummer4, nummer5, nummer6, nummer7, nummer8, nummer9];
    fill('lightgray');
    rect(155, 540, 290, 40, 6);
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text('Team ' + (vakjes[winnendeLijn[0]] === 'red' ? 'rood' : 'blauw') + ' heeft gewonnen!', 300, 560);
    textAlign(LEFT, BASELINE);
  }
}

function mouseClicked() {
  if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 55) {
    resetGame();
    return;
  }

  if (winnendeLijn !== null) {
    return;
  }

  if (mouseX > 75 && mouseX < 200 && mouseY > 75 && mouseY < 200 && (nummer1 === 'white' || nummer1 === 170)) {
    nummer1 = beurt % 2 === 0 ? 'red' : 'blue';
    beurt += 1;
  }
  if (mouseX > 225 && mouseX < 350 && mouseY > 75 && mouseY < 200 && (nummer2 === 'white' || nummer2 === 170)) {
    nummer2 = beurt % 2 === 0 ? 'red' : 'blue';
    beurt += 1;
  }
  if (mouseX > 375 && mouseX < 500 && mouseY > 75 && mouseY < 200 && (nummer3 === 'white' || nummer3 === 170)) {
    nummer3 = beurt % 2 === 0 ? 'red' : 'blue';
    beurt += 1;
  }

  if (mouseX > 75 && mouseX < 200 && mouseY > 225 && mouseY < 350 && (nummer4 === 'white' || nummer4 === 170)) {
    nummer4 = beurt % 2 === 0 ? 'red' : 'blue';
    beurt += 1;
  }
  if (mouseX > 225 && mouseX < 350 && mouseY > 225 && mouseY < 350 && (nummer5 === 'white' || nummer5 === 170)) {
    nummer5 = beurt % 2 === 0 ? 'red' : 'blue';
    beurt += 1;
  }
  if (mouseX > 375 && mouseX < 500 && mouseY > 225 && mouseY < 350 && (nummer6 === 'white' || nummer6 === 170)) {
    nummer6 = beurt % 2 === 0 ? 'red' : 'blue';
    beurt += 1;
  }

  if (mouseX > 75 && mouseX < 200 && mouseY > 375 && mouseY < 500 && (nummer7 === 'white' || nummer7 === 170)) {
    nummer7 = beurt % 2 === 0 ? 'red' : 'blue';
    beurt += 1;
  }
  if (mouseX > 225 && mouseX < 350 && mouseY > 375 && mouseY < 500 && (nummer8 === 'white' || nummer8 === 170)) {
    nummer8 = beurt % 2 === 0 ? 'red' : 'blue';
    beurt += 1;
  }
  if (mouseX > 375 && mouseX < 500 && mouseY > 375 && mouseY < 500 && (nummer9 === 'white' || nummer9 === 170)) {
    nummer9 = beurt % 2 === 0 ? 'red' : 'blue';
    beurt += 1;
  }

  winnendeLijn = vindWinnendeLijn();
}

function mouseMoved() {
  if (nummer1 === 'white' || nummer1 === 170) {
    if (mouseX > 75 && mouseX < 200 && mouseY > 75 && mouseY < 200) {
      nummer1 = 170;
    } else if (nummer1 === 170) {
      nummer1 = 'white';
    }
  }

  if (nummer2 === 'white' || nummer2 === 170) {
    if (mouseX > 225 && mouseX < 350 && mouseY > 75 && mouseY < 200) {
      nummer2 = 170;
    } else if (nummer2 === 170) {
      nummer2 = 'white';
    }
  }

  if (nummer3 === 'white' || nummer3 === 170) {
    if (mouseX > 375 && mouseX < 500 && mouseY > 75 && mouseY < 200) {
      nummer3 = 170;
    } else if (nummer3 === 170) {
      nummer3 = 'white';
    }
  }

  if (nummer4 === 'white' || nummer4 === 170) {
    if (mouseX > 75 && mouseX < 200 && mouseY > 225 && mouseY < 350) {
      nummer4 = 170;
    } else if (nummer4 === 170) {
      nummer4 = 'white';
    }
  }

  if (nummer5 === 'white' || nummer5 === 170) {
    if (mouseX > 225 && mouseX < 350 && mouseY > 225 && mouseY < 350) {
      nummer5 = 170;
    } else if (nummer5 === 170) {
      nummer5 = 'white';
    }
  }

  if (nummer6 === 'white' || nummer6 === 170) {
    if (mouseX > 375 && mouseX < 500 && mouseY > 225 && mouseY < 350) {
      nummer6 = 170;
    } else if (nummer6 === 170) {
      nummer6 = 'white';
    }
  }

  if (nummer7 === 'white' || nummer7 === 170) {
    if (mouseX > 75 && mouseX < 200 && mouseY > 375 && mouseY < 500) {
      nummer7 = 170;
    } else if (nummer7 === 170) {
      nummer7 = 'white';
    }
  }

  if (nummer8 === 'white' || nummer8 === 170) {
    if (mouseX > 225 && mouseX < 350 && mouseY > 375 && mouseY < 500) {
      nummer8 = 170;
    } else if (nummer8 === 170) {
      nummer8 = 'white';
    }
  }

  if (nummer9 === 'white' || nummer9 === 170) {
    if (mouseX > 375 && mouseX < 500 && mouseY > 375 && mouseY < 500) {
      nummer9 = 170;
    } else if (nummer9 === 170) {
      nummer9 = 'white';
    }
  }
}
