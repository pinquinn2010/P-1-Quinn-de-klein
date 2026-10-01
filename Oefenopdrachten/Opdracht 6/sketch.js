//kleuren.push(3)


function setup() {
  createCanvas(380, 350);
}

function draw() {
  background(220);
  fill(0)
  text("1.", 20, 15);
  text("2.", 20, 100);
  text("3.", 20, 190);
  text("4.", 20, 250);
  text("5.", 120, 15);
  text("6.", 120, 100);
  text("7.", 120, 190);
  text("8.", 120, 280);
  text("9.", 240, 15);

  let kleuren = ["red", "green", "blue", "purple", "yellow"];


  //opdracht 1
  let y = 15
  for (let index = 0; index < kleuren.length; index++) {
    fill(kleuren[index])
    text(kleuren[index], 30, y);
    y = y + 13
  }

  //opdracht2

  let eerste = kleuren.shift();
  kleuren.push(eerste)

  y = 100
  for (let index = 0; index < kleuren.length; index++) {
    fill(kleuren[index])
    text(kleuren[index], 30, y);
    y = y + 13
  }


  //opdracht 3
  kleuren.splice(1, 2)

  y = 190
  for (let index = 0; index < kleuren.length; index++) {
    fill(kleuren[index])
    text(kleuren[index], 30, y);
    y = y + 13
  }


  //opdracht4
  let getallen = [400, 240, 10, 490, 30, 60, 244, 500, 301, 300]

  y = 260
  for (let index = 0; index < getallen.length; index++) {
    text(getallen[index], 30, y);
    y = y + 10
  }


}
