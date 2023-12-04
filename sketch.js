// Daniel Shiffman
// http://codingtra.in
// https://youtu.be/CKeyIbT3vXI

const fireworks = [];
let gravity;

var paused = false;
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  gravity = createVector(0, 0.12);
  stroke(8);
  strokeWeight(15);
  background(0);
}

function draw() {
  if (paused) {
    // do pause stuff
    // Write the PAUSED message
    console.log('PAUSED');
    textSize(height * 0.2); 
    textAlign(CENTER, CENTER); 

    const middleX = width / 2;
    const middleY = height / 2;

    text('PAUSED', middleX, middleY);
  } else {
    // do the normal stuff
    colorMode(RGB);
    background(0, 0, 0, 25);
    
    if (random(1) < 0.04) {
      fireworks.push(new Firework());
    }
    
    for (let i = fireworks.length - 1; i >= 0; i--) {
      fireworks[i].update();
      fireworks[i].show();
      if (fireworks[i].done()) {
        fireworks.splice(i, 1);
      }
    }
  }
}

function keyPressed() {
  if (key === 'p') {
    paused = !paused;
  }
}

function mouseMoved() {
  console.log(`${mouseX}, ${mouseY}`);  
  // prevent default
  return false;
}

function mouseClicked() {
  // Make a new firework at the mouse coordinates
  let x = mouseX;
  let y = mouseY;
  let firework = new Firework(x, y);
  // Add that firework to the list
  fireworks.push(firework);
  return false;
}