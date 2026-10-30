let honger = 0;
let slaap = 100;
let plezier = 100
let blij = 100

let kirbyeat;
let kirbyidle;
let kirbysleep;
let minecraftpainting1;
let feedButton;
let sleepButton;
let minigameButton;

let minigameActief = false;
let nachtActief = false;
let vakjes = Array(9).fill(null);
let beurt = 0;
let winnendeLijn = null;
let laatsteOpslag = 0;

function preload() {
  kirbyidle = loadImage('kirby idle.jpg');
  minecraftpainting1 = loadImage('minecraft painting1.jpg');
  kirbysleep = loadImage('kirby sleepy.png')
  kirbyeat = loadImage('kirby hungry.png')
}





function setup() {
  createCanvas(800, 600);
  laadStatuswaarden();
  window.addEventListener('beforeunload', slaStatuswaardenOp);
  //feed button
  feedButton = createButton('feed');
  feedButton.mousePressed(feed);
  feedButton.position(250,30)
  //sleep button
  sleepButton = createButton('sleep');
  sleepButton.position(250,90)
  sleepButton.mousePressed(sleep);
  sleepButton.html(nachtActief ? 'wakker' : 'sleep');
  // minigame button
  minigameButton = createButton('minigame!')
  minigameButton.position(250,150)
  minigameButton.mousePressed(minigame);
}

function laadStatuswaarden() {
  const opgeslagenHonger = getItem('honger');
  const opgeslagenSlaap = getItem('slaap');
  const opgeslagenPlezier = getItem('plezier');
  const opgeslagenBlij = getItem('blij');
  nachtActief = getItem('nachtActief') === true;

  if (typeof opgeslagenHonger === 'number' && Number.isFinite(opgeslagenHonger)) {
    honger = constrain(opgeslagenHonger, 0, 100);
  }
  if (typeof opgeslagenSlaap === 'number' && Number.isFinite(opgeslagenSlaap)) {
    slaap = constrain(opgeslagenSlaap, 0, 100);
  }
  if (typeof opgeslagenPlezier === 'number' && Number.isFinite(opgeslagenPlezier)) {
    plezier = constrain(opgeslagenPlezier, 0, 100);
  }
  if (typeof opgeslagenBlij === 'number' && Number.isFinite(opgeslagenBlij)) {
    blij = constrain(opgeslagenBlij, 0, 100);
  }
}

function slaStatuswaardenOp() {
  storeItem('honger', honger);
  storeItem('slaap', slaap);
  storeItem('plezier', plezier);
  storeItem('blij', blij);
  storeItem('nachtActief', nachtActief);
}

function sleep(){
  nachtActief = !nachtActief;
  sleepButton.html(nachtActief ? 'wakker' : 'sleep');
  slaStatuswaardenOp();
}

function minigame() {
  minigameActief = true;
  resetGame();
  feedButton.hide();
  sleepButton.hide();
  minigameButton.hide();
}

function feed() {
  honger = honger - 10
  if (honger < 0) {
    honger = 0
  }
  slaStatuswaardenOp();
}

function resetGame() {
  vakjes = Array(9).fill(null);
  beurt = 0;
  winnendeLijn = null;
}

function vindWinnendeLijn() {
  const lijnen = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const lijn of lijnen) {
    const kleur = vakjes[lijn[0]];
    if (kleur && kleur === vakjes[lijn[1]] && kleur === vakjes[lijn[2]]) {
      return lijn;
    }
  }
  return null;
}

function tekenMinigame() {
  background(220);
  fill('red');
  rect(0, 0, 300, 600);
  fill('blue');
  rect(300, 0, 500, 600);

  fill(245);
  rect(525, 75, 260, 425, 10);
  tekenStatusBalken(545, 105, 220);

  fill('gray');
  square(50, 50, 475);
  for (let index = 0; index < vakjes.length; index++) {
    const x = 75 + (index % 3) * 150;
    const y = 75 + floor(index / 3) * 150;
    const isHover = vakjes[index] === null
      && mouseX >= x && mouseX <= x + 125
      && mouseY >= y && mouseY <= y + 125;
    fill(vakjes[index] || (isHover ? 170 : 'white'));
    rect(x, y, 125, 125, 10);
  }

  if (winnendeLijn !== null) {
    const startX = 137.5 + (winnendeLijn[0] % 3) * 150;
    const startY = 137.5 + floor(winnendeLijn[0] / 3) * 150;
    const eindX = 137.5 + (winnendeLijn[2] % 3) * 150;
    const eindY = 137.5 + floor(winnendeLijn[2] / 3) * 150;
    stroke('black');
    strokeWeight(12);
    line(startX, startY, eindX, eindY);
    noStroke();
  }

  fill('lightgray');
  rect(20, 20, 90, 35, 8);
  rect(690, 20, 90, 35, 8);
  fill(0);
  textSize(16);
  text('Reset', 46, 43);
  text('Terug', 715, 43);

  if (winnendeLijn !== null || beurt === 9) {
    fill('lightgray');
    rect(155, 540, 490, 40, 6);
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(winnendeLijn !== null
      ? 'Team ' + (vakjes[winnendeLijn[0]] === 'red' ? 'rood' : 'blauw') + ' heeft gewonnen!'
      : 'Gelijkspel!', 400, 560);
    textAlign(LEFT, BASELINE);
  } else {
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text('Team ' + (beurt % 2 === 0 ? 'rood' : 'blauw') + ' is aan de beurt', 400, 560);
    textAlign(LEFT, BASELINE);
  }
}

