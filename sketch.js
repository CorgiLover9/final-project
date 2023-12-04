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
  stroke(10);
  strokeWeight(10);
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
  if (isMouseOverReset()) {
    console.log('You clicked it!');
    everythingButCreateCanvas();
  } else {
    console.log(`Clicked: ${mouseX}, ${mouseY}`);
  }
  return false;
}