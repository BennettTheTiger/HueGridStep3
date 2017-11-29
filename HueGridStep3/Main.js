var hg;
var huGd;

function setup(){
  createCanvas(940, 640);     // Initial window size when we built it
  background(0);
  colorMode(HSB);
  huGd = Array(9);
  huGd[0] = new HueGrid(10,10,300,200);
  huGd[1] = new HueGrid(320,10,300,200);
  huGd[2] = new HueGrid(630,10,300,200);
  huGd[3] = new HueGrid(10,220,300,200);
  huGd[4] = new HueGrid(320,220,300,200);
  huGd[5] = new HueGrid(630,220,300,200);
  huGd[6] = new HueGrid(10,430,300,200);
  huGd[7] = new HueGrid(320,430,300,200);
  huGd[8] = new HueGrid(630,430,300,200);
  noStroke(); 
}
function draw(){
	for(let i = 0; i<huGd.length; i++){
		huGd[i].display();
	}
}