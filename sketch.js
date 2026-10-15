let myBall;
let myBall2;

// Object-orintaed programming
function setup() {
  createCanvas(800, 800);
  let x = 50;
  let y = 200;
  let c = color(255);
  let r = 25((myBall = new Ball()));
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
  // x xposition, y yposition, c color, r radius
  constructor(x, y, c, r) {
    this.x = x;
    this.y = y;
    this.color = c;
    this.r = c;
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
