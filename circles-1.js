var sizes = [40, 70, 90, 30, 60,30,70,10,30,40];

function setup() {
  createCanvas(600, 600);

  noStroke();
    
  for (var i = 0; i < sizes.length; i += 1) {
    fill(sizes[i]);
    ellipse(20+i*50, height/2, sizes[i], sizes[i]);
  }
}
