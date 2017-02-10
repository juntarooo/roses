
//slider to change k
var d = 8;
var n = 5;

var sliderR = 3;


//color
var col = {
  r: 255,
  g: 0,
  b: 0

};
function setup() {
  canvas = createCanvas(600, 600);

  sliderR = createSlider(3, 30, 1, 1);


}

function draw() {
    frameRate(sliderR.value());
    d = ceil(random(1,10));
    n = ceil(random(1,10));
    var k = n / d;
    background(51);
    translate(width / 2, height /2); // put drawing in center.
    beginShape();
    for (var a = 0; a < TWO_PI * d; a += 0.1) {
      var r = 100 *cos(k*a);
      var x = r * cos(a);
      var y = r * sin(a);
      // stroke(255);
      // strokeWeight(3);
      noStroke();
      col.r = random(100,255);
      col.g = 0;
      col.b = random(100, 175);
      fill(col.r, col.g, col.b, 200);
      ellipse(x,y, 5, 5);
      noFill();
    }
}
endShape(CLOSE);
