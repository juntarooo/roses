
//slider to change k
var d = 8;
var n = 5;
var sliderD;
var sliderN;
var sliderR;
var sliderB;

//color
var col = {
  r: 255,
  g: 0,
  b: 0

};
function setup() {
  canvas = createCanvas(600, 600);
  // // colorMode(HSB);
  // sliderD = createSlider(0, 360, 60, 40);
  // sliderD.position(10, 10);
  // sliderD.style('width', '80px');
  sliderD = createSlider(1, 10, 5, 0.1);
  sliderN = createSlider(1, 10, 5, 0.1);
  sliderR = createSlider(100, 275, 1, 1);
  sliderB = createSlider(100, 175, 1, 1);

}

function draw() {
    d = sliderD.value();
    n = sliderN.value();
    var k = n / d;
    background(51);
    translate(width / 2, height /2); // put drawing in center.
    beginShape();
    for (var a = 0; a < TWO_PI * d; a += 0.05) {
      var r = 100 *cos(k*a);
      var x = r * cos(a);
      var y = r * sin(a);
      // stroke(255);
      // strokeWeight(3);
      noStroke();
      col.r = sliderR.value();
      col.g = 0;
      col.b = sliderB.value();
      fill(col.r, col.g, col.b, 200);
      ellipse(x,y, 5, 5);
      noFill();
    }
}
endShape(CLOSE);
