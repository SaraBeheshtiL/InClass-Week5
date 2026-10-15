let myBall;
let myBall2;

// Object-orintaed programming
function setup() {
  createCanvas(800, 800);
  myBall = new Ball();
  myBall2 = new Ball();
}

function draw() {
  background(20);
  myBall.move(); // the sequence of the functions are whatever we defined in the class
  myBall.show();
  /// the attributes which belongs to myBall
  myBall.x;
  myBall2.move();
  myBall2.show();
}

class Ball {
  constructor() {
    this.x = 400;
    this.y = 500;
    this.color = color(120, 130, 140);
    this.r = 20;
  }
  ///methods are functions defined for a class

  move() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  show() {
    /// first object needs to exist
    fill(this.color);
    circle(this.x, this.y, this.r); // "this" mean this specific object
  }
}
