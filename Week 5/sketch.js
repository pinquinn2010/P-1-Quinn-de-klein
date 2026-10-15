let image1;
let nextButton;
let started = false;
let questionIndex = 0;
let selectedAnswer = null;

const questions = [
  {
    text: 'Wie is de beste vriend van SpongeBob?',
    answers: ['Patrick', 'Octo', 'Meneer Krabs', 'Sandy'],
    correct: 0
  },
  {
    text: 'Hoe heet het huisdier van SpongeBob?',
    answers: ['Patrick', 'Gary', 'Meneer Krabs', 'Henk'],
    correct: 1
  },
  {
    text: 'Wat wil Plankton graag hebben?',
    answers: ['Het geheime recept', 'Een boot', 'Een huisdier', 'Een baan'],
    correct: 0
  },
  {
    text: 'Waar werkt SpongeBob?',
    answers: ['De Krokante Krab', 'De supermarkt', 'De school', 'Het aquarium'],
    correct: 0
  },
  {
    text: 'Wie is de baas van de Krokante Krab?',
    answers: ['Sandy', 'Meneer Krabs', 'Patrick', 'Octo'],
    correct: 1
  },
  {
    text: 'Welk dier is Sandy?',
    answers: ['Een octopus', 'Een krab', 'Een eekhoorn', 'Een zeester'],
    correct: 2
  },
  {
    text: 'Waar woont SpongeBob?',
    answers: ['Bikini Broek', 'Visstad', 'Koraalstad', 'Zeezicht'],
    correct: 0
  },
  {
    text: 'Wat voor dier is Patrick?',
    answers: ['Een krab', 'Een zeester', 'Een slak', 'Een eekhoorn'],
    correct: 1
  },
  {
    text: 'Wat voor soort eten is een Krabburger?',
    answers: ['Een pizza', 'Een taart', 'Een hamburger', 'Een ijsje'],
    correct: 2
  },
  {
    text: 'In wat voor huis woont SpongeBob?',
    answers: ['Een ananas', 'Een schoen', 'Een schelp', 'Een boot'],
    correct: 0
  }
];

function preload() {
  image1 = loadImage('foto/spongebob-cool-spongebob.gif');
}

function setup() {
  createCanvas(800, 600);
  const startButton = createButton('Start');
  startButton.position(width / 2, height / 2 + 200);
  startButton.mousePressed(() => {
    started = true;
    startButton.hide();
  });

  nextButton = createButton('Volgende');
  nextButton.position(width / 2 - 75, 490);
  nextButton.style('cursor', 'pointer');
  nextButton.hide();
  nextButton.mousePressed(() => {
    questionIndex++;
    selectedAnswer = null;
    nextButton.hide();
  });
}

function draw() {
  background(image1);

  if (!started) {
    fill('white');
    textSize(28);
    text('SpongeBob-quiz!', 20, 40);
    return;
  }

  fill('black');
  rect(50, 50, 700, 500);
  fill('white');
  textAlign(CENTER, CENTER);

  if (questionIndex === questions.length) {
    nextButton.hide();
    textSize(32);
    text('Je bent klaar!', width / 2, height / 2);
    return;
  }

  const question = questions[questionIndex];
  textSize(20);
  text('VRAAG ABCD', width / 2, 95);
  textSize(28);
  text(question.text, width / 2, 145);

  for (let i = 0; i < question.answers.length; i++) {
    const y = 200 + i * 60;
    fill('white');
    rect(200, y, 400, 50);
    fill('black');
    textSize(22);
    text(String.fromCharCode(65 + i) + '. ' + question.answers[i], width / 2, y + 25);
  }

  if (selectedAnswer !== null) {
    fill('white');
    textSize(20);
    text(selectedAnswer === question.correct ? 'Goed gedaan!' : 'Helaas, fout!', width / 2, 470);
    nextButton.show();
  }
}

function mousePressed() {
  if (!started || questionIndex >= questions.length) return;

  if (selectedAnswer !== null) {
    return;
  }

  for (let i = 0; i < questions[questionIndex].answers.length; i++) {
    const y = 200 + i * 60;
    if (mouseX > 200 && mouseX < 600 && mouseY > y && mouseY < y + 50) {
      selectedAnswer = i;
      nextButton.show();
      return;
    }
  }
}
