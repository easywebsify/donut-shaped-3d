let r = 0;
let r1 = 100;
let r2 = 400;
function setup() {
  createCanvas(windowWidth - 30, windowHeight - 30, WEBGL);
  background(255);
  stroke(0);
  strokeWeight(5);
  camera(1000, 0, 0, 0, 0, 0, 0, 0, 1);
}
function draw() {
  background(255);
  rotateZ(r);
  for (let t = 0; t < 2 * PI; t += PI / 6000) {
    point(
      cos(t) * (cos(128 * t) * r1 + r2),
      sin(128 * t) * r1,
      sin(t) * (cos(128 * t) * r1 + r2),
    );
  }
  r += PI / 50;
}