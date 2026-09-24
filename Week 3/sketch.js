//tic tac toe

let beurt = 0
let nummer1 = 'white'
let nummer2 = 'white'
let nummer3 = 'white'
let nummer4 = 'white'
let nummer5 = 'white'
let nummer6 = 'white'
let nummer7 = 'white'
let nummer8 = 'white'
let nummer9 = 'white'

function changeturn ()
{
beurt +=1
}
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
  fill (nummer1)
  rect(75, 75, 125, 125, 10)
  fill (nummer2)
  rect(225, 75, 125, 125, 10)
  fill(nummer3)
  rect(375, 75, 125, 125, 10)
  fill(nummer4)
  rect(75, 225, 125, 125, 10)
  fill(nummer5)
  rect(225, 225, 125, 125, 10)
  fill(nummer6)
  rect(375, 225, 125, 125, 10)
  fill(nummer7)
  rect(75, 375, 125, 125, 10)
  fill(nummer8)
  rect(225, 375, 125, 125, 10)
  fill(nummer9)
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
    text('X', 236, 193) }
 
 

 

}

function mouseClicked() {

  //red
  if (beurt == 0 || beurt == 2 || beurt == 4 ||beurt == 6 || beurt == 8 || beurt == 10 ){
if (nummer1=='white'){
 if (mouseX >= 75 && mouseX <= 200 && mouseY >= 75 && mouseY <= 200) {
  nummer1 = 'red'
  changeturn()
}
}
  if (nummer2 == 'white') {
    if (mouseX > 225 && mouseX < 350 && mouseY > 75 && mouseY < 200) {
      nummer2 = 'red'
      changeturn()
    }
  }
  if (nummer3 == 'white') {
    if (mouseX > 375 && mouseX < 500 && mouseY > 75 && mouseY < 200) {
      nummer3 = 'red'
      changeturn()
    }
  }
   if (nummer4 == 'white') {
    if (mouseX >= 75 && mouseX <= 200 && mouseY >= 225 && mouseY <= 350) {
      nummer4 = 'red'
      changeturn()
    }
  }
  if (nummer5 == 'white') {
    if (mouseX > 225 && mouseX < 350 && mouseY > 225 && mouseY < 350) {
      nummer5 = 'red'
      changeturn()
    }
  }
  if (nummer6 == 'white') {
    if (mouseX > 375 && mouseX < 500 && mouseY > 225 && mouseY < 350) {
      nummer6 = 'red'
      changeturn()
    }
  }
  if (nummer7 == 'white') {
    if (mouseX >= 75 && mouseX <= 200 && mouseY >= 375 && mouseY <= 500) {
      nummer7 = 'red'
      changeturn()
    }
  }
  if (nummer8 == 'white') {
    if (mouseX > 225 && mouseX < 350 && mouseY > 375 && mouseY < 500) {
      nummer8 = 'red'
      changeturn()
    }
  }
  if (nummer9 == 'white') {
    if (mouseX > 375 && mouseX < 500 && mouseY > 375 && mouseY < 500) {
      nummer9 = 'red'
      changeturn()
    }
  }
}
  if (beurt == 1 || beurt == 3 || beurt == 5 || beurt == 7 || beurt == 9 || beurt == 11){
    if (nummer1 == 'white') {
      if (mouseX >= 75 && mouseX <= 200 && mouseY >= 75 && mouseY <= 200) {
        nummer1 = 'blue'
        changeturn()
      }
    }
  if (nummer2 == 'white') {
    if (mouseX > 225 && mouseX < 350 && mouseY > 75 && mouseY < 200) {
      nummer2 = 'blue'
      changeturn()
    }
  }
  if (nummer3 == 'white') {
    if (mouseX > 375 && mouseX < 500 && mouseY > 75 && mouseY < 200) {
      nummer3 = 'blue'
      changeturn()
    }
  }
  if (nummer4 == 'white') {
    if (mouseX >= 75 && mouseX <= 200 && mouseY >= 225 && mouseY <= 350) {
      nummer4 = 'blue'
      changeturn()
    }
  }
  if (nummer5 == 'white') {
    if (mouseX > 225 && mouseX < 350 && mouseY > 225 && mouseY < 350) {
      nummer5 = 'blue'
      changeturn()
    }
  }
  if (nummer6 == 'white') {
    if (mouseX > 375 && mouseX < 500 && mouseY > 225 && mouseY < 350) {
      nummer6 = 'blue'
      changeturn()
    }
  }
  if (nummer7 == 'white') {
    if (mouseX >= 75 && mouseX <= 200 && mouseY >= 375 && mouseY <= 500) {
      nummer7 = 'blue'
      changeturn()
    }
  }
  if (nummer8 == 'white') {
    if (mouseX > 225 && mouseX < 350 && mouseY > 375 && mouseY < 500) {
      nummer8 = 'blue'
      changeturn()
    }
  }
  if (nummer9 == 'white') {
    if (mouseX > 375 && mouseX < 500 && mouseY > 375 && mouseY < 500) {
      nummer9 = 'blue'
      changeturn()
    }
  }
}
}