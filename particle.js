// Daniel Shiffman
// http://codingtra.in
// https://youtu.be/CKeyIbT3vXI

class Particle {
  constructor(x, y, hu, firework) {
    this.pos = createVector(x, y);
    this.firework = firework;
    this.lifespan = 270;
    this.hu = hu;
    this.acc = createVector(0, 0);
    if (this.firework) {
      this.vel = createVector(0, random(-12, -8));
    } else {
      this.vel = p5.Vector.random2D();
      this.vel.mult(random(2, 10));
    }
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    if (!this.firework) {
      this.vel.mult(0.9);
      this.lifespan -= 4;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  done() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }

  show() {
    const COLORS =[ color (0, 68, 255),
                        (255, 0, 0),
                        (26, 255, 0),
                        (204, 246, 200);
    let c = random(COLORS);
    fill(c)
    ];
  }

    if (!this.firework) {
      strokeWeight(2);
      stroke(this.hu, 255, 255, this.lifespan);
    } else {
      strokeWeight(4);
      stroke(this.hu, 255, 255);
    }

    point(this.pos.x, this.pos.y);
  }
}