function tekenStatusBalken(x, y, breedte) {
  const statussen = [
    { naam: 'Honger', waarde: honger, kleur: color(70, 190, 90) },
    { naam: 'Slaap', waarde: slaap, kleur: color(8, 81, 199) },
    { naam: 'Plezier', waarde: plezier, kleur: color(240, 206, 17) },
    { naam: 'Blij', waarde: blij, kleur: color(240, 73, 17) }
  ];

  textSize(16);
  for (let index = 0; index < statussen.length; index++) {
    const status = statussen[index];
    const balkY = y + index * 90;
    fill(0);
    text(status.naam + ': ' + floor(status.waarde) + '%', x, balkY);
    fill(0);
    rect(x, balkY + 12, breedte, 22, 8);
    fill(status.kleur);
    rect(x, balkY + 12, breedte * status.waarde / 100, 22, 8);
  }
}

function tekenNachtOverlay() {
  noStroke();
  fill(8, 12, 35, 190);
  rect(0, 0, width, height);

  const lampX = 515;
  const lampY = 310;
  fill(255, 220, 130, 120);
  ellipse(lampX, lampY, 46, 46);
  fill(255, 225, 145);
  ellipse(lampX, lampY, 22, 22);
  fill(100, 68, 42);
  rect(lampX - 3, lampY + 10, 6, 10, 2);
  rect(lampX - 10, lampY + 20, 20, 4, 2);
}

function mouseClicked() {
  if (!minigameActief) {
    return;
  }

  if (mouseX >= 690 && mouseX <= 780 && mouseY >= 20 && mouseY <= 55) {
    minigameActief = false;
    feedButton.show();
    sleepButton.show();
    minigameButton.show();
    return;
  }

  if (mouseX >= 20 && mouseX <= 110 && mouseY >= 20 && mouseY <= 55) {
    resetGame();
    return;
  }

  if (winnendeLijn !== null || beurt === 9) {
    return;
  }

  const kolom = floor((mouseX - 75) / 150);
  const rij = floor((mouseY - 75) / 150);
  if (kolom < 0 || kolom > 2 || rij < 0 || rij > 2) {
    return;
  }

  const x = 75 + kolom * 150;
  const y = 75 + rij * 150;
  if (mouseX > x + 125 || mouseY > y + 125) {
    return;
  }

  const index = rij * 3 + kolom;
  if (vakjes[index] !== null) {
    return;
  }

  vakjes[index] = beurt % 2 === 0 ? 'red' : 'blue';
  beurt++;
  winnendeLijn = vindWinnendeLijn();
  slaStatuswaardenOp();
}

function draw() {
  honger = min(honger + 0.004, 100);
  slaap = nachtActief
    ? min(slaap + 0.02, 100)
    : max(slaap - 0.01, 0);
  plezier = minigameActief
    ? min(plezier + 0.02, 100)
    : max(plezier - 0.004, 0);

  if (millis() - laatsteOpslag >= 1000) {
    slaStatuswaardenOp();
    laatsteOpslag = millis();
  }

  if (minigameActief) {
    tekenMinigame();
    return;
  }

  background(20, 126, 186);
  
  image(minecraftpainting1, 300, 0, 200, 200);
  
  
  fill(148, 208, 242)
  rect(0, 0, 800, 300)

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

  
  
  if (nachtActief || slaap < 20) {
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
  text('z   z   z   z   z   z   z   ', 40, 95);
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
  rect(20, 200, 200, 25, 25)
  fill(70, 190, 90)
  fill(240, 73, 17)
  rect(20, 200, blij * 2, 25, 25);
  fill(0)
  text("blij:" + floor(blij) + "%", 20, 240);

  if (nachtActief) {
    tekenNachtOverlay();
  }

  if (honger <= 0 || slaap <= 0) {
    text('you died', 350, 300);
  }
}
