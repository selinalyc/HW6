var sizes = [350, 300, 125, 120,31,30,16,12];

function setup() {
  createCanvas(600, 600);

  noStroke();
 
  for (var i = 0; i < sizes.length; i += 1) {
		 var r = random(255);
	var g = random(255);
	var b = random(255);
    fill(r,g,b);
    ellipse(20+i*50, height/2, sizes[i], sizes[i]);
  }
}
