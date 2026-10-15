let myBall;

// Object-orintaed programming
function setup() {
  createCanvas(800, 800);
  myBall = new Ball();
}

function draw() {
  background(20);
  myBall.show();
}

class Ball {
  constructor() {
    this.x = 400;
    this.y = 500;
  }
  ///methods are functions defined for a class
  show() {
    /// first object needs to exist
    fill(120, 130, 140);
    circle(this.x, this.y, 20);
  }
}
